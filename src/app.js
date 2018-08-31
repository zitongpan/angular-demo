// 基础插件
import 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'echarts';

//全局css
import './app.css';

// component
import '../components/ui.IM';

// app controller
import heroController from './app.controller.js';

// page
import dashController from './dash/dash.controller.js';
import dashTpl from './dash/dash.html';
import listController from './list/list.controller';
import listTpl from './list/list.html';
import listDetailController from './list/detail.controller';
import listDetailTpl from './list/detail.html';
import chartController from './chart/chart.controller';
import chartTpl from './chart/chart.html';

const modules = ['ui.IM','ui.router'];
let hero = angular.module('hero', modules);

hero.controller('heroController', heroController)
    .config(($stateProvider,$urlRouterProvider)=>{
        'ngInject';
        $urlRouterProvider.when('', '/dash');
        $stateProvider.state('dash',{
            url: '/dash',
            component: 'dash'
        }).state('list',{
            url: '/list',
            component: 'list'
        }).state('chart',{
            url: '/chart',
            component: 'chart'
        }).state('listDetail',{
            url: '/listDetail?:bid:type',
            component: 'listDetail'
        })
    })
    .component('dash', {
        template: dashTpl,
        controller: dashController,
        controllerAs: 'vm'
    })
    .component('list', {
        template: listTpl,
        controller: listController,
        controllerAs: 'vm'
    })
    .component('chart', {
        template: chartTpl,
        controller: chartController,
        controllerAs: 'vm'
    })
    .component('listDetail', {
        template: listDetailTpl,
        controller: listDetailController,
        controllerAs: 'vm'
    })
    .factory('getAPI',($http)=>{
        let getAPI={
            getNovel:()=>{
                return $http.get('https://www.apiopen.top/novelApi');
            },
            listPic:()=>{
                // const deferred = $q.defer();
                // const promise = deferred.promise;
                return $http.get('https://www.apiopen.top/meituApi?page=1');
            }
        };
        return getAPI;
    })