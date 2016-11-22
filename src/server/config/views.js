import * as NodePath from 'path';
import * as HapiReactViews from 'hapi-react-views';

const path = '../../public/components';

export default {
  engines: {
    js: HapiReactViews,
  },
  relativeTo: __dirname,
  path,
  compileOptions: {
    layout: 'Layout',
    layoutPath: NodePath.join(__dirname, path, '../RootComponents'),
  },
};
