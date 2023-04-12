module.exports = {
    title: "淡水海岸",
    description: "分享各类资源、教程等等",
    base: '/knowledge-view/',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "基础指南", link: "/vue2/" },
            { text: "联系作者", link: "/guide/concact" },
            { text: "github", link: "https://github.com/JAY-825/knowledge-gihub" }
            // { text: "gitee", link: "https://gitee.com/Rewind_ljp/knowledge" }
        ],
        sidebar: [{
                title: 'vue2系列', // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ['vue2/', "vue2特点介绍"],
                    ['vue2/spa', "对单页面应用(spa)的理解"],
                    ['vue2/ifandshow', "v-if和v-show的区别"],
                    ['vue2/life', "vue2生命周期"],
                    ['vue2/data', "vue中的data属性"],
                    ['vue2/cor', "vue组件通信方式"],
                ]
            },
            {
                title: 'JavaScript系列', // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ['javascript/', "javascript特性"],
                    ['javascript/datatype', "javascript数据类型"],
                ]
            },
            {
                title: 'NodeJs系列', // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ['nodejs/', "Node.js介绍"],
                    ['nodejs/fs', "Node.js的文件模块"],
                    ['nodejs/path', "Node.js的path模块"],
                    ['nodejs/npm', "npm包管理工具"],
                    ['nodejs/http', "Node.js的http模块"],
                    ['nodejs/module', "Node.js模块"],
                ]
            },
            {
                title: 'ES6系列', // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ['es6/', "ES6介绍"],
                    ['es6/declaer', "var/let/const"],
                    ['es6/array', "数组新增方法"],
                    ['es6/object', "对象新增方法"],
                    ['es6/function', "函数新增方法"],
                    ['es6/setandmap', "set/map数据结构"],
                    ['es6/deconstruction', "解构赋值"],
                ]
            },
            {
                title: '小程序系列', // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    ['mini/', "小程序介绍"]
                ]
            },
            {
                title: '开发插件推荐系列', // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    ['codevs/', "vscode插件推荐"]
                ]
            },
        ],
        // 最后更新时间
        lastUpdated: 'Last Updated'
    },
};