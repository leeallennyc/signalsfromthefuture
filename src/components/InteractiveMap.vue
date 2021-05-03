<template>
   <div class='map-overlay' id='features'><h2>AI PATENT CLUSTERS</h2><div id='pd'>
  </div></div>
  <div class='map-overlay' id='legend'></div>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>SANTA CLARA COUNTY, CALIFORNIA</h2>
      <div id= "chart"><p>The Cluster is made up of Alameda, San Francisco, San Mateo, and Santa Clara. Marin and Contra Costa Counties are to the north.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FSanta_Clara_Counties.png?v=1619995161141">
      </div>
      </el-card>
    <div id="mapContainer">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>LOS ANGELES COUNTY, CALIFORNIA</h2>
      <div id= "chart"><p>The Cluster is made up of Orange, San Diego, and Los Angeles Counties. Santa Barbara and Monterey are the northwest.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FLosAngeles_Counties.png?v=1619995248246">
      </div></el-card>
    <div id="mapContainer2">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>COOK COUNTY, ILLINOIS</h2>
      <div id= "chart"><p>Cook County Illinois is</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FIllinois_Wisconsin_Counties.png?v=1619995271555">
      </div></el-card>
    <div id="mapContainer3">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>KING COUNTY, WASHINGTON</h2>
      <div id= "chart"><p>King County Washington is the home of Microsoft Licensing, LLC - a holding company of Microsoft.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FWashington_Counties.png?v=1619995277625">
      </div></el-card>
    <div id="mapContainer4">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>TRAVIS & HARRIS COUNTY, TEXAS</h2>
      <div id= "chart"><p>Travis/William Counties, and Harris/Fort Bend make up two microclusters, with a third to the north made up Collin, Dallas, and Tarrant counties.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FTexas_Counties.png?v=1619995233117">
      </div></el-card>
    <div id="mapContainer5">{{BaseMap}}</div>
  </el-card>
  
  <el-card>
    <el-card><div id="innerContainer">
      <h2>WESTCHESTER COUNTY, NEW YORK </h2>
      <div id= "chart"><p>Westchester and Queens County create a microculster within a megacluster of the East Coast. AI Patent activity connects 17 Counties in this region from Western Massachusetts to Ocean County New Jersey.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FEastcoast_cluster_Counties.png?v=1619995300290">
      </div></el-card>
    <div id="mapContainer6">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>MIDDLESEX COUNTY, MASSACHUSETTS </h2>
      <div id= "chart">The Middlesex County Cluster stretches from Southern New Hampshire to the Southeastern coast of Massachusetts</div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FMassachusetts_Counties.png?v=1619995259679">
      </div></el-card>
    <div id="mapContainer7">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>FAIRFAX, MARYLAND </h2>
      <div id= "chart">Here is a chart</div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FMaryland_Counties.png?v=1619995289989">
      </div></el-card>
    <div id="mapContainer8">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>FULTON COUNTY, GEORGIA </h2>
      <div id= "chart">Here is a chart</div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FGeorgia_counties.png?v=1619995244912">
      </div></el-card>
    <div id="mapContainer9">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>WASHOE COUNTY, NEVADA </h2>
      <div id= "chart">Here is a chart</div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FNevada_Counties.png?v=1619995241476">
      </div></el-card>
    <div id="mapContainer10">{{BaseMap}}</div>
  </el-card>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { config2 } from "../config/mapbox2-config.js";

export default {
  name: 'BaseMap',
  data() {
    return {
      accessToken: config2.accessToken,
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;
      this.mb = new mapboxgl.Map({
      container: "mapContainer",
      style: config2.style,
      center: [-121.9, 37.4],
      zoom: 8.1,
      pitch: 60,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });

    this.mb = new mapboxgl.Map({
      container: "mapContainer2",
      style: config2.style,
      center: [-117.24, 33.5],
      zoom: 7.0,
      pitch: 35,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer3",
      style: config2.style,
      center: [-87.70, 41.8],
      zoom: 8,
      pitch: 60,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer4",
      style: config2.style,
      center: [-121.9, 47.5],
      zoom: 7.75,
      pitch: 60,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer5",
      style: config2.style,
      center: [-96.5, 30.5],
      zoom: 6.75,
      pitch: 60,
      bearing: 0
    });
    this.mb.on('load', ()=> {  
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer6",
      style: config2.style,
      center: [-73.7, 41.05],
      zoom: 7,
      pitch: 35,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer7",
      style: config2.style,
      center: [-71.1, 42.37],
      zoom: 7.5,
      pitch: 35,
      bearing: 0
    });
    this.mb.on('load', ()=> { 
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer8",
      style: config2.style,
      center: [-77.3, 38.84],
      zoom: 8,
      pitch: 35,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer9",
      style: config2.style,
      center: [-84.4, 33.74],
      zoom: 8,
      pitch: 35,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });
    this.mb = new mapboxgl.Map({
      container: "mapContainer10",
      style: config2.style,
      center: [-119.76, 39.7],
      zoom: 7.5,
      pitch: 35,
      bearing: 0
    });
    this.mb.on('load', ()=> {
    });
  },
};
</script>

<style>

body{
  margin: 0;
  padding: 0;
}
h2, h3 {
  font-family: Futura, Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px;
  font-size: 1.2em;
}
h3 {
  font-size: 1em;
}
.map-overlay{
  padding: 0px;
}

#features {
  padding: 5px;
}
.el-button {
  text-align: left;
}

#mapContainer {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}

#mapContainer2 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer3 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer4 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer5 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer6 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer7 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer8 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer9 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#mapContainer10 {
  width: 60%;
  height: 700px;
  padding: 50px;
  position: flex;
}
#innerContainer {
  width: 100%;
  height: 700px;
  padding: 20px;
  position: flex;
}
.el-card__body {
  width: 100%;
  height: 100%;
  display: flex;
}
#chart {
  width: 400px;
  position: flex;
  text-align: left;
}
img {
  width: 400px;
  height: 400px;
  position: flex;
}
</style>