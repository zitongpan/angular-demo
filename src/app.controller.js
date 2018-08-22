export default ($scope)=>{
    'ngInject';
    $scope.nav = [
        {
            name: '短信dash',
            url: 'dash'
        }, 
        {
            name: '需求列表',
            url: 'demand'
        }, 
        {
            name: '商家管理',
            url: 'userManagement'
        }
    ];
}