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
      "about":"关于我们",
       "cf":"我们的服务",
       "faq":"常见问题",
       "area":"服务地区",
       "contact":"联系我们"
      },
  "tc":{
    "name":"多倫多預置墓園及殯葬服務",
      "about":"關於我們",
       "cf":"我們的服務",
       "faq":"常見問題",
       "area":"服務地區",
       "contact":"聯絡我們"
  }
}
</i18n>
<template>
  <div style="position: fixed; width: 100%; z-index: 999999">
    <div class="topbar">
      <b-navbar toggleable="lg" type="dark" variant="nav">
        <b-navbar-nav class="topbar-inner">
          <!-- <b-nav-item :href="switchLocalePath('en')">En</b-nav-item> -->
          <div class="topbar-info-wrap">
            <span>徐培康</span>
            <img src="/img/phone2.svg" alt="" />
            <a href="tel:+14167223453">416-722-3453</a>
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
          <b-nav-item href="#about">{{ $t("about") }}</b-nav-item>
          <b-nav-item href="#service">{{ $t("cf") }}</b-nav-item>
          <b-nav-item href="#faq">{{ $t("faq") }}</b-nav-item>
          <b-nav-item href="#servicearea">{{ $t("area") }}</b-nav-item>
          <b-nav-item href="#contact">{{ $t("contact") }}</b-nav-item>
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
    },
  },
};
</script>

<style >
</style>
