import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import routes from './routes';
Vue.use(Router);
const router = new Router({routes});
// 定义一个混入对象
/* 
局部混入

选项合并
当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。
比如，数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先。
Vue 实例与混入对象包含了相同的方法。从输出结果可以看出两个选项合并了。

如果 methods 选项中有相同的函数名，则 Vue 实例优先级会较高。如下实例，Vue 实例与混入对象的 methods 选项都包含了相同的函数：
实例


全局混入
也可以全局注册混入对象。注意使用！ 一旦使用全局混入对象，将会影响到 所有 之后创建的 Vue 实例。
使用恰当时，可以为自定义对象注入处理逻辑。
谨慎使用全局混入对象，因为会影响到每个单独创建的 Vue 实例 (包括第三方模板)。


选项合并：当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合
1. 数据 data 合并：
  		1. 数据对象在内部分进行浅合并（一层属性深度），在和组件的数据发生冲突时， 以组件数据优先;

       2. 如果 mixins 中的数据与组件中的数据冲突时（例如: msg1）, 以组件数据为优先

       3. 如果 mixins 中的数据与组件中的数据不冲突，但是与另外的mixins的对象的数据冲

        突时(例如：msg2）,则根据 引入 mixins的对象的顺序，决定以后加载的为优先；

       4. 如果mixins 中的数据都不存在冲突，则都会合并到组件数据中。
2. 钩子函数的合并
 结论：1. 同名钩子函数将混合为一个数组，因此都将被调用

      2. 混入对象（mixins对象）的钩子将在组件自身钩子之前调用

      3. 混入对象如果有多个，并且每个都包含同名的钩子函数，则调用顺序依照混入对象的引入顺序执行
3. 值为对象选项合并
	结论：1. 值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象
     2.  两个对象键名冲突时，取组件对象的键值对
*/
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
