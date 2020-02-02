<template>
    <div class="base-select" :tabindex="tabindex"
        @blur="open = false">
        <div class="selected" :class="{open: open}"
            @click="open = !open">{{ selected }}</div>
            <div class="items" :class="{selectHide: !open}">
               <div class="item"
               v-for="(option ,i) of options"
               :key="i"
               @click="selected=option;
               open = false; $emit('input',option)">{{ option }}</div>

            </div>

    </div>
</template>

<script>
    export default {
        props:{
            options:{
                type:Array,
                required: true
            },
            tabindex:{
                type:Number,
                required:false,
                default:0
            }
        },
        data(){
            return{
                selected: this.options.length > 0 ? this.options[0] : null,
                open: false
            }
        },
        mounted(){
            this.$emit("input",this.selected)
        }
    }
</script>

<style scoped>
.base-select {
  position: relative;
  width: 105px;
  text-align: left;
  outline: none;
  height: 35px;
  line-height: 35px;
}

.selected {
  background-color:transparent;
  border-radius: 6px;
  border: none;
  color:black;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.selected.open {
  border: none;
  border-radius: 6px 6px 0px 0px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.items {
  color: black;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border: none;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
}

.item {
  color:black;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.item:hover {
  background-color: white;
}

.selectHide {
  display: none;
}
</style>