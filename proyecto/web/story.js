import {camFromKeys, M, ramp} from './motion.js';
export const TOTAL=930;
export const SHOTS=[{a:0,b:137,light:'day'},{a:138,b:334,light:'day'},{a:335,b:639,light:'day'},{a:640,b:798,light:'day'},{a:799,b:929,light:'day'}];
export const shotAt=f=>SHOTS.find(s=>f>=s.a&&f<=s.b)||SHOTS[0];
export const LIGHTS={day:{az:55,el:55,sky:'#d9f3f2',ground:'#746253',hemi:1.2,sun:'#fff0d4',sunI:2.2,fog:'#9bc3b8',fogNear:30,fogFar:500,skyTop:'#82afb0',skyHor:'#9dc5bd',sat:1.08,vig:.15,shadowExt:10}};
export const lightFor=S=>LIGHTS[S.light];
const keys=[
 {f:0,pos:[1.0,5.2,7.7],look:[0,4.8,0],fov:42},
 {f:100,pos:[1.0,4.9,8.1],look:[0,4.5,0],fov:43},
 {f:175,pos:[.9,3.6,8.4],look:[0,3.15,0],fov:42},
 {f:330,pos:[.25,3.45,7.3],look:[0,3.16,0],fov:42},
 {f:405,pos:[.7,3.33,5.35],look:[0,3.20,0],fov:38},
 {f:620,pos:[.6,3.35,5.2],look:[0,3.2,0],fov:38},
 {f:780,pos:[.22,3.45,5.7],look:[0,3.2,0],fov:40},
 {f:850,pos:[.4,4.7,7.7],look:[0,4.4,0],fov:42},
 {f:929,pos:[.3,4.8,7.9],look:[0,4.45,0],fov:41}];
export const camAt=f=>camFromKeys(keys,f,{creep:.0002});
export const dofAt=f=>({focus:camAt(f).pos[2],cinf:1.5,near:1});
export const worldAt=f=>({expand: M.smooth(ramp(f,425,535))*(1-M.smooth(ramp(f,690,780)))});
export const actorsAt=()=>[]; export const fxAt=()=>[];
