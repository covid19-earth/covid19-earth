(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab81e"],{1625:function(e,t,a){"use strict";a.r(t);var i=a("7a23"),o={class:"container mt-2 mb-3"},n=Object(i["h"])('<h1 class="title mt-3 mx-2">Map</h1><div class="card mt-3"><div class="card-header"><h3 class="subtitle">Pakistan</h3></div><div id="map"></div></div>',2),c=[n];function s(e,t){return Object(i["t"])(),Object(i["f"])("div",o,c)}var r={name:"Map",data:function(){return{loading:!0,provience:{}}},mounted:function(){window.scrollTo(0,0),this.getProvience()},methods:{getProvience:function(){this.provience=provience,this.getMap()},getMap:function(){var e=[["pk-sd",this.provience["Sindh"].infected.total-this.provience["Sindh"].recovered.total-this.provience["Sindh"].deceased.total],["pk-ba",this.provience["Balochistan"].infected.total-this.provience["Balochistan"].recovered.total-this.provience["Balochistan"].deceased.total],["pk-jk",this.provience["AJK"].infected.total-this.provience["AJK"].recovered.total-this.provience["AJK"].deceased.total],["pk-na",this.provience["KPK"].infected.total-this.provience["KPK"].recovered.total-this.provience["KPK"].deceased.total],["pk-gb",this.provience["GB"].infected.total-this.provience["GB"].recovered.total-this.provience["GB"].deceased.total],["pk-pb",this.provience["Punjab"].infected.total-this.provience["Punjab"].recovered.total-this.provience["Punjab"].deceased.total],["pk-is",this.provience["Islamabad"].infected.total-this.provience["Islamabad"].recovered.total-this.provience["Islamabad"].deceased.total]];Highcharts.mapChart("map",{chart:{map:"countries/pk/pk-all"},title:{text:"Map COVID-19 Pakistan"},subtitle:{text:'Source map: <a href="http://code.highcharts.com/mapdata/countries/pk/pk-all.js">Pakistan</a>'},mapNavigation:{enabled:!0,buttonOptions:{verticalAlign:"bottom"}},colorAxis:{min:0},series:[{data:e,name:"cases",states:{hover:{color:"#BADA55"}},dataLabels:{enabled:!0,format:"{point.name}"}}]})}}},d=a("d959"),p=a.n(d);const l=p()(r,[["render",s]]);t["default"]=l}}]);
//# sourceMappingURL=chunk-2d0ab81e.b92b9bac.js.map