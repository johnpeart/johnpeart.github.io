---
layout: page
title: Stats
permalink: /stats/
---

{% assign years = "2020, 2021, 2022, 2023, 2024" | split: ", " | reverse %}

{% for year in years %}
{% assign year = year | date: "%Y" %}
<h2>{{ year }}</h2>
<section class="stats">
{% assign collections = "blogpost, weeknotes, now, note, list, photo, reply, share, music, manuals" | split: ", " %}
{% for collection in collections %}
	{% assign count = 0 %}
	{% for item in site[collection] %}
		{% assign postYear = item.date | date: "%Y" %}
		{% if postYear == year %}
			{% assign count = count | plus: 1 %}
		{% endif %}
	{% endfor %}
	{% if count > 0 %}
	<dl class="stats--stat">
		<dt class="stats--stat--type">{{ collection }}</dt>
		<dd class="stats--stat--count">{{ count }}</dd>
	</dl>
	{% endif %}
{% endfor %}
</section>
{% endfor %}