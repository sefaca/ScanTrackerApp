// THIS IS A GENERATED FILE. DO NOT MODIFY
import {snapshotTest} from '@storybook-utils';
const imports = require('../index.stories') as Record<string, any>;

Object.entries(imports)
  .filter(([key]) => key !== 'default')
  .forEach(([key, value]) => {
    snapshotTest(key, value);
  });
