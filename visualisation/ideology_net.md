---
layout: default
permalink: /visualisation/ideology_net
title: Retweet Network
head_js:
 - "https://d3js.org/d3.v4.min.js"
 - "https://d3js.org/d3-scale-chromatic.v1.min.js"
 - "/assets/js/force-graph.js"
body_js:
 - "/assets/data/livegraph_150_cop26_con.js"
 - "/assets/data/livegraph_150_cop26_pro.js"
 - "/assets/data/livegraph_150_cop27_con.js"
 - "/assets/data/livegraph_150_cop27_pro.js"
 - "/assets/js/ideology.js"
 - "https://platform.twitter.com/widgets.js"
---

<div class="controls small">
  <br/>
  <div class="hide-sm">
    <input name="size" value="26"  onclick="LoadNetwork(26, '#graph_pro', 'pro');LoadNetwork(26, '#graph_con', 'con')"  type="radio"><label for="26" >COP26</label><br/>
    <input name="size" value="27"  onclick="LoadNetwork(27, '#graph_pro', 'pro');LoadNetwork(27, '#graph_con', 'con')"  type="radio" checked><label for="27" >COP27</label><br/>
  </div>
  <p class="small" id="updated"></p>
</div>

<div class="col-2">
  <div class="col">
    <h2>Pro-climate Majority</h2>
    <div id="graph_pro"></div>
<p class="text-center">
COP27 retweets by users from the COP26 pro-climate majority.
</p>  
</div>
  <div class="col">
    <h2>Opposed minority</h2>
    <div id="graph_con"></div>
<p class="text-center">
COP27 retweets by users from the COP26 sceptical majority.
</p>   
</div>
</div>

<div id="panel" class="hide hide-sm">
  <a id="exit" onclick="ClosePanel()">x</a>
  <h3 id="panel_title"></h3>
  <div id="panel_content" class="text-center"></div>
</div>

### About this visualisation

Disclaimer: Minority and Majority groups were identified from COP26 Twitter data using semi-automated methods. These methods are subject to error in some individual cases. To learn more, <a href="/research">read our paper</a> where methods are decribed in detail.

To learn more about polarisation during COP, <a href="/research">read our research</a>.

Each node corresponds to a Twitter account which tweeted, or retweeted, any tweet containing the term “cop26”. An edge between two nodes indicates that one user retweeted a tweet originally authored by the other user. Such a connection is generally considered to indicate the retweeter endorsing, or expressing an interest in, the originally authored tweet’s message (despite the common disclaimer that retweets are not endorsements). Quote tweets are excluded since these are more likely to express a contrasting opinion to the original tweet.

Tweet and user data was collected using the official <a href="https://developer.twitter.com/en/products/twitter-api/academic-research">Twitter API for academic use</a>. Data relating to protected and deleted accounts, and deleted tweets, are not accessible via the Twitter API and are not used to construct the network.

This visualisation was created using Javascript D3 and the <a target="_blank" href="https://github.com/vasturiano/force-graph">force-graph</a> package.



