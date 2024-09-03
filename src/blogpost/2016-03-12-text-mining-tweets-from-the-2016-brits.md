---
title: "Text mining tweets from the 2016 BRIT Awards"
excerpt: "I've analysed more than 2GB of tweets about the 2016 BRIT Awards in the name of (pseudo) science!"
categories:
  - data
---

You might remember that last year I [analysed around 75,000 tweets from the BAFTAs](http://jrpeart.com/2015/02/15/text-mining-tweets-from-the-2015-baftas/) using the statistics package, ['R'](https://www.r-project.org). Last month saw the 36th BRIT Awards take place at The O2 arena in London, and so I fired up Twitter again to dive into the data and produce some graphs (because I'm that fun).

This time, there were more than 371,149 tweets over approximately 2 &frac12; hours. Including the metadata, it's a 2GB file. Here's what those tweets contain.

## Tweets over time and mentions

### All tweets

![Line graph of all tweets over time][AllTime]

The BRITs started at 20:00; I started recording tweets just before. In the first 10 minutes, the number of tweets went from around 800 every minute to almost 3,000 a minute.

There are periodic dips in the number of tweets recorded. Given they're at regular intervals, and that the BRITs were broadcast on ITV, they probably represent the advert breaks; everyone's stopped tweeting and popped off to make a cup of tea.

The most interesting part here is the tweets from 21:38 to 22:03. It's not obvious what's causes this drop off - but it does coincide with roughly the same time that Annie Lennox and Gary Oldman gave their moving tributes to David Bowie.

### Tweets about David Bowie

![Line graph of David Bowie tweets over time][BowieTime]

Tweets about David Bowie, perhaps unsurprisingly, happened in a flurry, from 21:35 to 22:05. The first peak is likely the point at which Lennox made her tribute, and Bowie received a posthumous award. The following sharp dip in tweets - both about Bowie and in the overall stream - is likely because of an advert break ahead of Gary Oldman introducing a performance by Lorde, in which she covered some of Bowie's greatest hits.

Interestingly, references to Lorde are non-existent in this period. In fact, they stop at 21:05 unexpectedly, after a seemingly inexplicable peak from earlier in the night.

### Best British Female tweets

![Line graph of Best British Female tweets][FemaleTime]

Adele dominated the awards, and she also dominated the discussion amongst the nominees for Best British Female. Adele won 4 awards on the night, and closed the show, performing *When We Were Young*, the second single from her latest album, 25. These 5 events probably explain the 5 distinct peaks in the above line graph.

Jess Glynne also performed at the awards; she peaks at around 20:39, roughly the time she performed.

![Bar chart of Best British Female tweets][FemaleMentions]

The other nominees are barely mentioned throughout the night. Looking at the total tweets for each nominee in this category, it's clear that no-one by Adele got a look in on the night. Over 45,000 tweets referenced Adele; Jess Glynne was referenced less than 5,000 times, and the others barely even a 1,000. Laura Manning, in fact, didn't feature in a single tweet in this data set.

### Tweets about Adele

![Line graph of Adele tweets over time][AdeleTime]

Adele was the most referenced person at the BRITs. She also had some pretty stand-out moments on stage too.

In her acceptance speech for her first award, she made a [public statement](http://www.vanityfair.com/hollywood/2016/02/adele-kesha-brit-awards) in support of [Kesha](http://www.theguardian.com/music/2016/feb/27/kesha-profile-court-case-dr-luke-sony). It was only a few words, but it caused a spike of discussion about Kesha on Twitter, peaking at 20:09. Oddly, the spike for Adele didn't peak until nearly 5 minutes later.

The other thing that happened on the night was Adele breaking down in tears as she was awarded another award by none other than British astronaut [Tim Peake](https://twitter.com/astro_timpeake). Either something went wrong with Twitter, or the analysis has gone a bit wonky for this though; there's barely even a mention of Tim in this data set.

Bear in mind that this is Twitter's streaming API that collected this data; it only provides an average of around 1% of the full number of tweets made at any one moment. So, whilst this data is representative of Twitter as a whole, it's possible that this 1% data set didn't contain anything about Tim Peake by pure chance.

### Best British Male tweets

![Line graph of Best British Male tweets][MaleTime]

James Bay performed and took away awards on this night too; just like Adele. Unlike Adele, James doesn't appear to have the same following though. Where Adele had tens-of-thousands of references on Twitter, James barely scraped 2,000 in total.

His tweets peak at around 20:19, 20:29 and 20:59. These represent the points at which he performed (once alone, once with Justin Bieber) and won the award for Best British Male.

![Bar chart of Best British Male tweets][MaleMentions]

Mark Ronson also featured comparatively highly in this data set; though it's not clear why from the awards ceremony itself. Ronson didn't win any awards on the night, nor was he a key performer. Compare the spikes against the observations from the overall data set, and you can see why. Ronson features in the data because he was front-and-centre in the [MasterCard adverts](https://www.youtube.com/watch?v=GUlk1ssXJYk) that saw a YouTube supergroup recreate his single, *Uptown Funk*. The power of advertising folks - exposure.

### Tweets about the performers at the BRITs

![Line graph of BRITs performer tweets over time][PerformersTime]

Looking beyond the nominees for Best British soloists, and to the 9 performers on the night, we see that Adele is miles ahead of the night's big names in terms of twitter attention for most of the night.

![Bar chart of BRITs performers tweets][PerformersMentions]

Justin Bieber is the next most highly referenced performer of the night, but even he, with his millions of fans, doesn't come close to even half the number of tweets Adele has referencing her. Seemingly no one likes Rhianna or The Weeknd, who end up at the bottom of the tweet pile.

## Word cloud

![Word cloud of all tweets][AllWordCloud]

Here's a tweet cloud of the tweets in the data set. The bigger the word, the more it appears in the data set.

The interesting thing here is that Adele isn't the most referenced act in this cloud, instead, it's One Direction. That's likely because the award for British Artist Video was decided by the number of Twitter mentions, and One Direction won that contest. It could also just be that One Direction have a persistent number of Twitter mentions.

## Word associations

![Hierarchical dendrogram of all tweets][AllDendrogram]

This dendrogram shows how closely related one set of words is to another. Across the whole corpus, this dendrogram shows that most tweets were focused on the Best British Video award, One Direction, Justin Bieber and the Best Male and Female awards.

The dendrogram also shows that `@onedirection` being one of the most popular to terms in the data set was not a coincidence. We see that `@onedirection` is closely related to `#britvidonedirection`, which was the hashtag voting. It's also closely related to the term `drag` - and 1D's song title was `Drag Me Down`.



[AdeleTime]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_AdeleOverTime.png
[AllTime]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_AllTweetsOverTime.png
[FemaleMentions]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_BritFemaleMentions.png
[FemaleTime]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_BritFemaleTweetsOverTime.png
[MaleMentions]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_BritMaleMentions.png
[MaleTime]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_BritMaleTweetsOverTime.png
[BowieTime]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_DavidBowieTweetsOverTime.png
[AllDendrogram]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_Dendrogram.png
[PerformersMentions]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_PerfomerMentions.png
[PerformersTime]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_PerformersTweetsOverTime.png
[AllWordCloud]: /assets/images/posts/2016/03/12/text-mining-tweets-from-the-2016-brits/BRITS2016_WordCloud.png