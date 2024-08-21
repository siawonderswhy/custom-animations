# GSAP (GreenSock Animation Platform) with CLUB Bonus Files

This package is only intended for experimentation during development.
No GSAP files (including the CLUB plugins) implement any tracking whatsoever. No data is collected.

## Docs

View the <a href="https://gsap.com/docs">full documentation here</a>, including an <a href="https://gsap.com/install">installation guide</a>.

## Usage

```javascript
// typical import
import gsap from "gsap"

// or get other plugins:
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin"

// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, DrawSVGPlugin } from "gsap/all"

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)
```

The NPM files are ES modules, but there is also a /dist/ directory with <a href="https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/">UMD</a> files for extra compatibility. Some build tools don't understand ES Modules in which case you can import the UMD files by adding /dist/ like:

```javascript
// UMD imports
import gsap from "gsap-trial/dist/gsap"
import MorphSVGPlugin from "gsap-trial/dist/MorphSVGPlugin"
```

Post your questions in our <a href="https://gsap.com/community/">forums</a> and we'd be happy to help.

## Using React?

There's a <a href="https://www.npmjs.com/package/@gsap/react">@gsap/react</a> package that exposes a `useGSAP()` hook which is a drop-in replacement for `useEffect()`/`useLayoutEffect()`, automating cleanup tasks. Please read the <a href="https://gsap.com/react">React guide</a> for details.

## Get Started

[![Get Started with GSAP](http://gsap.com/_img/github/get-started.jpg)](http://gsap.com/get-started)

### ScrollTrigger and ScrollSmoother

If you're looking for scroll-driven animations, GSAP's <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">ScrollTrigger</a> plugin is the new standard. There's a companion <a href="https://gsap.com/docs/v3/Plugins/ScrollSmoother/">ScrollSmoother</a> as well.

[![ScrollTrigger](http://gsap.com/_img/github/scrolltrigger.jpg)](https://gsap.com/docs/v3/Plugins/ScrollTrigger)

### Resources

- <a href="https://gsap.com/">gsap.com</a>
- <a href="https://gsap.com/get-started/">Getting started guide</a>
- <a href="https://gsap.com/docs/">Docs</a>
- <a href="https://gsap.com/resources/demos">Demos &amp; starter templates</a>
- <a href="https://gsap.com/community/">Community forums</a>
- <a href="https://gsap.com/docs/v3/Eases">Ease Visualizer</a>
- <a href="https://gsap.com/showcase">Showcase</a>
- <a href="https://www.youtube.com/@GreenSockLearning">YouTube Channel</a>
- <a href="https://gsap.com/cheatsheet">Cheat sheet</a>
- <a href="https://gsap.com/pricing/">Club GSAP</a> (get access to unrestricted bonus plugins)

Copyright (c) 2008-2024, GreenSock. All rights reserved.
