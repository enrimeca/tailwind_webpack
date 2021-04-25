import React from 'react';
import Nav from './index'
import data from '../../data/menu.json'

export default {
  title: 'Component/Nav',
  component: Nav
};

const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: data.items
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   options: data.items,
//   color: 'gray'
// };
