---
layout: default
permalink: /visualisation/news
title: Top COP27 news
head_js:
 - "/assets/js/news.js"
---


<p class="text-center">DISCLAIMER: News articles are extracted automatically and may not be from reliable sources.</p>

<div class="toggle text-center">
  <span class="green">Top news</span>
  <label class="switch"><input type="checkbox" onclick="Redraw(this)"><span class="slider"></span></label>
  <span class="red">Other views</span>
</div>


<div id="news-pro">
<h2 class="text-center">Top news articles featured in COP27 tweets</h2>
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
<h2 class="text-center">News articles from minority sources featured in COP27 tweets</h2>
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

### About this visualisation

To learn more about polarisation during COP, <a href="/research">read our research</a>.

News articles are selected by identifying the news urls which attract the largest number of retweets from the last 72 hours. Note, news sources are identified using a news media database with US and UK bias, hence the dominance of this news. Note that news on the "other views" tab may not be reliable and is shown to indicate some of the material shared by climate sceptics during COP27.
