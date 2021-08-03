import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import testimonial from './testimonial';
import portfolio from './portfolio';
import services from './services';
import project from './project';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    testimonial, portfolio, services, project
  ]),
});
