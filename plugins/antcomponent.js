import Vue from 'vue';
import BacktoTop from 'ant-design-vue/lib/back-top';


/* v1.1.2 */
Vue.component(BacktoTop.name, BacktoTop);

/* v1.1.3+ 自动注册Button下组件，如Button.Group */
Vue.use( BacktoTop);