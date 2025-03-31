<template>
  <div class="index_slider">
    <b-carousel
      id="carousel-1"
      v-model="slide1"
      :interval="4000"
    
      fade
      background="#ababab"
      img-width="1024"
      img-height="660"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Slides with custom text -->
      <div v-if="$i18n.locale === 'zh'">
        <b-carousel-slide
          img-height="660"
          img-src="/img/banner/1-cn.jpg"
        >
        </b-carousel-slide>
        <!-- <b-carousel-slide
          img-height="660"
          img-src="/img/banner/2-cn.jpg"
        >
        </b-carousel-slide> -->
      </div>
      <div v-if="$i18n.locale === 'tc'" >
        <b-carousel-slide
          img-height="660"
          img-src="/img/banner/1-trd.jpg"
        >
        </b-carousel-slide>
        <!-- <b-carousel-slide
          img-height="660"
          img-src="/img/banner/2-trd.jpg"
        >
        </b-carousel-slide> -->
      </div>
    </b-carousel>
    <b-carousel
      id="carousel-2"
      v-model="slide2"
      :interval="4000"
      indicators
      fade
      background="#ababab"
      img-width="1024"
      img-height="660"
      style="text-shadow: 1px 1px 2px #333;"

    >
      <div v-if="$i18n.locale === 'zh'">
        <b-carousel-slide
          img-height="660"
          img-src="/img/banner/1-cn-mobile.jpg"
        >
        </b-carousel-slide>
        <!-- <b-carousel-slide
          img-height="660"
          img-src="/img/banner/2-cn-mobile.jpg"
        >
        </b-carousel-slide> -->
      </div>
       <div v-if="$i18n.locale === 'tc'">
        <b-carousel-slide
          img-height="660"
          img-src="/img/banner/1-trd-mobile.jpg"
        >
        </b-carousel-slide>
        <!-- <b-carousel-slide
          img-height="660"
          img-src="/img/banner/2-trd-mobile.jpg"
        >
        </b-carousel-slide> -->
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  transform: translate(-50%, -50%);
}
.carousel-indicators{
      bottom: -40px;

}
.carousel-indicators li {
  background-color: #2a5655;
}
</style>
<style lang="scss" scoped>
.index_slider {
  padding-top: 100px;
}
#carousel-1 {
  display: block;
}
#carousel-2 {
  display: none;
}
@media screen and (max-width: 768px) {
  #carousel-1 {
    display: none;
  }
  #carousel-2 {
    display: block;
  }
}
</style>
