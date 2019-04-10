<template>
  <div class="layout">
    <div class="page-nav">
      <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <g-link class="navbar-item" :to="{ name: 'home' }">
                    <img src="../assets/img/logo.png" alt="noncer.pro" class="logo">
                </g-link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleMenu()">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': MenuIsActive }">
              <div class="navbar-start">
                <g-link class="navbar-item" :to="{ name: 'blog' }">
                    <i class="far fa-question-circle"></i> Articles
                </g-link>
                <a class="navbar-item" href="https://github.com/NoncerPro/noncerpro-nimiq-cuda" target="_blank">
                    <i class="fab fa-github"></i> CUDA
                </a>
                <a class="navbar-item" href="https://github.com/NoncerPro/noncerpro-nimiq-opencl" target="_blank">
                    <i class="fab fa-github"></i> OpenCL
                </a>
                <a class="navbar-item" href="https://discord.gg/DWDnJBy" target="_blank">
                    <i class="fab fa-discord"></i> Discord
                </a>
              </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <a target="_blank" href="https://nimiq.com/">
                        <img src="../assets/img/nimiq.png">
                    </a>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    <slot/>


    <div class="page-footer">

      <div id="footer" class="section is-medium">
        <div class="container has-text-centered">
          <div class="inline-center">
            <a href="/">
                <img src="../assets/img/logo2.png" alt="NoncerPro">
            </a>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  data() {
    return{
      MenuIsActive: false
    }
  },
  computed: {
    titleTag () {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    },
    config () {
      return config
    }
  },
  methods: {
    toggleMenu: function(event){
      // Check value
      if(this.MenuIsActive){
          this.MenuIsActive = false;
      }else{
          this.MenuIsActive = true;
      }
    }
  }
}
</script>

