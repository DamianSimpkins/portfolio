---
title: Musicvo - An interactive music toy
client: Musicvo
year: 2026
summary: A browser instrument where 3D shapes are the instruments. Hover to play, push shapes into each other and every overlap makes a new sound.
type: Interactive instrument
role: [Design, Development]
order: 5
cover: /projects/musicvo/hero.png
thumb: /projects/musicvo/thumb.jpg
url: https://musicvo.damiansimpkins.com/
draft: false
background: "#000000"
sections:
  - label: Why I made it
    text: |-
      I loved tinkering with loops and drum machines from my band days, and I still drum today. I wanted to marry that world of loops and beats with something visual, so every shape you add is an instrument you can see as well as hear. It makes a different arrangement every time, and I enjoy not knowing which melodies and harmonies the shapes will make together. It really does feel like a toy, and the more I work on it, the more possibilities I see.
  - label: How it plays
    text: |-
      Everything in Musicvo is generated live in the browser, so there are no samples or recordings anywhere. I wanted each shape to feel like its own instrument, so the sphere is a Rhodes-style keyboard, the ring is a theremin, the cube is a dub bass and the crystal is a breathy choir, all built from simple oscillators, filters and noise. Hovering plays a shape softly, holding it makes it pulse with the beat, and dragging rolls it around the stage. When shapes overlap they make a sound of their own, and a seam of light glows where the surfaces cut.
  - label: Drums
    text: |-
      The drums are synthesised the same way: a kick that drops in pitch, a noisy snare, hats, a shaker, and a tin-can "clank" I liked the sound of. I set up four patterns (boom bap, half-time, shuffle, sparse) and four kits (dusty, room, tape, crunch) that run through a bit-crusher, a cassette-style wobble and a room reverb, to get a dirty trip-hop feel. Everything runs on one shared clock, so the drums, the shape pulses and the delay stay in time even when you change the tempo. The beat fades in slowly over two bars, and I added a drum fill on the Space bar that always lands on the beat.
  - label: Settings panel
    text: |-
      I wanted to be able to adjust the sound while it's playing, so the settings are in a panel that slides in from the right and stays open as I play. It lets me balance the four instruments, set how far the cursor bends a note, choose the beat's kit, pattern and tempo, and control how dirty, roomy and swung it is. I can also set how much a shape swells under the cursor, how long I hold before it pulses, and the video frame for recording. A master volume sits at the top, and the panel remembers my choices.
  - label: Recordings
    text: |-
      I wanted to be able to share what I made, so the app has a recorder built in. It captures the stage and the sound together and saves a video file. The sound is the finished mix, so a recording sounds exactly like what I hear. I added frames for 9:16, 4:5 and square, so a vertical video for Instagram or TikTok comes out at exactly 1080 × 1920 whatever size my window is. The recorder also steps down through smaller sizes if a computer can't cope with 4K.
  - label: Working with Claude Code
    text: |-
      I built Musicvo with Claude Code. I set the concept, the look and the sound, and made every product decision. I described what I wanted, listened and watched the result, then steered or reversed it until it felt right. Claude Code wrote and refactored much of the code under that direction. It started as a single-file prototype and grew into about 2,000 lines across 23 modules.
  - label: Up next
    text: |-
      Hand tracking in the browser is next, so you could play Musicvo without touching anything. A fingertip would hover a shape and set its pitch by height, a pinch would press and drag, and two hands could work like a theremin. The camera picture would stay on your device.

      After that I'd like shareable links to a scene, MIDI so the shapes can control a synth, a choice of keys and scales, a self-playing mode, visuals that react to the sound, and a touch-friendly version for phones and tablets.
services:
  - Concept
  - Interaction design
  - Sound design
  - AI-assisted development
---

<a href="https://musicvo.damiansimpkins.com/" target="_blank" rel="noopener">Musicvo</a> is a music toy you play with your mouse. <a href="https://musicvo.damiansimpkins.com/" target="_blank" rel="noopener">Have a go</a>, it's free to play in your browser.
