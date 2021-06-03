   // let infor = {
        //     title: "邓红成的学习",
        //     link: "www.baidu.com",
        //     go: function () {
        //         console.log("年入百万");
        //     }
        // };

        //es6简写
        
        //因为对象是key：value存在
        //1.如果key和变量的名字一致，定义一次即可
        //2.如果value是一个函数，可以吧:function去掉，只剩下()即可
        var title = "邓红成的学习";
        var link = "www.baidu.com";

        let info2 = {
            title,
            link,
            go() {
                console.log("年入百万");
            }
        };

        console.log(info2);
        console.log(info2.title);
        console.log(info2.link);
        info2.go();
