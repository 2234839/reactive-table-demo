import{u as o}from"./vue.composition.api.d9b52cd0.js";import{d as i,b as t,o as n,a,e,t as s,c as d}from"./index.08251072.js";var r=i({setup(i,n){const a=o({getter:()=>new Promise(((o,i)=>{navigator.geolocation.getCurrentPosition((function(i){o([i,void 0])}),(function(i){o([void 0,i])}))}))}),e=t((()=>{var o,i;const t=null==(i=null==(o=a.value.data)?void 0:o[0])?void 0:i.coords;return`https://uri.amap.com/marker?position=${null==t?void 0:t.longitude},${null==t?void 0:t.latitude}`}));return{position:a,"高德URL":e}}});const u={key:0},l={key:1},p={key:2};r.render=function(o,i,t,r,v,c){var f;return o.position.pending?(n(),a("div",u,"正在请求获取地址位置信息....")):o.position.fulfilled&&o.position.data[0]?(n(),a("div",l,[e(" 经纬度 ("+s(o.position.data[0].coords.longitude)+", "+s(o.position.data[0].coords.latitude)+") ",1),d("a",{href:o.高德URL},"前往高德查看",8,["href"])])):(n(),a("div",p,"查询失败 "+s(null==(f=o.position.data[1])?void 0:f.message),1))};export default r;
//# sourceMappingURL=index.b30e9f70.js.map
