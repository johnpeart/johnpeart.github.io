---
layout: menu
title: Menu

header:
  title: false
footer: 
  social: false 

permalink: /menu/

list:
- name: "Me"
  items:
    - name: "About"
      label: "Me"
      link:
        internal: /about/
    - name: "Ideas"
      label: "💡"
      link:
        internal: /ideas/
    - name: "Now"
      label: "What’s new?"
      link:
        internal: /now/
- name: "My blog"
  items:
    - name: "All posts"
      collection: "allPosts"
      link:
        internal: /all/
    - name: "Writing"
      collection: "blogpost"
      link:
        internal: /blogposts/
    - name: "Weeknotes"
      collection: "weeknote"
      link:
        internal: /weeknotes/
    - name: "Notes"
      collection: "note"
      link:
        internal: /notes/
    - name: "Lists"
      collection: "list"
      link:
        internal: /lists/
    - name: "Photos"
      collection: "photo"
      link:
        internal: /photos/
    - name: "Music"
      collection: "music"
      link:
        internal: /music/
    - name: "Games"
      collection: "game"
      link:
        internal: /games/
    - name: "Replies"
      collection: "reply"
      link:
        internal: /replies/
    - name: "Reposts"
      collection: "share"
      link:
        internal: /reposts/
- name: "Subscribe"
  items:
    - name: "RSS feeds"
      label: "10 feeds"
      link:
        internal: /feeds/
- name: "Other"
  items:
    - name: "Goals"
      label: "🎯"
      link:
        internal: /goals/
    - name: "Wishlist"
      label: "🛒"
      link:
        internal: /wishlist/
- name: "Elsewhere"
  items:
    - name: "Mastodon"
      label: "@johnpeart@mastodon.social"
      link:
        external: https://mastodon.social/@johnpeart
    - name: "Bluesky"
      label: "@johnpe.art"
      link:
        external: https://bsky.app/profile/johnpe.art
    - name: "LinkedIn"
      label: "@jrpeart"
      link:
        external: https://linkedin.com/in/jrpeart
    - name: "Github"
      label: "@johnpeart"
      link:
        external: https://github.com/johnpeart
---