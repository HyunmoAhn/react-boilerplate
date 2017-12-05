import React from 'react';
import { shallow } from 'enzyme';

import Children from './';
describe('<Children />', () => {
	it('should match to snapshot when render default', () => {
		const wrapper = shallow(<Children />);

		expect(wrapper).toMatchSnapshot();
	});
});