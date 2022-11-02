---
layout: default
permalink: /visualisation/news
title: Most retweeted news articles
head_js:
 - "/assets/js/news.js"
---


Disclaimer: Below are links to most retweeted news articles. The title, excerpt and image are previews of the news article being linked to.

<div class="toggle text-center">
  <span class="green">Green group</span>
  <label class="switch"><input type="checkbox" onclick="Redraw(this)"><span class="slider"></span></label>
  <span class="red">Red group</span>
</div>


<div id="news-pro">
<h2 class="text-center">News tweeted by the majority</h2>
{% assign sorted = site.news | sort: 'rank' %}
{% for n in sorted %}
  {% if n.group == 'pro' %}
  <a class="col-1-of-3 text-center" href="{{ n.link }}" rel="noopener noreferrer" target="_blank">
  {% if n.image != 'None' %}
    <img src="{{ n.image }}">
    <h3>{{ n.title }}</h3>
    <h5>{{ n.publication }}</h5>
    <p>{{ n.excerpt }} ...</p>
  {% else %}
    <div class="preview-failed">
    <p>Preview failed, click to go directly to the news article.</p>
    </div>
  {% endif %}
  </a>
  {% endif %}
{% endfor %}
</div>

<div id="news-con" class="hide">
<h2 class="text-center">News tweeted by the minority</h2>
{% assign sorted = site.news | sort: 'rank' %}
{% for n in sorted %}
  {% if n.group == 'con' %}
  <a class="col-1-of-3 text-center" href="{{ n.link }}" rel="noopener noreferrer" target="_blank">
  {% if n.image != 'None' %}
    <img src="{{ n.image }}">
    <h3>{{ n.title }}</h3>
    <h5>{{ n.publication }}</h5>
    <p>{{ n.excerpt }} ...</p>
  {% else %}
    <div class="preview-failed">
    <p>Preview failed, click to go directly to the news article.</p>
    </div>
  {% endif %}
  </a>
  {% endif %}
{% endfor %}
</div>
