import { Component } from '@angular/core';
import * as lodash from 'lodash'
import * as jquery from 'jquery'
import moment from 'moment'
import * as axios from 'axios'
import * as uuid from 'uuid'
import * as classnames from 'classnames'
import * as rxjs from 'rxjs'
import * as data from './data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '26187-repro';

  lodashVals = Object.keys(lodash)
  jqueryVals = Object.keys(jquery)

  dateVal = moment('10/31/2020')
  axiosVals = Object.keys(axios)
  uuidVals = Object.keys(uuid)
  classnamesVals = Object.keys(classnames)
  rxjsVals = Object.keys(rxjs)

}
