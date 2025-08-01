---
date: 2025-07-30T12:00:00+00:00
title: "Design notes: Isometric explorations"
author: "John Peart"
excerpt: "I've updated the illustrations across the site. For consistency. But also because why not?!"
categories:
- Design
- IndieWeb
---

[I mentioned that I've been updating the illustrations](/2025/07/14/design-refresh/) on my website as part of a site design refresh; for consistency. (Also because *why not?!*)

When these illustrations were added, they were added incrementally and none of them really sat together as a coherent whole. As part of my new, neubrutalist-leaning design, I made the existing elements more blocky and bolder. Thick lines. Vibrant colours. 

Many of them were isometric projections; but not all of them. 

Now I've started to slowly replace the flat objects with isometric objects.

Here are some examples:


<figure>
    <img src="/assets/images/posts/2025-07-30-calendar.png" alt="A screenshot of my calendar drawing.">
	<figcaption>
		Each weeknote and “now” post includes a desktop calendar now. The date is generated at the build stage; every calendar, on every page that features it has the correct date for that post as part of the illustration.
	</figcaption>
</figure>

<figure>
    <img src="/assets/images/posts/2025-07-30-gamepak.png" alt="A screenshot of my Game Boy Game Pak drawing.">
	<figcaption>
		On my gaming related posts, a <em>Nintendo Game Boy Game Pak</em> is shown. The artwork is dynamically inserted for each post.
	</figcaption>
</figure>

<figure>
    <img src="/assets/images/posts/2025-07-30-ipod-nano.png" alt="A screenshot of my iPod nano drawing.">
	<figcaption>
		Similarly, each <em>iPod nano</em> has the album artwork for each music post inserted on the fly.
	</figcaption>
</figure>

<figure>
    <img src="/assets/images/posts/2025-07-30-polaroid.png" alt="A screenshot of a my Polaroid picture drawing.">
	<figcaption>
		Each polaroid is also generated at build time. On the main page, I still show this in flat profile, or it would make the photo post slightly pointless!
	</figcaption>
</figure>

<figure>
    <img src="/assets/images/posts/2025-07-30-list.png" alt="A screenshot of my list drawing.">
	<figcaption>
		I need to figure out a straightforward way to dynamically update my list drawings. Some kind of character counting is necessary for this one. For now, the underpants meme will do.
	</figcaption>
</figure>

<figure>
    <img src="/assets/images/posts/2025-07-30-post-it-note.png" alt="A screenshot of a my Post It note drawing.">
	<figcaption>
		Likewise notes; I need to figure out a dynamic text insertion that works across potentially several lines.
	</figcaption>
</figure>

These are all SVGs; which brings some advantages. They are:

1. resolution-independent so they always look sharp at any size
2. just code -- which makes it really easy to insert new elements on the fly; like cover artwork on an iPod or the date on a calendar

It turns out that a neubrutalist aesthetic is also perfect for SVG graphics. The flat colours and bold lines are exactly what SVG excels at.

I've tried to make these new images as accessible as possible; using ARIA attributes to describe the images. Accessibility is important!

I'm really getting into this illustration style. I'm excited to see what other things pop out of my brain as I explore it.