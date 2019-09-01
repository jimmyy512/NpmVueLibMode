import testShow from "./src/test-show.vue"

testShow.install =function(Vue){
  Vue.component(testShow.name,testShow);
}

export default testShow