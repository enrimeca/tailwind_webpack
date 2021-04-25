import React from 'react';
import Footer from './index';

export default {
  title: 'Components/Footer',
  component: Footer
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {}