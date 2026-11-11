# Ducha termostática — proyecto 3D

Escena original 3D sobre el motor del kit incluido en `../cartoon-short-skill.zip`, con Three.js r160 y cámara/render fotograma a fotograma. La válvula es una representación esquemática del principio termostático, no el plano de un cartucho específico. El guion y la alineación automática están en `guion.txt` y `work/phrases.json`.

Requisitos: Node 22, `npm install`, Chromium compatible con Playwright, FFmpeg y Python con NumPy y Pillow. `@sparticuz/chromium` necesita las bibliotecas de sistema NSPR y NSS. Con esos requisitos instalados:

```sh
python3 audio.py
python3 mix.py audio/locucion.mp3 music.wav sfx.wav
node render.mjs frames '0-929'
bash finish.sh
```

La locución no se recorta ni se acelera. La mezcla se hace sin ducking; el acabado aplica ganancia y un limitador común al conjunto; `mix.py` imprime los niveles de voz, música y efectos. Los fotogramas renderizados y los tallos WAV son reproducibles y están ignorados por Git. El MP4 aparece en `out/` al terminar el render. Revisar el contacto y `out/qa.log` antes de publicar.
