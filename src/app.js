// 基础插件
import 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//全局css
import './app.css';

// component
import '../components/ui.IM';

// app controller
import heroController from './app.controller.js';

// page
import dashController from './dash/dash.controller.js';
import dashTpl from './dash/dash.html';
import demandController from './demand/demand.controller.js';
import demandTpl from './demand/demand.html';
import demandDetailController from './demand/detail.controller.js';
import demandDetailTpl from './demand/detail.html';
import userManagementController from './userManagement/userManagement.controller.js';
import userManagementTpl from './userManagement/userManagement.html';

const modules = ['ui.IM','ui.router'];
let hero = angular.module('hero', modules);

hero.controller('heroController', heroController)
    .config(($stateProvider,$urlRouterProvider)=>{
        'ngInject';
        $urlRouterProvider.when('', '/dash');
        $stateProvider.state('dash',{
            url: '/dash',
            component: 'dash'
        }).state('demand',{
            url: '/demand',
            component: 'demand'
        }).state('userManagement',{
            url: '/userManagement',
            component: 'userManagement'
        }).state('demandDetail',{
            url: '/demandDetail?:bid',
            component: 'demandDetail'
        })
    })
    .component('dash', {
        template: dashTpl,
        controller: dashController,
        controllerAs: 'vm'
    })
    .component('demand', {
        template: demandTpl,
        controller: demandController,
        controllerAs: 'vm'
    })
    .component('userManagement', {
        template: userManagementTpl,
        controller: userManagementController,
        controllerAs: 'vm'
    })
    .component('demandDetail', {
        template: demandDetailTpl,
        controller: demandDetailController,
        controllerAs: 'vm'
    })