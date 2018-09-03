import tpl from './pagination.html';
import './pagination.css';

export default {
    name: 'imPagination',
    func: () => {
        'ngInject';

        return {
            // restrict: 'EA',
            template: tpl,
            scope: {
                totalRecord: '=',
                pageSize: '=?',
                updateList: '&',
                now: '=?',
                total: '=?'
            },
            replace: true,
            controller: ($scope) => {
                'ngInject';
                const reg = /^[0-9]+$/;
                $scope.pageSize = $scope.pageSize;
                $scope.currentPage = $scope.now;
                $scope.toPage = toPage;

                $scope.getList = function () {
                    $scope.updateList({ value: { now: $scope.currentPage }});
                };

                function toPage() {
                    if (!reg.test($scope.jumpPage)) {
                        // alertMsg.error.show('请输入正确的页数');
                        alert('请输入正确的页数')
                        return false;
                    }
                    if (+$scope.jumpPage > totalPage()) {
                        // alertMsg.error.show('输入页数超过可跳转页数');
                        alert('输入页数超过可跳转页数')
                        return false;
                    }
                    $scope.currentPage = $scope.jumpPage;
                    $scope.getList();
                    $scope.jumpPage = '';
                }

                function totalPage() {
                    return Math.ceil(+$scope.totalRecord / +$scope.pageSize);
                }

            }

        };
    }
};