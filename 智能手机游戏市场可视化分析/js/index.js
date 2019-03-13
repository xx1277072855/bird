/**
 * Created by 徐享 on 
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
    //第一个图的数据
    var xData = ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'];
    var yData0 = [0.6,0.77,1.12,1.67,2.13,3.2,4.207,4.341,4.67,4.443,3.977];
    var yData1 = [12,14.5,35,70,135,50.2,31.5,2.50,7.60,-4.90,-10.5];
    myecharts_bar=echarts.init(document.getElementById('myecharts_bar'));
    var options =
    {
        title: {
            text: '国内历年手机市场出货量、增长率',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        grid: {
            right: '12%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                },
                crossStyle: {
                    color: '#fff'
                }
            }
        },
        legend: {
         bottom:'6',
         textStyle:{
         color:'#fff'
         },
         data:['出货量','增长率']
         },
        xAxis: [
            {
                 axisLine:{
                 lineStyle:{
                 color:'#fff'
                 //width:1
                 }
                 },
                 axisLabel:{
                 interval:'0',
                 textStyle:{
                 color:'#fff'
                 }
                 },
                type: 'category',
                boundaryGap: true,
                data: (function () {
                    var res = xData.slice(0,6);
                    return res;
                })(),
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '出货量(亿)',
                axisLine:{
                 lineStyle:{
                 color:'#fff'
                 //width:1
                 }
                 },
                 axisLabel:{
                 interval:'0',
                 textStyle:{
                 color:'#fff'
                 },
                 formatter: '{value}'
                 },
                 splitLine:{
                 lineStyle:{
                 type:'dashed',
                 color:'#3d6981'
                 }
                 }
            },
            {
                type: 'value',
                name: '增长率',
                /*min: -20,
                max: 150,*/
                //interval: 5,
                axisLine:{
                 lineStyle:{
                 color:'#fff'
                 //width:1
                 }
                 },
                 axisLabel:{
                 interval:'0',
                 textStyle:{
                 color:'#fff'
                 },
                 formatter: '{value}%'
                 },
                 splitLine:{
                 lineStyle:{
                 type:'dashed',
                 color:'#3d6981'
                 }
                 }
            }
        ],
        series: [
            {
                name: '出货量',
                type: 'bar',
                barWidth: '60%',
                data: (function () {
                    var len = yData0.slice(0, 6);
                    return len;
                })()
            },
            {
                name:'增长率',
                type:'line',
                yAxisIndex: 1,
                itemStyle : {
                    normal : {
                        color:'#81b6b2',
                        lineStyle:{
                            color:'#81b6b2'
                        }
                    }
                },
                data:(function () {
                    var len = yData0.slice(0, 6);
                    return len;
                })()
            }
        ]
    };
    myecharts_bar.setOption(options);
    var n =6;
    setInterval(function () {
        axisDataX = xData[n];
        axisDataY0 = yData0[n];
        axisDataY1 = yData1[n];
        var data0 = options.series[0].data,
            data1 = options.series[1].data;
        data0.shift();
        data0.push(axisDataY0);
        data1.shift();
        data1.push(axisDataY1);
        options.xAxis[0].data.shift();
        options.xAxis[0].data.push(axisDataX);
        myecharts_bar.setOption(options);
        n++;
        if(n==11){
            n=0;
        }
    },2000)/*{
            title: {
                text: '国内历年手机市场出货量、增长率',
                left: 'center',
                textStyle:{
                    color:'#fff'
                }
            },
            grid: {
                right: '12%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    },
                    crossStyle: {
                        color: '#fff'
                    }
                }
            },
            legend: {
                bottom:'6',
                textStyle:{
                    color:'#fff'
                },
                data:['出货量','增长率']
            },
            xAxis: [
                {
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                            //width:1
                        }
                    },
                    axisLabel:{
                        interval:'0',
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    type: 'category',
                    data: ['2012','2013','2014','2015','2016','2017','2018'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '出货量(亿)',
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                            //width:1
                        }
                    },
                    axisLabel:{
                        interval:'0',
                        textStyle:{
                            color:'#fff'
                        },
                        formatter: '{value}'
                    },
                    splitLine:{
                        lineStyle:{
                            type:'dashed',
                            color:'#3d6981'
                        }
                    }
                },
                {
                    type: 'value',
                    name: '增长率',
                    min: -20,
                    max: 150,
                    //interval: 5,
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                            //width:1
                        }
                    },
                    axisLabel:{
                        interval:'0',
                        textStyle:{
                            color:'#fff'
                        },
                        formatter: '{value}%'
                    },
                    splitLine:{
                        lineStyle:{
                            type:'dashed',
                            color:'#3d6981'
                        }
                    }
                }
            ],
            series: [
                {
                    name:'出货量',
                    type:'bar',
                    barWidth: '60%',
                    data:[2.13,3.2,4.207,4.341,4.67,4.443,3.977]
                },
                {
                    name:'增长率',
                    type:'line',
                    yAxisIndex: 1,
                    itemStyle : {
                        normal : {
                            color:'#81b6b2',
                            lineStyle:{
                                color:'#81b6b2'
                            }
                        }
                    },
                    data:[135,50.2,31.5,2.50,7.60,-4.90,-10.5]
                }
            ]
        };

    myecharts_bar.setOption(options);*/
}

function drawLine(){
    myecharts_line=echarts.init(document.getElementById('myecharts_line'));
    var options = {
        title: {
            text: '2017年中国前五智能手机厂商出货量及同比增幅',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        grid: {
            right: '12%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                },
                crossStyle: {
                    color: '#fff'
                }
            }
        },
        legend: {
            bottom:'6',
            textStyle:{
                color:'#fff'
            },
            data:['出货量','同比增幅']
        },
        xAxis: [
            {
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                        //width:1
                    }
                },
                axisLabel:{
                    interval:'0',
                    textStyle:{
                        color:'#fff'
                    }
                },
                type: 'category',
                data:  ['华为','OPPO','vivo','小米','苹果','其他'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '出货量(百万)',
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                        //width:1
                    }
                },
                axisLabel:{
                    interval:'0',
                    textStyle:{
                        color:'#fff'
                    },
                    formatter: '{value}'
                },
                splitLine:{
                    lineStyle:{
                        type:'dashed',
                        color:'#3d6981'
                    }
                }
            },
            {
                type: 'value',
                name: '同比增幅',
                //interval: 5,
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                        //width:1
                    }
                },
                axisLabel:{
                    interval:'0',
                    textStyle:{
                        color:'#fff'
                    },
                    formatter: '{value}%'
                },
                splitLine:{
                    lineStyle:{
                        type:'dashed',
                        color:'#3d6981'
                    }
                }
            }
        ],
        series: [
            {
                name:'出货量',
                type:'bar',
                barWidth: '60%',
                data:[90.9,80.5,68.6,55.1,41.1,108.1]
            },
            {
                name:'同比增幅',
                type:'line',
                yAxisIndex: 1,
                itemStyle : {
                    normal : {
                        color:'#81b6b2',
                        lineStyle:{
                            color:'#81b6b2'
                        }
                    }
                },
                data:[18.6,2.7,-0.8,32.6,-8.3,-31.0]
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
            text: '2017年中国手机市场不同价格段关注比例走势',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#fff'
            },
            top:'center',
            right:'1%',
            orient:'vertical',
            data:['1000-2000元','1000元以下','3001-4000元','2001-3000元','4000元以上']
        },
        grid: {
            left: '3%',
            right: '25%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            axisLine:{
                lineStyle:{
                    color:'#fff'
                    //width:1
                }
            },
            axisLabel:{
                interval:'0',
                textStyle:{
                    color:'#fff'
                }
            },
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {
            type: 'value',
            //interval: 5,
            axisLine:{
                show:false
                /*lineStyle:{
                    color:'#fff'
                    //width:1
                }*/
            },
            axisLabel:{
                textStyle:{
                    color:'#fff'
                },
                formatter: '{value}%'
            },
            splitLine:{
                lineStyle:{
                 type:'dashed',
                 color:'#3d6981'
                 }
            }
        },
        series: [
            {
                name:'1000-2000元',
                type:'line',
                data:[37.07,37.00,35.77,37.02,37.05,36.94,38.56,38.43,35.05,33.84,34.43,35.49]
            },
            {
                name:'1000元以下',
                type:'line',
                data:[30.51,29.91,28.66,29.30,27.32,26.87,28.97,29.78,26.65,27.87,25.54,24.96]
            },
            {
                name:'3001-4000元',
                type:'line',
                data:[15.47,15.35,17.23,15.89,16.98,17.19,14.34,14.03,18.25,16.77,19.49,19.01]
            },
            {
                name:'2001-3000元',
                type:'line',
                data:[10.75,10.81,10.88,11.09,11.77,12.10,12.04,11.69,12.06,13.25,13.01,12.61]
            },
            {
                name:'4000元以上',
                type:'line',
                data:[6.20,6.43,7.45,7.40,7.35,7.33,6.13,6.35,7.41,8.38,7.84,7.93]
            }
        ]
    };
   /* {
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
                        type:'dashed',
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
    };*/




    myecharts_bar2.setOption(options);
}

function drawPie(){
    myecharts_pie=echarts.init(document.getElementById('myecharts_pie'));
    var options= {
        title : {
            text: '2017年中国前五智能手机厂商市场份额',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
            bottom:'4%',
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#fff'
            },
            data: ['华为','OPPO','vivo','小米','苹果','其他']
        },
        series : [
            {
                name: '市场份额占比',
                type: 'pie',
                radius : '73%',
                center: ['50%', '60%'],
                label:{            //饼图图形上的文本标签
                    normal:{
                        show:true,
                        position:'inner', //标签的位置
                        textStyle : {
                            fontWeight : 100 ,
                            fontSize : 14    //文字的字体大小
                        },
                        formatter:'{d}%'

                    }
                },
                data:[
                    //2018年数据
                    /*{value:26.4, name:'华为'},
                    {value:19.8, name:'OPPO'},
                    {value:19.1, name:'vivo'},
                    {value:13.1, name:'小米'},
                    {value:9.1, name:'苹果'},
                    {value:12.5, name:'其他'}*/
                    {value:20.4, name:'华为'},
                    {value:18.1, name:'OPPO'},
                    {value:15.4, name:'vivo'},
                    {value:12.4, name:'小米'},
                    {value:9.3, name:'苹果'},
                    {value:24.3, name:'其他'}
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
    var options= {
        title : {
            text: '2017年中国手机市场品牌关注分布情况',
            x:'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} :{d}%"
        },
        calculable : true,
        series : [
            {
                name:'品牌关注',
                type:'pie',
                radius : [15, '70%'],
                center: ['50%', '55%'],
                roseType : 'area',//radius
                data:[
                    {value:12.44, name:'苹果'},
                    {value:11.43, name:'三星'},
                    {value:7.36, name:'荣耀'},
                    {value:4.56, name:'魅族'},
                    {value:3.7, name:'金立'},
                    {value:1.64, name:'小米'},
                    {value:1.79, name:'联想'},
                    {value:18.45, name:'华为'},
                    {value:13.61, name:'OPPO'},
                    {value:12.98, name:'vivo'},
                    {value:12.04, name:'其他'}
                ]
            }
        ]
    };
    myecharts_graph.setOption(options);
}

$(window).resize(function () {
    //当浏览器大小变化时,刷新echarts中的页面
    myecharts_bar.resize();
    myecharts_line.resize();
    myecharts_map.resize();
    myecharts_bar2.resize();
    myecharts_pie.resize();
    myecharts_graph.resize();
});