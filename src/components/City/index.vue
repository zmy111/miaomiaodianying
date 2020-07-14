<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>北京</li>
            <li>保定</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
      </div>
    </div>
     <div class="suoyin" style="">
    <ul>
      <li>A</li>
      <li>A</li>
      <li>A</li>
    </ul>
  </div>
  </div>

 
</template>

<script>
export default {
  name: "city"
};
</script>
<style scoped>
.city_list {
    float: left;
}
.city_list .city_hot {
  background-color: rgb(255, 244, 241);
}
.city_list .city_sort {
  background-color: rgb(255, 244, 241);
}
.city_list .city_hot h2 {
  /* margin: 10px 0px; */
  /* background- */
  background-color: rgb(240, 240, 240);
  font-size: 20px;
  padding: 10px;
  font-weight: normal;
}
.city_list .city_sort h2 {
  /* margin: 10px 0px; */
  /* background- */
  background-color: rgb(240, 240, 240);
  font-size: 20px;
  padding: 10px;
  font-weight: normal;
}
.city_list .city_hot li {
  display: inline-block;
  background-color: white;
  text-align: center;
  width: 27%;
  padding-top: 10px;
  margin-top: 10px;
  margin: 5px;
  height: 35px;
  border: 1px white solid;
}
.city_list .city_sort li {
  margin: 5px;
 

}

.hotCity {
  font-size: 20px;
  padding: 10px;
  font-weight: normal;
}

.van-index-anchor {
  font-size: 24px;
}
.van-grid-item__text {
  font-size: 16px;
}
.van-index-bar__index {
  line-height: 18px !important;
}
.suoyin {
    float: right;
    /* text-align:initial; */
}
.city_body .suoyin li{
    margin-right: 5px;
    
    text-align: center;
}
</style>