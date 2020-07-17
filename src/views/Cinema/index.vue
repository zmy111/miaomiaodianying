<template>
  <div id="main">
    <Header title="喵喵影院" />
    <div id="content">
      <div class="cinema_menu">
        <router-link class="all_city" tag="div" to="/cinema/allCity">
          <span>全城</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link class="all_city" tag="div" to="/movie/city">
          <span>品牌</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link class="all_city" tag="div" to="/movie/city">
          <span>特色</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Cinema",
  components: {
    Header,
    TabBar
  }
};
</script>
<style scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 92px;
}
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  position: fixed;
  top: 45px;
}
.cinema_menu .all_city {
  margin-left: 20px;
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.cinema_menu .all_city.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.cinema_menu .all_city .router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.cinema_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.cinema_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>