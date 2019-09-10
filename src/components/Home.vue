<template>
 <div class="index-class">
 <div id="retroclockbox1" ></div>
</div>
</template>

<script>
import $ from 'jquery'
import {flipcountdown} from '../assets/flipcountdown/jquery.flipcountdown.js'
export default {
   data () {
     return {

     }
   },
   components: {

   }
 }	
$(function(){
    $('#retroclockbox1').flipcountdown({
        size:"lg"
    });
})
</script>


<style>
 @import '../assets/flipcountdown/jquery.flipcountdown.css';
 .index-class{
    /*flex 布局*/
     display: flex;
     /*实现垂直居中*/
     align-items: center;
     /*实现水平居中*/
     justify-content: center;
     width: 100%;
     height: 100%;
 }
</style>


