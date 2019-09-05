<template>
 <div id="retroclockbox1"></div>
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
</style>


