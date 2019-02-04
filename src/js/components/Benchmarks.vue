<template>
    <div class="table-container">      
        <table class="table is-striped is-fullwidth is-family-secondary">
            <thead>
                <tr>
                    <td class="has-text-weight-bold">Device</td>
                    <td class="has-text-weight-bold">Miner</td>
                    <td class="has-text-weight-bold">Parameters</td>
                    <td class="has-text-weight-bold">OS</td>
                    <td class="has-text-weight-bold">Hashrate</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td class="has-text-weight-bold">{{item.device}}</td>
                    <td>{{item.miner}} <span class="is-size-7 tag is-warning">{{item.version}}</span></td>
                    <td>{{parameters(item.parameters)}}</td>
                    <td><span class="tag is-info">{{item.os}}</span></td>
                    <td><span class="is-size-4 has-text-weight-bold">{{item.hashrate}}</span> <span class="is-size-7">MH/s</span></td>
                    
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
