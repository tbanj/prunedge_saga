import React from 'react';
import { shallow } from 'enzyme';
import { ButtonList } from './ButtonList';
import { findByTestAttr, checkProps } from '../../../util/index';

const setUp = (props = {}) => {
    const component = shallow(<ButtonList {...props} />);
    return component;
}
describe('ButtonList Component', () => {

    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button',
                emitEvent: () => { },
            };
            wrapper = setUp(props);
        });

        it('Should render buttonList without errors', () => {
            const component = findByTestAttr(wrapper, 'buttonListComponent');
            expect(component.length).toBe(1);
        });
    });

    describe('Have No Props', () => {
        let wrapper;
        beforeEach(() => { wrapper = setUp(); });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'buttonListComponent');
            expect(component.length).toBe(1);
        })
    });

    // check types of props & 
    describe('Check PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                // test for ActionCreators propType
                buttonText: 'Example Button',
                emitEvent: () => { },
            };
            const propsErr = checkProps(ButtonList, expectedProps);
            expect(propsErr).toBeUndefined();

        });
    });

});

