"""Voice-led linear mix. Music gated RMS at -6.02 dB; SFX no louder.
No ducking, voice time modification, compression, or individual voice gain.
"""
import numpy as np, subprocess, sys, wave
SR=48000

def read(path):
    p=subprocess.run(['ffmpeg','-v','error','-i',path,'-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True,check=True)
    return np.frombuffer(p.stdout,dtype=np.float32).copy()

def rms_gate(x):
    n=int(.05*SR); b=x[:len(x)//n*n].reshape(-1,n)
    r=np.sqrt(np.mean(b*b,axis=1)); keep=r>10**(-45/20)
    return float(np.sqrt(np.mean(b[keep]**2))) if np.any(keep) else 0.

v,m,s=map(read,sys.argv[1:4]); n=len(v)
def fit(x): return np.pad(x[:n],(0,max(0,n-len(x))))
m,s=fit(m),fit(s); vr=rms_gate(v); mr=rms_gate(m); sr=rms_gate(s)
if not vr or not mr or not sr: raise ValueError('silent input')
m*=vr*.5/mr
for _ in range(8): m*=vr*.5/rms_gate(m)
s*=min(vr*.5/sr,.7*np.max(np.abs(v))/max(np.max(np.abs(s)),1e-9))
print('voice gated RMS',vr,'music/voice dB',20*np.log10(rms_gate(m)/vr),'sfx/voice dB',20*np.log10(rms_gate(s)/vr), 'sfx/voice peak',np.max(np.abs(s))/np.max(np.abs(v)))
# One common linear gain keeps the original voice and all relative levels intact.
y=v+m+s; gain=min(1.,.89125/max(float(np.max(np.abs(y))),1e-9)); y*=gain
print('master gain',gain,'peak',np.max(np.abs(y)))
with wave.open('mix_raw.wav','wb') as w:
    w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((np.clip(y,-1,1)*32767).astype('<i2').tobytes())
