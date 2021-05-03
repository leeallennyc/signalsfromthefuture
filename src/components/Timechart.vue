<template>
    <h2>AI Patent By County</h2>
    <div style="display: table;">
        <div class="chart" id="chart"></div>
        <div class="legendContainer" id="legendContainer">
        <div class="legendTitle" id="legendTitle">
        </div>
        <div class="legend" id="legend"></div>
        </div>
    </div>
    <div class="info" id="info"></div>
</template>

<script>
import * as d3 from "d3";
import * as circular from "../config/circularHeatChart.js";


 export default {
    name: 'Timechart',
    props: {
        text: String,
        color: String
    },
    methods: {
        
    }
 }
</script>

<style scoped>
body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.chart {
	float: left;
	display: table-cell;
}
.chart path {
	stroke: #777;
	stroke-width: 0.1px;
}
.chart .labels {
	fill: #aaa;
	letter-spacing: -1px;
}
.chart .labels.segment {
	font-size: 10px;
}
.legendContainer {
	margin-left: 20px;
	padding-left: 20px;
	display: table-cell;
	vertical-align: middle;
}
.legendTitle {
    font-weight: bold;
	padding-bottom: 5px;
}
.legend svg {
	padding: 6px;
    font-size: 12px;
}

.legendContainer {
	height: 100px;
}
.legend svg {
	width: 600px;
	height: 200px;
}
#chart svg {
	height: 600px;
	width: 600px;
}
</style>










<script src="d3.min.js" type="text/JavaScript"></script>
<script src="circularHeatChart.js" type="text/JavaScript"></script>

<script>
var segHeight=20;
var segCnt=12;
var bandCnt=-7;
var segLabels=["January","February","March","April","May","June","July","August","September","October","November","December"];
var bandLabels=["2016","2017","2018","2019","2020"];
var innerRadius=50;
var edata=[8,7,20,16,15,7,7,11,10,6,18,10,15,9,11,16,14,21,15,22,15,23,9,8,15,12,13,12,21,20,23,35,21,35,28,24,36,29,31,54,42,52,50,59,69,91,74,65,59,63,98,85,76,107,82,97,116,122,108,112];
var startColor="#ffffff";
var endColor="#ff4c00";
var noDataColor="#f0f0f0";
var chart = circularHeatChart()
	.range([startColor,endColor])
	.nullColor(noDataColor)
	.segmentHeight(segHeight)
	.innerRadius(innerRadius)
	.numSegments(segCnt)
	.segmentLabels(segLabels)
	.radialLabels(bandLabels)
	.legDivId("legend")
	.legendSettings({width: 600, height: 200, legBlockWidth: 30})
	.data(edata)
;
d3.select('#chart')
	.selectAll('svg')
	.data([edata])
	.enter()
	.append('svg')
	.call(chart);
d3.selectAll("#chart path").on('mouseover', function() {
	var d = d3.select(this).data();
	d3.select("#info").text('Incident count: ' + d);
});
d3.select("#legendTitle").html("Legend");

</script>


