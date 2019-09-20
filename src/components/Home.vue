<template>
 <div id="retroclockbox1"  class="home-class"></div>

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
 .home-class{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
 }
</style>


