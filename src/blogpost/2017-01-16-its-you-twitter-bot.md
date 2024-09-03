---
title: I made a Twitterbot to tell people the obvious
author: John Peart
excerpt: "It's you. It's just you. No really. No one else saw that. It was just you. You're a genius. Well done."
categories:
  - digital
aliases:
- /its-you-bot/
- /isitmebot/
---

A Twitterbot (sometimes 'Twitter Bot', or simply 'Bot') is a bit of code that automatically posts stuff to Twitter based on pre-defined conditions. You probably follow a whole bunch of bots on Twitter. Some of my favourites include [@MagicRealismBot](https://twitter.com/MagicRealismBot), [@TheNiceBot](https://twitter.com/TheNiceBot) and [@LowPolyBot](https://twitter.com/LowPolyBot).

A good friend recently came up with a cracking idea for a Twitter Bot:

<blockquote class="twitter-tweet">
  <p><strong><a href="//twitter.com/jim_dickinson">Jim Dickinson (@jim_dickinson)</a></strong> <br>
  <a href="https://twitter.com/jim_dickinson/status/819973617043828736">January 13, 2017</a></p>

  <p>I want a bot that will reply “it’s you” whenever someone tweets “is it me or”</p>
</blockquote>

And another good friend reckoned I could make that very Twitterbot. He was wrong - for a total of approximately 3 days.

I spent the past Saturday creating it: knowing not a single thing about how to go about it. But thanks to some failed attempts at Python, a quick brush up on rudimentary Ruby, a Twitter gem, and some free cloud infrastructure, I created [@IsItMeBot](https://twitter.com/isitmebot).

Now, every hour, @IsItMeBot searches Twitter for the exact phrase "Is it me or" and if (when) it finds it, it tweets back a zinging one-liner. This is how @IsItMeBot was born, and how you can build your own bot.

## How to birth your very own bot

### Pre-requisites

If you want to create your own bot, this is what you'll need:

1. a [Twitter](https://twitter.com) account to tweet from (in this case, @IsItMeBot)
2. a [Heroku](https://heroku.com) account
3. a plain-text editor of your choice (I used Coda 2)
4. access to the command line / Terminal on your computer
5. [Ruby](https://www.ruby-lang.org/en/), [Bundler](http://bundler.io) and [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli) installed

> *Note that I use a Mac, not Windows. Some of the commands you'll need to run in the command line on Windows might be slightly different to the commands I'd run on a Mac.*

### Preparing the Twitter account

The first thing I did was [create a new Twitter account](https://twitter.com/signup). Make sure you sign up with an email address **and** a phone number. Your email address must be unique, but you can use the same mobile number on multiple accounts.

> **Top tip:** if you use Gmail, you can create an alias email address that forwards all email to your normal email address by adding `+youralias` before the `@gmail.com`. For example `john+twitterbot@gmail.com` will send email to `john@gmail.com`.

To access the Twitter API, you need a consumer key, consumer secret, access token and access token secret. You create these in the [Application Management](https://apps.twitter.com) section of Twitter's developer website.

Clicking 'Create New App' takes you to a short form where you give your app a name, a description, a website to link back to and a callback URL. The callback URL isn't necessary for this bot, so I left it blank, ticked the box to accept the conditions and submitted the form.

Now the app is created, the keys, tokens and secrets can be found in the 'Keys and Access Tokens' screen. They'll look something like: `rhIWCXREwLu0RswdLttqpXjAH`. (*Don't worry, that one isn't real*)

### Prepare your hosting environment

With the Twitter account created and API keys generated, I needed to create somewhere to put my bot once it was created.

Heroku is a Platform as a Service. It's free for small projects like this one.

I created a new app using the web interface (you can also use `heroku create` in the Terminal when you're in the project folder, but I prefer the website). I gave it a name (all in lower case) and choose a runtime region. I went for Europe, because it's closer to me.

Next I created a blank folder, navigated to it using the `cd` command in the Terminal and used these commands:

```
$ heroku login
```

This lets me authenticate my account with Heroku from the terminal.

```
$ git init
```

This lets me initialise a git repository in the folder. This tracks changes to my code and enables easy deployment of code to Heroku.

```
$ heroku git:remote -a your-app-name
```

This tells the computer to link this folder to a specific app on Heroku.

### Preparing the bot

This is a simple bot, but Ruby apps on Heroku need a few files to always be there to get things working.

First, I created a `Gemfile`. This tells the app which Ruby gems to install when the app is building and where they come from.

```ruby
source 'https://rubygems.org'
gem 'twitter'
```

Running the command `bundle install` will install the gems in the `Gemfile`.

Next, I created a `config.ru` file to tell Heroku that the app requires 2 Ruby gems to function. You do this with the command `require` followed by the gem name in single-quotes.

```ruby
require 'rubygems'
require 'twitter'
```

I found that Heroku didn't like it when I didn't have them (even though they were blank, so I created a `Rakefile` and a `Procfile`, for good measure.

Next comes the fun part - the actual bot!

### Build a bot

The final part of the build is to create a file called something like `twitterbot.rb`, and programme the bot. I've put the final code for the bot on [Github](https://github.com/johnpeart/IsItMeBot) so you can see it all together, but here are the major take-aways:

```ruby
client = Twitter::REST::Client.new do |config|
	config.consumer_key			= 		'YOUR_KEY'
	config.consumer_secret			= 		'YOUR_SECRET'
	config.access_token			= 		'YOUR-KEY'
	config.access_token_secret		= 		'YOUR-SECRET'
end
```

This code block is where I put the API keys I generated earlier. It logs you into the Twitter API and lets you do everything else!

```ruby
client.search( "%22is+it+me+or%22", result_type: "recent").take(1).each do |tweet|
	...
end
```

This code block tells @IsItMeBot to search Twitter for "is it me or" as an exact phrase (%22 are encoded double-quotes, and the + sign is the encoded space symbol), take the most recent tweet and then complete a specific set of commands.

```ruby
client.update("@#{tweet.user.screen_name} #{itsyou}", in_reply_to_status_id: tweet.id)
```

In this case, @IsItMeBot sends a reply to the tweet it finds, @replies (`@#{tweet.user.screen_name}`) and adds a response chosen at random from an array (`#{itsyou}`).

### Deploy the bot

Next, the bot has to be deployed. I did this through the terminal:

```
$ git add .
```

This adds all files in the directory to the git repository

```
$ git commit -am "a comment about what I did here"
```

This commits any changes to the code.

```
$ git push heroku master
```

This pushes the changes to Heroku and builds the app.

### Running the bot

The bot is so simple it can't run itself. To make sure it actually does some tweeting, you can do one of 2 things.

**If you only want the bot to tweet when you tell it to**, you can run the command `heroku run ruby twitterbot.rb`, and the bot will complete its commands and stop.

That's useful for testing, but not so useful for leaving a fully functioning bot out there. **If you want the bot to run itself**, you need to schedule it. I added the "Heroku Scheduler" addon to the app on the Heroku website to achieve this. Now making my bot run is as simple as telling it to `ruby twitterbot.rb` every 10 mins, every hour or every day, depending on your appetite.

## That's it!

That's all you need to create your own Twitterbot. You can find the full source files on [Github](https://github.com/johnpeart/IsItMeBot).