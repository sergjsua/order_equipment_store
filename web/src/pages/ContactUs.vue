<template>
  <div class="wrapper">
    <navbar/>
    <sidebar-left/>
    <authentication ref="authentication"/>
    <div class="content-inner">
      <div class="content header-page" v-if="curentLanguage === 'en'">
        <div>
          <h1>Hool OÜ</h1>
          <p><strong>Address: Tamme pst 47, 50405, Tartu, Estonia.</strong></p>
          <h2>Contact us</h2>
          <p>+372 58 44 55 33 | info@hool.ee</p>
          <p>Reg. number: 11043171 | VAT nr: EE101271628 <br>
          IBAN: EE122200221011140673 (Swedbank)
          </p>
          <p></p>

        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'et'">
        <div>
          <h1>Hool OÜ</h1>
          <p><strong>Juriidiline aadress: Tamme pst 47, 50405, Tartu (kohapeal poodi pole - oleme e-pood ja kaup saadetakse postiga).</strong></p>
          <h2>Kontaktandmed</h2>
          <p>+372 58 44 55 33 | info@hool.ee</p>
          <p>Registri kood: 11043171 | KMKR nr: EE101271628 <br>
          IBAN: EE122200221011140673 (Swedbank)
          </p>
          <p></p>

        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'fi'">
        <div>
          <h1>Hool OÜ</h1>
          <p><strong>Address: Tamme pst 47, 50405, Tartu, Estonia.</strong></p>
          <h2>Contact us</h2>
          <p>+372 58 44 55 33 | info@hool.ee</p>
          <p>Reg. number: 11043171 | VAT nr: EE101271628 <br>
          IBAN: EE122200221011140673 (Swedbank)
          </p>
          <p></p>

        </div>
      </div>
    </div>   
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import CategorySidebar from '@/components/sidebar/CategorySidebar'
import RightSidebar from '@/components/sidebar/RightSidebar'

export default {
  components: {
    'navbar': Navbar,
    'sidebar-left': CategorySidebar,
    'sidebar-right': RightSidebar
  },
  created () {
    this.watchLangChange()
  },
  data () {
    return {
      curentLanguage: this.$route.params.language
    }
  },
  methods: {
    watchLangChange () {
      this.$root.$on('setLanguage', (language) => {
        if (language) {
          this.curentLanguage = language
        }
      })
    }
  }
}
</script>

