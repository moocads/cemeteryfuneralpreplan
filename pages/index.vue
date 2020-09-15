<i18n>
{
  "en":{
    "slogan":"专业一站式服务<br>令您及家人安枕无忧",
    "intro":"安省持牌墓园及殡葬顾问",
    "about":"about",
    "contact":"Contact Now",
    "ser":"Our Services",
    "ser01":"土葬服务",
    "ser02":"骨灰土葬服务",
    "ser03":"室外骨灰位",
    "ser04":"室内骨灰位",
    "ser05":"殡仪及火化服务",
    "area":"Service Area",
    "area-01":"Highland Memory Garden",
    "area-02":"Highland Hill Memory Garden",
    "area-03":"Pine Ridge Memory Garden",
    "area-04":"Glen Oaks Memory Garden"
  },
  "zh":{
    "slogan":"专业一站式服务<br>令您及家人安枕无忧",
    "contact":"联系我们",
    "ser":"我们的服务",
    "ser01":"土葬服务",
    "ser02":"骨灰土葬服务",
    "ser03":"室外骨灰位",
    "ser04":"室内骨灰位",
    "ser05":"殡仪及火化服务",
    "area":"服务区域",
    "area-01":"高山纪念墓园<br>(大多地区)",
    "area-02":"好景殡仪馆和墓园 <br>(大多地区)",
    "area-03":"松柏纪念园<br>(大多地区)",
    "area-04":"嘉丽殡仪馆和墓园 <br>(密西沙加地区)"
  },
  "tc":{
    "slogan":"专业一站式服务<br>令您及家人安枕无忧",
    "contact":"联系我们",
    "ser":"我们的服务",
    "ser01":"土葬服务",
    "ser02":"骨灰土葬服务",
    "ser03":"室外骨灰位",
    "ser04":"室内骨灰位",
    "ser05":"殯儀火葬服務",
    "area":"服务区域",
    "area-01":"高山紀念墓園<br>(大多地區)",
    "area-02":"好景殯儀館和墓園 <br>(大多地區)",
    "area-03":"松柏紀念園<br>(大多地區)",
    "area-04":"嘉麗殯儀館和墓園 <br>(密西沙加地區)"
  }
}
</i18n>
<template>
  <b-container fluid>
    <Nav/>
    <div class="top-banner">
      <div class="text-area">
        <h1 v-html="$t('slogan')"></h1>
        <nuxt-link to="" class="general-btn">{{$t('Contact')}}</nuxt-link>
      </div>
    </div>
    <br>
    <br>
    <section>
    <b-container>
    <b-row>
       <b-col cols="12" md="5" sm="12">
         <div class="pointer">
         <h2>{{$t('intro')}}</h2>
         <hr>
         <p>我们公司属下的墓园致力于提供一个宁静而得以永久安息之地。让生命的消逝不是终点，让亲友们彼此对故人的思念得以慰藉。</p>
         <p>预先购买目的和葬礼需要深思熟虑来做出决定。因此，在你需要的时候，我们愿为您提供最细心，最完善的服务及咨询渠道。专业真诚的服务，与加拿大多元文化相结合，帮您定制最合适，价格最合理的安排，毫无后顾之忧。一站式服务包括墓地，葬礼以及火化等。</p>
         <p>我们的团队服务华人社区多年，具有丰富的经验，以真挚温情的服务受到客户的信任与赞誉。选择我们等于选择明智，完美的承诺。</p>
         <br>
         <a href="" class="green-btn">{{$t('contact')}}</a>
         </div>
       </b-col>
       <b-col cols="12" md="1" sm="12"></b-col>
      <b-col cols="12" md="3" sm="12">
        <div class="agency">
            <b-img src="/img/henry.png" fluid/>
          <div class="info-pad">
            <h3>Henry Cui</h3>
           <a href="tel:1-416-722-3453"><b-img src="/img/phone.svg" width="13" class="icon" fluid/> 416-722-3453</a>
           <br>
           <a href="mailto:hchui@arbormemorial.com"><b-img src="/img/mail.svg" class="icon" width="15" fluid/> hchui@arbormemorial.com</a> 
          </div>
        </div>
      </b-col>
        <b-col cols="12" md="3" sm="12">
          <div class="agency">
            <b-img src="/img/henry.png" fluid/>
          <div class="info-pad">
            <h3>Venus Liu</h3>
           <a href="tel:1-647-898-9632"><b-img src="/img/phone.svg" width="13" class="icon" fluid/> 647-898-9632</a>
           <br>
           <a href="mailto:xyvliu@abormemorial.com"><b-img src="/img/mail.svg" class="icon" width="15" fluid/> xyvliu@abormemorial.com</a> 
          </div>
        </div>
      </b-col>
    </b-row>
    </b-container>
    </section>
    <section class="form-sec">
      <b-container>
        <b-row>
          <b-col cols="12" md="6" sm="12">
            <Form/>
          </b-col>
            <b-col cols="12" md="1" sm="12"></b-col>
           <b-col cols="12" md="5" sm="12">
             <h2>Arbor 公司历史 </h2>
             <p>Arbor公司自1947年提供专业目的，殡葬及火化服务，为加拿大成千上万家庭提供一站式服务。Arbor是加国最大墓园公司，业务遍布各省，超过90间殡仪馆，40个幽美墓园及20间火化场。致力于提供全面贴心服务，协助有需要的家庭妥善安排一系列繁琐事项。在有需要的时刻，我们陪伴你渡过。</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h2>{{$t('ser')}}</h2>
            <hr>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4" sm="12">
            <div class="service-img ser-1">
              <h3>{{$t('ser01')}}</h3>
            </div>
          </b-col>
                    <b-col cols="12" md="4" sm="12">
            <div class="service-img ser-2">
              <h3>{{$t('ser02')}}</h3>
            </div>
          </b-col>
                    <b-col cols="12" md="4" sm="12">
            <div class="service-img ser-3">
              <h3>{{$t('ser03')}}</h3>
            </div>
          </b-col>
                    <b-col cols="12" md="4" sm="12">
            <div class="service-img ser-4">
              <h3>{{$t('ser04')}}</h3>
            </div>
          </b-col>
                    <b-col cols="12" md="4" sm="12">
            <div class="service-img ser-5">
              <h3>{{$t('ser05')}}</h3>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="servicearea">
      <b-container>
        <b-row>
          <b-col>
            <h2>{{$t('area')}}</h2>
            <hr>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
              <h3 v-html="$t('area-01')"></h3>
              <nuxt-link to="/">33 Memory Gardens Ln, <br>North York, ON</nuxt-link>
              <nuxt-link to="/" class="direction-btn">Direction</nuxt-link>
          </b-col>
             <b-col>
              <h3 v-html="$t('area-02')"></h3>
              <nuxt-link to="/">12492 Woodbine Ave, <br>Gormley, ON</nuxt-link>
                <nuxt-link to="/" class="direction-btn">Direction</nuxt-link>
          </b-col>
             <b-col>
              <h3 v-html="$t('area-03')"></h3>
              <nuxt-link to="/"> 541 Taunton Rd W, <br>Ajax, ON</nuxt-link>
                <nuxt-link to="/" class="direction-btn">Direction</nuxt-link>
          </b-col>
             <b-col>
              <h3 v-html="$t('area-04')"></h3>
              <nuxt-link to="/">3164 Ninth Line,<br> Oakville, ON</nuxt-link>
                <nuxt-link to="/" class="direction-btn">Direction</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <Footer/>
  </b-container>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Form from '~/components/ContactForm.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Nav,Footer,Form
  }
}
</script>

<style lang="scss" scoped>
  .ser-1{
    background-image: url('/img/outside-01.jpeg');
  }
    .ser-2{
      background-image: url('/img/soil.jpeg');
  }
  .ser-4{
      background-image: url('/img/indoor-01.jpeg');
  }

  .ser-5{
       background-image: url('/img/fire.jpeg');
  }


</style>
