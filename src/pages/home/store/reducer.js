import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: "音乐",
            imgUrl: "https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            id: 2,
            title: "电影",
            imgUrl: "https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            id: 3,
            title: "手绘",
            imgUrl: "https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        }
    ],
    articleList: [{
        id: 1,
        title: "七绝 庐山瀑布",
        desc: "在庐山瀑布面前，有李白的雕像，诗仙有名作，与现实相差太大，当时不敢吟诗，今日，还是班门弄斧，草吟一首。 七绝 庐山瀑布 登上香炉大暑天， ...",
        imgUrl: "https://upload-images.jianshu.io/upload_images/7866155-5072e853256667c7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        id: 2,
        title: "Android 腾讯音视频聊天的实现",
        desc: "前言 近期项目做即时聊天，以前已经实现，使用环信实现的，当时用时不到一个星期，但是视频通话质量不是很好，老板不是很喜欢，要求换成腾讯，然后开始调...",
        imgUrl: "https://upload-images.jianshu.io/upload_images/9164201-6d36c0fab7907ab6.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        id: 3,
        title: "人生没有白走的路，命运总会给我最好的",
        desc: "文/沐云芝 人生的每一步都没有白走，不管是好是坏，我们欣然接受命运的安排，没有得到自己想要的，一定会得到最好的。 我从4月9号辞职，做了三个月的...",
        imgUrl: "https://upload-images.jianshu.io/upload_images/6449074-f1f994168f783e86.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }]
})

export default (state = defaultState, action) => {

    switch (action.type) {

        default:
            return state
    }
}