---
title: Musicvo - An interactive musical toy
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
imageBorder: true
sections:
  - label: Why I made it
    text: |-
      I loved tinkering with loops and drum machines from my band days. I wanted to marry that world of loops and beats with something visual, so every shape you add is an instrument you can see as well as hear. It makes a different arrangement every time, and I enjoy not knowing which melodies and harmonies the shapes will make together. It really does feel like a toy, and the more I work on it, the more possibilities I see.
  - label: How it plays
    before: 0
    text: |-
      Everything in Musicvo is generated live in the browser, so there are no samples or recordings anywhere. I wanted each shape to feel like its own instrument, so the sphere is a Rhodes-style keyboard, the ring is a theremin, the cube is a dub bass and the crystal is a breathy choir, all built from simple oscillators, filters and noise. Hovering plays a shape softly, holding it makes it pulse with the beat, and dragging rolls it around the stage. When shapes overlap they make a sound of their own, and a seam of light glows where the surfaces cut.
  - label: Drums
    before: 5
    text: |-
      The drums are synthesised the same way: a kick that drops in pitch, a noisy snare, hats, a shaker, and a tin-can "clank" I liked the sound of. I set up four patterns (boom bap, half-time, shuffle, sparse) and four kits (dusty, room, tape, crunch) that run through a bit-crusher, a cassette-style wobble and a room reverb, to get a dirty trip-hop feel. Everything runs on one shared clock, so the drums, the shape pulses and the delay stay in time even when you change the tempo.
  - label: Settings panel
    before: 5
    text: |-
      I wanted to be able to adjust the sound while it's playing, so the settings are in a panel that slides in from the right and stays open as I play. It lets me balance the four instruments, set how far the cursor bends a note, choose the beat's kit, pattern and tempo, and control how dirty, roomy and swung it is. I can also set how much a shape swells under the cursor, how long I hold before it pulses, and the video frame for recording. A master volume sits at the top, and the panel remembers my choices.
  - label: Recordings
    before: 6
    text: |-
      To share what I made, the app has a recorder built in. It captures the stage and the sound together and saves a video file. The sound is the finished mix, so a recording sounds exactly like what I hear. I added frames for 9:16, 4:5 and square, so a vertical video for Instagram or TikTok comes out at exactly 1080 × 1920 whatever size my window is. The recorder also steps down through smaller sizes if a computer can't cope with 4K.
  - label: Working with Claude Code
    before: 6
    text: |-
      I built Musicvo with Claude Code. I set the concept, the look and the sound, and made every product decision. I described what I wanted, listened and watched the result, then steered or reversed it until it felt right. Claude Code wrote and refactored much of the code under that direction. It started as a single-file prototype and grew into about 2,000 lines across 23 modules.
  - label: Up next
    before: 6
    text: |-
      Hand tracking in the browser is next, so you could play Musicvo without touching anything. A fingertip would hover a shape and set its pitch by height, a pinch would press and drag, and two hands could work like a theremin. The camera picture would stay on your device.
galleryBottom:
  - { src: /projects/musicvo/instruments-01.png, alt: "The sphere, a Rhodes-style keyboard", caption: "The sphere is a Rhodes-style keyboard.", layout: grid }
  - { src: /projects/musicvo/instruments-02.png, alt: "The ring, a theremin", caption: "The ring is a theremin.", layout: grid }
  - { src: /projects/musicvo/instruments-03.png, alt: "The cube, a dub bass", caption: "The cube is a dub bass.", layout: grid }
  - { src: /projects/musicvo/instruments-04.png, alt: "The crystal, a breathy choir", caption: "The crystal is a breathy choir.", layout: grid }
  - { src: /projects/musicvo/overlap.png, alt: "Two shapes overlapping with a seam of light where the surfaces cut", caption: "Where two shapes overlap they make a sound of their own, and a seam of light glows where they cut.", layout: full }
  - { src: /projects/musicvo/settings.png, alt: "The settings panel open on the right edge of the stage", caption: "The settings panel stays open while you play, so you can change a slider and hear it straight away.", layout: full }
services:
  - Concept
  - Interaction design
  - Sound design
  - AI-assisted development
---

<a href="https://musicvo.damiansimpkins.com/" target="_blank" rel="noopener">Musicvo</a> is a musical toy that runs in your browser. Every 3D shape is a synthesised instrument: hover to play it, and when two shapes overlap they make a new sound together, all locked to a shared beat with an optional drum machine. It's free to play, so <a href="https://musicvo.damiansimpkins.com/" target="_blank" rel="noopener">have a go</a>.
