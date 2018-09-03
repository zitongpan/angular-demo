import 'bootstrap-daterangepicker/daterangepicker.js';
import 'bootstrap-daterangepicker/daterangepicker.css';
import  pagination from 'angular-ui-bootstrap/src/pagination';

import layout from './layout/layout.directive';
import daterangepicker from './daterangepicker/daterangepicker.directive';
import chart1 from './chart/chart1.directive';
import loading from './loading/loading.directive';
import imPagination from './pagination/pagination.directive';

let IM = window.angular.module('ui.IM',[pagination]);

IM.directive(layout.name,layout.func);
IM.directive(daterangepicker.name,daterangepicker.func);
IM.directive(chart1.name,chart1.func);
IM.directive(loading.name,loading.func);
IM.directive(imPagination.name,imPagination.func);

export default IM;