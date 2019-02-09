<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="img/logo.png" alt="noncer.pro" class="logo">
                    </a>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleMenu()">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active' : isActive }">
                    <div class="navbar-start">
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
                                <img src="img/nimiq.png">
                            </a>
                        </div>
                    </div>
                </div>        
            </div>
        </nav>
        
    </div>
</template>

<script>
export default {
    data() {
        return{
            isActive: false
        }
    },
    methods: {
        toggleMenu: function(event){
            // Check value
            if(this.isActive){
                this.isActive = false;
            }else{
                this.isActive = true;
            }

        }
    }
}
</script>
