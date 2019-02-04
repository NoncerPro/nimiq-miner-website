<template>
    <div>
        <div class="home-hero hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-two-fifths">
                            <h3 class="is-size-5 is-marginless is-family-primary has-text-weight-bold">NoncerPro</h3>
                            <h1 class="is-size-1 is-bold has-text-info m-b-md">Nimiq GPU Miner</h1>
                            <p class="is-size-5 is-family-secondary">Powerfull GPU miner done right!</p>
                            <div class="inline m-t-md m-r-xl">
                                <div class="">
                                    <link-box url="https://github.com/NoncerPro/noncerpro-nimiq-cuda/releases" icon="far fa-arrow-alt-circle-down" text="NVIDIA" disable=0></link-box>
                                </div>
                                <div class="">
                                    <link-box url="#" icon="far fa-arrow-alt-circle-down" text="AMD" disable=1></link-box>
                                </div>
                            </div>
                        </div>
                        <div class="column is-three-fifths">
                            <img class="resp-image" src="img/noncerpro-mac.png" alt="">
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
                <p>Download the miner depending on your OS (windows or Linux), edit the bash or bat file in a text editor to replace the default Nimiq address with yours, save and run the bash or bat file.</p>
                <p>
                    <strong>Sample contents of the bash file for Linux:</strong>
                </p>
                <p>
                    <pre>#!/bin/bash
./noncerpro --address='NQ52 7TL5 RA6B SSAS FULC P3SR D88B X2CK 0VTX' --threads=2</pre>
                </p>
                <p>
                    <strong>Sample contents of the bat file for Windows:</strong>
                </p>
                <p>
                    <pre>SET UV_THREADPOOL_SIZE=32
noncerpro.exe --address="NQ52 7TL5 RA6B SSAS FULC P3SR D88B X2CK 0VTX" --threads=2 
pause
                    </pre>  
                </p>
                <p>For more options and settings see the reository readme file for <a target="_blank" href="https://github.com/NoncerPro/noncerpro-nimiq-cuda">CUDA</a> and <a target="_blank" href="https://github.com/NoncerPro/noncerpro-nimiq-opencl">OpenCL</a>.</p>
            </div>
        </div>

        <div class="section">
            <div class="container">
                <h2 class="is-size-3 has-text-info">
                    Benchmarks
                </h2>
                <p>This is a supervised user contributed Benchmark, want to add yours? <a target="_blank" href="https://github.com/NoncerPro/nimiq-miner-website/tree/master/benchmarks">Read Here</a></p>
                <benchmarks></benchmarks>
            </div>
        </div>

        <div class="section">
            <div class="container">
                <h2 class="is-size-3 has-text-info">
                    Developer Fee
                </h2>
                <p>This miner has a fixed 2% dev fee. That means 2 minutes(plus 20 seconds to compensate for reconnecting and possible invalid shares at the begining) in every 100 minutes, miner will run with the donation wallet address.</p>
            </div>
        </div>

    </div>
</template>

<script>
import LinkBox from '../components/LinkBox'
import Benchmarks from '../components/Benchmarks'

export default {
    components:{
        LinkBox,
        Benchmarks
    }
}
</script>
