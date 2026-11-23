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
  - label: How it plays
    text: |-
      Click empty space to add a shape. Hover to play, press to pulse on the beat, and drag to move a shape. When two shapes overlap they make a sound of their own, and a seam glows where they cut.
  - label: Drums
    text: |-
      Everything in Musicvo is generated live in the browser, so there are no samples or recordings anywhere. I wanted each shape to feel like its own instrument, so the sphere is a Rhodes-style keyboard, the ring is a theremin, the cube is a dub bass and the crystal is a breathy choir, all built from simple oscillators, filters and noise. The drums are made the same way: a kick that drops in pitch, a noisy snare, hats, a shaker, and a tin-can "clank" I liked the sound of. I set up four patterns (boom bap, half-time, shuffle, sparse) and four kits (dusty, room, tape, crunch) that run through a bit-crusher, a cassette-style wobble and a room reverb, to get a dirty trip-hop feel. Everything runs on one shared clock, so the drums, the shape pulses and the delay stay in time even when you change the tempo. The beat fades in slowly over two bars, and I added a drum fill on the Space bar that always lands on the beat.
  - label: Settings panel
    text: |-
      I wanted to be able to adjust the sound while it's playing, so the settings are in a panel that slides in from the right and stays open as I play. It lets me balance the four instruments, set how far the cursor bends a note, choose the beat's kit, pattern and tempo, and control how dirty, roomy and swung it is. I can also set how much a shape swells under the cursor, how long I hold before it pulses, and the video frame for recording. A master volume sits at the top, and the panel remembers my choices.
  - label: Recordings
    text: |-
      I wanted to be able to share what I made, so the app has a recorder built in. It captures the stage and the sound together and saves a video file. The sound is the finished mix, so a recording sounds exactly like what I hear. I added frames for 9:16, 4:5 and square, so a vertical video for Instagram or TikTok comes out at exactly 1080 × 1920 whatever size my window is. The recorder also steps down through smaller sizes if a computer can't cope with 4K. I've only tested it in Chrome-based browsers so far.
  - label: Working with Claude Code
    text: |-
      I built Musicvo with Claude Code. I set the concept, the look and the sound, and made every product decision. I described what I wanted, listened and watched the result, then steered or reversed it until it felt right. Claude Code wrote and refactored much of the code under that direction. It started as a single-file prototype and grew into about 2,000 lines across 23 modules.

      I didn't take its word that something worked. When I moved the prototype into modules, we compared pixels and the notes played in each phase against the original, and the results matched. When the drum fade-in sounded sudden, we measured the output and moved the fade to the finished sound. When recordings looked soft, we measured them at about 0.44 times as sharp as the live canvas, changed the encoder settings and got to about 1.1 times. When a large retina window made recording fail silently, we added fallbacks from 4K down to 720p.

      Plans live in project notes, so the next step is written down before it's built.
  - label: Camera-based interactions (planned)
    text: |-
      This is something I plan to build next, but it isn't done yet. The idea is hand tracking in the browser, so you could play Musicvo without touching anything: your fingertip hovers a shape and sets its pitch by height, pinching presses and drags, and two hands could work like a theremin, one for pitch and one for volume. Later I'd add simple gestures like holding up fingers to choose a shape and a fist to loop one. The camera picture would stay on your device and never be sent anywhere. I built the app so that every mouse, finger or hand has its own hover and press, so a hand-tracking adapter should slot in without reworking everything.
  - label: Things I'd like to add
    text: |-
      There are a few things I'd like to try next. Shareable links would let me send someone the exact scene I made, and MIDI would let the shapes control a synth or music software. I'd like a choice of keys and scales, because everything is currently in D minor pentatonic, which keeps whatever you stack in tune. I'd also like a self-playing mode that slowly evolves on its own, visuals that react to the actual sound, and a touch-friendly version for phones and tablets. I haven't built any of these yet.
  - label: Where it stands
    text: |-
      Musicvo is live and free to play. I've only tested it in Chrome-based browsers on desktop, and sound quality and performance on phones still need testing on real devices.
services:
  - Concept
  - Interaction design
  - Sound design
  - AI-assisted development
---

<a href="https://musicvo.damiansimpkins.com/" target="_blank" rel="noopener">Musicvo</a> is a music toy you play with your mouse. Add a shape, hover over it and it plays. Push two together and they make a sound of their own. <a href="https://musicvo.damiansimpkins.com/" target="_blank" rel="noopener">Have a go</a>, it's free to play in your browser.
