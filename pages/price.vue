<i18n>
  {
  "zh":{
  "slogan":"专业一站式服务<br>令您及家人安枕无忧",
  "intro":"安省持牌墓园及预置殡葬顾问",
  "his":"公司历史",
  "contact":"联系我们",
  "huayu-phone":"华语热线",
  "funeral-home":"殡仪馆",
  "cemetery":"墓园"
  },
  "tc":{
  "slogan":"專業一站式服務<br>令您及家人安枕無憂",
  "his":"公司歷史",
  "contact":"聯絡我們",
  "huayu-phone":"華語熱線",
  "funeral-home":"殯儀館",
  "cemetery":"墓園"
  }
  }
</i18n>
<template>
  <div>
    <b-container fluid>
      <Nav />
      <div class="top-banner">
        <div class="text-area">
          <h1 v-html="$t('slogan')"></h1>
          <nuxt-link
            :to="{ path: localePath('/'), hash: '#contact' }"
            class="general-btn"
            >{{ $t("contact") }}</nuxt-link
          >
          <!-- <a href="tel:+4167223453" class="header-phone-number">
            {{ $t("huayu-phone") }} <span>416-722-3453</span>
          </a> -->
        </div>
      </div>
      <br />
      <section id="price-lists-wrap">
        <b-container>
          <h1>{{ $t("funeral-home") }}</h1>
          <b-row>
            <b-col v-for="(img, index) in priceLists" :key="index" md="3">
              <figure>
                <a :href="img.url" data-fancybox>
                  <img :src="img.url" :alt="img.alt" />
                </a>
              </figure>
              <!-- <b-img fluid :src="img.url"> </b-img> -->
            </b-col>
          </b-row>
          <h1>{{ $t("cemetery") }}</h1>
          <b-row>
            <b-col
              v-for="(imgCemetery, index) in cemeteries"
              :key="index"
              md="3"
            >
              <figure>
                <a :href="imgCemetery.url" data-fancybox>
                  <img :src="imgCemetery.url" :alt="imgCemetery.alt" />
                </a>
              </figure>
              <!-- <b-img fluid :src="img.url"> </b-img> -->
            </b-col>
          </b-row>
        </b-container>
      </section>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Form from "~/components/ContactForm.vue";
import Footer from "~/components/Footer.vue";
import Backtop from "~/components/BackToTop.vue";

export default {
  components: {
    Nav,
    Footer,
    Form,
    Backtop
  },
  data() {
    return {
      priceLists: [
        {
          url: "/img/pricelists/binyi1.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi2.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi3.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi4.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi5.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi6.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi7.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi8.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi9.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi10.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi11.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi12.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi13.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi14.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi15.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi16.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi17.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi18.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi19.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi20.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi21.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi22.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi23.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi24.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi25.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi26.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi27.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi28.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi29.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi30.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi31.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi32.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi33.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi34.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi35.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/binyi36.png",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        }
      ],
      cemeteries: [
        {
          url: "/img/pricelists/cemetery1.jpg",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/cemetery2.jpg",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/cemetery3.jpg",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/cemetery4.jpg",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/cemetery5.jpg",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/cemetery6.jpg",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";
#price-lists-wrap {
  h1 {
    font-weight: 700;
    font-size: 28px;
    color: $green;
    margin: 50px auto;
  }
}
.header-phone-number {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 15px;
  &:hover {
    color: #fff;
  }
  span {
    font-size: 1.8em;
  }
}
figure {
  width: 100%;
  img {
    width: 100%;
  }
}
@media all and (max-width: 1300px) {
  .header-phone-number {
    font-size: 26px;
    span {
      font-size: 1.4em;
    }
  }
}
@media all and (max-width: 768px) {
  .header-phone-number {
    font-size: 18px;
    span {
      font-size: 1.4em;
    }
  }
}
@media all and (max-width: 768px) {
  .header-phone-number {
    font-size: 14px;
    span {
      font-size: 1.4em;
    }
  }
}
</style>
