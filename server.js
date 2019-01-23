var http = require("http")
var url = require('url');
var util = require('util');

http.createServer((req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    var params = url.parse(req.url, true).query;
    var path = url.parse(req.url).path
    console.log(`-----------------------${path}----------------------`)
    let tag = [
        "区块链1",
        "人工智能2",
        "大数据3",
        "云计算4",
        "区块链5",
        "人工智能6",
        "大数据7",
        "云计算8",
        "区块链9",
        "人工智能10",
        "大数据11",
        "云计算12",
        "区块链13",
        "人工智能14",
        "大数据15",
        "云计算16",
        "区块链17",
        "人工智能18",
        "大数据19",
        "云计算20",
        "区块链21",
        "人工智能22",
        "大数据23",
        "云计算24",
        "区块链25",
        "人工智能26",
        "大数据27",
        "云计算28",
        "区块链29",
        "人工智能30",
        "大数据31",
        "云计算32",
    ];

    let list = {
        res_code: 0,
        res_desc: "success",
        data: {
            topicList: [{
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
            }],
            recommendList: [{
                    id: 1,
                    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
                },
                {
                    id: 2,
                    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
                },
                {
                    id: 3,
                    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
                },
                {
                    id: 4,
                    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
                },
                {
                    id: 5,
                    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
                }
            ]
        }
    }

    let loadMoreData = {
        "success": "ok",
        "data": [{
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
    }

    let detail = {
        "success": "ok",
        "data": {
            id: 1,
            title: "123465789",
            content: `
        	    <img src="https://upload-images.jianshu.io/upload_images/11971454-67c034b302459f49.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/435/format/webp" alt="" />
        	                    <p>1234651234654612346512346546123465123465461234651234654612346512346546</p>
        	                    <p>1234651234654612346512346546123465123465461234651234654612346512346546</p>
        	                    <p>1234651234654612346512346546123465123465461234651234654612346512346546</p>
        	                    <p>1234651234654612346512346546123465123465461234651234654612346512346546</p>
        	    `
        }
    }

    if (req.url == "/") {
        res.end(JSON.stringify({
            code: 0,
            data: "ok"
        }))
    }
    if (path.indexOf("tag") > -1) {
        res.end(JSON.stringify(tag))
    }
    if (path.indexOf("home") > -1) {
        console.log(list);
        res.end(JSON.stringify(list))
    }
    if (path.indexOf("loadMore") > -1) {
        console.log(list);
        res.end(JSON.stringify(loadMoreData))
    }

    if (path.indexOf("detail") > -1) {
        console.log(list);
        res.end(JSON.stringify(detail))
    }


}).listen(3001, () => {
    console.log("server statrt")
})