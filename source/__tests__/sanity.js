import React from 'react';
import ReactDOM from 'react-dom';


import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import {configure, shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({Adapter: new Adapter()});
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

describe('basic sanity test', () => {
  it('is true true', function() {

     expect(true).toBe(true);
  });

    it('tests if we can load ReactHome', () => {

      const div = document.createElement('div');
      ReactDOM.render(<ReactHome/>, div);
    });

    it('tests if we can load HomeButtons', () => {

        const div = document.createElement('div');
        ReactDOM.render(<HomeButtons/>, div);
    });

    it('renders default value of H1 tag', () =>{
        const wrapper = shallow(<ReactHome/>);
        cont nineSign = <h1>An H1 Eelement in a React Components</h1>;
        elfDebugEzyme.getlast...
        ......;

    });

});