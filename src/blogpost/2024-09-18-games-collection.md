---
date: 2024-09-18T09:00:00+01:00
title: "Sharing games I've played on my blog"
author: "John Peart"
excerpt: "Rocking the retro vibe."
categories:
- indieweb
- making
- gaming
---

Over the past year I've started adding different 'collections' to my blog, so that I could share stuff in new ways.

I added short-form [notes](/notes/), in the form of [Post-It notes](/note/1701945480/). I added [lists](/lists/) of things – like this [list of books I want to get around to reading](https://www.johnpe.art/list/1713724980/). I added [photos](/photos/), styled like [classic Polaroids](/photo/1606145620/). Most recently I created [a facsimile of the 6th generation iPod Nano](/2024/03/10/sharing-music-on-my-blog/) to share [music](/music/).

Now it's time for a new collection: [games](/games/).

## Going retro

Continuing my theme of creating digital representations of physical stuff, I've been thinking about how to represent a game in object form.

The obvious choice would be to recreate the jewel cases that most games have come in since the advent of CDs and Blu-ray. But, without learning properly how to recreate 3D objects in code, that felt a bit *bland*. Jewel cases are just rectangles. 

So instead, I've gone retro. Back to the 1990s[^1], in fact, to the original Dot-matrix *Game Boy*. 

I've recreated a *Game Boy Game Pak*.

<figure>
<img src="/assets/images/posts/2024/09/18/games-collection/gameboy-gamepak-elden-ring.png" alt="A screenshot of a redrawn Game Boy Game Pak, featuring the box art for Elden Ring">
<figcaption>The <em>Game Boy Game Pak</em>. And yes, I know <em>Elden Ring</em> was not originally released on the <em>Game Boy</em>.</figcaption>
</figure>

The *Game Pak* is redrawn in scalable vector graphics format[^svg]. It's redrawn at a rough 1px to 1mm scale (with some minor tweaks to be visually pleasing to me!).

The classic, gray, plastic cartridge is drawn in a 2D top-down perspective. On top of the cartridge a rainbow gradient is applied to a rounded rectangle to create a faux-holographic sticker effect. 

This SVG file is then rendered as a background image, and then on top of *that*, a standard `img` element is positioned using CSS grid for the box art.

For the box art of each game, I've resized and cropped an image of the game's artwork or other media assets down to a size of 320 pixels by 380 pixels, and then applied `image-rendering: pixelated;` and `filter: contrast(150%);` effects to create a deliberately lo-fi, crunchy effect.

## But these aren't Game Boy games?!

Currently, this new collection showcases games I've played on *PlayStation*. Quite clearly none of those games were released on the *Game Boy* (although in the case of *Elden Ring*, someone has done a [bang-up job of a demake](https://shin.itch.io/elden-ring-gb)).

Why *Game Paks* then? Because it's fun!

## Platinums. Platinums everywhere.

The only games in the collection today are ones that I've achieved a *PlayStation* Platinum trophy for too.

I'll probably add others for different purposes in the future (I am fortunate enough to have more than one console, and not all of them have trophies!).

For now, take a look at the games I've enjoyed playing enough to sink many hours into and judge me.

[View my games collection](/games/)

[^1]: Technically the *Game Boy* was released in 1989 in Japan and North America, but it didn't come to Europe until September 1990. 

[^svg]: If you'd like to do something cool with this SVG, be my guest and share the results! [Here's the source file you need](https://raw.githubusercontent.com/johnpeart/johnpeart.github.io/main/src/assets/images/site/gamepak.svg). 
