<i18n>
  {
  "en":{
  "email":"Email",
  "phone":"Phone",
  "firstn":"First Name",
  "lastn":"Last Name",
  "ser":"Our Services",
  "select":"Select One",
  "ser01":"土葬服务",
  "ser02":"骨灰土葬服务",
  "ser03":"室外骨灰位",
  "ser04":"室内骨灰位",
  "ser05":"殡仪及火化服务",
  "note":"Thank you! We will reply you as soon as possible."
  },
  "zh":{
  "email":"Email",
  "phone":"电话",
  "firstn":"名",
  "lastn":"姓",
  "ser":"我们的服务",
  "select":"请选择以下服务",
  "ser01":"土葬服务",
  "ser02":"骨灰土葬服务",
  "ser03":"室外骨灰位",
  "ser04":"室内骨灰位",
  "ser05":"殡仪及火化服务",
  "note":"Thank you! We will reply you as soon as possible."
  },
  "tc":{
  "email":"Email",
  "phone":"电话",
  "firstn":"First Name",
  "lastn":"Last Name",
  "ser":"我们的服务",
    "select":"请选择以下服务",
  "ser01":"土葬服务",
  "ser02":"骨灰土葬服务",
  "ser03":"室外骨灰位",
  "ser04":"室内骨灰位",
  "ser05":"殡仪及火化服务",
  "note":"Thank you! We will reply you as soon as possible."
  }
  }
</i18n>
<template>
  <div class="main-form">
    <div class="note">{{$t('note')}}</div>
    <b-form v-if="show" class="js-cm-form" id="subForm"
      action="https://www.createsend.com/t/subscribeerror?description=" method="post"
      data-id="2BE4EF332AA2E32596E38B640E9056191FFF111727AF487101544A982DEFFB1AF9BB3F79C30689341D3CCB06DDF830E4393AD6AA09BD823E96A2A5A2B643F098">
      <b-row>
        <b-col>

          <b-form-group id="input-group-2" :label="$t('firstn')" label-for="input-2">
            <b-form-input id="fieldjyulihu" maxlength="200" name="cm-f-jyulihu" required placeholder="Enter name">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="input-group-2" :label="$t('lastn')" label-for="input-2">
            <b-form-input  id="fieldjyuliku" maxlength="200" name="cm-f-jyuliku" required placeholder="Enter name"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group id="input-group-1" :label="$t('email')" label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input autocomplete="Email" aria-label="Email" class="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-ykyhkki-ykyhkki" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="$t('phone')" label-for="input-2">
        <b-form-input id="fieldjyuliul" maxlength="200" name="cm-f-jyuliul" required placeholder="Phone number"></b-form-input>
      </b-form-group>


      <b-form-group :label="$t('ser')" id="fieldjyuldrl" name="cm-fo-jyuldrl" value="" label-for="input-3">
        <b-form-select id="input-3" required>
          <option value="">{{$t('select')}}</option>
          <option value="2938613">{{$t('ser01')}}</option>
          <option value="2938614">{{$t('ser02')}}</option>
          <option value="2938615">{{$t('ser03')}}</option>
          <option value="2938616">{{$t('ser04')}}</option>
          <option value="2938617">{{$t('ser05')}}</option>
        </b-form-select>
      </b-form-group>
      <b-form-textarea id="fieldjyuldrr" maxlength="200" name="cm-f-jyuldrr" placeholder="Send us your message ..." rows="3" max-rows="6">
      </b-form-textarea>
      <br>
      <b-row>
        <b-col>
          <b-button type="submit" variant="primary" class="sub-btn">Submit</b-button>
        </b-col>
        <!-- <b-col>
                   <b-button type="reset"  class="sub-btn">Reset</b-button>
            </b-col> -->
      </b-row>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
