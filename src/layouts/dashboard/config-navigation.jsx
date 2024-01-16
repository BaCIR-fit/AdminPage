import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Utilisateurs',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Employés',
    path: '/employe',
    icon: icon('ic_user'),
  },
  {
    title: 'Connexion',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: '',
    path: '',
    icon: icon(''),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: '404',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
