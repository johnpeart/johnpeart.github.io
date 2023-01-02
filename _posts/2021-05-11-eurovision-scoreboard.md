---
title: "A digital scoreboard and voting system for your Eurovision house party"
author: John Peart
excerpt:
layout: post
permalink: /2021/05/11/eurovision-scoreboard
image: "https://johnpe.art/euroboard/assets/images/site/social-media.png"
category:
  - eurovision
published: false
---

Back in 2019, when we were allowed to see people in real life and have fun, I combined my loves of voting, Eurovision and technology to augment my Song Contest house party.

Hours before the party, I had a bright idea to hack together a [digital scoreboard](/2019/06/02/building-a-eurovision-scoreboard) for the event. The scoreboard took votes from a Google Form. It allowed my guests – and dozens of others across the country, in fact – to vote for their favourite entries and see the will of the people in near real time.

{% include figure.html
url="/assets/images/posts/2019/06/02/building-a-eurovision-scoreboard/eurovision-scoreboard.jpg" alt="A screenshot of my 2019 Eurovision Scoreboard." figure="1" caption="This is what the 2019 version of my Eurovision scoreboard looked like" %}

At my gathering, I had it set up on a TV in my living room. Every 30 seconds it pinged out to Google to get the total score, and then did some maths to round it to the classic 1, 2, 3, 4, 5, 6, 7, 8, 10 or 12 Eurovision points scale.

It was fun! But it was a hack. It did the job, but it didn't do it especially well, and it lacked features like showing who was winning.

These were things I had started to build out during my [all-digital Eurovision house party](/2020/03/25/this-is-not-the-song-contest) last year. This year, it's third time lucky.

## A new scoreboard for 2021

For 2021, my digital scoreboard has been totally rebuilt and given a facelift inspired by this year's “[Open Up](https://eurovision.tv/theme)” branding.

{% include figure.html
url="/assets/images/posts/2021/05/11/eurovision-scoreboard/eurovision-scoreboard-2021.png" alt="A screenshot of my 2021 Eurovision Scoreboard." figure="2" caption="This is what the new  scoreboard looks like" linktext="I call it Euroboard" link="https://www.johnpe.art/euroboard" %}

Aside from a visual refresh, this year’s scoreboard brings some new functionality too. Here are some of the upgrades for 2021:

- **Realtime scoreboard and voting:**: the scoreboard now updates in realtime; every time someone votes, the scores update instantly on screen. 
- **A new voting screen:** voting happens on the same website as the scoreboard; no more ugly or clunky Google Forms.
- **All three events:** rather than just the grand final, this year, I was able to enable a scoreboard for both semi-finals too[^1].
- **See who’s winning:** the first, second and third place entries – according to those taking part – are highlighted on screen throughout the show, and the scoreboard can also switch its layout between the running order of the acts on stage and a leaderboard style layout, where each act will be listed first to last.
- **Now playing:** I’ve built in a “now playing” feature to highlight which country is on screen *right now*. (Or at least, right now in my house!)
- **Message center:** the site has functionality to let messages and shoutouts pop up on screen during the show, including some small Easter egg messages.

[^1]: Don't even _pretend_ that you didn't know there were semi-finals. Embrace your zany, Eurovision-loving side.

## The final product

The finished product is available online at [www.johnpe.art/euroboard](https://www.johnpe.art/euroboard).

It’s hosted on [GitHub Pages](https://pages.github.com) as a static site built in [Jekyll](https://www.jekyllrb.com), and it connects out to a [Firebase](http://firebase.google.com) database. That means that, for my small-scale ambitions, hosting it doesn’t cost a penny!

## Building it

This was my first time using Firebase to build a website. Rather than go over how to build the whole site, I’ll just focus on how I worked with Firebase’s Realtime Database features to enable the functionality above.

### Connecting to the database

### Checking for network connectivity

### Security rules

### Get data

### Set data

### Update data