module.exports = {
    title: "淡水海边",
    description: "分享各类资源、教程等等",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "基础教程", link: "/vue2/" },
            { text: "gitee", link: "https://gitee.com/Rewind_ljp/knowledge" }
        ],
        sidebar: [{
            title: 'vue2系列', // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                ['vue2/', "vue2特点介绍"]
            ]
        }, ],
        // 最后更新时间
        lastUpdated: 'Last Updated'
    },
};