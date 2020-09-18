<i18n>
{
    "en":{
        "top":"TOP"
    },
    "zh":{
        "top":"回顶部"
    }
}
</i18n>
<template>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">
       <b-img src="/img/up-arrow.svg" width="25" />
       <small> {{$t('top')}}</small>
      </div>
    </a-back-top>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/css/main.scss';
#components-back-top-demo-custom .ant-back-top {
  bottom: 120px;
  right: 40px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 50px;
  width: 50px;
  padding:5px;
  line-height: 10px;
  border-radius: 4px;
  background-color: $green;
  position:fixed;
  bottom:100px;
  right: 30px;
  opacity: 0.8;
  color: #ffffff;
//   font-weight: 700;
  text-align: center;
  font-size: 15px;

  img{
    //   padding-bottom: 5px;
  }
}

@media screen and (max-width:768px){
  #components-back-top-demo-custom .ant-back-top {
  bottom: 90px;
  right: 25px;
}
}
</style>