<template lang="pug">
  div.hello

    p キーコンフィグのデモページです
    p Escキーを押すとキーコンフィグを開きます
    //- MdDialog(id='configModal' title="タグ編集" :showDialog.sync="showDialog")
    //-   div aaaaa
    h1.display {{display}}
    div
      h4 設定値
      div(v-for="(label, k) in keys") 
        div 
          span {{label}}:
          span {{k}}

    MyDialog(id='configModal' title="キーコンフィグ" v-if="showDialog")
      div(v-for="(label, k) in keys") {{label}}
        KeyBox(@change="onchange($event, k)" :pkey="k")
      div.message {{msg}}
      div
        button(@click="showDialog = false") OK
        button(style="margin-left:50px") キャンセル
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import MdDialog from './MdDialog.vue'
import MyDialog from './MyDialog.vue'
import KeyBox from './KeyBox.vue'

export default {
  name: 'hello',
  components: { MdDialog, MyDialog, KeyBox  },
  data() {
    return {
      msg: '',
      display: '',
      showDialog:false,
      keys:{
        'w':'上移動',
        'a': '左移動',
        's':'下移動',
        'd':'右移動'
      }
    }
  },
  mounted(){
    document.addEventListener('keydown', (ev) => {
      console.log(ev.key);
      if(ev.key === 'Escape') {
        // document.getElementById('configModal').modal('show')
        this.showDialog = !this.showDialog
      }
      else {
        let k = this.keys[ev.key]
        if (k) this.display = k
      }
    })
  },

  computed: {
    ...mapState(['point']),
    ...mapGetters(['foobaa']),
  },
  methods:{
    ...mapActions(['offsetPoint']),
    checkkey(key){
      return !this.keys[key]
    },
    onchange(key, keydata){
      console.log('onchange', key, keydata);
      this.msg = ''
      if (keydata === key) return // 同一キーは無視
      if (this.checkkey(key)) {
        this.keys[key] = this.keys[keydata]
        delete this.keys[keydata]
      } else {
        this.msg = 'すでに使われているキーです'
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
ul
  list-style-type: none
  padding: 0

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983

.input
  border-radius: 5px
  border: 1px solid #ccc
  font-size 2em
  width 50px
.message
  color red
button
  font-size 2em
  border-radius 5px 
  border: 1px solid #ccc
  background #fff
  padding 5px
  height 60px   
  width 180px
</style>
