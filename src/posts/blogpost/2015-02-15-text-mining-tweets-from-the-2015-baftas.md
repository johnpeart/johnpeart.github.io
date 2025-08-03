---
title: "Text mining tweets from the 2015 BAFTAs"
excerpt: "I decided to do some content analysis of the 2015 BAFTA awards using live streaming data from Twitter. If you like graphs, you'll love this."
categories:
  - data
---
It’s been just over a week since London’s Royal Opera House rolled out the red carpet for the world’s finest silver screen stars, directors, writers, and film making entourages at the British Academy Film (and Television) Awards; AKA, the BAFTAs.

As has now become the cultural norm for events such as these, the awards were being tweeted by the masses. Many of these tweets accompanied by the event’s official hashtag &#8211; #EEBAFTAs. And as is now becoming a geeky norm for me, I decided I wanted to do some quick and dirty analysis of those tweets.

I used a Python script to link into Twitter’s streaming API, and download tweets with the #EEBAFTAs hashtag to a local .csv file. I left the connection to Twitter’s API open for around 6 hours, from 18:30 to 23:20. The televised broadcast of the BAFTAs happened between 21:00 and 23:00, but the event itself was a few hours before the broadcast.

In total, over 77,831 tweets were downloaded, which, including the associated metadata, created a 455MB .csv file.

Data stored, I fired up R to do some graphing and text mining. For this set of analysis, I used the following libraries:

- [streamR](https://cran.r-project.org/web/packages/streamR/index.html)
- [twitteR](https://cran.r-project.org/web/packages/twitteR/index.html)
- [tm](https://cran.r-project.org/web/packages/tm/index.html)
- [wordcloud](https://cran.r-project.org/web/packages/wordcloud/index.html)
- [RTextTools](https://cran.r-project.org/web/packages/RTextTools/index.html)
- [topicmodels](https://cran.r-project.org/web/packages/topicmodels/index.html)

So what did I find?

## Total tweets and tweets over time

### Tweets about Best Actor nominees

![](/images/posts/2015-02-15-baftas-BestActorVolume.png)

The graph above shows the number of tweets that include the surname of the Best Actor nominees.

If Twitter is a barometer of the popularity of silver screen stars, then it seems Eddie Redmayne was the darling of the evening; and he, of course, bagged the prize for Best Actor. Perhaps most surprising is the disparity between tweets mentioning Redmayne and Cumberbatch, and the rest of the field. Equally surprising perhaps, is that Benedict Cumberbatch &#8211; and indeed the Imitation Game, for which he was nominated &#8211; didn’t walk away with any awards.

![](/images/posts/2015-02-15-baftas-BestActor.png)

Looking at the time series data, it’s easy to spot the time that Redmayne picked up his award for Best Actor. Around half of all tweets captured at 22:31 mentioned Eddie Redmayne).

However, if you were going to place bets, based on all the tweets leading up to 22:21, you’d have thought Cumberbatch was a shoe in for the award. He was certainly more popular on Twitter up until that point.

### Tweets about Best Actress nominees

![](/images/posts/2015-02-15-baftas-BestActressVolume.png)

It seems the Best Actor nominees stole the show entirely too. Of all the tweets mentioning Best Actress nominees, Julianne Moore comes out on top &#8211; unsurprisingly, given that she won the Best Actress category. However, Moore didn’t get even a quarter of the mentions of Eddie Redmayne did.

Unconscious bias on the part of BAFTA tweeters? Perhaps. But it’s equally likely that the films these leading actresses were in just weren’t as popular this year (I hadn’t even heard of *Still Alice* before the BAFTAs!).

![](/images/posts/2015-02-15-baftas-BestActress.png)

Throughout the whole night, the tweets about these leading women were far lower than those of Best Actor nominees. Based on the spikes earlier in the night though, again, you might have expected Felicity Jones to have walked away with the award. Twitter spikes are certainly proving to be incredibly misleading!

### Tweets about Best Film nominees

![](/images/posts/2015-02-15-baftas-BestFilmVolume.png)

Boyhood walked away with the BAFTA for Best Film, but The Theory of Everything was the most talked about of the Best Film nominees.

The interesting thing about these results is that, whilst Benedict Cumberbatch was a popular topic of discussion on Twitter, the film he starred in was not. Perhaps that says it all about why it walked away without one of the famous mask trophies to its name.

![](/images/posts/2015-02-15-baftas-BestFilm.png)

Of course, films are generally referenced across many categories at the BAFTAs, with the exception of the Imitation Game, each of the Best Film nominees walked away with at least one award. That likely explains the spikes as we look across the time series data.

## Most frequent terms

### Frequent Terms in tweets with #EEBAFTAs

![](/images/posts/2015-02-15-baftas-MostFreqTerms.png)

When you think about the BAFTAs, or for-that-matter, the Oscars and Golden Globes, what are the things you think about?

- The red carpet? *Check*.
- Who won the awards? *Check*.

Twitter data seems to back up both your hunches. The most frequently used terms in the tweets from the evening are shown in the graph above.

Aside from the most popular actor of the evening &#8211; Eddie Redmayne &#8211; making an appearance in these popular terms, perhaps surprisingly, `stephen` is also highly ranked. At this point, it’s unclear whether this refers to Stephen Fry, who presented the awards, or Stephen Hawking, who, of course, Eddie Redmayne portrayed in *The Theory of Everything*, and who was at the awards night.

### Frequent Terms in Best Actor tweets

![](/images/posts/2015-02-15-baftas-TermsBestActor.png){.rounded}

It seems Stephen Hawking was, in fact, the main reason for `stephen` being a top term in the overall corpus. `hawking` is the fourth most popular term in the corpus for Best Actor tweets.

Similar to the overall volume graphs, above, both Eddie Redmayne and Benedict Cumberbatch are the most frequently referenced in this corpus. Perhaps oddly, their first names are used more frequently than their last names. *How very familiar of you, Twitter*.

### Frequent Terms in Best Actress tweets

![](/images/posts/2015-02-15-baftas-TermsBestActress.png){.rounded}

Julianne Moore tops the frequent terms list for Best Actress &#8211; unsurprisingly &#8211; as does the film for which she won the award, Still Alice. In a strange reversal of trend, most people refer to Julianne Moore by her surname.

### Frequent Terms in Best Film tweets

![](/images/posts/2015-02-15-baftas-TermsBestFilm.png){.rounded}

The Theory of Everything is referred to more often than the other Best Film nominations here, congruent with the data previously seen. It seems everyone is wanting to wish a congratulations in this corpus too.

## Word clouds

Word clouds don’t show us much other than the most frequently used terms in a corpus. Their relative size is unimportant; larger sized terms are more frequent in the corpus, but they aren’t proportionally more frequent in this instance.

The word clouds here are limited to the 500 most frequent terms. I won’t talk about each word cloud, just take a look for yourself; they’re pretty!

### Word cloud of tweets with #EEBAFTAs

![](/images/posts/2015-02-15-baftas-WordCloudAllTweets.png){.rounded}


### Word cloud of Best Actor tweets

![](/images/posts/2015-02-15-baftas-WordCloudBestActor.png){.rounded}


### Word cloud of Best Actress tweets

![](/images/posts/2015-02-15-baftas-WordCloudBestActress.png){.rounded}


### Word cloud of Best Film tweets

![](/images/posts/2015-02-15-baftas-WordCloudBestFilm.png){.rounded}


## Associations between terms

More interesting than the simple frequencies of terms within a corpus, is the association between those terms. That is, when one term is used, what other terms frequently appear with it?

Using clustering of the data, and removing the most sparse terms from each of the four corpora (all tweets, best actor tweets, best actress tweets, and best film tweets), we can create hierarchical dendrograms to show how closely associated the most popular terms are within a corpus.

### Association of terms in all tweets with #EEBAFTAs

![](/images/posts/2015-02-15-baftas-DendrogramAllTweets.png){.rounded}

Perhaps unsurprisingly, for the all tweets corpus, `#EEBAFTAs` forms the first cluster (top left). You would expect this, given every tweet in this corpus contains `#EEBAFTAs`. How the rest of the corpus breaks down is more interesting.

Terms relating to the announcement of awards and the red carpet itself dominate the corpus. *The Theory of Everything* forms the most cohesive cluster below this level (terms: `actor`, `leading`, `eddie`, `reedman`, `hawking`, `stephen`). This shows the popularity of the film on Twitter during this time.

### Association of terms in Best Actor tweets

![](/images/posts/2015-02-15-baftas-DendrogramBestActor.png){.rounded}

Unlike the whole corpus, `#EEBAFTAs` is not the most cohesive cluster in the Best Actor corpus. Instead, two large groups of clusters emerge &#8211; the most significant (right) purely relating to Eddie Redmayne and Benedict Cumberbatch.

The left tree of the dendrogram is comparatively much less focused, splitting into many branches before terms emerge as dominant. This second cluster group is dominated again by Benedict Cumberbatch, but also his spouse, Sophie Hunter.

### Association of terms in Best Actress tweets

![](/images/posts/2015-02-15-baftas-DendrogramBestActress.png){.rounded}

The Best Actress corpus is more similar to the main corpus, in that #EEBAFTAs is quickly shown as a dominant term in the clustering, as is the winner of the category &#8211; Julianne Moore.

For the rest of the diagram, the clustering is much less focussed. This is likely related to the corpus size. As this corpus is much smaller than the previous two, the amount of sparse terms eliminated through data manipulation is likely lower. As such, the clustering has more terms to work with.

Perhaps most interestingly in this corpus, Julianne Moore’s film &#8211; *Still Alice* &#8211; is not closely associated in the clustering. Both the individual terms still and alice, and the hashtag #stillalice feature to the far right of the dendrogram, and after many branches.

### Association of terms in Best Film tweets

![](/images/posts/2015-02-15-baftas-DendrogramBestFilm.png){.rounded}

The Best Film corpus calls out #EEBAFTAs as a key cluster early on, and is most related to *The Theory of Everything* (terms: `theory`, `everything`) and *Boyhood*. *Birdman*, *The Imitation Game* and *The Grand Budapest Hotel* are distinct from these two films.

As you might expect, we see the films appear near their winning categories in the clustering too &#8211; *Boyhood* being associated with best film, *Birdman* with cinematography, and so on.

Again this corpus seems more unfocused than the first two, again likely due to its relative size and thus fewer sparse terms to remove.