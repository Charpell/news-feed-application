import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../src/components/NotFound';

describe('NotFound', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
