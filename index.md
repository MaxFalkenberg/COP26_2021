---
layout: default
permalink: /
title: Climate polarisation is growing on Twitter
head_js:
 - "https://d3js.org/d3.v4.min.js"
 - "https://d3js.org/d3-scale-chromatic.v1.min.js"
 - "/assets/js/force-graph.js"
body_js:
 - "/assets/data/retweets_150_cop26.js"
 - "/assets/data/retweets_500_cop26.js"
 - "/assets/data/retweets_1500_cop26.js"
 - "/assets/data/livegraph_150_cop27.js"
 - "/assets/data/livegraph_500_cop27.js"
 - "/assets/data/livegraph_1500_cop27.js"
 - "/assets/js/network.js"
 - "https://platform.twitter.com/widgets.js"
---

<p class="text-center">
The COP retweet network. Change network size using buttons on the left, and switch between COP26 data and live COP27 data.<br/>
Can you find the climate sceptic minority during COP26? Do they reappear during COP27? Click on a node to see their Twitter feed.
</p>
<p class="text-center">
<a href="/visualisations">EXPLORE OTHER VISUALISATIONS</a>
</p>

<div class="controls small">
    <input name="cop" value="26"  onclick="LoadNetwork(26, -1)"  type="radio"><label for="26" >COP26</label><br/>
    <input name="cop" value="27"  onclick="LoadNetwork(27, -1)"  type="radio" checked><label for="27" >COP27</label><br/>
  <br/>
  <div class="hide-sm">
    Network size:<br/>
    <input name="nodes" value="150"  onclick="LoadNetwork(-1, 150 )"  type="radio" checked><label for="150" >150</label><br/>
    <input name="nodes" value="500"  onclick="LoadNetwork(-1, 500 )"  type="radio"><label for="500" >500</label><br/>
    <input name="nodes" value="1500" onclick="LoadNetwork(-1, 1500)"  type="radio"><label for="1500">1500</label><br/>
  </div>
  <p class="small" id="updated"></p>
</div>

<div id="graph">
</div>

<div id="panel" class="hide hide-sm">
  <a id="exit" onclick="ClosePanel()">x</a>
  <h3 id="panel_title"></h3>
  <div id="panel_content" class="text-center"></div>
</div>

### About this visualisation

This work is based on research carried out in the past year on polarisation during COP26. To learn more, <a href="/research">read our paper, our soon in Nature Climate Change</a>.

Use the buttons on the left to change the size of the visualised network (not available on mobile) or switch between the network of interactions during COP26, or live data for COP27 from the previous 72 hours.

Each node corresponds to a Twitter account which tweeted, or retweeted, any tweet containing the term “cop26” (for the COP26 dataset) or "cop27" (for the COP27 dataset). An edge between two nodes indicates that one user retweeted a tweet originally authored by the other user. Tweet and user data was collected using the official <a href="https://developer.twitter.com/en/products/twitter-api/academic-research">Twitter API for academic use</a>. Data relating to protected and deleted accounts, and deleted tweets, are not accessible via the Twitter API and are not used to construct the network. This visualisation was created using Javascript D3 and the <a target="_blank" href="https://github.com/vasturiano/force-graph">force-graph</a> package.



