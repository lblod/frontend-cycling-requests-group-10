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

  this.route('requests', { path: '/aanvragen' }, function () {
    this.route('new', { path: '/nieuw' }, function () {
      this.route('identity', { path: '/identiteit' });
      this.route('route-description', { path: '/routebeschrijving' });
      this.route('extra-info', { path: '/extra-informatie' });
    });
    this.route('request', { path: '/:request_id' }, function () {
      this.route('edit', { path: '/bewerken' });
      this.route('agenda-items', { path: '/agendapunten' });
    });
  });

  this.route('statistics');
  this.route('login');
  this.route('mock-login');
  this.route('example-form');
  this.route('example-form-instance', { path: '/example-form/:id' });
});
