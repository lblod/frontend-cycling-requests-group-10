import EmberRouter from '@ember/routing/router';
import config from 'frontend-hackathon/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('auth', { path: '/authorization' }, function () {
    this.route('callback');
    this.route('login');
    this.route('logout');
    this.route('switch');
  });

  this.route('index', { path: '' });

  this.route('statistics');
  this.route('login');
  this.route('mock-login');
});
