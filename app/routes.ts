import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route('/', 'routes/start.tsx'),
  route('page/:pageId', 'routes/main.tsx'),
  route('*', 'routes/notfound.tsx'),
] satisfies RouteConfig;
