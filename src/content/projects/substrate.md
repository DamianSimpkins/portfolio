---
title: Substrate - A faster way to plan websites
client: Substrate
year: 2026
summary: A wireframe builder, designed and built with Claude Code, that turns discovery research into responsive, clickable wireframes clients review from a single link.
type: Wireframe builder
role: [Design, Development]
order: 6
cover: /projects/substrate/hero.jpg
thumb: /projects/substrate/thumb.jpg
draft: false
background: "#232323"
sections:
  - label: The problem
    text: |-
      I used to wireframe in Figma from a shared component set. It worked, but every project repeated the same slow steps: searching for components and placing them by hand, moving annotations every time a layout changed, duplicating every page to show tablet and mobile, and showing clients static screens unless I spent hours on prototyping.

      When I tried having AI build wireframes in Figma, it was expensive and slower than doing it myself.
  - label: What I built
    before: 3
    text: |-
      Pages start from research. I set up the sitemap agreed in discovery, then write a short brief for each page: who it's for, what they need to do and the content it must hold. The AI drafts a first pass from the section library, reading the client's current site where there is one. I then refine every page against the research.

      Sections and templates. Pages are stacks of ready-made sections, with templates for common pages such as Home, Services and Contact. When nothing fits, I build a custom section myself.

      Edits scoped to a section. Each section has its own chat for changing copy or layout. The AI sees the whole project so its changes stay consistent, but it can only change the section I point it at, so an edit can't spread across the page.

      One design system. Colours, type and spacing come from design tokens synced both ways with Figma. I change them once and every wireframe updates.

      Made for client review. Every page is responsive and interactive without extra work. Notes snap to the element they describe and stay on it at every screen size, and one button publishes a link the client can click through.
  - label: How it's built
    before: 7
    text: |-
      AI is part of Substrate twice. I built the product with Claude Code, and the product uses AI to draft and edit pages.

      I made every product and design decision and described what I wanted, and Claude Code wrote the code to match. I set up automated tests that hold all of it, including anything the AI generates, to the design system.
  - label: From editor to client
    before: 7
    text: |-
      GitHub holds the code. The editor and the client viewer are built from the same repository, so a wireframe looks identical in both.

      Supabase holds the published work. The editor runs on my machine, and when I publish, it saves a snapshot of the project (pages, notes and pictures) to Supabase under a random link. A project can only be opened with its link, so no one can browse other clients' work.

      Cloudflare hosts the client viewer, a small site I deployed once. It holds no project content itself. When a client opens their link, it fetches that project's snapshot from Supabase and displays it.

      Because the viewer and the content are separate, a new client needs no setup and an update needs no redeploy. Publishing again refreshes the same link within seconds, and I can take a link down just as quickly.
  - label: Where it stands
    before: 8
    text: |-
      Substrate has already changed how the work runs. First drafts come from discovery research instead of a blank page, each page is a single wireframe that works at every screen size, notes stay on the elements they describe, and clients review everything from a link instead of a Figma invite.

      I've only just started using it on client projects, so I don't have measured results yet. The aim is to bring a set of wireframes down from a few weeks to a few days. Approved wireframes carry straight into design and build: they share their design tokens with Figma, and they are already working, responsive code.
services:
  - Product design
  - Design system
  - AI-assisted development
galleryBottom:
  - { src: /projects/substrate/responsive-3.png, alt: "The wireframe page on desktop", caption: "Desktop", layout: row }
  - { src: /projects/substrate/responsive-2.png, alt: "The wireframe page on tablet", caption: "Tablet", layout: row }
  - { src: /projects/substrate/responsive-1.png, alt: "The wireframe page on mobile", caption: "Mobile", layout: row }
  - { src: /projects/substrate/sections.png, alt: "The section library open beside a page, with sections grouped by type", caption: "Pages are built from a library of ready-made sections.", layout: grid }
  - { src: /projects/substrate/chat.png, alt: "A section selected with its chat open beside it", caption: "Each section has its own chat for copy and layout changes.", layout: grid }
  - { src: /projects/substrate/styles.png, alt: "The Styles screen, where one change updates every wireframe", caption: "One change on the Styles screen updates every wireframe.", layout: grid }
  - { src: /projects/substrate/note.png, alt: "A note locked to the same element at different screen sizes", caption: "A note stays on the same element at every screen size.", layout: grid }
  - { src: /projects/substrate/architecture.png, alt: "Diagram: the editor publishes a snapshot to Supabase, the Cloudflare viewer loads it from the client's link, and GitHub feeds both the editor and the viewer", caption: "The editor publishes to Supabase and the Cloudflare viewer loads it from the client's link. GitHub feeds both the editor and the viewer.", layout: full }
  - { src: /projects/substrate/viewer.png, alt: "The client viewer with notes switched on", caption: "The client viewer, with notes switched on.", layout: full }
---

Substrate is a wireframe builder I designed and built with Claude Code. It turns discovery research into responsive, clickable wireframes that clients review from a single link. It's new, and I've just started using it on client projects.
