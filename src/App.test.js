import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// import ReactDOM from 'react-dom';
import App from './App';

configure({ adapter: new Adapter() })
const app = shallow(<App />);
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
  expect(app).toMatchSnapshot();
});