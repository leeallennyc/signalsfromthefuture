<template>
<div class='App'>
  <div id="map"><div class='mapboxgl-canvas'><el-button @click="enterHome" icon="el-icon-s-home" circle id="home-button"></el-button><el-button @click="enterMap" icon = "el-icon-s-data" circle id="map-button"></el-button></div></div>
<div id="story">
<div id="start">
<div class="mouse_scroll">
    <div class="mouse">
        <div class="wheel"></div>
    </div>
    <div>
        <span class="m_scroll_arrows unu"></span>
        <span class="m_scroll_arrows doi"></span>
        <span class="m_scroll_arrows trei"></span>
    </div>
</div>
</div>
</div>
<div id="countyClusters">
    <el-card>
    <el-row>
    <el-col :span="12"><div class="grid-content bg-purple"><h3>U.S. County Clusters</h3><p>There are <strong>10</strong> main clusters which account for <strong>86%</strong> of all the AI patents filed in our sample. We look at the latitude and longitude of the companies who are granted the patents, the concentration of patents within these regional clusters which contain the term "machine learning" in the abstract to better understand how these patents are clustering throughout the U.S.</p><p>Another variable considered was Personal Income by County Area for the years 2017, 2018, and 2019 -- in addition to the percentage change from the previous year. We found a positive weak correlation in our sample between numbers of patents per county and personal income expressed as +0.34.</p><p>Interestingly we also found a regionalism toward certain types of sectors and AI techniques per region.</p>
    <el-button @click="enterMap" icon = "el-icon-s-data" circle id="insights-button">Insights</el-button>
    </div>
    </el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"><img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FNumber_of_patents_granted-01.png?v=1620071696600"></div></el-col>
    </el-row>
    </el-card>
</div>
</div>
</template>

<script>
// import * as d3 from "d3";
import mapboxgl from "mapbox-gl";
import {config} from "../config/mapbox-config.js";
import "intersection-observer";
import scrollama from "scrollama";
// import BaseMap from "../components/InteractiveMap.vue";


const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
    url: url + suffix
    }
}
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}
// console.log(alignments);
function getLayerPaintType(layer, map) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer, map) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

export default {
  name: 'App', 
  data() {
    return {
      width: 400,
      height: 500,
      mb: null
    }
  },
  mounted() {
    // https://dev.to/hmintoh/how-to-mapbox-with-vue-js-2a34

    var story = document.getElementById('story');
    var features = document.createElement('div');
    features.setAttribute('id', 'features');
    var header = document.createElement('div');
    if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

    config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});
  story.appendChild(features);
  var footer = document.createElement('div');
  if (config.footer) {
      var footerText = document.createElement('p');
      footerText.innerHTML = config.footer;
      footer.appendChild(footerText);
  }
  if (footer.innerText.length > 0) {
      footer.classList.add(config.theme);
      footer.setAttribute('id', 'footer');
      story.appendChild(footer);
  }
    mapboxgl.accessToken = config.accessToken;
    this.mb = new mapboxgl.Map({
      container: 'map',
      style: config.style,
      center: config.chapters[0].location.center,
      zoom: config.chapters[0].location.zoom,
      bearing: config.chapters[0].location.bearing,
      pitch: config.chapters[0].location.pitch,
      interactive: false,
      transformRequest: transformRequest
      });
    // this.showMarkers(config, this.mb)
    var scroller = scrollama();
    // console.log(window);
    const that = this;
    this.mb.on("load", function() {
    if (config.use3dTerrain) {
        that.mb.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        that.mb.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        // add a sky layer that will show when the map is highly pitched
        that.mb.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    }
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        // console.log("TESTING", that.mb,chapter);
        response.element.classList.add('active');
        that.mb[chapter.mapAnimation || 'flyTo'](chapter.location);
        // if (config.showMarkers) {
        //     marker.setLngLat(chapter.location.center);
        // }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            that.mb.once('moveend', function() {
                const rotateNumber = that.mb.getBearing();
                that.mb.rotateTo(rotateNumber + 90, {
                    duration: 24000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });
  })
  // setup resize event
  window.addEventListener('resize', scroller.resize)
},
  computed: {
    // projection() {
    //   return d3.geoEqualEarth()
    //     .center([18, 4])
    //     .scale(320)
    //     .translate([this.width/2, this.height/2]);
    // },
    // geoPath() {
    //   return d3.geoPath(this.projection);
    // }
  },
  methods: {
    enterHome(){
      this.$router.push("/")
    },
    enterMap(){
    this.$router.push("/interactive")
    },
  },
    // showMarkers(config, map) {
    //     if (config.showMarkers){
    //     var marker = new mapboxgl.Marker({ color: config.markerColor });
    //     marker.setLngLat(config.chapters[0].location.center).addTo(map);
    //     }
    // }
}

</script>

<style>
body {
    margin:0;
    padding:0;
    font-family: sans-serif;
}
a, a:hover, a:visited {
    color: gray;
}
#map {
    top:0;
    width: 100vw;
    height: 100vh;
    position: fixed;
}
#header {
    margin: auto;
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 5;
}
#header h1, #header h2, #header p{
    margin: 0;
    padding: 2vh 2vw;
    text-align: center;
}
#footer {
    width: 100%;
    min-height: 5vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    text-align: center;
    font-family: Futura, Verdana, Geneva, Tahoma, sans-serif;
    line-height: 25px;
    font-size: 1.4em;
    position: relative;
    z-index: 5;
}
#features {
    padding-top: 10vh;
    padding-bottom: 10vh;
}
.hidden {
    visibility: hidden;
}
.centered {
    width: 75vw;
    margin: 0 auto;
}
.lefty {
    width: 33vw;
    margin-left: 5vw;
}
.righty {
    width: 33vw;
    margin-left: 62vw;
}
.fully {
    width: 100%;
    margin: auto;
}
.light {
    color: #444;
    background-color: #fafafa;
}
.dark {
    color: #fafafa;
    background-color: black;
    font-family: Futura, Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    text-align: left;
}
.step {
    padding-bottom: 60vh;
    /* margin-bottom: 10vh; */
    opacity: 0.10;
}
.step.active {
    opacity: 0.85;
}
.step div {
    padding:  25px 50px;
    line-height: 25px;
    font-size: 16px;
}
.step img {
    width: 100%;
    height: auto;
}

.el-button {
    text-align: center;
}

.mapboxgl-canvas #home-button {
    position: fixed;
    z-index: 9999;
    width: 40px;
    height: 50px;
    top: 10%;
    left: 10px;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: black;
    font-size: 20px;
    border-color: black;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
}

.mapboxgl-canvas #map-button {
    position: fixed;
    z-index: 9999;
    width: 40px;
    height: 50px;
    top: 17%;
    left: 10px;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: black;
    font-size: 20px;
    border-color: black;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
}

.el-card__body {
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
}

.el-icon-s-home {
    color: gray;
}
.el-icon-s-home:hover{
    color: lightgray;
}

.el-icon-location-information {
    color: gray;
}
.el-icon-location-information:hover {
    color: lightgrey;
}

#map-button{
    margin-left: 0px;
}

#insights-button{
    position: flex;
    width: 100px;
    height: 50px;
    margin-left: 50px;
    margin-top: 30px;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: white;
    font-size: 20px;
    padding: 0px;
    border-color: black;
    cursor: pointer;
    border-radius: 5px;

}

.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 2px;
}

.grid-content {
    border-radius: 2px;
    min-width: 50vw;
    min-height: 36px;
    margin-left: 45px;
    margin-right: 40px;
}

.bg-purple {
    background: white;
    text-align: left;
}
.bg-purple-light {
    background: white;
}

@media (max-width: 750px) {
    .centered, .lefty, .righty, .fully {
        width: 90vw;
        margin: 0 auto;
    }
}
/* Fix issue on mobile browser where scroll breaks  */
.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan, 
.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas {
    touch-action: unset;
}

#start{
    width: 100vw;
    height: 1800px;
    background-color: white;
}

#countyClusters {
    width: 100vw;
    height: auto;
    background-color: white;
    opacity: 1;
    position: absolute;
    z-index: 9999;
}


/* body {
	background: #333;
} */


*, *:before, *:after {
  -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
 }


.mouse_scroll {
	display: block;
	margin: 0 auto;
	width: 24px;
	height: 100px;
	margin-top: 600px;
}


.m_scroll_arrows
{
  display: block;
  width: 5px;
  height: 5px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
   
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  margin: 0 0 3px 4px;
  
  width: 16px;
  height: 16px;
}


.unu
{
  margin-top: 1px;
}

.unu, .doi, .trei
{
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  
}

.unu
{
  -webkit-animation-delay: .1s;
  -moz-animation-delay: .1s;
  -webkit-animation-direction: alternate;
  
  animation-direction: alternate;
  animation-delay: alternate;
}

.doi
{
  -webkit-animation-delay: .2s;
  -moz-animation-delay: .2s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .2s;
  animation-direction: alternate;
  
  margin-top: -6px;
}

.trei
{
  -webkit-animation-delay: .3s;
  -moz-animation-delay: .3s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .3s;
  animation-direction: alternate;
  
  
  margin-top: -6px;
}

.mouse {
  height: 42px;
  width: 24px;
  border-radius: 14px;
  transform: none;
  border: 2px solid white;
  top: 200px;
}

.wheel {
  height: 5px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: white;
  position: relative;
  
  height: 4px;
  width: 4px;
  border: 2px solid #fff;
  -webkit-border-radius: 8px;
          border-radius: 8px;
}

.wheel {
  -webkit-animation: mouse-wheel 0.6s linear infinite;
  -moz-animation: mouse-wheel 0.6s linear infinite;
  animation: mouse-wheel 0.6s linear infinite;
}

@-webkit-keyframes mouse-wheel{
   0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
}
@-moz-keyframes mouse-wheel {
  0% { top: 1px; }
  25% { top: 2px; }
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
}
@-o-keyframes mouse-wheel {

   0% { top: 1px; }
  25% { top: 2px; }
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
}
@keyframes mouse-wheel {

   0% { top: 1px; }
  25% { top: 2px; }
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
}

@-webkit-keyframes mouse-scroll {

  0%   { opacity: 0;}
  50%  { opacity: .5;}
  100% { opacity: 1;}
}
@-moz-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@-o-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}



</style>

