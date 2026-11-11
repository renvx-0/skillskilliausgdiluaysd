#!/usr/bin/env bash
set -euo pipefail
mkdir -p out
ffmpeg -v error -y -framerate 30 -i 'frames/f%04d.jpg' -i mix_raw.wav -map 0:v:0 -map 1:a:0 -c:v libx264 -preset medium -crf 17 -pix_fmt yuv420p -af "volume=7.5dB,alimiter=limit=0.891:level=false:latency=1" -c:a aac -b:a 192k -movflags +faststart -shortest out/ducha-termostatica.mp4
ffmpeg -hide_banner -i out/ducha-termostatica.mp4 -vf 'freezedetect=n=0.0005:d=0.4,blackdetect=d=0.05' -an -f null - 2>out/qa.log
ffmpeg -v error -y -i out/ducha-termostatica.mp4 -vf 'fps=2,scale=180:-1,tile=10x7' -frames:v 1 out/qa_sheet.jpg
printf 'LISTO: out/ducha-termostatica.mp4\n'
