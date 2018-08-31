import 'bootstrap-daterangepicker/daterangepicker.js';
import 'bootstrap-daterangepicker/daterangepicker.css';

import layout from './layout/layout.directive';
import daterangepicker from './daterangepicker/daterangepicker.directive';
import chart1 from './chart/chart1.directive';

let IM = window.angular.module('ui.IM',[]);

IM.directive(layout.name,layout.func);
IM.directive(daterangepicker.name,daterangepicker.func);
IM.directive(chart1.name,chart1.func);

export default IM;