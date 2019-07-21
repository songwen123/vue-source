<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
 
<script>
import {Mixins} from '@/mixin.js';
export default {
  mixins: [Mixins],
  data () {
    return {
      msg: 'I am #app',
      msg2: 'I am msg2'
    }
  },
  created() {
    console.log(this.msg)
    console.log('我是混入对象中的变量：' + this.msg1)
  }
}
</script>
