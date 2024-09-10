---
date: 2024-09-09T09:00:00+01:00
title: "Moving my website from Jekyll to Eleventy"
author: "John Peart"
excerpt: "I've moved my website from Jekyll to Eleventy, and added some new features in the process."
categories:
- indieweb
- making
---

For ages now, this humble website has been built using [Jekyll](//jekyllrb.org) – a static site generator – and hosted on Github pages.

I know very little[^ruby] of the programming language underpinning Jekyll -- Ruby -- but the documentation is good enough and ecosystem is big enough that I've been able to muddle through. 

[^ruby]: Read: *none*.

I've added lots of different "collections" to the site. I hacked together [my own plugin for using "epoch" time to create the post URLs](https://github.com/johnpeart/jekyll-epoch-time). I've even managed to add fediverse support, in the form of Webmentions. 

But the infrastructure is showing its age. As my site has grown in complexity, and I've had new ideas, my build times have started creeping up and my almost non-existent knowledge of the Ruby programming language has become a constraint on my ability to iterate the site in directions I’ve wanted.

So what’s the logical response to feeling marginally restricted in iterating a perfectly functional website? *Chuck it all away, of course!*

The past month or so, I’ve been secretly rebuilding my entire site using [Eleventy](https://www.11ty.dev). And, if you’re reading this, you’re seeing the fruits of that labour right now!

## New stuff!

Not content to merely lift-and-shift the existing site, I of course made things slightly harder for myself and started *changing things* mid-way through this site overhaul.

### Unique Opengraph images on every page

Opengraph images are the images that pop up on social media when you share a URL of a page. Here's an example of one I most recently used for my 'week notes':

<figure>
	<img src="/assets/images/posts/2024/09/09/opengraph-week-notes.png" alt="A representation of a calendar with the word “Week note” and the number “01” on it.">
	<figcaption>This looks fine – but I never liked the fact that I was always stuck at “Week 1”.</figcaption>
</figure>

Cool enough. But, I thought, what if the date on that calendar automatically matched the date of the week note? What if I could re-use the page headers I've already created as the images? 

What if, instead of the above, static image, for [my most recent week note](/weeknote/2024/09/08/), I'd get this:

<figure>
	<img src="/assets/images/posts/2024/09/09/new-opengraph-week-notes.jpeg" alt="A representation of a calendar with the word “Week note” and the date “Sep 08” on it.">
	<figcaption>Now my Opengraph images reflect the actual content of the post automatically.</figcaption>
</figure>

If I wanted that on my Jekyll site, I'd be out of luck. With such little working knowledge of Ruby, I'd have to manually create them. That's a massive time sink I don't want. 

With Eleventy, though, it's been relatively trivial. 

My site now generates *two* pages of output for every *one* page of input: the normal page, and then a separate `/social/` page which is run through the [Eleventy Screenshots API](https://www.11ty.dev/docs/services/screenshots/) to create the image. 

Pretty neat!

### A literal glow up

After the [great CSS hack-back of 2023](https://www.johnpe.art/2023/10/31/making-webmentions-look-more-conversational/), I’ve been slowly adding a little *character* to my site. Eschewing the austere minimalism, I've been adding a little skeumorphism: [Post-It Notes](/notes/), [Polaroids](/photos/), and [iPods Nano](/2024/03/10/sharing-music-on-my-blog/).[^sticky]

[^sticky]: Other sticky notes, instant print photos and media players are available.

Now I’m going a little further, and giving a literal glow up to some elements of the site, like the header.

<figure>
	<img src="/assets/images/posts/2024/09/09/header-no-hover.png" alt="The header menu of my website in a default state; the text is gray and there is no visible border.">
	<img src="/assets/images/posts/2024/09/09/header-hover.png" alt="The header menu of my website in a hovered over state; the bar has a glow around it.">
	<figcaption>The header menu bar fades into the background until you hover over it, when it pops out with a glow. </figcaption>
</figure>

<figure>
	<img src="/assets/images/posts/2024/09/09/header-glow-up.png">
	<figcaption>When expanded, the glow expands to fill most of the window.</figcaption>
</figure>

Not sure if I like this change, but I'll roll with it for now, until I inevitably get bored and change the designs again.‌

## A few gotchas

There were some snags along the way, which might mean I've broken stuff (time will tell).

1. **~~Redirects~~ Aliases**: Jekyll has an excellent and robust redirects plugin. Eleventy's community plugin is... less robust. I've managed to make it work, but it took a lot of fiddling.
2. **Dates and times**: You a throw pretty much any date in any format at Jekyll and it'll figure out a way to make it work. Eleventy is *far* more temperamental. The dates must be in `YYYY-MM-DDZHH:MM:SS+00:00` format (e.g. `2024-06-31Z09:00:00+01:00`) or it throws a wobbly and just won't build. 

It took me longer than it should have done to figure out how to resolve these issues; the Eleventy documentation is – generously – *unclear*.

## We'll see how it goes

Now I'm done, I'm pleased that everything is working. The site is also 6x faster to build (down to 1s from 6s), so it's blazing fast to work with again. 

Fingers crossed I haven't broken anything too badly!

