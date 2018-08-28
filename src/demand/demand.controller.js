import './demand.css';
import debounce from 'lodash/debounce';


/**
 *demand
 *
 * @export
 * @class demandController
 */
export default class demandController{
    constructor($http, $q, $state){
        'ngInject';
        Object.assign(this,{$http, $q, $state})
    }
    $onInit(){
        this.deferred='';
        this.picList=[];
        this.getPicList();
        this.list = [] ;
        this.getList()
        this.bookStatus=['','连载','完结'];
        this.myFilter={
            bookname: '',
            date_updated: '',
            stat_name: ''
        }
    }

    //获取pic列表
    listPic(){
        this.deferred = this.$q.defer();
        return this.$http.get('https://www.apiopen.top/meituApi?page=1');
    }
    getPicList(){
        this.listPic().then((resp) => {
            if(resp.data.code === 200){
                this.picList = resp.data.data.slice(0,4);
            }
        })
        .catch(function (result) { //捕捉错误处理
            　console.log(result)
        });
    };

    //获取小说列表
    listNovel(){
        this.deferred = this.$q.defer();
        return this.$http.get('https://www.apiopen.top/novelApi');
    }
    getList(){
        this.listNovel().then((resp) => {
            if(resp.data.code === 200){
                this.list = resp.data.data;
                for(var i=0;i<4;i++){
                    this.list[i].url = this.picList[i].url
                }
            }
        })
        .catch(function (result) { //捕捉错误处理
            　console.log(result)
        });
    };
}