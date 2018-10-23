<template>
  <div class="wrapper">
    <navbar/>
    <sidebar-left/>
    <authentication ref="authentication"/>
    <div class="content-inner">
      <div class="content header-page" v-if="curentLanguage === 'en'">
        <div>
          <h1>Support/Services</h1>
          <p><strong>Under construction.</strong></p>
          <p></p>

        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'et'">
        <div>
          <h1>Garantiiremont</h1>
          <p>Hool Kassaseadmed pakub kõigile oma müüdavatele seadmetele garantiiremonti või seadme
          väljavahetamist tootja määratud garantiiaja kehtivuse jooksul. Garantiiaja pikkused on toodud meie
          kodulehel vastava toote lehel.</p>
          <p>Remondiaja pikkus sõltub veast, seadmest ja varuosade saadavusest. Esmane hooldus ja garantiiremont toimub meie kontoris. Kui meie kontoris remontida ei õnnestu, siis
          saadame seadme Euroopa vastavasse töökotta.</p>
          <p>Palume saata remonti vajav seade meie kontorisse Tamme pst 47, 50405 Tartu</p>
          <p>Kui soovite täpsustada garantiiaja kehtivust, palun saatke meile seadmel kirjas olev seerianumber (S/N). Kulumaterjalid ja kaablid ei kuulu tavaliselt garantii alla.</p>

          <h1>Eurodetektorite kalibreerimine, tarkvara uuendamine ning remont.</h1>
          <p>- Detektorite kalibreerimine<br>
          - Tarkvara uuendamine<br>
          - Detektorite remont</p>
          <p>Eurodetektorid vajavad aegajalt hooldust, sõltuvalt kasutusest. Sõltuvalt kasutustihedusest vajavad IR andurid kalibreerimist. Seda võib teha näiteks aastas korra,
          aga selline vajadus on möödapääsmatu, kui detektor ei tunne enam õiget rahatähte ära.</p>
          <p>Kui Euroopa Keskpank väljastab uued rahatähed uute turvaomadustega, siis on tarvis õpetada
          detektor neid omadusi tundma. Praktikas tähendab see tarkvara uuendamist.</p>
          <p>Palume saata remonti vajav seade meie kontorisse Tamme pst 47, 50405 Tartu</p>

          <h1>Mündilugejate hooldus ja remont.</h1>
          <p>- Mündiketaste ning andurite puhastamine<br>
          - Remont ja hammasrataste vahetus</p>
          <p>Kuna mündid on tihtipeale määrdunud, siis vajavad mündilugejad regulaarset puhastamist, sõltuvalt
          kasutusest ja töökeskkonnast. Samuti võivad pikapeale kuluda hammasrattad, mille saame välja
          vahetada.</p>
          <p>Palume saata remonti vajav seade meie kontorisse Tamme pst 47, 50405 Tartu</p>

          <h1>Tšeki- ja etiketiprinterite remont</h1>
          <p>Printerite remont<br>
          - Termopeade vahetamine</p>
          <p>Printerites on hulgaliselt liikuvaid ja kuumenevaid osasid. Mis liigub, see kulub. Printerite hooldust ja
          remonti pakume koostöös partneriga Tartus ja Tallinnas.</p>
          <p>Palume saata remonti vajav seade meie kontorisse Tamme pst 47, 50405 Tartu</p>

          <h1>Ribakoodilugejate remont</h1>
          <p>Kui ribakoodilugeja lakkab töötamast, on levinuimaks põhjuseks vigane kaabel. Sellisel puhul saame
          kaabli välja vahetada. Ribakoodilugejate laser-, imager- või CCD skanneerimise mootoreid me ei
          remondi ja selliste vigade korral vajab seade tavaliselt välja vahetamist.</p>
          <p>Palume saata remonti vajav seade meie kontorisse Tamme pst 47, 50405 Tartu</p>

          <h1>Kassasahtlite remont</h1>
          <p>- Klambrite vahetus<br>
          - Lukkude vahetus</p>
          <p>Kassasahtlite klambrid kuluvad ja neid pinges hoidvad vedrud väsivad aja jooksul.
          Kuna kassasahtli lukke kasutatakse sageli päevas palju kordi, siis ka need kuluvad. Tavaliselt on lukud
          vahetatavad. Palume teha päring vastavalt oma sahtli mudelile.
          Klambrite ja lukkude vahetusega saavad poe töötajad tavaliselt ise hakkama. Oleme satnud neid
          postiga otse kliendile.</p>
          <p>Teiste seadmete hoolduse ja remondi puhul palume teha vastav päring e-kirjaga. Soovitav on saata
          seadme seerianumber (S/N)</p>
        </div>
      </div>
      <div class="content header-page" v-if="curentLanguage === 'fi'">
        <div>
          <h1>Support/Services</h1>
          <p><strong>Under construction.</strong></p>
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
