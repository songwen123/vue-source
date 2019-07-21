<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="toggleShow()">aaaaaaaaaaaa</div>
    <div>{{isshowing}}</div>
    <div>{{msg1}}</div>
    <div>{{hello}}</div>
  </div>
</template>
 
<script>
import {toggle,mixOne, mixTwo} from '@/mixin.js';
export default {
  mixins: [toggle,mixOne, mixTwo],
  created() {
    this.test();
    this.test2();
    console.log("这是b.vue 的create");
  },
  mounted () {
      
  },
  data () {
    return {
      msg: 'bbb',
      msg1: '这是b.vue的msg数据',
      hello: '这是b.vue的hello数据'
      
    }
  },
  methods: {
    test(){
      console.log("这是b.vue的 test");
    },
  }
}
</script>
