import React from 'react';
import Product from './index';
import Image from '../../assets/images/miel.jpg'

export default {
  title: 'Element/Product',
  component: Product
};

const Template = (args) => <Product {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Miel',
  image: 'static/media/src/assets/images/miel.jpg',
  description: 'Explicabo veniam nesciunt ex sint cum eum voluptatem, placeat necessitatibus vitae exercitationem quas rem dicta optio.'
};
