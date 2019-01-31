<template>
    <div>
        <div class="home-hero hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-two-fifths">
                            <h3 class="is-size-5 is-family-secondary">NoncerPro</h3>
                            <h1 class="is-size-1 is-bold has-text-info">Nimiq GPU Miner</h1>
                            <p class="m-t-xl is-size-5">Powerfull GPU miner that works well with pools.</p>
                            <div class="columns m-t-md m-r-xl">
                                <div class="column">
                                    <link-box url="https://github.com/NoncerPro/noncerpro-nimiq-cuda/releases" icon="far fa-arrow-alt-circle-down" text="NVIDIA" disable=0></link-box>
                                </div>
                                <div class="column">
                                    <link-box url="#" icon="far fa-arrow-alt-circle-down" text="AMD" disable=1></link-box>
                                </div>
                            </div>
                        </div>
                        <div class="column is-three-fifths">
                            <img src="img/noncerpro-mac.png" alt="">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <h2 class="is-size-3 has-text-info">
                    Quick Start
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quibusdam nihil illo nostrum, in cupiditate vero voluptatum, aperiam sunt inventore commodi nesciunt iste earum repellat porro facilis qui corporis quaerat.</p>
            </div>
        </div>

        <div class="section">
            <div class="container">
                <h2 class="is-size-3 has-text-info">
                    Benchmarks
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quibusdam nihil illo nostrum, in cupiditate vero voluptatum, aperiam sunt inventore commodi nesciunt iste earum repellat porro facilis qui corporis quaerat.</p>
            </div>
        </div>

        <div class="section">
            <div class="container">
                <h2 class="is-size-3 has-text-info">
                    Developer Fee
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quibusdam nihil illo nostrum, in cupiditate vero voluptatum, aperiam sunt inventore commodi nesciunt iste earum repellat porro facilis qui corporis quaerat.</p>
            </div>
        </div>

    </div>
</template>

<script>
import LinkBox from '../components/LinkBox'

export default {
    components:{
        LinkBox
    }
}
</script>
