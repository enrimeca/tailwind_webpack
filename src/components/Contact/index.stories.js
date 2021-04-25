import React from 'react';
import Contact from './index';

export default {
  title: 'Components/Contact',
  component: Contact
};

const Template = (args) => <Contact {...args} />;

export const Primary = Template.bind({});
Primary.args = {}