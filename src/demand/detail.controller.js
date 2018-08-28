import './detail.css';

/**
 *detail
 *
 * @export
 * @class detailController
 */
export default class detailController{
    constructor($http,$state,$stateParams,$q){
        'ngInject';
        Object.assign(this,{$http,$state,$stateParams,$q})
    }
    $onInit(){
        this.list=[];
        this.deferred='';
        this.getList();
        this.chosebook={
            'bid':this.$stateParams.bid
        }
    }
    //获取小说列表
    listNovel(){
        this.deferred = this.$q.defer();
        return this.$http.get('https://www.apiopen.top/novelApi');
    }
    getList(){
        this.listNovel().then((resp) => {
            if(resp.data.code === 200){
                this.list = resp.data.data;
            }
        })
        .catch(function (result) { //捕捉错误处理
            　console.log(result)
        });
    };
}
