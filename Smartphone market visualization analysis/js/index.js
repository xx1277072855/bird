/**
 * Created by 徐享 on
 */
//显示时间的功能
setInterval(function () {
    var date = new Date();
    var str = show_num(date.getHours()) + ":" + show_num(date.getMinutes()) + ":" + show_num(date.getSeconds());
    $("#dataTime").html(date.toLocaleDateString() + " " + str);
}, 1000);
function show_num(n) {
    var str2;   
    if (n < 10) {
        str2 = "0" + n;
    } else {
        str2 = n;
    }
    return str2;
}

var myecharts_barline1, myecharts_bar, myecharts_map, myecharts_line, myecharts_radar, myecharts_pie;

//动态柱线混合图的数据
var dataBL;
// 实现数据的ajax获取
var sql1 = "select * from sheet1";
$.ajax({
    async: false,
    type: "get",
    url: "http://localhost:8080/ajaxsys/a.do",
    data: { 'sql': sql1 },
    dataType: "json",
    async: false,
    success: function (d) {
        dataBL = d;
        // console.log(dataBL);
    },
    error: function (g) {
        console.log("error");
    }
});
if (!dataBL) {
    dataBL = [
        ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        [0.6, 0.77, 1.12, 1.67, 2.13, 3.2, 4.207, 4.341, 4.67, 4.443, 3.977],
        [12, 14.5, 35, 70, 135, 50.2, 31.5, 2.50, 7.60, -4.90, -10.5]
    ];
}
//柱型图数据
var dataBar = [
    {
        year: 2017,
        data: [
            ['华为', 'OPPO', 'vivo', '小米', '苹果', '其他'],
            [90.9, 80.5, 68.6, 55.1, 41.1, 108.1],
            // [18.6,2.7,-0.8,32.6,-8.3,-31.0]//同比增幅
            [20.4, 18.1, 15.4, 12.4, 9.3, 24.3]
        ]
    },
    {
        year: 2018,
        data: [
            ['华为', 'OPPO', 'vivo', '小米', '苹果', '其他'],
            [105, 78.9, 76, 52, 36.3, 49.5],
            // [15.5,-2,10.8,-5.6,-11.7,-54.2]//同比增幅
            [26.4, 19.8, 19.1, 13.1, 9.1, 12.5]
        ]
    }

];
//多折线图的数据；
var dataLine = [
    {
        year: 2017,
        data: [
            [30.51, 29.91, 28.66, 29.30, 27.32, 26.87, 28.97, 29.78, 26.65, 27.87, 25.54, 24.96],
            [37.07, 37.00, 35.77, 37.02, 37.05, 36.94, 38.56, 38.43, 35.05, 33.84, 34.43, 35.49],
            [10.75, 10.81, 10.88, 11.09, 11.77, 12.10, 12.04, 11.69, 12.06, 13.25, 13.01, 12.61],
            [15.47, 15.35, 17.23, 15.89, 16.98, 17.19, 14.34, 14.03, 18.25, 16.77, 19.49, 19.01],
            [6.20, 6.43, 7.45, 7.40, 7.35, 7.33, 6.13, 6.35, 7.41, 8.38, 7.84, 7.93]
        ]
    },
    {
        year: 2018,
        data: [
            [29.51, 28.41, 28.26, 27.30, 25.32, 27.27, 28.57, 29.98, 27.53, 27.97, 25.94, 24.96],
            [34.07, 35.00, 35.07, 36.02, 36.85, 36.94, 37.56, 38.43, 34.45, 32.72, 34.13, 34.49],
            [16.75, 16.81, 17.58, 14.09, 14.70, 14.17, 13.40, 11.81, 14.36, 14.25, 15.01, 15.61],
            [14.47, 14.35, 15.23, 16.19, 16.98, 16.29, 14.34, 14.03, 16.25, 16.25, 17.49, 18.01],
            [5.20, 5.43, 5.75, 6.40, 6.15, 5.33, 6.13, 5.75, 7.41, 8.08, 7.43, 6.93]
        ]
    }
];
//雷达图数据
var dataRadar = [
    {
        year: 2017,
        data: [
            {
                value: [90, 90, 80, 80, 82, 90],
                name: '华为'
            },
            {
                value: [85, 78, 90, 90, 80, 72],
                name: '小米'
            },
            {
                value: [91, 88, 76, 70, 84, 89],
                name: 'OPPO'
            },
            {
                value: [90, 88, 75, 71, 84, 88],
                name: 'vivo'
            },
            {
                value: [91, 92, 92, 92, 92, 97],
                name: '苹果'
            },
        ]
    },
    {
        year: 2018,
        data: [
            {
                value: [94, 94, 85, 85, 90, 92],
                name: '华为'
            },
            {
                value: [89, 87, 90, 92, 88, 79],
                name: '小米'
            },
            {
                value: [95, 90, 82, 81, 90, 90],
                name: 'OPPO'
            },
            {
                value: [94, 90, 81, 80, 90, 89],
                name: 'vivo'
            },
            {
                value: [94, 96, 98, 98, 98, 98],
                name: '苹果'
            },
        ]
    }
];
//饼图数据
var dataPie = [
    {
        year: 2017,
        data: [
            { value: 12.44, name: '苹果' },
            { value: 11.43, name: '三星' },
            { value: 7.36, name: '荣耀' },
            { value: 4.56, name: '魅族' },
            { value: 3.7, name: '金立' },
            { value: 1.64, name: '小米' },
            { value: 1.79, name: '联想' },
            { value: 18.45, name: '华为' },
            { value: 13.61, name: 'OPPO' },
            { value: 12.98, name: 'vivo' },
            { value: 12.04, name: '其他' }
        ]
    },
    {
        year: 2018,
        data: [
            { value: 15.63, name: '华为' },
            { value: 15.53, name: 'OPPO' },
            { value: 15.49, name: 'vivo' },
            { value: 15.01, name: '荣耀' },
            { value: 10.64, name: '三星' },
            { value: 8.97, name: '苹果' },
            { value: 4.22, name: '一加' },
            { value: 3.57, name: '小米' },
            { value: 2.78, name: '魅族' },
            { value: 1.48, name: '努比亚' },
            { value: 6.68, name: '其他' }
        ]
    }
];

$(function () {
    drawBarLine1();
    drawBar();
    drawMap();
    drawLine();
    drawRadar();
    drawPie();
});

//动态柱线混合图
function drawBarLine1() {
    var xData = dataBL[0];
    var yData0 = dataBL[1];
    var yData1 = dataBL[2];
    myecharts_barline1 = echarts.init(document.getElementById('myecharts_barline1'), 'shine');
    var options =
    {
        title: {
            text: '国内历年手机市场出货量、增长率',
            left: 'center',
            top: 2,
            textStyle: {
                color: '#fff'
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
            },
            formatter: '{b}<br/>{a0}: {c0}(亿)<br>{a1}: {c1}%'
        },
        legend: {
            bottom: '6',
            textStyle: {
                color: '#fff'
            },
            data: ['出货量', '增长率']
        },
        xAxis: [
            {
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                        //width:1
                    }
                },
                axisLabel: {
                    interval: '0',
                    textStyle: {
                        color: '#fff'
                    }
                },
                type: 'category',
                boundaryGap: true,
                data: (function () {
                    var res = xData.slice(0, 6);
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
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    interval: '0',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: '{value}'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#3d6981'
                    }
                }
            },
            {
                type: 'value',
                name: '增长率',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    interval: '0',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#3d6981'
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
                name: '增长率',
                type: 'line',
                yAxisIndex: 1,
                data: (function () {
                    var len = yData0.slice(0, 6);
                    return len;
                })()
            }
        ]
    };
    myecharts_barline1.setOption(options);
    //利用定时器，实现动态数据的展示
    var n = 6;
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
        if (n == 11) {
            n = 0;
        }
    }, 2000);
}

function drawBar() {
    myecharts_bar = echarts.init(document.getElementById('myecharts_bar'), 'shine');
    var options = {
        title: {
            text: '2017年中国前五智能手机厂商出货量及市场份额',
            left: 'center',
            top: 2,
            textStyle: {
                color: '#fff'
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
            },
            formatter: '{b}<br/>{a0}: {c0}(百万)<br>{a1}: {c1}%'
        },
        legend: {
            bottom: '6',
            textStyle: {
                color: '#fff'
            },
            data: ['出货量', '市场份额']
        },
        xAxis: [
            {
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    interval: '0',
                    textStyle: {
                        color: '#fff'
                    }
                },
                type: 'category',
                data: ['华为', 'OPPO', 'vivo', '小米', '苹果', '其他'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '出货量(百万)',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    interval: '0',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: '{value}'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#3d6981'
                    }
                }
            },
            {
                type: 'value',
                name: '市场份额',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    interval: '0',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#3d6981'
                    }
                }
            }
        ],
        series: [
            {
                name: '出货量',
                type: 'bar',
                data: [90.9, 80.5, 68.6, 55.1, 41.1, 108.1]
            },
            {
                name: '市场份额',
                type: 'bar',
                yAxisIndex: 1,
                data: [20.4, 18.1, 15.4, 12.4, 9.3, 24.3]
            }
        ]
    };
    myecharts_bar.setOption(options);
    $("header select").on("change", function () {
        for (var el of dataBar) {
            if ($(this).children('option:selected').val() == el.year) {
                options.title.text = el.year + '年中国前五智能手机厂商出货量及同比增幅';
                options.xAxis[0].data = el.data[0];
                options.series[0].data = el.data[1];
                options.series[1].data = el.data[2];
                myecharts_bar.setOption(options);
            }
        }
    });
}

function drawMap() {
    myecharts_map = echarts.init(document.getElementById('myecharts_map'), 'shine');
    var options = {
        title: {
            text: '各省手机品牌的分布情况',
            left: 'center',
            top: 2,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show: false,
            type: 'continuous',
            // min: 0,
            // max: 80,
            maxOpen: true,
            text: ['高', '低'],
            color: ['#fa0103', '#bcb53a'],
            calculable: true

        },
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
                data: [
                    { name: '北京', value: 19 }, { name: '江苏', value: 1 }, { name: '广东', value: 84 }, { name: '山东', value: 0 }, { name: '浙江', value: 0 }, { name: '河北', value: 0 }, { name: '上海', value: 5 }, { name: '辽宁', value: 0 }, { name: '四川', value: 1 }, { name: '河南', value: 0 }, { name: '天津', value: 1 }, { name: '黑龙江', value: 0 }, { name: '湖北', value: 2 }, { name: '山西', value: 0 }, { name: '陕西', value: 0 }, { name: '江西', value: 1 }, { name: '安徽', value: 0 }, { name: '福建', value: 2 }, { name: '湖南', value: 0 }, { name: '新疆', value: 0 }, { name: '内蒙古', value: 0 }, { name: '重庆', value: 0 }, { name: '吉林', value: 0 }, { name: '甘肃', value: 0 }, { name: '宁夏', value: 0 }, { name: '云南', value: 0 }, { name: '贵州', value: 0 }, { name: '广西', value: 0 }, { name: '青海', value: 0 }, { name: '海南', value: 0 }, { name: '澳门', value: 0 }, { name: '西藏', value: 0 }, { name: '台湾', value: 3 }, { name: '香港', value: 0 }
                ]
            }
        ]
    };
    myecharts_map.setOption(options);
}

function drawLine() {
    myecharts_line = echarts.init(document.getElementById('myecharts_line'), 'shine');
    var options = {
        title: {
            text: '2017年中国手机市场不同价格段关注比例走势',
            x: 'center',
            top: 2,
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
            top: 'center',
            right: '1%',
            orient: 'vertical',
            data: ['1000元以下', '1000-2000元', '2001-3000元', '3001-4000元', '4000元以上']
        },
        grid: {
            left: '3%',
            right: '25%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: '#fff'
                    //width:1
                }
            },
            axisLabel: {
                interval: '0',
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            //interval: 5,
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#3d6981'
                }
            }
        },
        series: [
            {
                name: '1000元以下',
                type: 'line',
                data: [30.51, 29.91, 28.66, 29.30, 27.32, 26.87, 28.97, 29.78, 26.65, 27.87, 25.54, 24.96]
            },
            {
                name: '1000-2000元',
                type: 'line',
                data: [37.07, 37.00, 35.77, 37.02, 37.05, 36.94, 38.56, 38.43, 35.05, 33.84, 34.43, 35.49]
            },
            {
                name: '2001-3000元',
                type: 'line',
                data: [10.75, 10.81, 10.88, 11.09, 11.77, 12.10, 12.04, 11.69, 12.06, 13.25, 13.01, 12.61]
            },
            {
                name: '3001-4000元',
                type: 'line',
                data: [15.47, 15.35, 17.23, 15.89, 16.98, 17.19, 14.34, 14.03, 18.25, 16.77, 19.49, 19.01]
            },
            {
                name: '4000元以上',
                type: 'line',
                data: [6.20, 6.43, 7.45, 7.40, 7.35, 7.33, 6.13, 6.35, 7.41, 8.38, 7.84, 7.93]
            }
        ]
    };
    myecharts_line.setOption(options);
    $("header select").on("change", function () {
        for (var el of dataLine) {
            if ($(this).children('option:selected').val() == el.year) {
                options.title.text = el.year + '年中国手机市场不同价格段关注比例走势';
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

function drawRadar() {
    myecharts_radar = echarts.init(document.getElementById('myecharts_radar'), 'shine');
    var options = {
        title: {
            text: '2017年国内手机厂商旗舰机综合对比',
            x: 'center',
            top: 2,
            textStyle: {
                color: '#fff'
            }
        },
        // tooltip: {},
        legend: {
            bottom: '4%',
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#fff'
            },
            data: ['华为', '小米', 'OPPO', 'vivo', '苹果']
        },
        radar: {
            shape: 'circle',
            splitNumber: 2,
            name: {
                textStyle: {
                    color: '#fff',
                }
            },
            indicator: [
                { text: '外观', max: 100 },
                { text: '拍照', max: 100 },
                { text: '系统', max: 100 },
                { text: '性能', max: 100 },
                { text: '屏幕', max: 100 },
                { text: '价格', max: 100 }
            ],
            center: ['57%', '60%'],
            splitArea: {
                show: true,
                areaStyle: {
                    color: 'rgba(255,0,0,0)', // 图表背景的颜色
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: '#ffffff', // 设置网格的颜色
                },
            },
        },
        series: [{
            name: '各厂商的手机',
            type: 'radar',
            data: [
                {
                    value: [90, 90, 80, 80, 82, 90],
                    name: '华为'
                },
                {
                    value: [85, 78, 90, 90, 80, 72],
                    name: '小米'
                },
                {
                    value: [91, 88, 76, 70, 84, 89],
                    name: 'OPPO'
                },
                {
                    value: [90, 88, 75, 71, 84, 88],
                    name: 'vivo'
                },
                {
                    value: [91, 92, 92, 92, 92, 97],
                    name: '苹果'
                },
            ]
        }]
    };

    myecharts_radar.setOption(options);
    //实现点击年份，实现页面的数据的更换
    $("header select").on("change", function () {
        var arr = [];
        // console.log($(this).children('option:selected').val());
        for (var el of dataRadar) {
            if ($(this).children('option:selected').val() == el.year) {
                options.title.text = el.year + '年国内手机厂商旗舰机综合对比';
                options.series[0].data = el.data;
                for (var ele of el.data) {
                    arr.push(ele.name);
                }
                // console.log(options.legend.data = arr);
                options.legend.data = arr;
                myecharts_radar.setOption(options);
            }
        }
    });
}

function drawPie() {
    myecharts_pie = echarts.init(document.getElementById('myecharts_pie'), 'shine');
    var options = {
        title: {
            text: '2017年中国手机市场品牌关注分布情况',
            x: 'center',
            top: 2,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} :{d}%"
        },
        calculable: true,
        series: [
            {
                name: '品牌关注',
                type: 'pie',
                radius: [15, '70%'],
                center: ['50%', '55%'],
                roseType: 'radius',//'area',
                data: [
                    { value: 12.44, name: '苹果' },
                    { value: 11.43, name: '三星' },
                    { value: 7.36, name: '荣耀' },
                    { value: 4.56, name: '魅族' },
                    { value: 3.7, name: '金立' },
                    { value: 1.64, name: '小米' },
                    { value: 1.79, name: '联想' },
                    { value: 18.45, name: '华为' },
                    { value: 13.61, name: 'OPPO' },
                    { value: 12.98, name: 'vivo' },
                    { value: 12.04, name: '其他' }
                ]
            }
        ]
    };
    myecharts_pie.setOption(options);
    $("header select").on("change", function () {
        // console.log($(this).children('option:selected').val());
        for (var el of dataPie) {
            if ($(this).children('option:selected').val() == el.year) {
                options.title.text = el.year + '年中国手机市场品牌关注分布情况';
                options.series[0].data = el.data;
                myecharts_pie.setOption(options);
            }
        }
    });
}


window.addEventListener('resize', function () {
    //当浏览器大小变化时,刷新echarts中的页面
    myecharts_barline1.resize();
    myecharts_bar.resize();
    myecharts_map.resize();
    myecharts_line.resize();
    myecharts_radar.resize();
    myecharts_pie.resize();
});

