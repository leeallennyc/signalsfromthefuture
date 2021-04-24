<template>
  <div id="sandDanceVue">
    <SandDanceVue :data="data" :insight="insight" />
  </div>
</template>

<script>
import * as deck from "@deck.gl/core";
import * as layers from "@deck.gl/layers";
import * as luma from "@luma.gl/core";
import * as vega from "vega";
import SandDanceVue, { SandDance } from "@msrvida/sanddance-vue";

SandDance.use(vega, deck, layers, luma);

const data = [{ a: 1 }, { a: 2 }, { a: 3 }];

const insight = {
  chart: "barchartV",
  columns: {
    x: "a",
    z: "a"
  },
  size: {
    height: 500,
    width: 500
  },
  view: "3d"
};

export default {
  name: 'SandDanceVue',
  components: {
    SandDanceVue
  },
  data: () => {
    return {
      data,
      insight
    };
  }
};
</script>

<style>
.sanddance-VueViewer {
    height: 700px;
    border: 1px solid black;
}

#sandDanceVue{
    width: 90%;
    height: 90%;
    background-color: white;
}
</style>

<style src="@msrvida/sanddance/dist/css/sanddance.css" />
