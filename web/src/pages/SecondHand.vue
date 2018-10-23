<template>
  <div class="wrapper">
    <navbar/>
    <sidebar-left/>
    <authentication ref="authentication"/>
    <div class="content-inner">
      <div class="content header-page" v-if="curentLanguage === 'en'">
        <div>
          <h1>Second hand</h1>
          <p><strong>Under construction.</strong></p><strong>
          <p></p>

          </strong>
        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'et'">
        <div>
          <h1>Leiunurk</h1>
          <p><strong>Võtame komisjoni müüki kasutatud kassaseadmeid. Kui Teil on soov oma kasutatud kassaseadmed müüki panna siis saatke list mudelitest info@hool.ee</strong></p>
          <p>Müügil olevate kasutatud seadmete soetamiseks valiga vasakult tootekataloogist kõige alt "Leiunurk" ning saab tutvuda hetkel müügil olevate kasutatud kassaseadmetega.</p>
          <p></p>
        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'fi'">
        <div>
          <h1>Second hand</h1>
          <p><strong>Under construction.</strong></p><strong>
          <p></p>

          </strong>
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
