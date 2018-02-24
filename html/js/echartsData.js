// 项目整体 饼状图
function pieFm() {
    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            y: 'center',
            right:'35',
            orient: 'vertical',
            align:'left',
            data: [{
                name: '男',
                icon: 'circle'
            }, {
                name: '女',
                icon: 'circle'
            }]
        },
        series: [
            {
                name: '性别占比',
                type: 'pie',
                hoverOffset: 1,
                radius: [65, 165],
                center: ['40%', '50%'],
                roseType: 'radius',
                clockwise: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    { value: 10, name: '男' },
                    { value: 9, name: '女' }
                ]
            }
        ],
        color: [ '#26c1d8','#ffbf00']
    };

    // 指定图表的配置项和数据
    option1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            right:'35',
            y: 'center',
            orient: 'vertical',
            align:'left',
            data: [{
                name: '组1',
                icon: 'circle'
            }, {
                name: '组2',
                icon: 'circle'
            }]
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                hoverOffset: 1,
                radius: [65, 165],
                center: ['40%', '50%'],
                roseType: 'radius',
                clockwise: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    { value: 10, name: '组1' },
                    { value: 9, name: '组2' }
                ]
            }
        ],
        color: [ '#26c1d8','#ffbf00']
    };

    // 指定图表的配置项和数据
    option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'right',
            y: 'center',
            orient: 'vertical',
            data: [{
                name: '组1',
                icon: 'circle'
            }, {
                name: '组2',
                icon: 'circle'
            }, {
                name: '组3',
                icon: 'circle'
            }]
        },
        series: [
            {
                name: '组别',
                type: 'pie',
                hoverOffset: 1,
                radius: [50, 125],
                center: ['50%', '45%'],
                roseType: 'radius',
                clockwise: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    { value: 10, name: '组1' },
                    { value: 9, name: '组2' },
                    { value: 5, name: '组3' }
                ]
            }
        ],
        color: ['#ffbf00', '#26c1d8', '#999999']
    };

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var myChart1 = echarts.init(document.getElementById('main1'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart1.setOption(option1);
}

//对比柱状图

function vsFm() {


    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('list0'));
    var myChart1 = echarts.init(document.getElementById('list1'));
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];
    var app = {};
    app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
                left: 'left',
                center: 'center',
                right: 'right'
            }
        },
        verticalAlign: {
            options: {
                top: 'top',
                middle: 'middle',
                bottom: 'bottom'
            }
        },
        position: {
            options: echarts.util.reduce(posList, function (map, pos) {
                map[pos] = pos;
                return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 100
        }
    };

    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            var labelOption = {
                normal: {
                    rotate: app.config.rotate,
                    align: app.config.align,
                    verticalAlign: app.config.verticalAlign,
                    position: app.config.position,
                    distance: app.config.distance
                }
            };
        }
    };


    var labelOption = {
        normal: {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            formatter: '{c}  {name|{a}}',
            fontSize: 16,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
        }
    };

    option = {
        color: ['#ffbf00', '#26c1d8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            x: 'right',
            y: 'center',
            align:'left',
            orient: 'vertical',
            data: [
                { name: '男', icon: 'rect' },
                { name: '女', icon: 'rect' }
            ],
            itemWidth: 10,
            itemHeight: 10
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                axisLine: {
                    lineStyle:{
                        color:'#c8c8c8'
                    }
                },
                data: ['任务一', '任务二', '任务三']
            }
        ],
        yAxis: [
            {
                scale: true,
                axisLine: {
                    show: false
                },
                type: 'value',
                name: '任务用时(min)',
                axisTick: {
                    show: false
                }
            }
        ],
        grid: {
            left: '5%',
            right: '10%',
            top: '13%',
            bottom: '5%',
            containLabel: true,
            x: 130
        },
        series: [
            {
                name: '男',
                type: 'bar',
                barGap: 0.1,
                data: [320, 332, 123],
                barMaxWidth: 30, icon: 'rect'
            },
            {
                name: '女',
                type: 'bar',
                barGap: 0.1,
                data: [220, 182, 321],
                barMaxWidth: 30
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    var option1 = option;
    option1.yAxis[0].name = '任务错误数(个)';
    myChart1.setOption(option1, true);

}






function hotLook() {

    var myChart = echarts.init(document.getElementById('hotLook'));

    var data = [
        [13, 50, 1000000000, 'China', 1990],
        [5, 70, 2000000000, 'China', 2015]
    ];

    option = {
        /*legend: {
            right: 10,
            data: ['1990', '2015']
        },*/
        grid: {
            left: '3%',
            right: '5%',
            top: '15%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            name: '热词',
            data: data,
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
                }
            }
        }]
    };

    myChart.setOption(option);

}


function singleFm() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('r2b0'));
    var myChart1 = echarts.init(document.getElementById('r2b1'));
    option = {
        color: ['#26bed8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '用时(s)',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '任务用时(min)',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    var option1 = option;
    option1.yAxis[0].name = '数量(个)'
    option1.series[0].name = '错误数'
    myChart1.setOption(option1);
}






