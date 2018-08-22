import 'bootstrap-daterangepicker/daterangepicker.js';
import 'bootstrap-daterangepicker/daterangepicker.css';

import layout from './layout/layout.directive';
import daterangepicker from './daterangepicker/daterangepicker.directive';

let IM = window.angular.module('ui.IM',[]);

IM.directive(layout.name,layout.func);
IM.directive(daterangepicker.name,daterangepicker.func);

export default IM;