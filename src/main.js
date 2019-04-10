import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/styles.sass'


export default function (Vue, { head }) {

  

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,800'
  },
  {
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
  })
  

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}


