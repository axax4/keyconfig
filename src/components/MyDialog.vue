<template lang="pug" >
div.dialog-back(:id="id", tabindex="-1", :style="backStyle")
    div.dialog-body(:style="bodyStyle")
        div.modal-content
            div.modal-header
                //- button.close(data-dismiss="modal", aria-label="Close")
                //-     span(aria-hidden="true") &times;
                h4.modal-title {{title}}
                slot(name="header")
            div.modal-body
                slot
            div.modal-footer
</template>

<script>

export default {
  name:'MyDialog',
  mounted(){
    this.calc()
    window.addEventListener('resize', this.calc)
  },
  data(){
    return {
      bodyWidth:600, bodyHeight:400 , backStyle:'', bodyStyle:''
    }
  },
  props: {
    id: '',
    title: '',
  },
  computed:{
    // backStyle(){
    //   return 'height:' + window.innerHeight + 'px;'
    // },
    // bodyStyle(){
    //   return 'top:' + ( window.innerHeight * 0.05 ) + 'px;left:' + 
    //   ( window.innerWidth / 2 - this.bodyWidth / 2 ) + 'px;width:' + this.bodyWidth + 'px;' + 
    //   'height:' + this.bodyHeight + 'px'
    // }
  },
  methods:{
    calc(){
      this.backStyle =
         'height:' + window.innerHeight + 'px;'
      
      this.bodyStyle =
        'top:' + ( window.innerHeight * 0.05 ) + 'px;left:' + 
        ( window.innerWidth / 2 - this.bodyWidth / 2 ) + 'px;width:' + this.bodyWidth + 'px;' + 
        'height:' + this.bodyHeight + 'px'

    }
  },
}
</script>

<style lang="stylus">
.pre-area
  white-space pre

.dialog-back {
    position: absolute;
    top:0px;
    left:0px;
    width:100%;
    // background-color: #000;
    // opacity: 0.5;
    // opacityだと子要素にも適用されてしまう

    background-color: rgba(0,0,0, 0.5);

}
.dialog-body {
    position: absolute;
    border-radius: 6px 6px 6px 6px;
    // left:75px;
    // top:150px;
    // width:200px;
    // height:150px;
    background-color: #FFF;
    box-shadow: 6px 6px 6px rgba(0,0,0,0.4);  /* CSS3 */
    padding:5px;
    opacity: 1;
}  
</style>
