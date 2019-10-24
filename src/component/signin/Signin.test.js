import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// import ReactDOM from 'react-dom';
import { Signin } from './Signin';

configure({ adapter: new Adapter() });
const signin = shallow(<Signin />);

it('renders without crashing', () => {
    expect(signin).toMatchSnapshot();
});