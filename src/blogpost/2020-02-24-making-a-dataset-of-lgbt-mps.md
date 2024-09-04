---
title: "Why I made a dataset of LGBT MPs"
author: John Peart
excerpt: "Make things open. It makes them better."
categories:
  - digital
  - government
  - LGBT
---

How many Members of Parliament were lesbian, gay, bisexual or transgender at the time of the 2017 General Election? A niche question, for sure, but until a few weeks before that election there was no easy answer. 

You could try searching Google but you’d end up none the wiser. Wikipedia did not have the answer. In fact, it was (and still is in some cases) listing MPs based on tabloid gossip. There were some sources that did snapshots in time, like the [The LGBT Representation and Rights Research Initiative at the University of North Carolina at Chapel Hill](https://globalstudies.unc.edu/lgbt-representation-and-rights-research-initiative/), but — as snapshots — these lists were quickly out of date.

Back in 2017, I worked in the [LGBT Policy Team](https://equalities.blog.gov.uk/2017/07/14/introducing-geos-lgbt-policy-team/) in the [Government Equalities Office](//www.gov.uk/geo). Like every government team, we had top lines that included useful facts and statistics. The number of LGBT MPs was one of those facts we liked to include. When the election rolled round, we didn’t know the answer. At best, we knew the answer we had would be out of date in a matter of weeks and we didn’t know how quickly a third party would do the sums.

That was a problem I decided I could fix.

## Start with user needs

I could have simply figured out the answer by doing a lot of Google searches and left it at that. That would have given us the answer we needed in the aftermath of the election but it wouldn’t have been a long term solution.

We needed something that was responsive to change[^1] so that our key facts were always correct in the moment. We also needed to be confident the sources were truthful and accurate; something most third parties couldn’t offer because their methodologies for collecting the data were unclear.

Put another way, I had a pretty straight-forward user need:

> As a policy official, I need regularly updated and independently verifiable information about LGBT MPs, so that I can use the information in my work

## Make things open: it makes things better

A clever bunch of people once came up with [some design principles](https://www.gov.uk/guidance/government-design-principles) for what a good service looks like. For this project, perhaps the most important one is this:

> Make things open: it makes things better. 

That’s exactly what I decided to do.

I created [a website](https://www.lgbt.mp) backed up by [a simple dataset](https://github.com/johnpeart/lgbt-mp/tree/master/_data). It’s open source, meaning it can be easily updated, interrogated, verified or extracted for use elsewhere.

It’s built using [Jekyll](https://jekyllrb.com), which means I have been able to host it freely on [Github](https://pages.github.com)[^2]. Anyone can contribute to the code, because [the repository](https://github.com/johnpeart/lgbt-mp/) is public.

Anyone can contribute data to the dataset too, and it’s as easy as updating a spreadsheet because there’s no database. It’s nothing more than a  couple of [CSV files](https://github.com/johnpeart/lgbt-mp/tree/master/_data).

## Iterate. Then iterate again

I started with the minimum viable product: a dataset that listed  those MPs who were LGBT on the date the dataset was compiled. Then, I created a *probably overkill, but very pretty*[^portcullis] website to display that data more interestingly. The website was generated dynamically as the dataset was updated. “Job done”, I thought, but the minimum viable product — the dataset — quickly became *less-than-minimum*. 

The original dataset only captured the MP, their constituency, and the source of the data. Following the election, some MPs changed constituencies, some lost their seats, and others joined Parliament for the first time. During the 2017 to 2019 Parliament, some MPs changed parties and groups too; sometimes multiple times. That meant the dataset as conceived on day 1 was, practically, no more useful than the snapshot dataset I was trying to improve on. So I iterated.

I changed the dataset to include the date an MP took their seat, their last day in office or any changes in constituency or party if applicable. I also created a separate dataset to show all the parties in a given Parliament, even if they had no sitting LGBT MPs in their party. And I kept iterating.

Now the dataset and website allow you to see current LGBT MPs in Parliament, but also go back to snapshots for previous Parliaments. It took a lot of ~~trial and error~~ iteration, but now the dataset is in a format that can be easily and continually updated in a future-proofed way.

## It meets the user need

> As a policy official, I need regularly updated and independently verifiable information about LGBT MPs, so that I can use the information in my work

Does this dataset and website meet the user need it was intended to? Yes.

Creating this dataset meant that, when I had needed the answer for work, there was a baseline source for the information that I felt like I could trust. It also meant my colleagues could easily get the answer too.

Making the data freely available on the open web has improved the available data as well. Other people have come looking for this data, and they’ve contributed their own information sources[^tweetedatme].

The dataset substantially improves on what came before it, because it shows how we know each MP is LGBT. Many of the sources are directly attributable to the MP themselves, rather than third parties.

Possibly the most important way I know this has been a useful endeavour though, is because it’s been used beyond just me and my old team. The dataset has been used by the BBC[^bbc], Sky News[^sky], and Quartz[^quartz].

## Made something open: it made the thing better

If there’s a moral to this story, it’s that I made an open dataset and making it open made it better. 

This dataset isn’t the end state. There are things that need to be iterated on. You currently can’t find out how an MP identifies; which is important, because as far as we know all these MPs have a minority sexual orientation but none of them are transgender. The dataset also doesn’t discriminate between those who were out when they came into office, versus those who came out in office. So there’s still work to do.

Looking a bit wider, the code and principles behind the work provide a foundation for other projects too: I’ve now started compiling a [list of LGBT ministers](//ministers.whoare.lgbt) in the UK Government. 

And you never know, maybe one day I’ll be able to start a list of LGBT Prime Ministers too.

> Visit ‘[LGBT MP](//www.lgbt.mp)’ to find out which Members of Parliament are lesbian, gay, bisexual or transgender.


[^1]: Given how much changed during the 2017 to 2019 Parliament, we needed that more than we could have realised at the time!

[^2]: Github lets you host projects for free on their website if you’re building them in Jekyll. The domain name costs me about £20 a year.

[^portcullis]: It gave me an excuse to create [this pride inspired portcullis](https://www.lgbt.mp/assets/images/site/logo.svg). A *different* portcullis is part of the UK Parliament’s official brand identity.

[^tweetedatme]: I, of course, looked to update the dataset in the wake of the December 2019 general election. In the days after the poll, I had people tweeting at me that I’d never met, letting me know which MPs I’d missed and even sending me sources. My favourite was perhaps where someone had pointed me towards a speech of newly appointed Darlington MP [Peter Gibson’s](https://www.facebook.com/darlingtonconservativeparty/videos/2550400468415917/) in which he thanks his partner for their support during the campaign.

[^bbc]: **BBC News**, 11 June 2017, [Election results 2017: The most diverse Parliament yet](https://www.bbc.co.uk/news/election-2017-40232272); and 17 December 2019 [Election 2019: Britain's most diverse Parliament](https://www.bbc.co.uk/news/election-2019-50808536).

[^sky]: **Sky News**, 16 December 2019, [General election: 2019 heralds the most diverse parliament for gender and ethnicity](https://news.sky.com/story/general-election-2019-heralds-the-most-diverse-parliament-for-gender-and-ethnicity-11885529).

[^quartz]: **Quartz**, 17 December 2019, [The UK’s new parliament is its most diverse ever](https://qz.com/1769275/new-uk-parliament-has-record-number-of-female-non-white-and-lgbtq-mps/).