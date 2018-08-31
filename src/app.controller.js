export default ($scope,$q,$http)=>{
    'ngInject';
    $scope.nav = [
        {
            name: '短信dash',
            url: 'dash'
        }, 
        {
            name: '列表',
            url: 'list'
        }, 
        {
            name: '图表',
            url: 'chart'
        }
    ];
}