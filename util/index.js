// findByTestAttr('shallow render', 'attribute which we use to reference the component')
export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}