
import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import MakeHtml from '../MakeHtml';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');
configure({adapter: new Adapter()});
import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;
import '../../public/javascripts/tools/tiny-pub-sub.js';
//import '../fake-pub-sub';
import raf from '../temp-poly-fills';



describe('Home Button Tests', () =>{
    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('publishes clientMakeHtml event after button click with done', (done) => {
        const wrapper = shallow(<HomeButtons/>);
        $.subscribe('clientMakeHtml', (event, target) => {
            expect(target.message).toBe('The user wants to makeHtml.');
            done();
        });
        wrapper.find('#makeHtml').simulate('click');
    });

    it('publishes clientMakeImage event after button click with done', (done) => {
        const wrapper = shallow(<HomeButtons/>);
        $.subscribe('clientMakeImage', (event, target) => {
            expect(target.message).toBe('The user wants to makeImage.');
            done();
        });
        wrapper.find('#makeImage').simulate('click');
    });

});