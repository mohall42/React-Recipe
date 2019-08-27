import React from 'react';
import ReactDOM from 'react-dom';
 
import { shallow, mount, render } from 'enzyme';
import App from './App';
import LandingPage from './components/LandingPage'
import Pickpage from './components/Pickpage'

describe('Web App renders' , () =>{

  it(' renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  
  it('renders Landing Page without crash', () =>{
    const div = document.createElement('div')
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);  //Clean up even handlier and state
  
  });
  
  it('renders Pickpage without crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Pickpage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


});




describe( 'Landing Page has all components', () => {

  it('has input box and logo', () => {

    const wrapper = shallow(<LandingPage />);

    expect(wrapper.find('form').closest('.title').type()).to.equal('h1');

  });
  

});
