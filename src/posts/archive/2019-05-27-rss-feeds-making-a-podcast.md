---
title: "A podcast in the making: the RSS feed and hosting"
author: John Peart
excerpt: "I’m making a podcast called the Department of Bad Ideas, and blogging about how I’m making it. In this post, I’ll explain a bit about how I got the RSS feed to work for the podcast."
categories:
  - podcast

related:
- /archive/2019/01/27/department-of-bad-ideas/
- /archive/2019/02/11/getting-started-making-a-podcast/
- /archive/2019/02/11/website-and-hosting-making-a-podcast/
- /archive/2019/05/27/rss-feeds-making-a-podcast/
- /archive/2020/03/15/iterating-the-idea/

aliases:
- /2019/05/27/rss-feeds-making-a-podcast/
- /2019/05/27/department-of-bad-ideas-rss-feeds-and-hosting/
---

As I mentioned in [my last post](/2019/02/11/department-of-bad-ideas-hosting-and-website), getting a podcast on to the Internet has turned out to be more difficult than I thought it would be. Creating the basic website was fairly straightforward, thanks to some [tools I’d used before](https://jekyllrb.com). Where I came unstuck was the RSS feed.

If you don’t know already, podcast feeds are just RSS feeds with a set of specific tags to make things like the Apple Podcasts listings work.

When it came to making the RSS feed, I had two difficulties. I needed to:

1. figure out the XML tags I needed for the RSS feed itself to work
2. successfully get the feed to validate

The second difficulty caused me a further, third headache: I needed a better solution for hosting my audio files. In this post, I’ll share what I’ve done to fix all that.

> This is a series of blog posts about how I’m making a podcast. I’m sharing what I’m doing in case others find it useful. To read the other posts, head over to my [“Getting started”](/2019/02/11/getting-started-department-of-bad-ideas) post.

## Setting up the RSS feed

As I mentioned in my last post, I’m using [Jekyll](https://jekyllrb.com) — a static site generator — to run the podcast’s website. The benefit of using Jekyll is that I don’t need to hand code each part of the feed every time I need to update it; instead, I can rely on Jekyll’s build process to turn the content from [the website I’ve made](//badideas.podcast.johnpe.art) into the RSS feed automatically.

All I’ve needed to do is figure out the markup needed to generate the feed.

### The basic file structure

The first thing I did was create a `podcast.rss` file and used the `_episodes` collection I’ve create the feed.

### The skeleton markup

There are *a lot* of XML tags to include in an RSS feed for podcasts. Linking these to sensible things in your `_config.yml` and post front matter is also a bit confusing.

To get started, you need to wrap the whole thing in `<rss>` and `<channel>` tags, like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xml:lang="{{ site.lang }}">
	<channel>

		// Your feed here

	</channel>
</rss>
```

If you set up a `lang` variable in your `_config.yml`, you can link this into the opening `<rss>` tag with `xml:lang="{{ site.lang }}"`. Mine’s `en` for English.

With your scaffolding in place, you then will need a bunch of markup to tell podcast readers about the podcast as a whole, and then a separate set of markup for each episode in the feed.

### Channel markup

You’ll want to start by setting some variables in your `_config.yml` file that will be for your ‘channel’ as a whole when it’s shown on a podcast listings or in a podcast app.

The things you’ll want to set up are:

| Variable       | Description                                 |
|----------------|---------------------------------------------|
| `title` | In my case “Department of Bad Ideas” |
| `author` | That’s you! (Or, actually, me) |
| `email` | Your contact email (note: this will be public) |
| `subtitle` | A one sentence description of your show |
| `summary` | A one paragraph description of your show |
| `description` | A longer form description of your show |
| `explicit` | Does the show contain explicit content? A simple `“yes”` or `“no”` will suffice |
| `type` | Is the podcast `episodic` or `serial` i.e. do you want to list the first episode first, or the most recent episode first?
| `lang` | The language of your podcast, in recognised format i.e. `en` |
| `launch-date` | When you started the show, in reverse date format, i.e. `2019-01-01` |
| `copyright` | Add whatever you need to in here; remember to use encoded symbols like `&#xA9;` for &#xA9; |
| `podcast-feed` | Use this as the URL for your feed on your site. |

That’s most of what you might want to add as site variables so that you can populate your feed’s channel information.

Next, in your `podcast.rss` file, you’ll want to add in the XML tags you need, and then insert the Jekyll variables you made above. Rather than put the code here — you can see all the markup on the [Github repository](https://github.com/johnpeart/dept-of-bad-ideas/blob/master/podofbadideas/podcast.rss) — here’s a quick list of the tags you’ll *need* which site variables you’ll want to match them to from your `_config.yml`.

| XML tags        | Description             | Jekyll variables |
| --------------- | ----------------------- | ---------------- |
| `atom:link`       | The URL of your podcast feed RSS | `site.url `|
| `title`           | The title of your podcast | `site.title` |
| `description`     | Your long form description of your show | `site.description` |
| `link`            | Your website’s home URL | `site.url` |
| `language`        | The language the podcast is in | `site.lang` |
| `managingEditor`  | Your name and email | `site.email`, `site.author` |
| `webMaster`       | Probably the same as `managingEditor` | `site.email`, `site.author` |
| `copyright`       | Any copyright information you want to include | `site.launch_date`, `site.title` or `site.copyright` |
| `pubDate`         | Date the feed was published | `site.time` |
| `lastBuildDate`   | When the RSS feed was last generated: this should be handled by Jekyll | `site.time` |
| `image`           | Your default podcast artwork | |
| &gt; `link`       | A URL to your podcast home page | `site.url` |
| &gt; `url`        | The URL for your artwork | `site.podcast-artwork` |
| &gt; `title`      | The site title | `site.title` |

There are then a bunch of Apple specific tags you’ll want to include. Some of these improve the presentation of your podcast in the Apple Podcasts listings — like separating your episodes into separate series if you’re using the `serial` format.

| XML tags        | Description             | Jekyll variables |
| --------------- | ----------------------- | ---------------- |
| `itunes:subtitle` | The single sentence description of the show | `site.subtitle` |
| `itunes:author`   | This helps to bundle your podcasts in the store’s search results | `site.author` |
| `itunes:summary`  | This is a short paragraph describing your show | `site.summary` |
| `itunes:keywords` | Include some keywords to help with search | `site.keywords` |
| `itunes:owner`    | This helps to bundle your podcasts in the store’s search results | |
| &gt; `name`       | Your name | `site.author` |
| &gt; `email`      | Your email | `site.email` |
| `itunes:image`    | As with the `image` tag above; recommended artwork size is 3000px by 3000px | `site.podcast-artwork` |
| `itunes:category` | You’ll need to look this up in [Apple’s guidance]() |  |
| `itunes:explicit` | This filters your podcast out of results if it’s not suitable for younger audiences | `site.explicit` |
| `itunes:type`     | Podcasts can be serial — shown as newest first — or episodic — shown as oldest first | `site.type` |

### Episodes markup

Once you’ve put together the skeleton of your feed together and marked up the overall `channel`, you can move on to the code for the `episode`s.

The basic code uses a loop, based on the `_episodes` archive I created earlier, and it looks like this:

```liquid
{% raw %}
{%- assign episodes = site.episodes | sort_by: date | reverse -%}
{%- for episode in episodes -%}
	// The RSS feed details needed for each episode
{%- endfor -%}
{% endraw %}
```

This code takes the YAML front matter from each episode, and put it into the RSS feed in reverse date order (newest on top).

## Validating the feed

With all that done, and with the RSS feed put online, it was time to validate the feed. Whilst that sounded daunting, there was a really straight-forward tool to do it — [Podbase](https://podba.se/validate/).

All you do is copy the URL of the RSS feed into the tool, and it'll tell you if you've done everything correctly. Luckily for me I had, *except for one thing*: hosting.

## Better hosting

In order to get good placement within the Apple Podcasts store the servers hosting your audio files needs to support ‘HTTP HEAD requests’. As Podbase describes it:

> “The server for your episodes must support ‘HTTP HEAD requests’, which is a fancy way of saying that iTunes must be able to get information about your files without downloading them whole.”

Github Pages doesn't support HTTP HEAD requests: so I needed to think of an alternative. [Amazon Web Services (AWS)](https://aws.amazon.com) S3 service *does* support HTTP HEAD requests, so I shifted my files over to there.

This *doesn't* require you to move your site or RSS feed itself. You can just move your audio files, because the RSS feed will point Apple Podcasts (and the validator) towards the HTTP HEAD request-supporting server.

*That's it!* You're all set to host your podcast — now on to the recording.

> You can find out more about the **Department of Bad Ideas** on [the podcast’s new website](//badideas.podcast.johnpe.art).
>
> You can also subscribe on Apple Podcasts or on Spotify. Just search for “Department of Bad Ideas”.
