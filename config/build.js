import loaders from './build/loaders';
import postcss from './build/postcss';

export default {
    build: {
        ...loaders,
        ...postcss,
    },
};
