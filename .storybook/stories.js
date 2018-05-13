import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import World from '../src/components/app/app';

storiesOf('Global', module)
  .addDecorator(withKnobs)
  .add('World', () => (
    <World hasCube={boolean('hasCube', true)} />
  ));
