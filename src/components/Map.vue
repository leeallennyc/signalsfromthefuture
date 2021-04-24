<template>
<div class='App'>
  <div id="map"><div class='mapboxgl-canvas'><el-button @click="enterHome" icon="el-icon-caret-left" circle id="home-button"></el-button></div></div>
  <div id="story"></div>
</div>
</template>

<script>
// import * as d3 from "d3";
import mapboxgl from "mapbox-gl";
import {config} from "../config/mapbox-config.js";
import "intersection-observer";
import scrollama from "scrollama";


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
    }
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
    color: #0071bc;
}
#map {
    top:0;
    height: 100vh;
    width: 100vw;
    position: fixed;
}
#header {
    margin: auto;
    width: 100%;
    height: 100vw;
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
    line-height: 25px;
    font-size: 13px;
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
.mapboxgl-canvas #home-button {
    position: fixed;
    width: 40px;
    height: 100px;
    top: 50%;
    left: 2%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: black;
    font-size: 20px;
    padding: 0px;
    border-color:orange;
    cursor: pointer;
    border-radius: 5px;
    z-index: 9999;
}

.el-icon-caret-left:before {
    content: "";
    color: orange;
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



</style>

