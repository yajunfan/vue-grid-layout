/* eslint-disable */
var testLayout = [
  { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0" },
  { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1" },
  { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2" },
  { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3" },
  { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4" },
  { "x": 10, "y": 0, "w": 2, "h": 3, "i": "5" },
  { "x": 0, "y": 5, "w": 2, "h": 5, "i": "6" },
  { "x": 2, "y": 5, "w": 2, "h": 5, "i": "7" },
  { "x": 4, "y": 5, "w": 2, "h": 5, "i": "8" },
  { "x": 6, "y": 4, "w": 2, "h": 4, "i": "9" },
  { "x": 8, "y": 4, "w": 2, "h": 4, "i": "10" },
  { "x": 10, "y": 4, "w": 2, "h": 4, "i": "11" },
  { "x": 0, "y": 10, "w": 2, "h": 5, "i": "12" },
  { "x": 2, "y": 10, "w": 2, "h": 5, "i": "13" },
  { "x": 4, "y": 8, "w": 2, "h": 4, "i": "14" },
  { "x": 6, "y": 8, "w": 2, "h": 4, "i": "15" },
  { "x": 8, "y": 10, "w": 2, "h": 5, "i": "16" },
  { "x": 10, "y": 4, "w": 2, "h": 2, "i": "17" },
  { "x": 0, "y": 9, "w": 2, "h": 3, "i": "18" },
  { "x": 2, "y": 6, "w": 2, "h": 2, "i": "19" }
];

// var Vue = require("vue");

Vue.config.debug = true;
Vue.config.devtools = true;

var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;

new Vue({
  el: "#app",
  components: {
    "GridLayout": GridLayout,
    "GridItem": GridItem
  },
  data: {
    layout: testLayout,
    index: 0,
    eventLog: []
  },
  watch: {
    eventLog: function () {
      var eventsDiv = this.$refs.eventsDiv
      eventsDiv.scrollTop = eventsDiv.scrollHeight
    }
  },
  methods: {
    /**
    *
    * @param i the item id/index
    * @param H height in grid rows
    * @param W width in grid columns
    * @param HPx height in pixels
    * @param WPx width in pixels
    *
    */
    initEvent(i, H, W, HPx, WPx) {
      console.log("INITIALED i=" + i + ", H=" + H + ", W=" + W + ", H(px)=" + HPx + ", W(px)=" + WPx);
    },
    moveEvent(i, newX, newY) {
      var msg = "MOVE i=" + i + ", X=" + newX + ", Y=" + newY
      this.eventLog.push(msg)
      console.log(msg)
    },
    resizeEvent(i, newH, newW) {
      var msg = "RESIZE i=" + i + ", H=" + newH + ", W=" + newW
      this.eventLog.push(msg)
      console.log(msg)
    },
    movedEvent(i, newX, newY) {
      var msg = "MOVED i=" + i + ", X=" + newX + ", Y=" + newY
      this.eventLog.push(msg)
      console.log(msg)
    },
    /**
     *
     * @param i the item id/index
     * @param newH new height in grid rows
     * @param newW new width in grid columns
     * @param newHPx new height in pixels
     * @param newWPx new width in pixels
     *
     */
    resizedEvent(i, newH, newW, newHPx, newWPx) {
      var msg = "RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx
      this.eventLog.push(msg)
      console.log(msg)
    }
  }
})
