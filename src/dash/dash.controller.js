import './dash.css';


/**
 *dash
 *
 * @export
 * @class dashController
 */
export default class dashController{
    constructor(){
        'ngInject';
        Object.assign(this,{})
        this.alert();
    }
    alert(){
        $('.btn').click(function(){
            alert('noooooo')
        })
    }
}