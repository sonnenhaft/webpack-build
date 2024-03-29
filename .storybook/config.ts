import { configure } from '@storybook/react';

configure(function loadStories() {
  const req = require.context('../src', true, /\.stories\.tsx$/);

  req.keys().forEach(filename => req(filename));
}, module);