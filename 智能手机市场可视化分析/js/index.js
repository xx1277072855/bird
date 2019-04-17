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


var myecharts_barline1,myecharts_barline2,myecharts_map,myecharts_line,myecharts_pie1,myecharts_pie2;


/*定义数据*/
//第二个柱线混合图数据
var dataBL2 = [
    {
        year:2017,
        data:[
            ['华为','OPPO','vivo','小米','苹果','其他'],
            [90.9,80.5,68.6,55.1,41.1,108.1],
            [18.6,2.7,-0.8,32.6,-8.3,-31.0]
        ]
    },
    {
        year:2018,
        data:[
            ['华为','OPPO','vivo','小米','苹果','其他'],
            [105,78.9,76,52,36.3,49.5],
            [15.5,-2,10.8,-5.6,-11.7,-54.2]
        ]
    }
];
//多折现图的数据；
var dataLine = [
    {
        year:2017,
        data:[
            [30.51,29.91,28.66,29.30,27.32,26.87,28.97,29.78,26.65,27.87,25.54,24.96],
            [37.07,37.00,35.77,37.02,37.05,36.94,38.56,38.43,35.05,33.84,34.43,35.49],
            [10.75,10.81,10.88,11.09,11.77,12.10,12.04,11.69,12.06,13.25,13.01,12.61],
            [15.47,15.35,17.23,15.89,16.98,17.19,14.34,14.03,18.25,16.77,19.49,19.01],
            [6.20,6.43,7.45,7.40,7.35,7.33,6.13,6.35,7.41,8.38,7.84,7.93]
        ]
    },
    {
        year:2018,
        data:[
            [29.51,28.41,28.26,27.30,25.32,27.27,28.57,29.98,27.53,27.97,25.94,24.96],
            [34.07,35.00,35.07,36.02,36.85,36.94,37.56,38.43,34.45,32.72,34.13,34.49],
            [16.75,16.81,17.58,14.09,14.70,14.17,13.40,11.81,14.36,14.25,15.01,15.61],
            [14.47,14.35,15.23,16.19,16.98,16.29,14.34,14.03,16.25,16.25,17.49,18.01],
            [5.20,5.43,5.75,6.40,6.15,5.33,6.13,5.75,7.41,8.08,7.43,6.93]
        ]
    }
]
//第一个饼图的数据
var dataPie1 = [
    {
        year:2017,
        data:[
            {value:20.4, name:'华为'},
            {value:18.1, name:'OPPO'},
            {value:15.4, name:'vivo'},
            {value:12.4, name:'小米'},
            {value:9.3, name:'苹果'},
            {value:24.3, name:'其他'}
        ]
    },
    {
        year:2018,
        data:[
            {value:26.4, name:'华为'},
            {value:19.8, name:'OPPO'},
            {value:19.1, name:'vivo'},
            {value:13.1, name:'小米'},
            {value:9.1, name:'苹果'},
            {value:12.5, name:'其他'}
        ]
    }
];
//第二个饼图数据
var dataPie2 = [
    {
        year:2017,
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
    },
    {
        year:2018,
        data:[
            {value:15.63, name:'华为'},
            {value:15.53, name:'OPPO'},
            {value:15.49, name:'vivo'},
            {value:15.01, name:'荣耀'},
            {value:10.64, name:'三星'},
            {value:8.97, name:'苹果'},
            {value:4.22, name:'一加'},
            {value:3.57, name:'小米'},
            {value:2.78, name:'魅族'},
            {value:1.48, name:'努比亚'},
            {value:6.68, name:'其他'}
        ]
    }
]


$(function () {
    drawBarLine1();
    drawBarLine2();
    drawMap();
    drawLine();
    drawPie1();
    drawPie2();
});

//动态柱线混合图
function drawBarLine1(){
    //第一个图的数据
    var xData = ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'];
    var yData0 = [0.6,0.77,1.12,1.67,2.13,3.2,4.207,4.341,4.67,4.443,3.977];
    var yData1 = [12,14.5,35,70,135,50.2,31.5,2.50,7.60,-4.90,-10.5];
    myecharts_barline1=echarts.init(document.getElementById('myecharts_barline1'));
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
    myecharts_barline1.setOption(options);
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
        myecharts_barline1.setOption(options);
        n++;
        if(n==11){
            n=0;
        }
    },2000);
}

function drawBarLine2(){
    myecharts_barline2=echarts.init(document.getElementById('myecharts_barline2'));
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
    myecharts_barline2.setOption(options);
    $("header select").on("change",function () {
        for(var el of dataBL2){
            if($(this).children('option:selected').val() == el.year){
                options.title.text = el.year+'年中国前五智能手机厂商出货量及同比增幅';
                options.xAxis[0].data = el.data[0];
                options.series[0].data = el.data[1];
                options.series[1].data = el.data[2];
                myecharts_barline2.setOption(options);
            }
        }
    });
}

function drawMap(){
    myecharts_map=echarts.init(document.getElementById('myecharts_map'));
    var options= {
        title: {
            text: '各省上市公司分布',
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
            color:['#ca1a10','#dccb56'],
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

function drawLine(){
    myecharts_line=echarts.init(document.getElementById('myecharts_line'));
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
            data:['1000元以下','1000-2000元','2001-3000元','3001-4000元','4000元以上']
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
                name:'1000元以下',
                type:'line',
                data:[30.51,29.91,28.66,29.30,27.32,26.87,28.97,29.78,26.65,27.87,25.54,24.96]
            },
            {
                name:'1000-2000元',
                type:'line',
                data:[37.07,37.00,35.77,37.02,37.05,36.94,38.56,38.43,35.05,33.84,34.43,35.49]
            },
            {
                name:'2001-3000元',
                type:'line',
                data:[10.75,10.81,10.88,11.09,11.77,12.10,12.04,11.69,12.06,13.25,13.01,12.61]
            },
            {
                name:'3001-4000元',
                type:'line',
                data:[15.47,15.35,17.23,15.89,16.98,17.19,14.34,14.03,18.25,16.77,19.49,19.01]
            },
            {
                name:'4000元以上',
                type:'line',
                data:[6.20,6.43,7.45,7.40,7.35,7.33,6.13,6.35,7.41,8.38,7.84,7.93]
            }
        ]
    };
    myecharts_line.setOption(options);
    $("header select").on("change",function () {
        for(var el of dataLine){
            if($(this).children('option:selected').val() == el.year){
                options.title.text = el.year+'年中国手机市场不同价格段关注比例走势';
                options.series[0].data = el.data[0];
                options.series[1].data = el.data[1];
                options.series[2].data = el.data[2];
                options.series[3].data = el.data[3];
                options.series[4].data = el.data[4];
                myecharts_line.setOption(options);
            }
        }
    });
}

function drawPie1(){
    myecharts_pie1=echarts.init(document.getElementById('myecharts_pie1'));
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
                    //2017年数据
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
    myecharts_pie1.setOption(options);
    //实现点击年份，实现页面的数据的更换
    $("header select").on("change",function () {
        var arr=[];
        // console.log($(this).children('option:selected').val());
        for(var el of dataPie1){
            if($(this).children('option:selected').val() == el.year){
                options.title.text = el.year+'年中国前五智能手机厂商市场份额';
                options.series[0].data = el.data;
                for (var ele of el.data){
                    arr.push(ele.name);
                }
                // console.log(options.legend.data = arr);
                options.legend.data = arr;
                myecharts_pie1.setOption(options);
            }
        }
    });
}

function drawPie2(){
    myecharts_pie2=echarts.init(document.getElementById('myecharts_pie2'));
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
    myecharts_pie2.setOption(options);
    $("header select").on("change",function () {
        var arr=[];
        // console.log($(this).children('option:selected').val());
        for(var el of dataPie2){
            if($(this).children('option:selected').val() == el.year){
                options.title.text = el.year+'年中国前五智能手机厂商市场份额';
                options.series[0].data = el.data;
                myecharts_pie2.setOption(options);
            }
        }
    });
}


window.addEventListener('resize',function () {
    //当浏览器大小变化时,刷新echarts中的页面
    myecharts_barline1.resize();
    myecharts_barline2.resize();
    myecharts_map.resize();
    myecharts_line.resize();
    myecharts_pie1.resize();
    myecharts_pie2.resize();
});

