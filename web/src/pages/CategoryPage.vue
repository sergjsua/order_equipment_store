<template>  
  <div class="wrapper">
    <navbar/>
    <sidebar-left/>
    <div class="page-wrapper">
      <div class="content">
        <div v-if="category && category.category" class="category-page-header">
          <template v-if="currentLanguage=='en'">
            <h1  class="product-title">{{ category.category.name }}</h1>
          </template>
          <template v-if="currentLanguage=='et'">
            <h1  class="product-title">{{ category.category.name_et }}</h1>
          </template>
          <template v-if="currentLanguage=='fi'">
            <h1  class="product-title">{{ category.category.name_fi }}</h1>
          </template>
        </div> c
        <div class="content-inner">
          <ul>
            <template v-if="category && category.first_level">
              <li v-for="product in category.first_level.MainProducts"  @click="product ? goToProduct(product.name) : ''" style="margin-bottom:10px">
                <div class="left" style="width:7%">
                  <img v-if="product" v-bind:src=product.picture alt="" style="max-height:60px">
                </div>
                <div class="right">
                  <p>{{ product.name }}<p>
                  <p>{{ product.description }}</p>
                </div>
              </li>
            </template>  
            <template v-if="category && category.second_level">
              <template v-for="categoryL2 in category.second_level">  
                <li v-for="product in categoryL2.MainProducts"  @click="product ? goToProduct(product.name) : ''" style="margin-bottom:10px">
                  <div class="left" style="width:7%">
                    <img v-if="product" v-bind:src=product.picture alt="" style="max-height:60px">
                  </div>
                  <div class="right">
                    <p>{{ product.name }}<p>
                    <p>{{ product.description }}</p>
                  </div>
                </li>
              </template>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <footerbar/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import CategorySidebar from '@/components/sidebar/CategorySidebar'
import ShoppingCartSidebar from '@/components/sidebar/ShoppingCartSidebar'
import Footer from '@/components/Footer'
import Notifications from '@/components/Notifications'
import Authentication from '@/components/Authentication'

export default {
  data () {
    return {
      currentLanguage: this.$route.params.language || this.$cookie.get('language') || 'en',
      category: {},
      subcategory: {}
    }
  },
  components: {
    'navbar': Navbar,
    'sidebar-left': CategorySidebar,
    'sidebar-right': ShoppingCartSidebar,
    'footerbar': Footer,
    'notifications': Notifications,
    'authentication': Authentication
  },
  computed: {
  },
  async mounted () {
    const { $route, $store } = this
    const { category, subcategory } = $route.params
    this.category = await $store.dispatch('getCategoryProducts', {
      category: category ? category.replace('/', '%2F') : '',
      subcategory: subcategory ? subcategory.replace('/', '%2F') : ''
    })

    this.setLanguage()
  },
  watch: {
    async $route (categoryNew) {
      const { $route, $store } = this
      const { category, subcategory } = $route.params
      this.category = await $store.dispatch('getCategoryProducts', {
        category: category ? category.replace('/', '%2F') : '',
        subcategory: subcategory ? subcategory.replace('/', '%2F') : ''
      })
    }
  },
  methods: {
    setLanguage () {
      this.$root.$on('setLanguage', (language) => {
        if (language) {
          this.currentLanguage = language
        }
      })
    },
    goToProduct (product) {
      this.$router.push(`/${this.currentLanguage}/product/${product.replace('/', '%2F')}`)
    }
  }
}
</script>

<style scoped>
ul {
  float: left;
  width: 100%;
  margin: 0;
  padding: 0;
}
li {
  float: left;
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
  cursor: pointer;
}
.left > img {
  max-width: 100%;
  height: auto;
}
li > .left {
  float: left;
  width: 20%;
}
li > .right {
  float: left;
  width: 80%;
  text-align: left;
}
</style>
