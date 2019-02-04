<template>
    <div class="table-container">      
        <table class="table is-striped is-fullwidth is-family-secondary">
            <thead>
                <tr>
                    <td>Device</td>
                    <td>Miner</td>
                    <td>Parameters</td>
                    <td>OS</td>
                    <td>Hashrate</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td class="has-text-weight-bold">{{item.device}}</td>
                    <td>{{item.miner}} <span class="is-size-7">{{item.version}}</span></td>
                    <td>{{parameters(item.parameters)}}</td>
                    <td>{{item.os}}</td>
                    <td><span class="is-size-5 has-text-weight-bold">{{item.hashrate}}</span> <span class="is-size-7">MH/s</span></td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },
    mounted(){
        axios.get("benchmarks.json").then( (resp) => {
            this.items = resp.data;
        });
    },
    methods:{
        parameters(params){
            return `--batchsize=${params.batchsize} --threads=${params.threads}`
        }
    }
}
</script>
