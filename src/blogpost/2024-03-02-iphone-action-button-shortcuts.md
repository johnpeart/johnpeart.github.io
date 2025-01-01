---
date: 2024-03-02T16:00:00+00:00
title: "Push the button"
author: "John Peart"
excerpt: "Futzing with Shortcuts to make more beautiful and functional Action Button menus on iPhones 15 Pro and Pro Max."
image: /posts/2024/03/02/push-the-button/my-action-button-menu.jpg
posse:
- https://mastodon.social/@johnpeart/112027377430434866
---

I recently upgraded my phone. A less exciting activity than it used to be, admittedly, but this new *iPhone 15 Pro Max* comes with a new button! The *Action Button*. I've been playing around with [Apple's *Shortcuts* app](https://apps.apple.com/gb/app/shortcuts/id1462947752), to see how useful I can make it.

## A fast track to your favourite features

The new Action Button replaces the ring/silent toggle switch from previous iPhone generations. Apple describes it as a "a fast track to your favourite feature". Press and hold the Action Button for a few seconds and it will trigger an assigned *action*.

You can assign it to trigger one of 9 different functions: Silent Mode[^1], Focus[^2], Camera[^3], Torch[^4], Voice Memo[^5], Translate[^6], Magnifier[^7], Accessibility[^8], or Shortcut.

[^1]: **Silent Mode.** Just like the old switch, this toggles 'Ring' and 'Silent' modes. Instead of the satisfying thunk of a switch, you now you get distinctive, haptic feedback for each mode.
[^2]: **Focus.** To trigger a specific Focus mode, like Do Not Disturb.
[^3]: **Camera.** To open the Camera app, and in that app, take a photo.
[^4]: **Torch.** For blinding others whilst draining your battery accidentally fast. Seriously, go walk around your local area long enough and I guarantee you'll spot some numpty that's triggered their phone torch and not realised, and is walking around flashing it in everyone's faces.
[^5]: **Voice Memo.** If you're a Gen-X or Gen-Z type and have an alarming aversion to keyboards.
[^6]: **Translate.** For communicating in with those from other countries or, I suppose, [species](https://youtu.be/tFMo3UJ4B4g).
[^7]: **Magnifier.** For zooming in on things in the real world, or for cosplaying as a modern day [Jessica Fletcher](https://en.wikipedia.org/wiki/Jessica_Fletcher).
[^8]: **Accessibility**. Toggling any accessibility feature that is usually buried in the Settings app.

## A way to trigger almost anything

That last one – Shortcut – is the special sauce. 

A Shortcut is a customisable set of actions that you can programme with low or no coding. They can be simple – opening an app, or locking the rotation of the device – or more complex – like displaying a customised weather forecast, handing off music to a set of speakers in your living room and kitchen.

A Shortcut can do almost anything you might need on your device[^9]. That means you can have your Action Button trigger everything you might actually want: a *lot* more than just toggling Silent Mode.

[^9]: I say *almost* anything because there are some glaring and frustrating omissions in the baked in Shortcut actions. For example, using a Shortcut I can toggle Silent Mode on or off; but I can't *detect* whether silent mode is currently on or off. That means I can't create `if` statements like I might in a 'real' coding environment. App developers have stepped in to fill some of these gaps, but I’d rather not bloat my device with loads of helper apps.

## Ah, another menu. Revolutionary.

By default, you can make the Action Button run a single Shortcut or open a folder of Shortcuts. 

It felt like a waste of a *whole-new button* to have it do *just one thing*, so I've been experimenting with the latter.

I've set up new Shortcuts for pausing my ad-blocker, turning on or off my Apple TV, toggling mobile data and, yes, activating Silent mode. I quickly discovered that I had more Shortcuts I wanted to include in the list than the default Apple menu would let me have.

<figure>
	<img src="/assets/images/posts/2024/03/02/push-the-button/default-action-menu.jpg" alt="A screenshot of the default Shortcuts menu, showing 8 shortcuts">
	<figcaption>
		By default, the Shortcuts app will display up to 8 Shortcuts from an assigned folder. But I have more than 8 shortcuts!
	</figcaption>
</figure>


But I was not deterred by Apple's refusal to accept that numbers do, in fact, go past 8. I built my own menu instead. 

Plenty of people have been doing this online – just look at Reddit – but they've been using the built in *Choose from Menu* option. This works fine, and I did that too at first. 

But the longer the list gets, the harder it is to distinguish between the options at a glance. I could do what others had done and add some emoji, but I wanted something that had a bit more visual *pizzazz*.

## More beautiful menus by hacking contact cards

I've created a menu based on a hack I found on Reddit. It's actually two Shortcuts – one to create the menu, and one to show the menu – to speed up how fast the menu can be shown.

I've used `.vcf` files – the format for saving contacts to your phone's address book – to create the menu items. It basically works the same as any other Shortcuts menu; but they retain the iconography, making them more glanceable (for me, at least).

<figure>
	<img src="/assets/images/posts/2024/03/02/push-the-button/my-action-button-menu.jpg" alt="A screenshot of my 'Actions' Menu, showing 10 shortcuts">
	<figcaption>
		My custom menu shows more than 8 Shortcuts, and you don't lose the icons as you would with a standard Shortcuts menu.
	</figcaption>
</figure>

To create the menu, I first set up a folder of Shortcuts and populated it with everything I wanted to display in the menu. Each menu item triggers its own, unique Shortcut; so you need a unique Shortcut for each item.

When all the Shortcuts are made and in the folder, I run the "Save the Action Button Menu" Shortcut. This creates and saves a `.vcf` file to my iCloud Drive. Saving it to iCloud Drive is enables the menu to be synced across my devices. 

When the Action Button is pressed, it runs a completely separate Shortcut called, simply, "Actions". This Shortcut gets the `.vcf` file and displays it as a menu.

### More complex, but faster

I could have combined these two things into one Shortcut; grabbing the Shortcuts from their folder, generating the menu on the fly, and then displaying it. Doing it that way actually enables mI found this was very slow because  it had to generate the icons and each icon took a beat to process. 

Separating out the creation of the menu from the running of the menu means there's almost no delay in pressing the hardware Action Button and seeing the menu appear on screen.

## Download the Shortcuts

If you want to use this set up, the two Shortcuts are available to download below.

<figure class="app-sheet">
	<dl class="dl--app">
		<img class="app-icon large" src="/assets/images/posts/2024/03/02/push-the-button/command.png" alt="Command (Four leaf clover) symbol on a green background">
		<dt class="app-name-label sr-only">Shortcut name</dt>
		<dd class="app-name">Save the Action Button Menu</dd>
		<dt class="app-description-label sr-only">Description</dt>
		<dd class="app-description">Converts multiple Shortcuts to a .vcf file</dd>
		<dt class="app-first-label">Download</dt>
		<dd class="app-first"><a href="https://www.icloud.com/shortcuts/ac610efca3c54a3b9792f9b7f1c5b871" title="Download the Save the Action Button Menu Shortcut from iCloud.com">iCloud</a></dd>
	</dl>
</figure>

<figure class="app-sheet">
	<dl class="dl--app">
		<img class="app-icon large" src="/assets/images/posts/2024/03/02/push-the-button/command.png" alt="Command (Four leaf clover) symbol on a green background">
		<dt class="app-name-label sr-only">Shortcut name</dt>
		<dd class="app-name">Actions</dd>
		<dt class="app-description-label sr-only">Description</dt>
		<dd class="app-description">A Shortcut for displaying a .vcf file as a menu</dd>
		<dt class="app-first-label">Download</dt>
		<dd class="app-first"><a href="https://www.icloud.com/shortcuts/e50892dd936045b3864320be67ae0b0b" title="Download the Actions Shortcut from iCloud.com">iCloud</a></dd>
	</dl>
</figure>