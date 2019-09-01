<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <test-show
    :context="testData"
    >
    </test-show>
  </div>
</template>

<script>


export default {
  name: 'home',
  data()
  {
    return{
      testData:"I'm Home.vue"
    }
  }
}
</script>
