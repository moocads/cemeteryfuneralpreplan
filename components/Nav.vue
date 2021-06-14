<i18n>
{
  "en":{
    "name":"Pre-Plan Cemetery & Funeral",
      "about":"About Us",
      "cf":"Our Services",
      "faq":"FAQ",
      "area":"Service Area",
      "contact":"Contact Us"
  },
  "zh":{
    "name":"多伦多预置墓园及殡葬服务",
        "home":"首页",
    "price-list":"价目表",
      "about":"关于我们",
       "cf":"我们的服务",
       "faq":"常见问题",
       "area":"服务地区",
       "contact":"联系我们"
      },
  "tc":{
    "name":"多倫多預置墓園及殯葬服務",
        "home":"首頁",
    "price-list":"價目表",
      "about":"關於我們",
       "cf":"我們的服務",
       "faq":"常見問題",
       "area":"服務地區",
       "contact":"聯絡我們"
  }
}
</i18n>
<template>
  <div style="position: fixed; width: 100%; z-index: 999">
    <div class="topbar">
      <b-navbar toggleable="lg" type="dark" variant="nav">
        <b-navbar-nav class="topbar-inner">
          <!-- <b-nav-item :href="switchLocalePath('en')">En</b-nav-item> -->
          <div class="topbar-info-wrap">
            <span>徐培康</span>
            <img src="/img/phone2.svg" alt="" />
            <a
              onclick="return gtag_report_conversion('tel:416-722-3453')"
              href="tel:+14167223453"
              >416-722-3453</a
            >
            <nuxt-link :to="localePath('price')" class="price-list-link">{{
              $t("price-list")
            }}</nuxt-link>
          </div>
          <div>
            <b-nav-item :href="switchLocalePath('zh')">简</b-nav-item>
            <b-nav-item :href="switchLocalePath('tc')">繁</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <b-navbar toggleable="lg" type="dark" variant="nav">
      <b-navbar-brand> {{ $t("name") }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <nuxt-link :to="localePath('index')">{{ $t("home") }}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="{ path: localePath('index'), hash: '#about' }">{{
              $t("about")
            }}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="{ path: localePath('index'), hash: '#service' }">{{
              $t("cf")
            }}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="{ path: localePath('index'), hash: '#faq' }">{{
              $t("faq")
            }}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link
              :to="{ path: localePath('index'), hash: '#servicearea' }"
              >{{ $t("area") }}</nuxt-link
            >
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="{ path: localePath('index'), hash: '#contact' }">{{
              $t("contact")
            }}</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.nav-item {
  a {
    color: $green;
  }
}
</style>
<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.price-list-link {
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #fff;
  transition: all 0.4s ease;
  &:hover {
    background-color: #fff;
    color: $green;
  }
}
</style>
