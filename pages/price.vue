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
          url: "/img/pricelists/price-1.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-2.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-3.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-4.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-5.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-6.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-7.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-8.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-9.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-10.JPG",
          alt: "中华纪念园 | 多伦多墓园 | 价格表"
        },
        {
          url: "/img/pricelists/price-11.JPG",
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
