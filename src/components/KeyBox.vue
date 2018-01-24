<template lang="pug">
input.input(@keyup.prevent="onkey" @keydown.prevent="" :value="pkey")
      
</template>

<script>
export default {
  name: 'keybox',
  components: { },
  props:{
    'pkey':String
  },
  data() {
    return {
    }
  },
  mounted(){
  },
  computed: {
  },
  methods:{
    onkey(ev){
      console.log(ev.key);
      if (ev.key === 'Tab') return // Tabキーはブラウザ機能を維持するため無効
      let value
      if (ev.key === ' ') {
        value = 'Space'
        return
      } else {
        value = ev.key
      }
      this.$emit('change', value)
    }
  },
}
</script>

<style lang="stylus" scoped>
.input
  border-radius: 5px
  border: 1px solid #ccc
  font-size 2em
  width 200px
  // padding-left 10px
  text-align center
</style>
