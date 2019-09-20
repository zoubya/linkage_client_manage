<template>
 <div>
   <!-- <a href="../../static/login/index.html">登陆页.html</a> -->
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   mounted() {
       this.toLogin();
   },
   methods: {
       toLogin(){
            location.href="../../static/login/index.html"
       }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
