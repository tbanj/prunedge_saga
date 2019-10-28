// import React from 'react';
// import { shallow } from 'enzyme';
// import { findByTestAttr } from '../util/index';
// import { App } from './App';

// /* 
// test(); or it();
// */

// /* to avoid repetitve code during component test since we 
// will be testing different divs like img & the rest through
// there data-test attributes..it make sense if make use of foreach to reduce the code */

// // th input parameter for setup might varied it might be state or props
// const setUp = (props = {}) => {
//     const component = shallow(<App {...props} />).childAt(0).dive();
//     return component;
// }



// describe('App Component', () => {
//     let component;
//     beforeEach(() => {
//         component = setUp();

//     })
//     it('should render without errors', () => {
//         // to see what shallow render is doing
//         // console.log(component.debug());

//         const wrapper = findByTestAttr(component, 'appComponent');
//         /*  appComponent is use to check if the component attach
//          to this data-test attribute render & since we reference the data-test
//         once in our project we should expect it .toBe(1) if we right to 
//          .toBe(2) & we make use of it once below test will fail
//          */
//         expect(wrapper.length).toBe(1);
//     })


// })