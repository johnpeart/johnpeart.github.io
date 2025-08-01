---
title: "Making “Webmentions” look more conversational"
author: "John Peart"
excerpt: "Pruning back the CSS garden. Repainting the HTML walls."
categories:
- making
- indie web
- social
posse:
- https://mastodon.social/@johnpeart/111330169324420012
---

I recently added support for [federated social networking features to my website](/2023/07/30/into-the-fediverse/). If you're on a service like Mastodon, and you interact with a post that links to something on my website, it'll show up a little while later *on my actual website*! Cool, right?!

## The boring bit

When I was doing that, I happened to look at the size of my CSS file, and saw it was nearly 500kb. *Yikes!*

I've had a few days off – and, I think, Covid – so I decided that I'd use my duvet days to do something useful. So I hacked away at that CSS bloat. Go me!

Having removed several hundred kilobytes of *code bloat*, I decided to reward my diligence by making some visual enhancements to the social features I'd just added.

## Making blogging feel more like a conversation

Connecting this site to the social web means that this website can show replies to posts, and likes and reposts of those posts from other ActivityPub websites. My first stab at *showing* that connectedness was to count up the likes and reposts, and list out the replies in boxes that vaguely looked like a tweet.

It worked, and it was visually consistent with my wider site designs, but it was a bit *meh*.

This weekend it struck me.

The social web is a conversation. It should look like one.

<figure>
  <img src="/assets/images/posts/2023/10/31/making-webmentions-look-more-conversational/after.png" alt="Examples of the social web activity from the current iteration of my website.">
  <figcaption>
		Mentions show up in speech bubbles. Likes and reposts appear as subtle lines of text, in the flow of activity.
  </figcaption>
</figure>

Now my social web interactions show up like a massive group chat. Replies and mentions of my posts show up in speech bubbles. Likes and reposts – and now also bookmarks – are no longer just counted up, but show up in the flow of the of other Webmentions.

I think this makes each post feel a bit more conversational. A bit more *alive*.

Try it out for yourself. [Reply to, like, repost or boost this post on Mastodon](https://mastodon.social/@johnpeart/111330169324420012) and a couple of hours later, you'll be a part of the conversation at the bottom of this post.
