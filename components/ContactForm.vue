<i18n>
{
    "en":{
        "email":"Email",
        "phone":"Phone",
        "firstn":"First Name",
        "lastn":"Last Name",
        "ser":"Our Services",
        "ser01":"土葬服务",
        "ser02":"骨灰土葬服务",
        "ser03":"室外骨灰位",
        "ser04":"室内骨灰位",
        "ser05":"殡仪及火化服务"
    },
    "zh":{
        "email":"Email",
        "phone":"电话",
        "firstn":"名",
        "lastn":"姓",
        "ser":"我们的服务",
        "ser01":"土葬服务",
        "ser02":"骨灰土葬服务",
        "ser03":"室外骨灰位",
        "ser04":"室内骨灰位",
        "ser05":"殡仪及火化服务"
    },
    "tc":{
        "email":"Email",
        "phone":"电话",
        "firstn":"First Name",
        "lastn":"Last Name",
        "ser":"我们的服务",
        "ser01":"土葬服务",
        "ser02":"骨灰土葬服务",
        "ser03":"室外骨灰位",
        "ser04":"室内骨灰位",
        "ser05":"殡仪及火化服务"
    }
}
</i18n>
<template>
  <div class="main-form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-row>
          <b-col>
                <b-form-group id="input-group-2" :label="$t('firstn')" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstname"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
          </b-col>
          <b-col>
                <b-form-group id="input-group-2" :label="$t('lastn')" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
          </b-col>
      </b-row>
      <b-form-group
        id="input-group-1"
        :label="$t('email')"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" :label="$t('phone')" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.phone"
          required
          placeholder="Phone number"
        ></b-form-input>
      </b-form-group>
    

      <b-form-group id="input-group-3" :label="$t('ser')" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.service"
          :options="services"
          required
        ></b-form-select>
      </b-form-group>
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
        form: {
          email: '',
          firstname: '',
          lastname:'',
          phone:'',
          service: null,
          msg:''
        },
        services: [{ text: 'Select One', value: null }, this.$t('ser01'), this.$t('ser02'), this.$t('ser03'), this.$t('ser04')],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.service = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    
</style>
