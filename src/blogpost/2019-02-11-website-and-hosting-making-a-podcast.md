---
title: "A podcast in the making: setting up a website"
author: John Peart
excerpt: "I’m making a podcast called the Department of Bad Ideas, and blogging about how I’m making it. In this post, I’ll explain a bit about the website I built for the podcast."
image: /posts/dept-of-bad-ideas.png
category:
  - podcast
---

Getting a podcast on to the internet was more difficult than I thought it would be. Step one was building the website.

I’m pretty good at building basic websites. I’ve been an HTML, CSS and JavaScript hobbyist since I first learnt how to build a webpage back in my Year 8 ICT class, and I’ve made dozens of websites since. Getting my head around podcast feeds though was a challenge — admittedly a challenge I overcame, but a challenge nonetheless.

In this post, I’m going to talk a bit about the website that is the front door to the **Department of Bad Ideas**. In later posts, I’ll talk more about the RSS feed that the site generates, and how the audio files are hosted.

> This is a series of blog posts about how I’m making a podcast. I’m sharing what I’m doing in case others find it useful. To read the other posts, head over to my [“Getting started”](/2019/02/11/getting-started-department-of-bad-ideas) post.

## Starting with Jekyll and Github Pages

The website you’re reading this on now is built using a static site generator called [Jekyll](//jekyllrb.com), and it’s hosted in a [Github](//github.com) [repository](https://github.com/johnpeart?tab=repositories). Github comes with a handy feature where you can turn Jekyll code repositories into websites and host them for free; it’s called [Github Pages](//pages.github.com). You can even add custom domain names to your site for free, along with a free SSL certificate (though you need to own the domain name, of course).

I’ve built lots of sites with Jekyll now, so I’m fairly confident with it. Not one to look a gift horse in the mouth, I figured using the same set up for my new podcast would be a good idea. I set up a sub-domain ([badideas.podcast.johnpe.art](//badideas.podcast.johnpe.art), linked it to a new repository and set about coding the site.

This isn’t “Web Design 101”, so I won’t go over the specifics of how to created a site, or how to use Jekyll. There are a couple of bits worth highlighting from the site’s design though. The code is all available on [Github](https://github.com/johnpeart/), if you want to crib from it.

### Collections

Jekyll has a concept called “Collections” which help you to organise groups of documents. A set of blog posts would be an example of a collection.

I set up two collections, one called `_episodes` and one called `_posts` so that I could address each separately. This allows me to easily organise the posts and episodes in the repository, and address each collection for the purposes of building the post loops and feeds (in this case using `site.episodes` and `site.posts`).

I could have achieved a similar thing using post categories or by filtering the default `site.posts` collection by something like `page.layout`, but this reduced the complexity in the code and kept things neater in terms of file structure.

### Page layouts

The page layouts I’ve used are different for the default blog posts and the episodes. Aside from the obvious fact that they are different kinds of posts, the main reason for having two different page layouts is that I wanted users to be able to play the podcast on the site directly; so episode pages include extra mark-up and an extra script with an audio player.

Again, I could have achieved this using some `if` statements in one layout instead of two, but I preferred to keep the code cleaner.

### Mostly vanilla CSS

The features available in modern browsers continue to expand at an uneven but breakneck pace. I’m usually one for diving into these new features and littering them all over my projects, but this time I wanted to keep things simple and also backwards compatible with some older browsers.

Instead of using newer features like [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) — which I love, but has its growing pains) — I decided to keep a simple one or two column layout across the site, and use tried and tested techniques like floats. This made the code a bit more complex, but thanks to the wonders of Sass and mixins, the code was easy for me to read in its uncompiled form.

I did use one more modern feature: `position: sticky`. This isn’t a prime time feature yet, but for modern browsers it makes the the audio player stick to the bottom of the screen but flow inline with the footer. I wrapped this in an `@supports` query with a `position: relative` fallback too, so that nothing broke on older browsers.

## Next up...

The advantage of using Github Pages is that it’s totally free, it’s easy to use and it’s pretty reliable. It isn’t a full and foolproof solution for podcasting though, as I soon discovered.

In my next post, I’ll share a bit more about the difficulties of setting up an RSS feed for podcasts using Github Pages and how I solved that by starting to get to grips with Amazon Web Services S3 service.

> **All posts in this series**
>
> 1. [I'm making a podcast](/2019/01/27/department-of-bad-ideas)
> 2. [Getting started](/2019/02/11/getting-started-department-of-bad-ideas)
> 3. [Setting up a website](/2019/02/11/department-of-bad-ideas-hosting-and-website)
> 4. [The RSS feed and hosting](/2019/05/27/department-of-bad-ideas-rss-feeds-and-hosting)
> 5. [Iterating on the idea](/2020/03/15/department-of-bad-ideas-iterating-on-the-idea)

> You can find out more about the **Department of Bad Ideas** on [the podcast’s new website](//badideas.podcast.johnpe.art).
>
> You can also subscribe on Apple Podcasts or on Spotify. Just search for “Department of Bad Ideas”.
