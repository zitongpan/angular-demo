import './demand.css';
import debounce from 'lodash/debounce';


/**
 *demand
 *
 * @export
 * @class demandController
 */
export default class demandController{
    constructor($http){
        'ngInject';
        Object.assign(this,{$http})
    }
    $onInit(){
        this.list=[];
        this.getList();
        this.bookStatus=['','连载','完结'];
        this.myFilter={
            bookname: '',
            date_updated: '',
            stat_name: ''
        }
    }
    getList(){
        this.$http.get('https://www.apiopen.top/novelApi').then((resp)=>{
            if(resp.data.code === 200){
                this.list = resp.data.data
            }
        })
    }
    log(){
        console.log(this.myFilter)
    }
}