xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setDock("fill")
                .setLeft("0.8333333333333334em")
                .setTop("15em")
                .setHtml("<font size=\"6\"><b>Selamat Datang Bro<br></b></font>"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Span")
                .setHost(host,"xui_ui_span3")
                .setTips("who am i")
                .setLeft("12.5em")
                .setTop("8.333333333333334em")
                .setWidth("20.333333333333332em")
                .setHeight("1.8333333333333333em")
                .setHtml("span element<br>"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block8")
                .setDock("fill")
                .setLeft("3.3333333333333335em")
                .setTop("10em"),
                "before"
            );
            
            host.xui_ui_block8.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview5")
                .setItems([
                    {
                        "id":"node1",
                        "sub":[
                            "node11",
                            {
                                "id":"node12",
                                "imageClass":"xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption":"node1"
                    },
                    {
                        "id":"node2",
                        "iniFold":false,
                        "caption":"node2",
                        "sub":[
                            {
                                "id":"node21",
                                "caption":"node21"
                            },
                            {
                                "id":"node22",
                                "caption":"node22"
                            },
                            {
                                "id":"node23",
                                "caption":"node23"
                            },
                            {
                                "id":"node24",
                                "caption":"node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block7")
                .setDock("fill")
                .setLeft("18.333333333333332em")
                .setTop("0em")
                .setHeight("6.666666666666667em"),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});