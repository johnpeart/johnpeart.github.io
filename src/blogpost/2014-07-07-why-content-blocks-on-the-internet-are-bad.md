---
title: "Why content blocks on the Internet are bad"
excerpt: "Despite it’s inventor, Tim Berners-Lee’s proclamation that the World Wide Web was “for everyone”, many countries around the world are treating the Web and Internet in ways that make it less open and free, and more like an Orwellian dystopia."
category:
  - digital
---
> “Unless we have an open, neutral Internet we can rely on without worrying about what&#8217;s happening at the back door, we can&#8217;t have open government, good democracy, good healthcare, connected communities and diversity of culture.”  
> **Tim Berners-Lee, The Guardian, 2014** 

The World Wide Web was not designed to connect technology &#8211; though that was the essential foundation &#8211; but to connect people. By the open and free sharing of information, it was hoped the Web could cross cultures, communities, and societies to make the world a better place. The Web would be a place for freedom of speech, freedom of expression, and freedom of thought.

Despite it&#8217;s inventor, Tim Berners-Lee&#8217;s proclamation that the World Wide Web was &#8220;for everyone&#8221;, many countries around the world are treating the Web and Internet in ways that make it less open and free, and more like an Orwellian dystopia. It&#8217;s not just the obvious vanguards of Russia and China that are clamping down on the idea of a genuinely unrestricted Internet, but also the likes of the US and here in the UK.

For years various national communications infrastructures have been slicing the Web into &#8216;acceptable&#8217; and &#8216;unacceptable&#8217; categories. The first true UK-wide implementation of these kinds of controls was mandated on mobile phone operators; content bars that limited access to 18+ rated content. More recently, these have been extended to landline Internet Service Providers (ISPs), at least in part because of rulings in the High Court. Call them whatever you want &#8211; filters or firewalls &#8211; they are technologies we&#8217;re using to carve up the Internet, and they, along with the rationales behind them, are inherently flawed.

## Assumed wisdom: why filter in the first place?

The dominant intent behind these firewalls is two fold. One is to block so-called &#8216;objectionable&#8217; content; content that is deemed unsuitable for under 18s to view &#8211; pornography, gambling and the like. The other, to stop illegal activity, such as the pirating of music, films and games.

Of course, the logic of the former is well intentioned. There are some things that people don&#8217;t want minors to see until they&#8217;re older. Parents want their children to maintain their innocence to some of the harsher realities of the world for as long as possible. And so, heeding the concerns of parents, we legislate.

We legislate to stop the sale of pornography to minors. We have legally binding ratings on the sale of movies and video games containing graphic violence, drug use, profanity, or sexual content. We prohibit under 18s from placing bets or using slot machines.

Of course, you can easily make an impassioned argument in favour of this kind of legislation. You can also quite easily make well-evidenced arguments against this kind of legislation. After all, there is no strong or consistent evidence to suggest that pornography is detrimental to a 16 year old, any more than there is good evidence to suggest that so-called violent video games turn teenagers into murders. (In fact, there is a stronger correlation between sales of Mario games and violent crime than there is with Call of Duty games).

In the case of tackling piracy, there is a similar logic. The activity of downloading content that is meant to be paid for is &#8211; for all intents and purposes &#8211; theft, and like all crime, we legislate to prevent the proliferation of this activity.

But I don&#8217;t want to have a debate about the logic of wanting *some* kinds of controls. Because we already have them in place offline, let alone online.

It has to be noted, however, that our legislative frameworks are moving away from an environment of legislating on what the content being accessed *is* &#8211; objectionable or illegal &#8211; and more towards one of legislating on the way that content is *accessed*. We&#8217;ve begun to regulate the pipes, when we should be focusing on the activities and content itself.

A bigger question exists relating filtering; when it comes to blocking so-called objectionable content, what is &#8216;objectionable&#8217;? Many people would probably draw the line at sex, drugs and violence, but that view is far from consensus. This question is especially important when considering that the technology of filtering Internet access is only as good as the human factors determining its design in the first place. And it&#8217;s this question that I want to tackle; are we right to use filters to prevent these kinds of behaviours?

## The blueprints: the basics of filtering

Crudely, the kinds of controls used to filter &#8216;objectionable&#8217; content consist of two components. One element is usually some kind of automated, text-based content analysis, and the other involves human intervention; someone manually &#8216;white-listing&#8217; or &#8216;black-listing&#8217; content based on their own judgement. Whilst this is a simplistic model, it&#8217;s helpful as a conceptual starting point.

Consider the scale of the problem. The amount content available on the Internet is huge. And over the past decade it has grown at an astonishing rate. As of January 2014, there were more than 180 million active websites on the Internet ([NetCraft, 2014][1]).

<script id="infogram_0_number-of-websites-on-the-web-2001-2014" src="//e.infogr.am/js/embed.js?fyt" type="text/javascript"></script>
The sheer quantity of websites, and the exponentially bigger number of words and pages sitting on each, makes processing that data a gargantuan feat. Additionally, a large amount of this data is changing every day. The task is analogous to climbing Everest barehanded. The quantity of data pre-determines the approach necessary to make a filter work; there is path-dependency. The only practical way to filter the content is technology-based first, with human intervention when people challenge a decision. Any other route is impossible to scale and maintain.

But this approach can&#8217;t and doesn&#8217;t work. Due to the volume and continuously changing content of the data, and the lack of sophistication of the technology and human processes involved in creating them, filters are (and for a considerable amount of time will remain) fundamentally inadequate for the task they&#8217;re designed to perform. But why?

## Poor technology: when owning a hammer, everything is a nail

As mentioned above, one of the two major components of any filtering process must involve a kind of automated text analysis. There are many ways to analyse text using computers; some are heavily qualitative, others purely quantitative, and some require a mixture of the two. Many rely on dictionaries to match words and try and derive meaning through some kind of statistical analysis. But regardless of which methodologies are employed to process the data, they &#8211; at least not yet &#8211; can&#8217;t do one thing; understand context.

Even the most sophisticated of content analysis tools can only understand patterns of words; whether a word appears frequently, repetitively or only in relation to other words nearby. We haven&#8217;t yet created a commercially available computer clever enough to completely understand and compute the context of language. In fact, many of the world&#8217;s most advanced language analysis technologies still require a high degree of human intervention to be made sense of. Despite the fact that your iPhone know&#8217;s the difference between `they're`, `their` and `there` when you&#8217;re using Siri, you&#8217;ll be hard pushed to find a filtering technology that can easily and reliably distinguish between `blue tits` and `tits`.

At least in part, it&#8217;s this underlying flaw that gives rise to so many difficulties in creating these kinds of content filters reliably. Rather than understanding context, they simply look for words on a &#8216;banned word&#8217; list, and measure the patterns and frequencies with which they appear.

## Dumb people: over-prescriptive rules breed stupid behaviours

Even if we produced a computer that was able to understand context of language, and the technology worked perfectly, there would still be a flaw in the system. The people.

The role of people comes back to the question posed earlier. What counts as &#8216;objectionable&#8217; content? Low hanging fruit would be content such as pornography. But it&#8217;s not that easy to establish a list of what is and isn&#8217;t acceptable; or at least, it doesn&#8217;t seem to be.

Some ISPs have chosen &#8211; and some are still choosing &#8211; to filter out content relating to sexual health advice and guidance, support for those with mental health problems, &#8220;gay and lesbian lifestyle&#8221; and more.

The first example &#8211; sexual health advice and guidance &#8211; neatly highlights the technological flaws in filtering, as described above. Computers can&#8217;t tell the qualitative difference between sexualised content and sexual health. The next example, however, is one of the most useful to highlight the human flaws in the idea of filtering.

We live in an almost completely equal society between heterosexual and homosexual people in the UK &#8211; at least legally. The words &#8216;gay&#8217; and &#8216;lesbian&#8217; are used frequently in every day language. LGBT people are, mostly, an accepted part of our lives here. And yet, companies filter websites that feature the words &#8220;gay&#8221; or &#8220;lesbian&#8221; on them.

I ran into one such filter recently, when opening a link to a popular LGBT news website, [Gay Star News][2]. The article was regarding the first same-sex teenage kiss on Eastenders; not something particularly outrageous, but something that was getting a lot of media coverage. But it was blocked because of &#8220;objectionable&#8221; content. The same happened to a similar article on the BBC News website.

There can only really be one reason that content filtering is happening on these kinds of items &#8211; because someone has decided, in a policy document, to associate &#8220;gay&#8221; with &#8220;objectionable&#8221;. Either it&#8217;s deeply homophobic, or it&#8217;s just plain stupidity, but it highlights the issues with the human elements of filtering in a stark and deeply worrying way.

Worse, when this content is submitted for review to ISPs, rarely are they unblocked, despite being harmless. And the likelihood is, again, that a person is reading a policy and, for one reason or another, acting conservatively to keep this content filtered.

The concern here is that legitimate content is being filtered, and there are few checks and balances in place to ensure that the filtering itself is legitimate.

## Inconsistent application: where technology meets human factors

When we combine the inadequate technological and human processes, we of course end up with lots of inconsistent application. None of this can be better typified than by looking at social media.

Let&#8217;s use Twitter as an example. As one of the most frequently used and popular websites in the world, across demographics of all ages, Twitter is &#8211; with rare exception &#8211; rarely filtered by ISPs. But if you apply the letter of the rules ISPs put in place about objectionable content, it should be almost universally banned.

Why? Because there&#8217;s more pornographic imagery on Twitter than possibly any other website on the Internet.

If these processes worked as they should &#8211; filtering based on banned words, and a human taking a rule-based decision to add the site to a blacklist &#8211; then Twitter wouldn&#8217;t be accessible to under 18s. And yet, it is.

There will be, no doubt, other examples of these kinds of situations, and it isn&#8217;t worth enumerating them here. But we should be asking the question about why this is happening.

I&#8217;m of course not suggesting that Twitter be filtered from under 18s; what I&#8217;m saying is that this scenario could have arisen because of companies making decisions based on risk profiles. And the concern is that if the process can leave some sites unfiltered, what about the cases where the reverse is true &#8211; when harmless content is blocked because of poor technology and poorly applied judgement.

## Lazy business: ISPs aren&#8217;t motivated to fix the problem

Underlying all these factors is a business motivation. These content filters have been forced upon ISPs and mobile operators in many countries. The public have willingly allowed or even supported it, and ISPs, whilst having put up a good public fight to stop it from happening &#8211; particularly in the UK &#8211; they failed to prevent it.

The problem with this is that ISPs largely don&#8217;t want the responsibility. It goes back to the argument of regulating the pipes versus regulating the activity. Internet Service Providers don&#8217;t want to regulate their pipes; it adds cost, it burdens the system, and it is one more thing for their customers to complain about. And so it&#8217;s not difficult to imagine they aren&#8217;t particularly motivated to install robust systems that actually work &#8211; after all, a very good system usually comes with a very high cost &#8211; nor are they motivated to now improve these systems for the same reason.

There is no pressure to fix it. Consumers just accept that all ISPs are bad, consumer groups rejoice at their victory, and ISPs sit back and count pennies in a highly competitive market. There are no incentives to fix the system, and no real costs for doing nothing.

## Broken Broadband: an equality of Internet misery

Orwell got his timing a bit wrong when he wrote his classic *1984*. He should have written about 2014. Big Brother is happening now; filtering our Internet access, and restricting the wrong things based on poor technology, and dodgy policy and people. And, without a proper motivation to change it, we may well be operating from a basis of equality of Internet misery for quite some time yet.

 [1]: http://news.netcraft.com/archives/category/web-server-survey/ "NetCraft Web Server Survey"
 [2]: http://www.gaystarnews.com "gay star news"