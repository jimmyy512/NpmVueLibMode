<template>
  <div id="testShow">
    <div>
      this is test show
    </div>
    <div>
      {{context}}
    </div>

  </div>
</template>

<script>
export default {
  name:"testShow",
  props:{
    context:{
      type:String,
      default:"Props context is Null",
    }
  }
}
</script>

<style>

</style>