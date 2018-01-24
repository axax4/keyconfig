<template lang="pug">
  div.hello

    p キーコンフィグのデモページです
    p Escキーを押すとキーコンフィグを開きます
    div
      h4 設定値
      div(v-for="k in keys") 
        div 
          span {{k.label}}:
          span {{k.key}}
    h1.display {{display}}

    MyDialog(id='configModal' title="キーコンフィグ" v-if="showDialog")
      div.panel
        div
          div(v-for="k in keys") {{k.label}}
            KeyBox(@change="onchange($event, k)" :pkey="k.key")
        div.preset
          div プリセット
          button(@click="preset('wasd')") wasd
          button(@click="preset('cursor')") カーソル
      div.message {{msg}}
          
      div(style="position:absolute; bottom:10px; margin-left:200px;")
        button(@click="showDialog = false") 閉じる(Esc)
</template>

<script>
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import MyDialog from './MyDialog.vue'
import KeyBox from './KeyBox.vue'

export default {
  name: 'hello',
  components: { MyDialog, KeyBox  },
  data() {
    return {
      msg: '',
      display: '',
      showDialog:false,
      keys:[
        {label:'上移動', key:'w'},
        {label:'左移動', key:'a'},
        {label:'下移動', key:'s'},
        {label:'右移動', key:'d'},
      ], 
      preset_data:{
        'wasd': 'wasd'.split(''),
        'cursor': ['ArrowUp', 'ArrowLeft','ArrowDown','ArrowRight',]
      }
    }
  },
  mounted(){
    document.addEventListener('keydown', (ev) => {
      console.log(ev.key, this.keyobj);
      if(ev.key === 'Escape') {
        // document.getElementById('configModal').modal('show')
        this.showDialog = !this.showDialog
      }
      else {
        // let k = this.keys.find( a => a.key === ev.key)
        let label = this.keyobj[ev.key]
        if (label) this.display = label
      }
    })

    document.addEventListener('keyup', (ev) => {
      this.display = ''
    })    
  },

  computed: {
    // ...mapState(['point']),
    // ...mapGetters(['foobaa']),
    keyobj(){
      console.log('create keyobj');
      return this.keys.reduce( (a, b) => {
        a[b.key] = b.label
        return a
      }, {})
    }
  },
  methods:{
    // ...mapActions(['offsetPoint']),
    checkkey(key){
      return !this.keys.some( k => k.key === key)
    },
    onchange(key, keydata){
      console.log('onchange', key, keydata);
      this.msg = ''
      if (keydata.key === key) return // 同一キーは無視
      if (this.checkkey(key)) {
        keydata.key = key
      } else {
        this.msg = 'すでに使われているキーです'
      }
    },
    preset(name){
      let key_array = this.preset_data[name]
      if(!key_array)return
      for (let i=0;i<4;i++) {
        this.keys[i].key = key_array[i]
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
  // border: 1px solid #ccc
  background #fff
  padding 5px
  // height 60px   
  // width 180px
  // margin-top 50px
.panel
  display flex
  // flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
  justify-content: center; /* 子要素をflexboxにより中央に配置する */
  align-items: center;  /* 子要素をflexboxにより中央に配置する */
.panel>div
  margin auto
.preset
  display flex
  flex-flow column
</style>
