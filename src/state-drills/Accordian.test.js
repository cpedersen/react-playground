import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordian from './Accordian';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const sectionProps = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

describe(`Accordian Component`, () => {
    // array of objects, each with a name and content
  
    it('renders an empty ul and li when the sections prop is not supplied', () => {
        const wrapper = shallow(<Accordian />);
        expect(toJson(wrapper)).toMatchSnapshot();

    });

    it('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordian sections={sectionProps} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('opens any clicked section', () => {
        const wrapper = shallow(<Accordian sections={sectionProps} />);
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('only opens the last section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordian sections={sectionProps} />);
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})