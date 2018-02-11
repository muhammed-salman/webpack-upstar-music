import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
/* omitted as we included componentRoutes below in Router

import ArtistDetail from './components/artists/ArtistDetail';
import ArtistCreate from './components/artists/ArtistCreate';
import ArtistEdit from './components/artists/ArtistEdit';
*/

//conv jsx routes to js objs
const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(location, cb){
        System.import('./components/artists/ArtistCreate')
        .then(module => cb(null,module.default));
      }
    },
    {
      path: 'artists/:id',
      getComponent(location, cb){
        System.import('./components/artists/ArtistDetail')
        .then(module => cb(null,module.default));
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(location, cb){
        System.import('./components/artists/ArtistEdit')
        .then(module => cb(null,module.default));
      }
    }
  ]
}
const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
