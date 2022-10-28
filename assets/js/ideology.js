"use strict";

var GetNetwork = (function(cop, community) {
    var data;
    if (cop == 27) {
        if (community == 'pro') data = cop27_150_pro;
        if (community == 'con') data = cop27_150_con;
    }
    else if (cop == 26) {
        if (community == 'pro') data = cop26_150_pro;
        if (community == 'con') data = cop26_150_con;
    }
    return data;
});

var GetTwitterLink = (function(handle) {
    return '<a href="https://twitter.com/' + handle.slice(1) +
        '" target="_blank">' + handle + '</a>';
});

var GetMostRetweeted = (function(handle, cop, community) {
    var data = GetNetwork(cop, community);

    var sorted_to = data['links']
        .filter(l => l.source['name'] === handle)
        .sort((l1, l2) => l2['value'] - l1['value']);
    if (sorted_to.length > 3) {
        sorted_to = sorted_to.slice(0,3);
    }
    sorted_to = sorted_to.map(l => {
        return { 'name': l.target['name'], 'val': l.value }
    });

    var sorted_from = data['links']
        .filter(l => l.target['name'] === handle)
        .sort((l1, l2) => l2['value'] - l1['value']);
    if (sorted_from.length > 3) {
        sorted_from = sorted_from.slice(0,3);
    }
    sorted_from = sorted_from.map(l => {
        return { 'name': l.source['name'], 'val': l.value }
    });

    return [ sorted_to, sorted_from ];
});

var ClosePanel = (function() {
    document.getElementById('panel').classList.add('hide');
});

var OpenPanel = (function(handle, cop, community) {
    var w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (w > 600) {
        var user = handle.slice(1)
        document.getElementById('panel_title').innerHTML = handle;

        // add embedded twitter feed for the selected user
        var panel = document.getElementById('panel_content');
        panel.innerHTML = '<a class="twitter-timeline" href="https://twitter.com/' + user + '"></a>';
        var h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 370;
        twttr.widgets.createTimeline({
                sourceType: "profile",
                screenName: user
            }, panel, {
                dnt: true,
                height: h,
                chrome: 'transparent'
            }
        );

        // add most retweeted by user and who retweeted user most
        panel.innerHTML += '<p>Top users retweeted by this account:<br/>';
        var links = GetMostRetweeted(handle, cop, community);
        links[0].forEach(l => panel.innerHTML += GetTwitterLink(l['name']) + ' (' + l['val'] + ' retweets)<br/>');
        panel.innerHTML += '</p><p>Top users who retweeted this account:<br/>';
        links[1].forEach(l => panel.innerHTML += GetTwitterLink(l['name']) + ' (' + l['val'] + ' retweets)<br/>');
        panel.innerHTML += '</p>';

        document.getElementById('panel').classList.remove('hide');
    }
    else {
        window.open("https://twitter.com/" + handle.slice(1));
    }

});



var LoadNetwork = (function(cop, element, community) {
    var data = GetNetwork(cop, community),
        scale = d3.scaleOrdinal(d3.schemeDark2);

    var width  = Math.max(document.documentElement.clientWidth  || 0, window.innerWidth  || 0) - 5,
        height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 140;
    width  = width > 1000 ? width * 0.49 : width - 30;
    height = width > 1000 ? height : height * 2 / 3;

    var elem = document.querySelector(element);
    elem.setAttribute("style", "width:"  + width  + "px");
    elem.setAttribute("style", "height:" + height + "px");
    let Graph = ForceGraph()(elem)
        .graphData(data)
        .backgroundColor("#ffffff")
        .zoom(0.3)
        .width(width)
        .height(height)
        // configure nodes and links
        .nodeColor(n => scale(n.group))
        .nodeVal(n => n.value * 1000.0)
        .linkCurvature(.2)
        // decorate the node
        .nodeCanvasObject((n, ctx, globalScale) => {
          var label = n.name;
          ctx.font =  (Math.pow(2, 1 + n.value * 20) * 10).toString() + 'px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 4;
          ctx.strokeText(label, n.x, n.y + 12);
          ctx.fillStyle = n.color;
          ctx.fillText(label, n.x, n.y + 12);
        })
        .nodeCanvasObjectMode(() => 'after')
        // node remains in position after dragging
        .onNodeDragEnd(node => {
          node.fx = node.x;
          node.fy = node.y;
        })
        // show panel on node click
        .onNodeClick(n => OpenPanel(n.name, cop, community))

      Graph.linkDirectionalParticles(l => l.value)
        .linkDirectionalParticleSpeed(l => l.value * 0.001)
        .linkDirectionalParticleWidth(3)

    Graph.d3Force("charge").strength(-100);
    Graph.d3VelocityDecay(0.5)

    ClosePanel();
});

LoadNetwork(27, '#graph_pro', 'pro');
LoadNetwork(27, '#graph_con', 'con');
