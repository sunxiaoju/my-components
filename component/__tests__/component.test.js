/*
 * 1. 组件能正常渲染
 * 2. props信息能正常传入
 * 3. button能展示，且参数传入正确
 * 4. buttonbar能展示，且参数传入正确
 * 5. children 能正常传入
 */
import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Button, { ButtonBar } from '../index';
import toJson from 'enzyme-to-json';

const buttonProps = {
  iconSide: 'right',
  size: 'large',
};
describe('Button test', () => {
  const wrapper = mount(<Button {...buttonProps}>Submit</Button>);

  it('Button show', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Icon in button is displayed at right', () => {
    const iconWrapper = wrapper.find('button').hasClass('button-icon-right');
    expect(iconWrapper).toBe(true);
  });

  it('Icon size is large or not', () => {
    const iconWrapper = wrapper.props();
    expect(iconWrapper.size).toBe('large');
  });
});

