// import React from 'react';
// import { shallow } from 'enzyme';
// import { Signup } from './Signup';
// import { findByTestAttr, checkProps } from '../../../util/index';

// const setUp = (props = {}) => {
//     const component = shallow(<Signup {...props} />);
//     return component;
// }
// describe('Signup Component', () => {




//     describe('Have Props', () => {
//         let wrapper;
//         beforeEach(() => {
//             const props = {
//                 location: {
//                     pathname: 'Test Pathname'
//                 },
//             };
//             wrapper = setUp(props);
//         });

//         it('Should render without errors', () => {
//             const component = findByTestAttr(wrapper, 'signupComponent');
//             expect(component.length).toBe(1);
//         });
//     });

//     describe('Have No Props', () => {
//         let wrapper;
//         beforeEach(() => { wrapper = setUp(); });

//         it('Should not render', () => {
//             const component = findByTestAttr(wrapper, 'signupComponent');
//             expect(component.length).toBe(1);
//         })
//     });

//     // check types of props & 
//     describe('Check PropTypes', () => {

//         it('Should not throw a warning', () => {
//             const expectedProps = {
//                 // test for routing propType
//                 location: {
//                     pathname: 'Test Pathname',
//                 },
//                 // test for object or array propType
//                 // tempArr: [{
//                 //     name: 'Test name',
//                 //     age: 25,
//                 //     isOnline: false
//                 // }],
//             };
//             const propsErr = checkProps(Signup, expectedProps);
//             expect(propsErr).toBeUndefined();

//         });
//     });





// });

