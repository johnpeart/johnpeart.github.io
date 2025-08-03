---
title: "Creating a scoreboard for my Eurovision house party"
author: John Peart
excerpt: "I bloody love Eurovision; and this year, I wanted to celebrate with an upgrade for my house party. Here’s how I built it."
categories:
  - digital
  - eurovision
---

Loads of people watch Eurovision for the [outrageous costumes](https://youtu.be/hfjHJneVonE?t=42), [hit](https://youtu.be/Pfo-8z86x80)-and-[miss](https://youtu.be/Eu5kgSeZHfw?t=19) music, and [general titivation](https://youtu.be/VJ920cN2HmA?t=90). I appreciate all that stuff too, of course, but what I'm *really* living for on the night of the Eurovision grand final is the **voting**.

I don't think I'm actually ever more excited than when they announce the results; even more so with the new and absolutely *brutal* way they've done them in recent years.

So when I was deciding how I could bring some added fun to my Eurovision house party this year, there was only ever one choice: **more voting**! Many people would have settled for a paper scorecard downloaded from the Beeb — but not me. No, I wanted a digital scoreboard with realtime voting for my guests. And that’s what I built. Here’s a quick canter through how I shoved it together in only a few hours.

## What I built

Described simply, I built a webpage with a grid layout. In each cell of the grid was a country name and a score — which was pulled in from a [Google Sheet](https://docs.google.com/spreadsheets/d/1tbhEoWuhBg5H5l61VMsqy-qywp4LCzj5ZsoD9dSvftw/edit#gid=282133841) roughly every 30 seconds.

It looks like this:

![](/images/posts/2019-06-02-eurovision-scoreboard.jpg "The scoreboard")

To 'vote', you filled in a [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdwHZqxdzQE5wc5OHp1rHfUU3wWk-ZU2aJqs5EEtsbI-wV23g/viewform) and gave each country a score on the usual 1 to 12 Eurovision voting scale. The Google Sheet then aggregated the votes and gave an average score for each song.

## Starting with a boilerplate

As with most of my digital projects nowadays, I find it quickest to use [Jekyll](https://www.jekyllrb.com). It was entirely unnecessary to use Jekyll to do this — but it does have the benefit of building remotely on Github Pages without a faff, and it wallpapers over some of the significant gaps in my javascript skills.

I'm not going to go into how to put a Jekyll site together — the official documentation is simple enough that most people can follow it. I won't go over the very rudimentary HTML and CSS I've used to create the scoreboard either — if you know how to code at a fairly rudimentary level, you'll be able to replicate it.

Instead, I'll skip to the interesting bit — how I got the data out of Google Sheets.

## Setting up Google Sheets

### Start with your Google Form

I started by creating a [Google Form](https://forms.google.com).  On the form, I included 3 questions:

1. which country the person was voting for
2. how many points they were awarding
3. who they were

Guests awarded their points by submitting the form at the end each performance[^1].

[^1]: If we were strictly mirroring the way Eurovision voting really works, each person would get to award their points once — they'd give 12 points to their favourite country, 10 points to their second favourite, and so on — but that seemed to defeat the point of having a live scoreboard. So instead, I allowed guests to give 0, 1, 2, 3, 4, 5, 6, 7, 8, 10 or 12 points to each country.

### Link your Google Form to a Google Sheet

Google Form created, I next linked this to a Google Sheet. This means every time someone makes a form submission, it saves their response to a spreadsheet.

It’s almost too easy to do: you just click a button on the top of the form! In my case, I needed to create a new Sheets file, but you could also link it to an existing spreadsheet if you had one you'd already been working in.

### Calculate the scores

The next task is to aggregate the scores.

Each form submission is added to the workbook as a row in a sheet (I'll call this the 'Responses sheet' for brevity). So to get the aggregated scores, in a new sheet I:

1. listed the names of the countries in the final in Column A
2. used `SUMIF()` to check if the country in Column A matched the response on the 'Responses sheet'
3. used `COUNTIF()` to see how many times the name of the country in Column A appeared in the 'Responses sheet'
4. used `AVERAGE()` to average the `SUMIF()` and `COUNTIF()`
5. rounded the average to the nearest integer by using `ROUND()`
6. if the rounded number was either `9` or `11`, I rounded up to `10` or `12` respectively; because you can't get 9 or 11 points in Eurovision

All this resulted in a final score for each entry.

### Publish the Google Sheet

In order to retrieve the data for the scoreboard, I published the Google Sheet, which makes it available publicly to anyone with the link[^2].

[^2]: It is technically possible to make this work without making the Google Sheet publicly visible, but that would involve all sorts of tricky authentication that was too much of a hassle.

To publish the sheet, go to `File > Publish to the web`, and click `Publish`. I also ticked the `Automatically republish when changes are made` box.

### Get your Google Sheets identifiers

One final thing I needed was the identifier for the Google Sheet from the URL.

Google Sheets URLs (at the time of writing) are structured like this:

```
https://docs.google.com/spreadsheets/d/YOUR-SPREADSHEET-ID/edit#gid=WORKSHEET-ID
```

You need to know the `YOUR-SPREADSHEET-ID` — which will be a long random alphanumeric string — in order to point the code in the next section to the right place.

## Getting the data out of Google Sheets

> **Before you go further**, I should say that I'm very much a javascript novice. I pieced this together from various StackOverflow threads, so whilst I can tell you *what* I did, I can't necessarily explain to you why it works!
>
> There’s probably a much simpler way of writing this code — if there is, please do let me know and [amend the code on Github](https://github.com/johnpeart/scoreboard).

### Load the data

The first thing I needed was a function that could load the data. I created a function `loadScript()` which accepts two arguments — the `url` of the Google Sheet and a `callback` to trigger once it’s loaded.

{% raw %}
```javascript
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
```
{% endraw %}

The `url` argument is constructed from the `YOUR-SPREADSHEET-ID` you hunted down earlier.

Whereas the URL for the document in a browser will load the Google Sheets app, I needed the data in a raw format. Google offers a JSONP API for this purpose. The URL we need for our script’s `url` argument is in this format:

```
https://spreadsheets.google.com/feeds/cells/YOUR-SPREADSHEET-ID/1/public/basic?alt=json-in-script&callback=YOUR-CALLBACK
```

You replace `YOUR-SPREADSHEET-ID` with the ID you kept hold of earlier.

In order to manipulate the data you need to include a callback too — that’s where `YOUR-CALLBACK` comes in. In my case, I called it `onDataLoaded`; which we'll come back to.

That gave me this:

```javascript
loadScript("https://spreadsheets.google.com/feeds/cells/1tbhEoWuhBg5H5l61VMsqy-qywp4LCzj5ZsoD9dSvftw/1/public/basic?alt=json-in-script&callback=onDataLoaded")
```

This script will now call the data, inject the script into the page `header`, make a callback `onDataLoaded` and — if specified — make a second callback to continue with the rest of the operations I need.

### Do something with the data

I included a callback in the URL, `onDataLoaded`. This function would take the content of specific cells, save the data as variables, and then place this data inside a `div` in the HTML.

I mentioned I used Jekyll; this is where Jekyll comes in handy. Instead of manually writing out each `var` and popping it into it’s respective `div`, I created a `.csv` file in the site’s `_data` folder called `data.csv`. In this file was a list of all the countries in the final.

In the javascript file, I used some Liquid markup to iterate through each row of `data.csv`, to convert any country names into usable variables, and then replace the HTML. What would have been more than 50 lines of code to write then became 4 lines[^3].

[^3]: I could have achieved the same thing in javascript, but I was in a rush and didn't want to brush up on javascript arrays!

{% raw %}
```javascript
var onDataLoaded = (data) => {

	{%- for entry in site.data.data -%}
	    var {{ entry.Name | remove: " " }} = data.feed.entry.find((entry) => entry.title.$t == '{{ entry.CellReference }}').content.$t
	    document.getElementById('entry-{{ entry.Name | remove: " " }}').innerHTML = {{ entry.Name | remove: " " }}
	{%- endfor -%}

}
```
{% endraw %}

### Check the data regularly

So I can now get the data, and I can place the data I need in the places I want; but it only loads once. The feed will update automatically (because I set it to publish changes automatically at the start), but the page won't know that so the scores only update when the page refreshes.

To get around this, I created a `getNewData()` function. This function triggers the `loadScript()` function every *n* seconds thanks to a `setInterval()`.

```javascript
function getNewData() {

	setInterval(
		function(){

			loadScript("https://spreadsheets.google.com/feeds/cells/YOUR-SPREADSHEET-ID/1/public/basic?alt=json-in-script&callback=onDataLoaded")

			// Output to the console that the data has been checked,
			// so you know it’s working even if there are no changes.
			console.log("Updated data");

		},
	30000);

}
```


### Load the script, and keep checking it

This new `getNewData()` function becomes part of our initial `loadScript()` function call, when the page has finished loading.

I wrapped the `loadScript()` in a `window.onload`, calling the URL and the `getNewData` function, like this:

```javascript
window.onload = function() {
	loadScript("https://spreadsheets.google.com/feeds/cells/YOUR-SPREADSHEET-ID/1/public/basic?alt=json-in-script&callback=onDataLoaded", getNewData)
};
```

This means that, after the page has loaded, the script will download the data from the Google Sheet, manipulate the data, and then set a timer to trigger the same command again via `getNewData`.

### Final javascript code

Put all that together, and you get this:

{% raw %}
```javascript
window.onload = function() {
	loadScript("https://spreadsheets.google.com/feeds/cells/YOUR-SPREADSHEET-ID/1/public/basic?alt=json-in-script&callback=onDataLoaded", getNewData)
};

function getNewData() {
	setInterval(
		function(){
			loadScript("https://spreadsheets.google.com/feeds/cells/YOUR-SPREADSHEET-ID/1/public/basic?alt=json-in-script&callback=onDataLoaded")
			console.log("Updated data");
		},
	30000);
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}


var onDataLoaded = (data) => {

	{%- for entry in site.data.data -%}
	    var {{ entry.Name | remove: " " }} = data.feed.entry.find((entry) => entry.title.$t == '{{ entry.CellReference }}').content.$t
	    document.getElementById('entry-{{ entry.Name | remove: " " }}').innerHTML = {{ entry.Name | remove: " " }}
	{%- endfor -%}

}
```
{% endraw %}

## What I'd do differently next time

I did this in a rush; I had the idea at 10am on the morning of the final and had finished it just after lunch time. That means there are a lot of rough edges, including:

1. **Lots of unnecessary code**: I copied an existing Jekyll project folder over and started hacking away at it, so there’s a lot of code I don't need that’s left behind from that. If I do this again next year, I'll tidy that all up.
2. **It works best on TVs**: I knew I was going to display this on a 1080p resolution display, so I built it specifically for that use case. It goes quite badly wrong, quite quickly on any other screen size. An objective for next time would be to make it responsive.
3. **Jekyll wasn't really needed**: I could have built this without Jekyll, but it’s become a bit of a crutch recently. I should probably build it without Jekyll!

There’s also some stuff that would have been cool to add, like:

1. **Re-ordering the grid automatically**: at the moment, all scores are ordered by the order they appear in the `data.csv` file. It would be great to have them re-order to be in rank order.
2. **Calculate proper scores, after voting ends**: in the current version, it’s possible to have more than one act with 12 points. It would be cool to have the scoreboard use the unrounded figures to attribute scores properly at the end, Eurovision style.

## Get the code

All the code for this project is [available on Github](https://github.com/johnpeart/scoreboard), if you want to role your own.
