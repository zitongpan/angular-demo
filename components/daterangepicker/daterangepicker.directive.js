import tpl from './daterangepicker.html';
import './daterangepicker.css';
import moment from 'moment';

/**
 * 日历选择器
 * @author
 */
export default {
    name: 'daterangePicker',
    func: () => {
        'ngInject';

        return {
            template: tpl,
            replace: true,
            scope: {
                startTime: '=startTime',
                endTime: '=endTime',
                format: '=?',                // 日期类型
                minDate: '=',                // 最小时间
                maxDate: '=',                // 最小时间
                callback: '&',
                autoApply: '=',              // 自动选中,
                isSingle: '=',                // 单日历还是双日历  true or false    显示startTime时间
                disabled:'=',
                timePicker:'=',
                opens: '@',
                showText: '='
            },
            link: ($scope, $element, $attr) => {
                if (!$scope.format) {
                    $scope.format = 'YYYY-MM-DD';
                }
                if ($scope.disabled) return;
                $element.daterangepicker({
                    opens: $scope.opens || 'right',
                    minDate: $scope.minDate,
                    maxDate: $scope.maxDate,
                    autoApply: $scope.autoApply,
                    singleDatePicker: $scope.isSingle,
                    timePicker: $scope.timePicker,
                    timePicker24Hour: true,
                    locale: {
                        format: $scope.format,
                        separator: ' ~ ',
                        applyLabel: '确定',
                        cancelLabel: '取消',
                        fromLabel: '开始时间',
                        toLabel: '结束时间',
                        customRangeLabel: '自定义',
                        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        firstDay: 1,
                    },
                    startDate: $scope.startTime || moment().subtract(0, 'days').format($scope.format),
                    endDate: $scope.endTime || moment().subtract(0, 'days').format($scope.format)
                }, function (start, end, label) {
                    $scope.startTime = start.format($scope.format);
                    $scope.endTime = end.format($scope.format);
                    $scope.$apply();
                    $scope.callback && $scope.callback();
                });
            }
        };
    }
};
