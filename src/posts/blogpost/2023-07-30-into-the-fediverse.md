---
title: "Into the Fediverse"
author: "John Peart"
excerpt: "Connecting my personal website up to the Fediverse"
categories:
  - making
---

Since *Space Karen*[^spaceKaren] bought Twitter, I’ve been looking at how I can make my presence on the World Wide Web more decentralised. 

![Social media icons: hearts and reposts](/assets/images/posts/2023-07-30-into-the-fediverse.svg){.hero}

I've dipped my toe in the waters, creating social media accounts on services like Mastodon[^mastodon] and PixelFed[^pixelfed]. But why stop there?

The distinctive thing about lots of federated social services is that they’re built on top of open web standards like *ActivityPub* and *Webmention*. These are standards that *any* website can adopt to plug themselves into the Fediverse. 

So that’s what I've done!

## I've added Fediverse features to this humble blog

Now, if you 'like' or 'boost' a post on a service like Mastodon, and that post contains a link to a blog post on *this* website, then your avatar will now appear in at the bottom of the blog post itself. Cool, right?

My site will also send out 'web mentions' to any webpage that is linked to from the blog post that I publish here. That doesn't guarantee that the recipient will know about – muchless do anything with – it of course; but they can, if they do and they want to.

## Made possible by generous people and free stuff

I've got to admit, I don't entirely understand how this all works. It does *appear* to work, though. 

*Making* it work was complicated by the fact that this site is built on Jekyll and hosted on GitHub Pages. Jekyll is a 'static site generator'; there’s no database or other fancy stuff actively running in the background. So adding these federated features has been a case of hacking together bits and pieces. 

I've used [Aaron Gustafson's](https://www.aaron-gustafson.com/notebook/enabling-webmentions-in-jekyll/) [Jekyll Webmention Jekyll plugin](https://github.com/aarongustafson/jekyll-webmention_io) to handle the sending and receiving of these federated signals every time my site is built. That plugin, itself, relies on two free web services – [Webmention.io](https://webmention.io) and [Bridgy](https://brid.gy). It took a few hours to wrap my head around the basics and to set it all up. I also added some custom styles to display the outputs on my webpages (scroll down to see them!). 

## Give it a try

You can test this out right now. 

If you're on Mastodon, you can ['like' or 'boost' this Mastodon post](https://mastodon.social/@johnpeart/110801702170479349) and your avatar should show up in the new likes and reposts sections at bottom of this page up to 24 hours later. 

This should also work on other Fediverse platforms that use *ActivityPub* and *Webmention* too; just try to 'favourite' or 'like', 'boost' or 'repost' anything containing a link to a blog post on this site.

I'll be experimenting some more with this over the next few months, seeing what else the plugin lets me achieve. In the mean time; give this a like or boost and help me test it out!


[^spaceKaren]: A.K.A. *Elon Musk*
[^mastodon]: Like Twitter, but without Space Karen. You can find me at [@johnpeart@mastodon.social](https://mastodon.social/@johnpeart)
[^pixelfed]: Like Instagram, but without the Zuck. You can find me at [@johnpeart@pixelfed.social](https://pixelfed.social/@johnpeart)
