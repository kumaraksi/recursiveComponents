import TreeContainer from '../views/TreeContainer/TreeContainer';

const appRoutes = [
  { path: '/tree', component: TreeContainer },
  { redirect: true, path: '/', to: '/tree', navbarName: 'Redirect' },
];

export default appRoutes;
