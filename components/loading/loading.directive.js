import './loading.css'
export default {
    name: 'loading',
    func: () => {
        return{
            restrict:'AE',
            template:'<div class="loading"><span class="pic"></span><span ng-bind="text"></span></div>',
            replace:true,
            priority: 10,
            transclude: true,
            controller: ['$element', '$rootScope', 'loadingSer', '$document', '$scope', function ($element, $rootScope, loadingSer, $document, $scope) {
                let $body = $document.find('body');
                $rootScope.$on('loading:show', function (evt, text) {
                    $body.addClass('noscroll');
                    $element.removeClass('hidden');
                    $scope.text = text || loadingSer.defaultText;
                });
                $rootScope.$on('loading:hide', function (evt, text) {
                    $body.removeClass('noscroll');
                    $element.addClass('hidden');
                });
            }]
        }
    }
}