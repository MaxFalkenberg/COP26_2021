---
layout: default
title: Community User Networks
permalink: /visualisation/user_net
head_js:
    - "https://d3js.org/d3.v4.min.js"
    - "https://d3js.org/d3-scale-chromatic.v1.min.js"
    - "/assets/js/force-graph.js"
body_js:
    - "/assets/data/ego_network.js"
    - "/assets/js/communities.js"
---
<div class="text-center">
<p>The user network shows the retweets involving a specific user and their retweeters from COP26.<br/>
Search for a user by typing <a>@username</a> into the search box. Need inspiration? Hit <a>I'm feeling lucky</a>.</p>

<input type="text" id="username" value="@username">
<button id="search" onclick="UserSearch(0)" >Search</button>
<button if="lucky"  onclick="LuckySearch(0)">I'm feeling lucky</button>
<p id="message"></p>
</div>

<div id="graph" class="center"></div>

### About this visualisation

The network visualises the structure of publicly visible retweet interactions for a single user and their direct connections. Only users with more than 10,000 followers are shown.

Each node corresponds to a Twitter account which tweeted, or retweeted, any tweet containing the term “cop26”. An edge between two nodes indicates that one user retweeted a tweet originally authored by the other user. 

Tweet and user data was collected using the official <a href="https://developer.twitter.com/en/products/twitter-api/academic-research">Twitter API for academic use</a>. Data relating to protected and deleted accounts, and deleted tweets are not accessible via the Twitter API and are not used to construct the network.

This visualisation was created using Javascript D3 and the <a target="_blank" href="https://github.com/vasturiano/force-graph">force-graph</a> package.


