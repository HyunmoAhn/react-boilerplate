import React from 'react';
import { shallow } from 'enzyme';

import Counter from './';

describe('<Counter />', () => {
	it('should match to snapshot when render default', () => {
		const wrapper = shallow(<Counter />);

		expect(wrapper).toMatchSnapshot();
	});
});