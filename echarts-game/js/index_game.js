/**
 * Created by 徐享 on 2018/10/28.
 */

setInterval(function(){
    var date = new Date();
    var str = show_num(date.getHours())+":"+show_num(date.getMinutes())+":"+show_num(date.getSeconds());
    $("#dataTime").html(date.toLocaleDateString()+" "+str);
},1000);
function show_num(n){
    var str2;
    if(n<10){
        str2 = "0"+n;
    }else{
        str2 = n;
    }
    return str2;
}




var myecharts_bar,myecharts_line,myecharts_map,myecharts_bar2,myecharts_pie,myecharts_graph;


$(function () {
    drawBar();
    drawLine();
    drawMap();
    drawBar2();
    drawPie();
    drawGraph();
});



function drawBar(){
    myecharts_bar=echarts.init(document.getElementById('myecharts_bar'));
    var options= {
         /*title: {
         text: '市场规模增长率',
         textStyle:{
         color:'#fff',
         fontSize:18,
         fontFamily:'微软雅黑',
         fontWeight:'normal'
         }*/
             title: {
                 text: '游戏市场的实际销售收入',
                 left: 'center',
                 textStyle:{
                     color:'#fff'
                 }
             },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
         bottom:'6',
         textStyle:{
         color:'#fff'
         },
         data: ['移动游戏市场','客户端游戏市场','网页游戏市场']
         },
        grid: {
            top:'50',
            left: '3%',
            right: '5%',
            bottom: '35',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            axisLabel:{
                show:true,
                textStyle:{
                    color:'#fff'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'#3d6981'
                }
            }
        },
        yAxis: {
            type: 'category',
            axisLabel:{
                interval:0,
                show:true,
                textStyle:{
                    color:'#fff'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick: {
                alignWithLabel: true
            },
            data: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']


        },
        series: [
            {
                name: '移动游戏市场',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'	#DC143C'
                    }
                },
                data: [1.5,6.4,9.1,17,32.4,112.4,274.9,514.6,819.2,1161.2]
            },
            {
                name: '客户端游戏市场',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#4682B4'
                    }
                },
                data: [167.1, 233.2, 271.6, 366.9, 451.2, 536.6, 608.9,611.6,582.5,648.6]
            },
            {
                name: '网页游戏市场',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#FFD700'
                    }
                },
                data: [4.5,14,41.8,55.4,81.1,127.7,202.7,219.6,187.1,156]
            }
        ]
    };
    myecharts_bar.setOption(options);
}

function drawLine(){
    myecharts_line=echarts.init(document.getElementById('myecharts_line'));
    var options = {
        title: {
            text: '游戏市场规模增速',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            bottom:'6',
            textStyle:{
                color:'#fff'
            },
            data:['移动游戏市场','客户端游戏市场','网页游戏市场']
        },
        grid: {
            top:'50',
            left: '3%',
            right: '5%',
            bottom: '35',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:3
                }
            },
            axisLabel:{
                interval:'0',
                textStyle:{
                    color:'#fff'
                }
            },
            data: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017]
        },
        yAxis: {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:'1'
                }
            },
            axisLabel:{
                textStyle:{
                    color:'#fff'
                },
                formatter:'{value}%'
            }
        },
        series: [
            {
                name:'移动游戏市场',
                type:'line',
                stack: '总量1',
                itemStyle:{
                    normal:{
                        color:'	#DC143C'
                    }
                },
                data:[25,326.7,42,86.8,90.6,246.9,144.6,87.2,59.2,49.8]
            },
            {
                name:'客户端游戏市场',
                type:'line',
                stack: '总量2',
                itemStyle:{
                    normal:{
                        color:'#4682B4'
                    }
                },
                data:[21.7,39.5,16.5,35.1,23.0,18.9,13.5,0.4,-4.8,13.7]
            },
            {
                name:'网页游戏市场',
                type:'line',
                stack: '总量3',
                itemStyle:{
                    normal:{
                        color:'#FFD700'
                    }
                },
                data:[161.2,211.1,198.9,32.4,46.4,57.4,58.8,8.3,-14.8,-15.4]
            }
        ]
    };
    myecharts_line.setOption(options);
}

function drawMap(){
    myecharts_map=echarts.init(document.getElementById('myecharts_map'));
    var options= {
        title: {
            text: '各省上市游戏公司分布',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show:false,
            type:'continuous',
            min: 0,
            max: 80,
            maxOpen:true,
            text: ['高','低'],
            color:['#0000FF','#DCDCDC'],
            calculable: true

        },
        /*toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },*/
        series: [
            {
                name: '公司数量',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            //color:'	#F5F5F5'
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: 68 },{name: '江苏',value: 3 },{name: '广东',value: 32 },{name: '山东',value: 0 },{name: '浙江',value: 10 },{name: '河北',value: 1 },{name: '上海',value: 34 },{name: '辽宁',value: 0 },{name: '四川',value: 3 },{name: '河南',value: 1 },{name: '天津',value: 3 },{name: '黑龙江',value: 0 },{name: '湖北',value: 2 },{name: '山西',value: 0 },{name: '陕西',value: 0 },{name: '江西',value: 0 },{name: '安徽',value: 1 },{name: '福建',value: 9 },{name: '湖南',value: 4 },{name: '新疆',value: 2 },{name: '内蒙古',value: 0 },{name: '重庆',value: 0 },{name: '吉林',value: 1 },{name: '甘肃',value: 0 },{name: '宁夏',value: 0 },{name: '云南',value: 0 },{name: '贵州',value: 0 },{name: '广西',value: 1 },{name: '青海',value: 0 },{name: '海南',value: 0 },{name: '澳门',value: 0 },{name: '西藏',value: 0 },{name: '台湾',value: 3 },{name: '香港',value: 0 }
                ]
            }
        ]
    };
    myecharts_map.setOption(options);
}

function drawBar2(){
    myecharts_bar2=echarts.init(document.getElementById('myecharts_bar2'));
    var options = {
        title: {
            text: '2017年游戏上市公司的营收TOP10',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['腾讯', '网易', '三七娱乐', '完美世界', '智明星通', 'IGG', '昆仑万维','游族','恺英','金山'],
                axisLabel:{
                    interval:0,
                    show:true,
                    textStyle:{
                        color:'#fff'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                    }
                },
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{
                    show:true,
                    textStyle:{
                        color:'#fff'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#3d6981'
                    }
                }
            }
        ],
        series : [
            {
                name:'公司营收（亿元）',
                type:'bar',
                barWidth: '60%',
                data: [978.83, 362.82, 61.92, 56.5, 39.79, 38.39, 34.36,32.42,31.34,31.2]

            }
        ]
    };




    myecharts_bar2.setOption(options);
}

function drawPie(){
    myecharts_pie=echarts.init(document.getElementById('myecharts_pie'));
    var options= {
        title : {
            text: '游戏市场份额占比',
            x: 'center',
            textStyle: {
                color: '#fff',
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            bottom:'4%',
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#fff'
            },
            data: ['腾讯','网易','其他']
        },
        series : [
            {
                name: '市场份额占比',
                type: 'pie',
                radius : '60%',
                center: ['50%', '60%'],
                label:{            //饼图图形上的文本标签
                    normal:{
                        show:true,
                        position:'inner', //标签的位置
                        textStyle : {
                            fontWeight : 300 ,
                            fontSize : 16    //文字的字体大小
                        },
                        formatter:'{d}%'

                    }
                },
                data:[
                    {value:47, name:'腾讯'},
                    {value:26, name:'网易'},
                    {value:27, name:'其他'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myecharts_pie.setOption(options);
}

function drawGraph(){
    myecharts_graph=echarts.init(document.getElementById('myecharts_graph'));
    var options = {
        title: {
            text: '游戏行业与其他的行业关系',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        //tooltip: {},
        animation: false,
        series : [
            {
                name: '游戏市场关系',
                type: 'graph',
                layout: 'force',
                data: [
                    {name:'游戏行业'},
                    {name:'影视行业',itemStyle:{
                        normal:{color:'#6495ED'}
                    }},
                    {name:'音乐行业',itemStyle:{
                        normal:{color:'#6495ED'}
                    }},
                    {name:'媒体行业',itemStyle:{
                        normal:{color:'#6495ED'}
                    }},
                    {name:'文学行业',itemStyle:{
                        normal:{color:'#6495ED'}
                    }},

                    {name:'直播行业',itemStyle:{
                        normal:{color:'#DAA520'}
                    }},
                    {name:'游戏周边行业',itemStyle:{
                        normal:{color:'#DAA520'}
                    }},
                    {name:'电竞行业',itemStyle:{
                        normal:{color:'#DAA520'}
                    }},

                    {name:'电源、CG',itemStyle:{
                        normal:{color:'#87CEEB'}
                    }},
                    {name:'音乐专辑',itemStyle:{
                        normal:{color:'#87CEEB'}
                    }},
                    {name:'游戏自媒体',itemStyle:{
                        normal:{color:'#87CEEB'}
                    }},
                    {name:'游戏小说',itemStyle:{
                        normal:{color:'#87CEEB'}
                    }}

            ],
                links:[
                    {source:'游戏行业',target:'影视行业'},
                    {source:'游戏行业',target:'音乐行业'},
                    {source:'游戏行业',target:'媒体行业'},
                    {source:'游戏行业',target:'文学行业'},
                    {source:'游戏行业',target:'直播行业'},
                    {source:'游戏行业',target:'电竞行业'},
                    {source:'游戏行业',target:'游戏周边行业'},
                    {source:'影视行业',target:'电源、CG'},
                    {source:'音乐行业',target:'音乐专辑'},
                    {source:'媒体行业',target:'游戏自媒体'},
                    {source:'文学行业',target:'游戏小说'}

                ],

                roam: true,
                symbolSize:40,
                //edgeSymbol:['none','arrow'],
                label: {
                    normal: {
                        show:true,
                        position: 'inside'
                    }
                },
                lineStyle:{
                    normal:{
                        color:'green',
                        width:'3',
                    }
                },
                force: {
                    repulsion: 300
                }
            }
        ]
    };
    myecharts_graph.setOption(options);
}