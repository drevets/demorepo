import React from 'react';
import HelloWorldApp from '../client/HelloWorld'

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<HelloWorldApp />).toJSON();
    expect(rendered).toBeTruthy();
});
