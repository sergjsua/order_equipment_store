<template>
  <div class="wrapper">
    <navbar/>
    <sidebar-left/>
    <authentication ref="authentication"/>
    <div class="content-inner">
      <div class="content header-page" v-if="curentLanguage === 'en'">
        <div>
          <h1>About</h1>
          <p><strong>Hool OÜ is selling POS hardware since 2004.</strong></p><strong>
          <p></p>
          </strong>
        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'et'">
        <div>
          <h1>Firmast</h1>
          <p><strong>Hool OÜ on kassaseadmete impordi- ja hulgimüügi ettevõte aastast 2004 ning varustame peamiselt kaupluste kette, IT ettevõtteid, tööstus- ning logistikaettevõtteid.</strong></p>
          <p>Meie toodete hulka kuuluvad :  kassaseadmed, ribakoodilugejad, käsiterminalid, kliendinäidikud, tšekiprinterid, etiketiprinterid, plastikkaardiprinterid, eurodetektorid, mündilugejad, magnetkaardilugejad, puutetundlikud monitorid ja kõik-ühes kassaarvutikomplektid. </p>
          <p></p>

        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'fi'">
        <div>
          <h1>About</h1>
          <p><strong>Hool OÜ is selling POS hardware since 2004.</strong></p>
          <strong>
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
