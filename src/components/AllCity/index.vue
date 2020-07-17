<template>
  <div class="cinema_body">
    <div class="cinema_list">
      <ul>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃卡</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
        <li>
          <div class="info-list">
            <h3>
              大地影院(奥东世纪城店)
              <span class="price">22.9元起</span>
            </h3>
            <p>金州区大连经济开发区奥东世纪城三层</p>
            <p>
              <span class="promotion">小吃卡</span>
              <span class="promotion">折扣卡</span>
            </p>
          </div>
          <div class="distance">
            <p>11.2km</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "allCity"
};
</script>
<style scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  height: 520px;
}
.cinema_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.cinema_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.cinema_body .info-list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.cinema_body .info-list h3 {
    margin: 5px;
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  /* overflow: hidden; */
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cinema_body .info-list p {
  margin: 5px;
  font-size: 15px;
  color:rgb(177, 177, 177);
}
.cinema_body .info-list .price {
 color: red;
}
.cinema_body .info-list .promotion {
 color: #e9e06a;
 margin-right: 5px;
}
.cinema_body .info-list .promotion {
 border:1px #e9e06a solid;

}

</style>