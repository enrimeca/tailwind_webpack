import React from 'react';
import Hero from './index'
import data from '../../data/organization.json'

export default {
  title: 'Elements/Hero',
  component: Hero
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: data.title,
  company: data.company,
  resume: data.resume
};
