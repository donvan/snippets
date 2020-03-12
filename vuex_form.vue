<template>
    <div>
        <input v-model="message">
    </div>
</template>

<script>
export default {
    data(){

    },
    computed:{
        msg:{ //计算属性的set来改变vuex中的属性
            get(){
                return this.$store.state.obj.message
            },
            set(value){
                this.$store.commit('updataMessage',value)
            }
        }
    }
}
</script>