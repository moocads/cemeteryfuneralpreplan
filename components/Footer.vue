<i18n>
{
  "en":{
    "name":"Pre-Plan Cemetery & Funeral"
  },
  "zh":{
    "name":"预置墓园及殡葬服务"
      },
  "tc":{
    "name":"預置墓園及殯葬服務"
  }
}
</i18n>
<template>
  <footer class="this-footer">
    <small> © {{ year + ' ' + $t("name") }}</small>
    <small><a href="https://www.moocads.com" target="_blank">
    Powered by Mooc Creative Lab
  </a></small>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.this-footer {
  small {
    color: #ffffff;
    text-align: center;
    margin: auto;
    display: block;
  }
  a{
    color:#fff;
    text-align: center;
  }
}
</style>
