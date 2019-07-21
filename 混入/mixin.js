export const toggle = {
    data () {
        return {
            isshowing:false
        }
    },
    methods: {
        toggleShow() {
            this.isshowing = !this.isshowing
        }
    }
};
//
export const mixOne = {
    data() {
        return {
            msg1: '这是mixOne1的数据',
            msg2: '这是mixOne2的数据',
            msg3: '这是mixOne3的数据'
        }
    },
    created(){
        console.log("这是mixOne的create ");
    },
    methods:{
        test(){
             console.log("这是mixOne的 test");
        },
        test2(){
             console.log("这是mixOne的 test2");
        }
    }

};
 
export const mixTwo = {
    data() {
        return {
            msg1: '这是mixTwo1的数据',
            msg2: '这是mixTwo2的数据',
            msg3: '这是mixTwo3的数据'
        }
    },
    created(){
        console.log("这是mixTwo的create ");
    }

};
export const  Mixins = {
    data: {
        msg: 'I am Mixins',
        msg1: 'I am Mixins msg1'
    },
    created() {
        console.log('我是组件中的变量：' + this.msg2)
    },
    methods: {
        mixin: function() {
            console.log('Mixin')
        },
        mixinTwo: function () {
            console.log('MixinTwo')
        }
    }
};
