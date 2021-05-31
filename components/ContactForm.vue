<i18n>
  {
  "en":{
  "email":"Email",
  "phone":"Phone",
  "firstn":"First Name",
  "lastn":"Last Name",
  "ser":"Our Services",
  "select":"Select One",
  "ser01":"Full/Casket in ground burials",
  "ser02":"Cremation in ground burials",
  "ser03":"Outdoor cremation burials",
  "ser04":"Indoor cremation burials",
  "ser05":"Funeral & cremation services",
  "ser06":"Other",
  "note":"Thank you! We will reply you as soon as possible.",
  "sub":"Sumbit"
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
  "ser06":"其他服务",
  "note":"请告诉我们您的需求，谢谢。",
  "sub":"提交"
  },
  "tc":{
  "email":"郵件",
  "phone":"電話",
  "firstn":"名",
  "lastn":"姓",
  "ser":"我們的服務",
  "select":"請選擇以下服務",
  "ser01":"土葬服務",
  "ser02":"骨灰土葬服務",
  "ser03":"室外骨灰位",
  "ser04":"室内骨灰位",
  "ser05":"殯儀及火化服務",
  "ser06":"其他服務",
  "note":"請告訴我們您的需求，謝謝。",
  "sub":"提交"
  }
  }
</i18n>
<template>
  <div class="main-form">
    <div class="note">{{ $t("note") }}</div>
    <b-form
      v-if="show"
      class="js-cm-form"
      id="subForm"
      action="https://www.createsend.com/t/subscribeerror?description="
      method="post"
      data-id="2BE4EF332AA2E32596E38B640E90561955BC9328E134A137DCF758886A84EAD6C6EE58A8A12A307FD7D5A686648C5DF0D8A20F09155F03E8C6E986C1B0ADCC99"
    >
      <b-row>
        <b-col>
          <b-form-group id="input-group-2" class="mandatory">
            <template v-slot:label>
              {{ $t("firstn") }}<span class="text-danger">*</span>
            </template>
            <b-form-input
              id="fieldjdtiujd"
              maxlength="200"
              name="cm-f-jdtiujd"
              required
              placeholder="Enter first name"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="input-group-2">
            <template v-slot:label>
              {{ $t("lastn") }}<span class="text-danger">*</span>
            </template>
            <b-form-input
              id="fieldjdtiujh"
              maxlength="200"
              name="cm-f-jdtiujh"
              required
              placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group
        id="input-group-1"
        description="We'll never share your email with anyone else."
      >
        <template v-slot:label>
          {{ $t("email") }}<span class="text-danger">*</span>
        </template>
        <b-form-input
          autocomplete="Email"
          aria-label="Email"
          class="js-cm-email-input qa-input-email"
          id="fieldEmail"
          maxlength="200"
          name="cm-jrlruiu-jrlruiu"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2">
        <template v-slot:label>
          {{ $t("phone") }}<span class="text-danger">*</span>
        </template>
        <b-form-input
          id="fieldjdtiujk"
          maxlength="200"
          name="cm-f-jdtiujk"
          required
          placeholder="Phone number"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <template v-slot:label>
          {{ $t("ser") }}<span class="text-danger">*</span>
        </template>
        <b-form-select id="fieldjdtiutl" name="cm-fo-jdtiutl" value="" required>
          <option value="">{{ $t("select") }}</option>
          <option value="3142400">{{ $t("ser01") }}</option>
          <option value="3142401">{{ $t("ser02") }}</option>
          <option value="3142402">{{ $t("ser03") }}</option>
          <option value="3142403">{{ $t("ser04") }}</option>
          <option value="3142404">{{ $t("ser05") }}</option>
          <option value="3142405">{{ $t("ser06") }}</option>
        </b-form-select>
      </b-form-group>
      <b-form-textarea
        id="fieldjdtiuju"
        name="cm-f-jdtiuju"
        placeholder="Send us your message ..."
        rows="3"
        max-rows="6"
      >
      </b-form-textarea>
      <br />
      <b-row>
        <b-col>
          <b-button
            onclick="return gtag_report_conversion('tel:416-722-3453')"
            type="submit"
            variant="primary"
            class="sub-btn"
            >{{ $t("sub") }}</b-button
          >
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
    };
  }
};
</script>

<style lang="scss" scoped>
.mandatory {
  label::after {
    content: "*";
    color: red;
  }
}
</style>
