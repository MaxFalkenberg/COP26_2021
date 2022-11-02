---
layout: default
permalink: /visualisation/news
title: Most retweeted news articles
head_js:
 - "/assets/js/news.js"
---


Disclaimer: Below are links to most retweeted news articles. The title, excerpt and image are previews of the news article being linked to.

<div class="news-pro">
{% assign sorted = site.news | sort: 'rank' %}
{% for n in sorted %}
  {% if n.group == 'pro' %}
    <a class="col-1-of-3" href="{{ n.url }}" target="_blank">
    <img src="{{ n.image }}">
    <h3>{{ n.title }}</h3>
    <p>{{ n.excerpt }}</p>
    </a>
  {% endif %}
{% endfor %}
</div>

<div class="news-con">
{% assign sorted = site.news | sort: 'rank' %}
{% for n in sorted %}
  {% if n.group == 'con' %}
    <a class="col-1-of-3" href="{{ n.url }}" target="_blank">
    <img src="{{ n.image }}">
    <h3>{{ n.title }}</h3>
    <p>{{ n.excerpt }}</p>
    </a>
  {% endif %}
{% endfor %}
</div>
