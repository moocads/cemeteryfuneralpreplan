<i18n>
{
  "en":{
    "name":"Funeral"
  },
  "zh":{
    "name":"殡葬服务"
      },
  "tc":{
    "name":"殯葬服務"
  }
}
</i18n>
<template>
  <footer class="this-footer">
    <small> © {{ year + ' ' + $t("name") }}</small>
    <!-- <small><a style="color:#498483;" href="https://www.moocads.com" target="_blank">
    Designed by Mooc Creative Lab
  </a></small> -->
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
