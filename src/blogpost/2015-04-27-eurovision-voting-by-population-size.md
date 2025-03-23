---
title: "Who would win Eurovision if population size mattered?"
excerpt: "Every country gets the same douze points when voting in the Eurovision Song Contest. But what if they didn't?"
aliases: 
- /2015/4/27/eurovision-voting-by-population-size/
- /2015/04/27/archive/eurovision-voting-by-population-size/
categories:
- eurovision
- data
---

The *Eurovision Song Contest's* voting system is run much like the American Senate; every state gets an equal share of the vote. In America, Wyoming, with its minuscule population, has two senators, whilst California, vast in population size, also has just two senators representating it. In Eurovision, it doesn't matter if you have a population of tens-of-thousands - like San Marino - or of hundreds-of-millions - like Russia - you get the same say over the winner by awarding the same, unweighted set of 1, 2, 3, 4, 5, 6, 7, 8, 10 or 12 points. 

The logic behind both systems is the same; it ensures no one state can dominate the outcome of a vote, overshadowing any and all of its smaller counterparts. It's a tried and tested philosophy. Indeed, even the voting mechanics of the *European Council* were similar until last year, with states being - at least partially - disproportionately represented as part of the qualified majority voting system.

And this got me thinking; what if the outcomes of the Contest weren't based on equality of voting, but instead, were based on population size?

Would the winners be the same? Would Russia, as the largest nation in the Contest, determine the outcome of every vote by default? Does population size make any difference at all, or is a bloody good Euro-pop tune always going to win regardless? Well, that's exactly what I set out to find out. 

## Methodology

I took the points-based voting data for the 2010 - 2014 grand finals from the official *Eurovision Song Contest* website, and population data for each competing state for each year they competed over the same timeframe, (for 2010 - 2013, this data came from the *CIA World Factbook*, and for 2014, this data came from the World Bank). To achieve a weighted score based on population size, I first:

- took the voting state's population size in that year
- divided the population size of the voting state by the total population of all competing states
- divided that number by *1/n*, where *n* is the number of states eligible to vote in that final

This provided me with a multiplier that was proportional to the population size of the state competing. This multiplier also maintained the total number of votes awarded in the unweighted scenario, so final scores were directly comparable. 

I took this multiplier, and multiplied this against the 1 - 12 points the state actually awarded to each finalist, and rounded to 1 decimal place.

At the end of these calculations, for each finalist, I could compare their:

- actual total points
- population-weighted total points
- actual finishing position
- population-weighted finishing position

## Results

### Winners be winning... unless you're Germany

Of the 5 sets of results studied, in only 1 year would the winner of the grand final have changed. Conchita Wurst (2014, Austria), Emmelie de Forest (2013, Denmark), Loreen (2012, Sweden), and Ell & Nikki (2011, Azerbaijan) all win their finals regardless of whether scores are weighted by country size or not. 

The bad news comes for the 2010 winner, Lena (Germany) and her entry "Satellite". Whilst she won the vote on the night, she may not have had the popular support of Europe itself. Bizarrely, it was Armenia's entry, [*Apricot Stone*](https://www.youtube.com/watch?v=bdAd4Y8agas), that would have won had the state population mattered. 

Why so bizarre? Well, aside from the frankly *hideous* song, Armenia would have rocketed from 7th place to first under a proportional vote, picking up more than 100 additional points.

<table class="card">
    <caption><strong>Table 1:</strong> Weighted and unweighted data from the 2010 <em>Eurovision Song Contest</em> data</caption>
    <thead>
        <tr>
            <th>Country</th>
            <th class="align-right">Unweighted Ranking</th>
            <th class="align-right">Weighted Ranking</th>
            <th class="align-right">Unweighted Score</th>
            <th class="align-right">Weighted Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Germany</strong></td>
            <td class="align-right">1</td>
            <td class="align-right data-down">2 <span class="arrow" aria-label="Lower" aria-hidden="true">↓</span></td>
            <td class="align-right">246</td>
            <td class="align-right data-down">217.2 <span class="arrow" aria-label="Lower" aria-hidden="true">↓</span></td>
        </tr>
        <tr>
            <td><strong>Armenia</strong></td>
            <td class="align-right">7</td>
            <td class="align-right data-up">1 <span class="arrow" aria-label="Higher" aria-hidden="true">↑</span></td>
            <td class="align-right">141</td>
            <td class="align-right data-up">248.8 <span class="arrow" aria-label="Higher" aria-hidden="true">↑</span></td>
        </tr>
    </tbody>
</table>


The 2010 Contest goes on to be even more surprising though. Not only does the winner change, but it's the *only* instance in this data set where the winner would have actually scored *fewer* points under a proportional system than they did on the night. In all other years, the winner's point-lead *increased* over the rest of the contestants.

### Loreen really is the best Eurovision winner ever

Talking of increasing point-leads; Loreen didn't just storm it in the actual contest, she storms it in this fictional scenario too. 

Eurovision buffs will know that *Euphoria* was one of the highest scoring songs of all time achieving the most number of *douze points* of any entry in the contest's history, and just 15 points behind the current record holder, 2009's Alexander Rybak (Norway). But in a proportional system, Loreen's score of 372 would have been even higher - she would have scored 393.8 points! Further evidence, if any was needed, that "Euphoria" is an incredible song.

<table class="card">
    <caption><strong>Table 2:</strong> Data from the 2012 <em>Eurovision Song Contest</em> data</caption>
    <thead>
        <tr>
            <th>Country</th>
            <th class="align-right">Unweighted Ranking</th>
            <th class="align-right">Weighted Ranking</th>
            <th class="align-right">Unweighted Score</th>
            <th class="align-right">Weighted Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Sweden</strong></td>
            <td class="align-right">1</td>
            <td class="align-right">1</td>
            <td class="align-right">372</td>
            <td class="align-right data-up">393.8 <span class="arrow" aria-label="Higher" aria-hidden="true">↑</span></td>
        </tr>
    </tbody>
</table>

### The rest is anyone's game

Looking further down the pack in each year's contest, the results are a chaotic bag of swaps and changes. In every year, more than half of the contestants rise or fall on both scores and finishing positions.  

## Conclusions

So does the voting mechanism of the *Eurovision Song Contest* matter? Certainly, from this data, it seems that it doesn't. Whether you use a weighted or unweighted scoring mechanic, the same countries win in most cases. 

An interesting avenue of future exploration might be to look at data from:

- both semi-finals and subsequent finals
- data from before 2010 (but I got bored typing it into a spreadsheet - damn you Eurovision website and your lack of CSV files!)