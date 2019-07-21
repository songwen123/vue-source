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
      msg: 'aaaa'
    }
  },
  created() {
    console.log('#app Created')
  }
}
</script>
