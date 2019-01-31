<template>
    <a :class="dynamicClass" :href="url">
        <div class="icon-wrapper">
            <i :class="icon"></i>    
        </div>
        <div class="text">{{text}}</div>
    </a>
</template>

<script>
export default {
    props:[
        'url',
        'icon',
        'text',
        'disable'
    ],
    mounted(){

    },
    computed:{
        dynamicClass()
        {
            if (this.disable == 1)
            {
                return "link-box is-disable"
            }
            
            return "link-box"    
        }
    }
}
</script>

