"use strict";

var GetNetwork = (function(cop, size) {
    var data;
    if (cop == 27) {
        if (size == 150)  data = live_150;
        if (size == 500)  data = live_500;
        if (size == 1500) data = live_1500;
    }
    if (cop == 26) {
        if (size == 150)  data = retweets_150;
        if (size == 500)  data = retweets_500;
        if (size == 1500) data = retweets_1500;
    }
    return data;
});


var LoadNetwork = (function(cop, size) {
    if (cop == -1) {
        var buttons = document.getElementsByName('cop');
        for (let b of buttons) {
            if (b.checked) cop = b.value;
        }
    }
    if (size == -1) {
        var buttons = document.getElementsByName('nodes');
        for (let b of buttons) {
            if (b.checked) size = b.value;
        }
    }

    console.log('Reloading network for cop' + cop + ' with ' + size + ' nodes');

    var data = GetNetwork(cop, size),
        scale = d3.scaleOrdinal(d3.schemeDark2);

    var width  = Math.max(document.documentElement.clientWidth  || 0, window.innerWidth  || 0) - 5,
        height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 140;
    width = width > 600 ? width * 0.8 : width - 30;

    var elem = document.querySelector('#graph');
    elem.setAttribute("style", "width:"  + width  + "px");
    elem.setAttribute("style", "height:" + height + "px");
    let Graph = ForceGraph()(elem)
        .graphData(data)
        .backgroundColor("#ffffff")
        .zoom(0.2)
        .width(width)
        .height(height)
        // configure nodes and links
        .nodeColor(n => scale(n.group))
        .nodeVal(n => n.value * 5000.0)
        .linkCurvature(.2)
        // decorate the node
        .nodeCanvasObject((n, ctx, globalScale) => {
          n.name = '';
          ctx.font =  (Math.pow(2, 1 + n.value * 20) * 10).toString() + 'px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 4;
          ctx.fillStyle = n.color;
        })
        .nodeCanvasObjectMode(() => 'after')
        // node remains in position after dragging
        .onNodeDragEnd(node => {
          node.fx = node.x;
          node.fy = node.y;
        })
        // show panel on node click
        //.onNodeClick(n => OpenPanel(n.name, cop, size))

    // remove node text

    if (size != 1500) {
      // particles travelling links indicate link direction
      Graph.linkDirectionalParticles(l => l.value)
        .linkDirectionalParticleSpeed(l => l.value * 0.001)
        .linkDirectionalParticleWidth(3)
    }

    // Spread nodes a little wider
    Graph.d3Force("charge").strength(-300);
    Graph.d3VelocityDecay(0.1)

    document.querySelector('#updated').innerHTML = "Last update:<br/>" + last_updated;
    ClosePanel();
});

LoadNetwork(27, 150);
