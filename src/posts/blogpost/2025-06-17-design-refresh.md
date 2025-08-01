---
date: 2025-07-14T08:00:00+00:00
title: "A 2025 design refresh"
author: "John Peart"
excerpt: "Taking a neubrutalist turn."
categories:
- indieweb
- web design
- css

posse:
- https://news.indieweb.org/en
---

For the past couple of months, I've been rethinking the visual style of my home on the internet: this website, the one you're on right now.

In this blog post, I'm going to share some of the ideas I've had along the way -- including the ideas I've thrown away!

## As it was

For most of the past decade, iterations of this website tilted towards minimalism.

The homepage of this blog has consistently been an austere layout with a smattering of introductory text with sans-serif typography. Often, but not always, the colour scheme for the whole site has consisted of mostly an off-white and not-quite-black, with sparing dash of a single shade of cyan[^cyan]. 

[^cyan]: `#00a0e5`, if you're wondering.

<figure>
	<img src="/assets/images/posts/2025-07-14-homepage-old.png" alt="My website homepage inside a desktop web browser window. The page is white, with black text that reads “Hello. I'm John Peart. I’m a policy professional with an interest in technology, services and diversity.” The text is large and centered in the page.">
	<figcaption>My website home page as it has been for nearly 6 years.</figcaption>
</figure>

Over time, I've experimented with different visual flourishes.

I've tried a range of different header styles, including collapsing hamburger menus with glowing auras, like this:

<figure>
	<img src="/assets/images/posts/2024/09/09/header-hover.png" alt="The header menu of my website during a previous experiment. The bar is full width and has a glow around it.">
	<figcaption>A previous iteration of my header menu faded into the background until you hovered over it, which made it pop out with a glow. </figcaption>
</figure>

I had been gradually iterating towards a more glassy version. Up until a few this refresh, I'd been using some [next-level glass effects](https://www.joshwcomeau.com/css/backdrop-filter/):

<figure>
	<img src="/assets/images/posts/2025-07-14-side-by-side-desktop.png" alt="Two cropped screenshots of my menu bar on desktop. On the left, the menu bar shows a drop shadow. On the right, the glass has a subtler shadow, but also diffuses the surrounding colours below the menu bar.">
	<img src="/assets/images/posts/2025-07-14-side-by-side-mobile.png" alt="Two cropped screenshots of my menu bar on mobile. On the left, the menu bar shows a drop shadow and diffused colours – but only when the menu hovers over the background image. On the right, the glass has a subtler shadow, but also diffuses the surrounding colours from objects below the boundary of menu bar.">
	<figcaption>In my previous design, I used a glassy header that diffused the surrounding colours into it, even when the header didn't overlap the background directly.</figcaption>
</figure>

Over the course of the past year or so, I've also added digital simulacrums of physical objects, like *Post-It* notes and *iPods nano*.

<figure>
	<img src="/assets/images/posts/2024/09/30/sharing-music-on-my-blog/ipod-new.png" alt="A screenshot of a representation of an iPod nano in isometric perspective with cover art for the 2024 album for the Eurovision Song Contest">
	<figcaption>These <em>iPods nano</em> are dynamically generated for each music selection highlighted on <a href="/music" title="Go to my music blog">my music blog</a>.</figcaption>
</figure>

Mostly I've liked how lots of these elements have worked individually, even if I didn't love how they sometimes sat together.

Throughout, I've often also been trying to ruthlessly optimise my code: if I *could* squeeze out a few dozen bytes of CSS or javascript code, then that's what I was going to try to do! Less complex code means it's less likely to break, after all.

## Towards neubrutalism

After 6 years though, I've gotten bored. My taste has changed. Evolved. And it was time for my website to do the same.

I've fallen in love again with pop artists like Roy Lichtenstein and Andy Warhol, and neo-expressionists like Keith Haring and Jean-Michel Basquiat.

So I've decided to lean into a more neubrutalist style. Heavier lines. Bolder use of blacks and bright colours. That sort of thing.

What I've got right now isn't a radical departure from what came before but it has given me inspiration for what it might evolve into over the next half a decade.

The biggest change is probably to the home page.

<figure>
	<img src="/assets/images/posts/2025-07-14-homepage-new.png" alt="My website homepage inside a desktop web browser window. The main visual is a black and white cartoon sketch of John Peart.">
	<figcaption>The first thing you'll notice on my new home page is a giant drawing of me!</figcaption>
</figure>

For the first time, my home page has an image on it. Of me, even. Groundbreaking, I know.

I love the illustration I've come up with; though I'm sure I'll be endlessly fiddling with it now. Especially if I decide to change my haircut in the future!

Use of bold imagery has been a focus as I've explored this new design. Keeping an element of continuity with what came before, I've been creating a lot of isometric profile images, just to see how they looked.

<figure>
	<img src="/assets/images/posts/2025-07-14-isometric-objects.svg" alt="A keyboard, iPod Classic and Star Trek commbadge in isometric projection.">
	<figcaption>I've created a range of different objects in isometric projection; just to see how they turned out.</figcaption>
</figure>

I haven't used most of these, in the end, but I have kept them in case inspiration strikes in the future about where I could.

Where I used objects like *Polaroid* photos and *Game Boy*  in my previous design, these have also been revamped. Gone are the shadows and soft gradients; now they have a bolder, blockier aesthetic.

<figure>
	<img src="/assets/images/posts/2025-07-14-gamepaks.png" alt="Left: an isometric projection of a Game Pak. Right: a revised version, with greater use of thick black borders at the object's edges.">
	<figcaption>Objects that were nudging towards photorealism are now much bolder, blockier objects; like these <em>Game Paks</em>.</figcaption>
</figure>

The navigation bar is the other most visually striking change to the site. 

Scroll back up to the top of the page, and you'll notice the bar disappear into seamlessly into the background, thanks to scroll-driven animations. Roll over a colourful image, and notice it take on a vibrant, over-saturated hue; keeping a nod to the glassy aesthetic of the previous designs.

## What's next?

Not everything has changed in this design change. It's more "refresh" than "complete overhaul". 

There is still more room for change! That's going to keep my brain busy noodling for months and years to come.