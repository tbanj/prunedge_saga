import checkPropTypes from 'check-prop-types';
// findByTestAttr('shallow render', 'attribute which we use to reference the component')
export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, 'props', component.name);
    return propsErr;
}