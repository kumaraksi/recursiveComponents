import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../../utils/testUtils';
import ConnectedTreeContainer, { TreeContainer } from './TreeContainer';

/**
 * @function setup
 * @param {object} initialState - initial State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ConnectedTreeContainer store={store} />).dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('redux properties', () => {
  
});
