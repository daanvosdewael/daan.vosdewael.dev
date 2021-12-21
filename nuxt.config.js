/* eslint sort-keys: 'error' */

import build from './config/build';
import buildModules from './config/build-modules';
import css from './config/css';
import head from './config/head';
import modules from './config/modules';

export default {
    components: true,
    target: 'static',
    telemetry: false,
    ...build,
    ...buildModules,
    ...css,
    ...head,
    ...modules,
};
