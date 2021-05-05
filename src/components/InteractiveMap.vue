<template>
   <div class='map-overlay' id='features'><el-button @click="enterHome" icon="el-icon-s-home" circle id="home-button"></el-button><el-button @click="enterMap" icon = "el-icon-location-information" circle id="map-button"></el-button><h2>TOP 10 REGIONAL COUNTIES FOR MACHINE LEARNING PATENTS</h2><div id='pd'>
  </div></div>
  <div class='map-overlay' id='legend'></div>
  <el-card>
    <el-card><div id="innerContainer">
      <h2>SANTA CLARA COUNTY, CALIFORNIA</h2>
      <div id= "chart"><p>This "megaregion" is made up of Alameda, San Francisco, San Mateo, and Santa Clara. Marin and Contra Costa Counties are to the north. It remains the largest U.S. cluster in our sample, accounting for 38.6% of AI patents filed.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FSanta_Clara_Counties.png?v=1619995161141">
      </div>
      </el-card>
    <div id="mapContainer">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>LOS ANGELES COUNTY, CALIFORNIA</h2>
      <div id= "chart"><p>The region is made up of Orange, San Diego, and Los Angeles Counties. Santa Barbara and Monterey are the northwest. This region makes up 6.1% of AI patents filed in our sample. </p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FLosAngeles_Counties.png?v=1619995248246">
      </div></el-card>
    <div id="mapContainer2">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>COOK COUNTY, ILLINOIS</h2>
      <div id= "chart"><p>Chicago is county seat of Cook County Illinois. On the Wisconsin border it shares a cluster with DuPage, Lake, and Kenosha counties. Cook County makes up 2% of AI patents in our sample.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FIllinois_Wisconsin_Counties.png?v=1619995271555">
      </div></el-card>
    <div id="mapContainer3">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>KING COUNTY, WASHINGTON</h2>
      <div id= "chart"><p>King County Washington is the home of Redmond, based Microsoft Licensing, LLC - a holding company of Microsoft. King county makes up 11.8% of AI patents in our sample.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FWashington_Counties.png?v=1619995277625">
      </div></el-card>
    <div id="mapContainer4">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>TRAVIS & HARRIS COUNTIES, TEXAS</h2>
      <div id= "chart"><p>Travis/William Counties, and Harris/Fort Bend make up two smaller regions, with a third to the north made up Collin, Dallas, and Tarrant counties. The Travis and Harris county region make up 2% of AI Patents granted in our sample.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FTexas_Counties.png?v=1619995233117">
      </div></el-card>
    <div id="mapContainer5">{{BaseMap}}</div>
  </el-card>
  
  <el-card>
    <el-card><div id="innerContainer">
      <h2>WESTCHESTER COUNTY, NEW YORK </h2>
      <div id= "chart"><p>Westchester and Queens County create a micro-region within a larger mega-region of the East Coast. AI Patent activity connects 17 Counties in this region from Western Massachusetts to Ocean County New Jersey. These 17 counties make up 11.8% of all AI patents filed in our sample.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FEastcoast_cluster_Counties.png?v=1619995300290">
      </div></el-card>
    <div id="mapContainer6">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>MIDDLESEX COUNTY, MASSACHUSETTS </h2>
      <div id= "chart"><p>The Middlesex County area stretches from Southern New Hampshire to the Southeastern coast of Massachusetts. This region consists of Rockingham, Bristol, Norfolk, Suffolk, and Middlesex. The home of M.I.T. and the Route 128 corridor, this region makes up 3.4% of AI patents filed within our sample.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FMassachusetts_Counties.png?v=1619995259679">
      </div></el-card>
    <div id="mapContainer7">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>FAIRFAX, MARYLAND </h2>
      <div id= "chart"><p>Fairfax County region is joined by 10 counties, and the vast concentration of patents is within Fairfax county. The Fairfax cluster makes up 7.7% of the AI patents filed. </p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FMaryland_Counties.png?v=1619995289989">
      </div></el-card>
    <div id="mapContainer8">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>FULTON COUNTY, GEORGIA </h2>
      <div id= "chart"><p>Fulton and Cobb counties make up the Fulton area region, and it accounts for 2.1% of the AI patents granted in our sample.</p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FGeorgia_counties.png?v=1619995244912">
      </div></el-card>
    <div id="mapContainer9">{{BaseMap}}</div>
  </el-card>

  <el-card>
    <el-card><div id="innerContainer">
      <h2>WASHOE COUNTY, NEVADA </h2>
      <div id= "chart"><p>Washoe county and Reno, Nevada are the home of Amazon Technologies, Inc. This one county makes up 0.8% of machine learning patents filed in our sample. All patents, with exception to one was granted to Amazon in this county. </p></div>
      <img src= "https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FNevada_Counties.png?v=1619995241476">
      </div></el-card>
    <div id="mapContainer10">{{BaseMap}}</div>
  </el-card>

<el-card>
<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  About This Project
</el-button>

<el-drawer
  title="About"
  v-model="drawer"
  :with-header="false">
  <span><h3>Signals From the Future: Mapping AI Patent Landscapes</h3><p>Was created as a prototype by Lee Kuczewski and in partial fulfillment for an MS in Data Visualization at the Parsons School of Design in NYC.</p><p><strong>Acknowledgments</strong></p><p>Gratitude for the guidance of Daniel Sauter and Aaron Hill from the MS Data Visualization Program at the Parsons School of Design in NYC. To Stephen Metts, Nahum Smith, the team at Lens.org, and the United States Patent and Trademark Office(USPTO)</p><p>Application created using Vue.js, MapBoxGL JS, Scrollama.js, D3.js, and QGIS for Geoprocessing.</p><h3>Data & Methods</h3><p>The United States Patent and Trademark Office (USPTO), The Bureau of Economic Analysis (BEA), American Community Survey (ACS) from The United States Census Bureau. </p></span>
</el-drawer>
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
      drawer: false,
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
  methods: {
    enterHome(){
      this.$router.push("/")
    },
    enterMap(){
    this.$router.push("/map")
    },
  },
};
</script>

<style>

body{
  margin: 0;
  padding: 0;
}

p {
  margin-bottom: 30px;
}

span {
  text-align: left;
  margin-left: 5px;
  color: gray;
  font-size: 12px;
}

.el-drawer__body{
  margin: 20px;
  padding: 0 auto;
}

.map-overlay #home-button {
    position: fixed;
    z-index: 9999;
    width: 40px;
    height: 50px;
    top:12%;
    left: 20px;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: white;
    opacity: .8;
    font-size: 20px;
    border-color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
}

.map-overlay #map-button {
    position: fixed;
    z-index: 9999;
    width: 40px;
    height: 50px;
    top: 18%;
    left: 20px;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: white;
    opacity: .8;
    font-size: 20px;
    border-color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
}

#map-button{
    margin-left: 0px;
}

.el-button.el-button--primary {
  color: gray;
  background-color: white;
  border-color: gray;
}

.el-button.el-button--primary.on-hover {
  color: gray;
  background-color: purple;
  border-color: gray;
}

.el-button {
    text-align: center;
}

h2 {
  color: rgb(171, 171, 171);
}

h2, h3 {
  font-family: Futura, Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px;
  font-size: 1.2em;
}
h3 {
  font-size: 1em;
  margin: 0px;
}
.map-overlay{
  padding: 0px;
}

/* .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 2px;
  } */

  /* .grid-content {

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
  } */

#features {
  padding: 5px;
}
.el-button {
  text-align: left;
}

#mapContainer {
  width: 65vw;
  height: 100vh;
}

#mapContainer2 {
  width: 65vw;
  height: 100vh;
}
#mapContainer3 {
  width: 65vw;
  height: 100vh;
  
}
#mapContainer4 {
  width: 65vw;
  height: 100vh;
}
#mapContainer5 {
  width: 65vw;
  height: 100vh;
}
#mapContainer6 {
  width: 65vw;
  height: 100vh;
}
#mapContainer7 {
  width: 69vw;
  height: 100vh;
}
#mapContainer8 {
  width: 65vw;
  height: 100vh;
}
#mapContainer9 {
  width: 65vw;
  height: 100vh;
}
#mapContainer10 {
  width: 65vw;
  height: 100vh;
}
#innerContainer {
  width: 100%;
  height: 700px;
  padding: 20px;
  position: flex;
}

#introContainer {
  width: 1000px;
  height: 600px;
  padding: 20px;
  position: flex;
}
.el-card__body {
  width: 100%;
  height: 100%;
  padding: 30px;
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