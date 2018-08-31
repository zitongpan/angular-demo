import './chart1.css'
import chart1Tpl from './chart1.html';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default {
    name:'chart1',
    func:(getAPI,$q)=>{
        'ngInject';
        return{
            restrict: 'AE',
            template: chart1Tpl,
            scope:{
                // xName='='
            },
            link:(scope,ele,attr,c)=>{
                // 基于准备好的dom，初始化echarts实例
                const myChart = echarts.init(document.getElementById('myChart'));
                const myChart1 = echarts.init(document.getElementById('myChart1'));
                const myChart2 = echarts.init(document.getElementById('myChart2'));
                const myChart3 = echarts.init(document.getElementById('myChart3'));
                
                let clickNum=[];
                let recomendNum=[];
                let novelName=[];
                let novelRead=[];

                getData().then(()=>{
                    myChart.setOption({
                        title: {
                            text: '热度分析'
                        },
                        tooltip:{
                            trigger: 'axis'
                        },
                        legend: {
                            data:['点击量','推荐量']
                        },
                        xAxis: {
                            type : 'category',
                            data: novelName,
                            axisLabel :{
                                interval:0,
                                rotate:15
                            }
                        },
                        yAxis: {},
                        series: [
                            {
                                name:'点击量',
                                type:'bar',
                                color: '#ddcaac',
                                data:clickNum
                            },
                            {
                                name:'推荐量',
                                type:'bar',
                                color: '#ff6666',
                                data:recomendNum
                            }
                        ]
                    });
                    //饼状图
                    myChart3.setOption({
                        series : [
                            {
                                name: '阅读量饼状图',
                                type: 'pie',
                                radius: '55%',
                                data:novelRead,
                                itemStyle: {
                                    normal: {
                                        shadowBlur: 200,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    });
                })
                //获取小说列表
                function getData(){
                    const deferred = $q.defer();
                    const promise = deferred.promise;
                    
                    getAPI.getNovel().then((resp) => {
                        if(resp.data.code === 200){
                            for(var i=0;i<resp.data.data.length;i++){
                                let obj={};
                                
                                clickNum.push(+resp.data.data[i].num_click);
                                recomendNum.push(+resp.data.data[i].recommend_num);
                                novelName.push(resp.data.data[i].bookname);

                                obj.value = +resp.data.data[i].num_click;
                                obj.name = resp.data.data[i].bookname;
                                novelRead.push(obj);
                                console.log(novelRead)
                            }
                            deferred.resolve(clickNum);
                            deferred.resolve(recomendNum);
                            deferred.resolve(novelName);
                        }
                        deferred.resolve([]);
                    }, (err) => {
                        deferred.reject(err);
                    });
                    return promise;
                }
                // 绘制图表
                // myChart1.setOption({
                //     title: {
                //         text: 'ECharts'
                //     },
                //     tooltip: {},
                //     xAxis: {
                //         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                //     },
                //     yAxis: {},
                //     series: [{
                //         name: '销量',
                //         type: 'bar',
                //         data: [5, 20, 36, 10, 10, 20]
                //     }]
                // });
                // myChart2.setOption({
                //     series : [
                //         {
                //             name: '访问来源',
                //             type: 'pie',
                //             radius: '55%',
                //             data:[
                //                 {value:235, name:'视频广告'},
                //                 {value:274, name:'联盟广告'},
                //                 {value:310, name:'邮件营销'},
                //                 {value:335, name:'直接访问'},
                //                 {value:400, name:'搜索引擎'}
                //             ],
                //             roseType: 'angle',
                //             itemStyle: {
                //                 normal: {
                //                     shadowBlur: 200,
                //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                //                 }
                //             }
                //         }
                //     ]
                // });
            }
        }
    }
}