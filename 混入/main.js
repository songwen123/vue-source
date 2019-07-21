import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import routes from './routes';
Vue.use(Router);
const router = new Router({routes});
// 全局混入 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
	created: function () {
	  var myOption = this.$options.myOption
	  if (myOption) {
		console.log(myOption)
	  }
	}
  });
var mixin = {
	created: function () {
        document.write('混入调用' + '<br>')
    },
    methods: {
        hellworld: function () {
            document.write('HelloWorld 方法' + '<br>');
        },
        samemethod: function () {
            document.write('Mixin：相同方法名' + '<br>');
        }
    }
};
var vm =  new Vue({
	myOption: 'hello!',
	el:'#app',
	render:h=>h(App),
	router,
	mixins: [mixin],
    created: function () {
        document.write('组件调用' + '<br>')
	},
	methods: {
        start: function () {
            document.write('start 方法' + '<br>');
        },
        samemethod: function () {
            document.write('Main：相同方法名' + '<br>');
        }
    }
});
vm.hellworld();
vm.start();
vm.samemethod();
