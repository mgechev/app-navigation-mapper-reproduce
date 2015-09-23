import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {NamesList} from './services/NameList';
import {NagivationMapper} from './NagivationMapper';

@Component({
  selector: 'app',
  bindings: [NagivationMapper, NamesList]
})
@RouteConfig([
    new Route({ path: 'home', as: 'home', component: Home }),
    new Route({ path: 'about', as: 'about', component: About })
])
@View({
  templateUrl: './shell.html',
  styleUrls: ['./shell.css'],
  directives: [ROUTER_DIRECTIVES]
})
class Shell {
  constructor(demo:NagivationMapper) {
    console.log(demo);
  }
}

bootstrap(Shell, [ROUTER_BINDINGS]);
