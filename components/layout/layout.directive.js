import layoutTpl from './layout.html';
import './layout.css';

export default {
    name: 'layout',
    func: () => {
        'ngInject';
        return {
            restrict: 'AE',
            template: layoutTpl,
            // controller: controller,
            // controllerAs: 'vm'
            scope: {
                nav: '=',
            }
        };
        // .config(function($stateProvider, $urlRouterProvider){})
    }
}