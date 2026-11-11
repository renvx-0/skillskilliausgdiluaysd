---
name: cartoon-audio-short
description: Make a vertical animated cartoon short that explains how something works (Stupy_Doo-style: montaje or curiosidad, "if you do X, Y happens" hook, object built part by part until ¡pum!). Offers 10 ideas, writes the script, then turns the user's voiceover into a finished MP4 with music and SFX at half the voice level. Use for any explanatory cartoon short or "how does X work" video request.
---

# Cartoon short: idea → script → voiceover → finished MP4

The look: flat 2D bean-head cartoon characters (canvas-drawn "cards" with plum outlines) in a colourful 3D world with black ink outlines, painted textures, depth-of-field and gliding cameras. The output is 1080x1920, 30 fps, exactly as long as the voiceover. The user's voice is unchanged. The music bed and SFX are synthesized and sit at **50 % of the voice level**. Proven on "The Soldier Who Never Left" (19.7 s, 8 shots).

## What the video is (product definition)

Short, vertical **explanatory** videos: they explain how a thing works. They are **not history videos**. Everything is AI-made but must look handmade, never AI-generated.

**Reference channel:** Stupy_Doo — [youtube.com/@eljkoop/shorts](https://www.youtube.com/eljkoop/shorts). Spanish, vertical, ~2 min in one continuous take with the camera and every prop in motion. Copy its **style** (hook shape, pacing, shot length, micro-detail density), never its words, characters or shots.

**Two video types — pick one per short:**
- **A) Montaje (assembly):** the object is built step by step to explain how it works. Each phase introduces a problem that motivates the next part.
- **B) Curiosidad (curiosity):** a specific but surprising mechanism is explained without building the object part by part.

**How every short opens:**
- With a "if you do X, Y happens" line, or with the final result already on screen (e.g. someone riding the bike).
- Then rewind to the simplest possible version and explain how you get to that result.

**How a Montaje develops (phase by phase):**
1. Start with the bare minimum and show how it fails (it falls, it doesn't work).
2. Add one part to fix it. Then a new problem appears ("but this wouldn't work because…").
3. Repeat until the last part completes it. **¡Pum!** It works.

*(The bike is only an illustration of the structure — never replicate it shot for shot.)*

**Cast rule:** the reference videos show no people, only objects. The "actor" of the scene can be a person or another object of your choice, but **never copy the reference channel's character** (the bean/bolo on the bike). Prefer an original object-as-actor (a nervous gear, a smug valve, a sentient screw) whenever it carries the explanation better.

**Topic rule:** everyday things that are taken for granted and nobody explains (how a security camera works, how a fish's skin works). Not too simple, not common knowledge — niche enough that the viewer has seen the object many times but never asked how it works, so the payoff is "finally, someone tells me". Verify the mechanism with a web check before offering it; never present a myth as engineering.

## Rules
- Stories, characters and shots are always original. Never recreate another creator's video shot for shot. Offer an original take on the same idea instead.
- No real, named living people as characters, and no brand mascots or logos.
- No captions unless the user asks. Diegetic text (a carved message, a sign) is fine, and it must read correctly (not mirrored).
- Never edit or re-time the voice. The picture is timed to it, and every visual reaction lands 0-3 frames before its word.
- **Audio levels:** the music bed sits at 50 % of the voice level (−6 dB, gated RMS). SFX sit at 50 % or slightly less, with peaks capped so no hit pokes out over the narration. Always mix with `mix.py`, never by hand. Use no ducking or compression that would change this ratio; only one linear gain plus a peak limiter goes on the whole mix.
- Keep the user informed with a task list. Send a stills contact sheet before the long render.
- Script, captions and SFX names are in **Spanish** unless the user says otherwise (this file is in English, the product is Spanish).

## Stage 1: Intake (always first)
If an audio file is already attached, skip to Stage 4. If a script was also given, use it for the timing.
Otherwise ask one AskUserQuestion (or plain text if that tool is missing): **"Where are you starting from?"**
- **Voiceover ready**: ask them to upload it, plus the script text if they have it (the script makes the timing exact). Go to Stage 4 when it arrives.
- **I have a script, need the voiceover**: tighten the script per Stage 3 if needed, give it back with recording tips, ask for the upload, then go to Stage 4.
- **Need video ideas and a script**: go to Stage 2.
Also ask the target length if they haven't said. The default is 20-30 s; 45-60 s is allowed.

## Stage 2: 10 video ideas
Give exactly 10 ideas in one reply, numbered, and ask the user to reply with a number (or "more"). Each idea gets:
- **Title** (5-8 words, curiosity-driven).
- **Type:** `Montaje` or `Curiosidad`.
- **Hook line**: the first spoken sentence ("Ese hoyito en el mango de tu aspiradora no está de adorno…").
- **The mechanism** in one line: the physical cause-and-effect the short will show.
- **The ¡pum! moment**: the last part that completes the object, or the final reveal.
- **Why it animates well**: the 2-3 big visual moments (a part snapping in, arrows of pressure, a gauge spiking).
- **True or legend**: say plainly whether the mechanism is documented physics/engineering or a popular myth.

What makes an idea "perfect" for this format:
- One surprising everyday object or mechanism with a physical cause and effect you can show, not tell.
- An object-as-actor or a simple figure, stakes that escalate phase by phase, and a payoff in the last line.
- A setting that can be built from simple 3D shapes plus cartoon cards (workshops, kitchens, streets, machines, gardens, labs).
- Mix the 10 across both types: 4-5 `Montaje` (built step by step) and 5-6 `Curiosidad` (a single weird mechanism), across themes: household objects, machines, animals, body, tools, transport, food, infrastructure, weird engineering, lucky accidents.
- For anything presented as true, verify the key facts with a web search before offering it. Don't present a viral legend as fact. If the user wants it anyway, frame it as "legend says".
- No real living people, nothing graphic and nothing political.

## Stage 3: Script (after they pick)
Write the narration only (no stage directions in the spoken text), sized at about 3.7 words/s: 20 s ≈ 75 words, 30 s ≈ 110, 60 s ≈ 220. Formula:
1. **Hook** (sentence 1, no setup): the "if X, Y" line, or the final result on screen.
2. **Rewind** in 1-2 lines: the simplest possible version of the object.
3. **Failure → fix → new failure**, 2-4 beats (for `Montaje`), each bigger; for `Curiosidad`, one mechanism explained step by step without assembly.
4. **The mechanism**: the real physical cause, often with an everyday analogy.
5. **¡Pum! / payoff**: short, and the last words of the video. The object works.
Use plain spoken Spanish, contractions, sentences around 8-15 words, and numbers written as words. Never describe what the viewer already sees.

Then reply with:
- The script in a copyable block, with the word count and estimated length.
- A one-paragraph visual plan (the phases or the mechanism you'll animate).
- Recording tips: one steady, warm narrator voice; ElevenLabs works well (a deep narrator voice, speed about 1.05-1.1, stability about 45-55 %). Mp3 or wav is fine. Leave natural pauses at sentence ends. Export without music.
- The ask: **"Upload the voiceover when it's ready and I'll make the full video."**
Keep the final script text. It drives the timing in Stage 4, so no speech recognition is needed. If they recorded a changed version, ask for the final text.

## Stage 4: Build the video (after the voiceover is uploaded)
Do everything from here without stopping. Ask only if the timing cannot be resolved.

### 4.0 Get the kit
The code kit ships **inside this skill folder** at `kit/` (engine, tools, worked example, plus vendored three.js r160 and the `toon.ts` Pen library from github.com/mromidev/claude-animated-shorts, both MIT). Locate the folder with `find / -name SKILL.md -path "*cartoon-audio-short*" 2>/dev/null` and treat its `kit/` as read-only.

Then run `bash <skill>/kit/tools/setup.sh ~/shorts/<slug>`. It copies the engine and tools into the project, installs the vendored three.js, strips the types from `toon.ts` with Node 22 `module.stripTypeScriptTypes`, and links Playwright. No network is needed. If the vendored files are missing, it falls back to npm or a git clone.
- Requirements: Node 22.6+, Python 3 with numpy + Pillow, ffmpeg, and Playwright with Chromium (`npm i -g playwright && npx playwright install chromium` if missing).
- If package registries are blocked, git over GitHub usually works. Never disable TLS or route around the proxy.
- Chromium: use the pre-installed Playwright browser with `--use-angle=swiftshader --enable-unsafe-swiftshader --ignore-gpu-blocklist`. That gives CPU WebGL at about 3-10 s per frame.

### 4.1 Timing
Run `python3 timing.py voice.mp3 script.txt --out work`.
- With whisper or faster-whisper installed, it uses word timestamps.
- Otherwise it aligns script phrases (split at punctuation) to silence-detected speech segments, with a DP that matches syllables to duration and penalises sentence ends inside a segment and long gaps inside a phrase.
- With no ASR and no script, ask for the script. Claude cannot hear audio.
- Check `work/phrases.json`: pauses should fall at sentence ends. Total frames = round(duration × 30).

### 4.2 Shot plan (`work/PLAN.md` before code)
Make one row per shot: frames, words, setting, light, camera move, characters/poses/expressions, effects and SFX cue.
- Frame 0 is already the hook image.
- Usually one shot per phrase. Merge tiny phrases into the next shot.
- Illustrate every sentence literally. Props carry the explanation: one clear visual metaphor per mechanism (pressure = arrows, air = particles through a hole), one SFX per visual event.
- **Micro-details are part of the row, not decoration.** Each shot names its small motions with the frame they land on: idle drift, blink, cloth, dust, water level, the one prop that keeps moving, ink wobble, what is still moving on the last frame. Two or more per shot minimum; when the crop is tight, they carry the shot.
- Vary shot sizes: hook MCU → wide reveal → insert close-up on the key part → reaction close-up → environment move for the ¡pum!.
- Use light for beats: day for normal, golden for the failure, night-blue for the explanation. A time jump gets a 6-frame white flash.
- The ¡pum! line gets a sting (music stops, low hit, push-in with roll). The last shot's physical payoff lands on the final word.
- Pacing is dopamine-paced: the viewer is scrolling. Target **1.5-3 s per shot**, something moves every second. A shot that only holds is a failed shot, and the last frame of the film is still moving.

### 4.3 World (`web/main.js`)
Keep the engine sections: toon materials, ink contract, `add`/`tbox`, sky, lights, cards, render targets/post, `applyLight`, `drawActors`, `swapForNd`, `renderFrame`. Replace the example world between `// ---------- world ----------` and `// ---------- cards ----------`, plus the story parts of `worldState()`.
- Build from primitives with painted canvas textures (`paint.js`: planks, beams, metal, plastic, stone, rubber, glass, dirt, plaster, fabric, carved text). Write new painters in the same flat-with-dark-seams style.
- Use `tbox` for constant texel density, a 2-step toon gradient, and fog = horizon colour.
- Background: workshop shelves, kitchen counters, street furniture, distant houses, painted cloud billboards — whatever fits the object.
- Set pieces (a part snapping in, a lid opening, a spring releasing) are pivoted groups driven by 0..1 progress from `worldAt(f)`, with eased and staggered parts.
- Curved diegetic text uses planar UVs. Check it isn't mirrored.

### 4.4 Cast (`web/roman.js` → `web/toon.js`)
- `romanFront(p, outfitKey, opts)` draws on a 600x1000 design canvas with soles at y=975. The card is 2.25 m tall, so 1 unit = 0.00225 m.
- Add outfits to `OUTFITS` (tunic/cape/armor/helmet/hair/cap/beard/apron/dress/toga) and new headgear and props in the same style.
- Arm poses: hang, spear, point, up, wave, hip, belly, temple (+swirl), lift, reach (+lift), cheek, shield, cross, thumb.
- Expressions: the toon.ts FACE set plus snore, stubborn, squint. Extend FACE for more.
- Rebuild after edits with `cat web/toonbase.js web/roman.js > web/toon.js`. Render a character test sheet before using new designs.
- Billboards turn on yaw only, get a contact blob and an alpha-tested shadow, and are never inked by the world pass.
- Build card keys from `q()`-rounded values (so the canvas redraws only on visible change).
- A detached part (e.g. a lifted helmet) is its own card, aligned with `headCenter(seed)`: y = DECK + (partY − hc) × 0.00225.
- For explanatory shorts the actor is often an **object**, not a person: animate gears, valves, screws, lids and gauges as their own cards in the same flat-2D style. Never import the reference channel's character.

### 4.5 Motion: smooth and alive (`web/motion.js`)
- **Cameras**: `camFromKeys(keys, f, {kicks})`. Use smootherstep glides (18-45 f), `easeOut` for reveals and whips, and `path` via-points (Catmull-Rom) for curved moves. Every hold creeps and nothing is static for 4+ frames. Use 3-5° rolls on drama and 7-frame flip-shakes on impacts.
- **Continuity**: prefer continuous moves (pull back from a close-up into the wide, rack focus, crane through the mechanism, push into a part). Hard cut only on place or time jumps, with a flash.
- **Characters never freeze**: apply `idle(f, seed)` to every card, `blinkAt` blinks, and head bobs on stressed words. Object cards get their own idle (slow spin, breathing scale, wobble).
- **Actions**: anticipation → `back` overshoot → `spring` settle. A part snapping in is a 2-frame dip + dust puff + kick.
- **Secondary motion**: banner cloth waves, leaves/dust/drips/Zzz effect cards, flowing water, rotating gears. Something always moves.
- **Walks**: `walk()` gives distance + step phase. Feet planted, bob 3-7 %.
- **Lens**: DOF on close-ups and mediums (cInf 8-14 px), focus on the eyes. Wides are sharp. Racks take ~14 f.

### 4.6 Look check (before the full render)
Render stills at each shot's middle plus the transitions and key actions: `node render.mjs stills/a "5,40,..."` then `python3 sheet.py stills/a stills/sheet_a.jpg`. Look at the sheet and fix these traps:
- **Narrow vertical frame**: horizontal half-width = d·tan(hfov/2), with hfov = 2·atan(tan(vfov/2)·0.5625). At 4 m and fov 40 that is ±0.8 m, so stage characters in depth.
- Railings or posts across faces (camera inside the rail or ~2.5 m up). The camera path through houses, roofs or bushes. Foreground props under ~2 m away. The hero hidden behind a pillar.
- Mirrored text. A detached-part card offset the wrong way.
- Extrude material groups: 0 = caps, 1 = sides+top.
- Missing ink: debug the edge-only output. Ink radius ~2.5 px at 1080. The sky counts as far depth, not a card.
- **Micro-details at 100 %**: open a still at full size and check the small motions from the plan are actually visible — dust, cloth, water level, ink wobble, the moving prop. If they only exist in the plan, the shot is dead.
- **Motion audit**: open the first and last frame of every shot. If any pair is identical apart from noise, the shot is frozen — add drift, a blinking overlay or a moving prop before rendering the whole film.
Send the sheet to the user with a one-line shot summary, then start the full render.

### 4.7 Sound (`audio.py` → stems → `mix.py`)
Rewrite the cue table for the mechanism; the synths stay. `audio.py` writes only stems (`music.wav`, `sfx.wav`).
- Music: a short mechanical loop (kick/snare, plucked bass, brass pad). It stops at the ¡pum! line, then a low drone continues.
- SFX on events (in frames/30): whooshes on big moves, thunk on parts snapping in, rumble+crash on collapses, scrape on metal, ting on reveals, sting on the ¡pum!, creaks, snap, splash, hiss, clicks, water ambience. One SFX per visual event.
- Mix with `python3 mix.py voice.mp3 music.wav sfx.wav`. It sets music to exactly 50 % of the voice's gated RMS (−6 dB) and SFX to 50 % with peaks capped at 0.7× the voice peak. It prints the measured levels: confirm music shows −6.0 dB vs voice and SFX is at or below that.
- Lock picture timing before making sound. Any timing change means re-running audio.py and mix.py.

### 4.8 Render + finish
- Run `node render.mjs frames "0-<N-1>"` with Bash `run_in_background`, watched by a Monitor loop that reports progress and catches errors or process exit. `RESUME=1` continues after an interruption. Don't run heavy Python at the same time on small machines.
- Run `bash finish.sh "Title"`. It applies one linear gain to about −14 LUFS plus a −1 dBFS peak limiter, encodes H.264 CRF 17 + AAC, runs freeze/black and loudness QA, and writes `out/qa_sheet.jpg`. Look at the sheet. Frozen spans ≥0.4 s or black frames need a fix.
- **QA almost every frame**: build contact sheets covering essentially the whole film (at least every ~10th frame, 1 s where cuts or fast moves need it) and open them. No frozen span, no black frame, no caption on the wrong word. State the coverage, e.g. "1020 frames, inspected 1020 via 10-frame sheets + 40 full-size stills".
- Deliver the MP4 with SendUserFile and a few lines on what each shot shows. Offer captions, tweaks, or the next idea from the list.

## Engine gotchas (kept in the kit; keep them if rebuilding)
- `#include <fog_vertex>` / `<fog_fragment>` go on their own lines.
- The final pass writes `linearToOutputTexel(...)` (render targets are linear HalfFloat).
- The normal+depth pass swaps materials per mesh: world → normal/depth, cards → alpha-tested mask (rgb 0, a = depth), blobs/clouds/sky hidden, water → flat normal. Fog and shadows are off during it.
- Ink goes on the near side of depth jumps only. Creases come from the normal dot. Card neighbours are skipped. Ink fades at ~140-520 m.
- DOF: 48 taps with a per-sample CoC test (no foreground bleed).
- The sun comes from az/el per light preset. The shadow camera is centred on each shot's action.

## Architecture (reference for editing the kit)
- `web/index.html` loads `main.js` (ES module) over a local HTTP server.
- `main.js`: renderer, toon materials, world, cards (1200x2000 CanvasTexture planes, origin at soles), passes colour (RT samples 4) → normal/depth → ink+grade (saturation, gain/lift, vignette, flash) → DOF to screen. It exposes `window.renderFrame(f)` and `window.ready`.
- `story.js` exports SHOTS, `shotAt`, `camAt`, `dofAt`, LIGHTS/`lightFor`, `worldAt`, `actorsAt(f, T)`, `fxAt(f, T)`. All are pure functions of the frame.
- `render.mjs`: Playwright → `renderFrame(f)` → `toDataURL('image/jpeg', .95)` → `frames/f0000.jpg`.
- `mix.py`: gated-RMS level lock (music and SFX at 50 % of the voice). `finish.sh`: linear loudness gain, limiter, encode, QA.
- Characters: the Pen API from mromidev/claude-animated-shorts `templates/bridge/toon.ts`, extended in the same module scope by the cast file.