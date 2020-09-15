<i18n>
{
  "en":{
      "about":"About Us",
      "cf":"Cemetery & Funeral",
      "area":"Service Area",
      "contact":"Contact"
  },
  "zh":{
      "about":"关于我们",
       "cf":"Cemetery&Funeral",
       "area":"服务地区",
       "contact":"联系我们"
      },
  "tc":{
      "about":"关于我们",
       "cf":"Cemetery&Funeral",
       "area":"服务地区",
       "contact":"联系我们"
  }
}
</i18n>
<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="nav">
    <b-navbar-brand href="#">Pre-Plan Cemetery Funeral</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">{{$t('about')}}</b-nav-item>
        <b-nav-item href="#">{{$t('cf')}}</b-nav-item>
        <b-nav-item href="#">{{$t('area')}}</b-nav-item>
        <b-nav-item href="#">{{$t('contact')}}</b-nav-item>
        <b-nav-item :href="switchLocalePath('en')">En</b-nav-item>
        <b-nav-item :href="switchLocalePath('zh')">简</b-nav-item>
        <b-nav-item :href="switchLocalePath('tc')">繁</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
