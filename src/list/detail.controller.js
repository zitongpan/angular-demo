import './detail.css';

/**
 *detail
 *
 * @export
 * @class detailController
 */
export default class detailController{
    constructor($http,$state,$stateParams,$q,getAPI){
        'ngInject';
        Object.assign(this,{$http,$state,$stateParams,$q,getAPI})
    }
    $onInit(){
        this.list=[];
        this.deferred='';
        this.getList();
        this.chosebook={
            'bid':this.$stateParams.bid
        }
        this.type=this.$stateParams.type
        console.log(this.type)
    }
    // 获取小说列表
    getList(){
        this.getAPI.getNovel().then((resp) => {
            if(resp.data.code === 200){
                this.list = resp.data.data;
            }
        })
        .catch(function (result) { //捕捉错误处理
            　console.log(result)
        });
    };
}
