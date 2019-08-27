import React from 'react';
import ReactDOM from 'react-dom';
 
import { shallow, mount, render } from 'enzyme';
import {spy} from 'sinon'
import App from './App';
import LandingPage from './components/LandingPage'
import Pickpage from './components/Pickpage'

describe('Web App renders' , () =>{

  it('renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  
  it('renders Landing Page without crash', () =>{
    const div = document.createElement('div')
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);  //Clean up even handlier and state
  
  });
  
  it('renders Pick Page without crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Pickpage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


});

// Testing Landing Page


describe( 'Landing Page has all components and working ', () => {

  let wrapper;
  let appWrapper;

  beforeEach(() => {
    
    appWrapper = shallow(<App />);
    wrapper = shallow(<LandingPage />); 
  
  
  });


  it('has input form and logo', () => {

    expect(wrapper.find('Main').children()).toHaveLength(2);

    expect(wrapper.find('Box').childAt(0).type()).toEqual('form');


  });


  it('button calls handle submit', () => {

    const mockFunction = spy();

    wrapper.setState({ingredient: 'chicken'});
    wrapper.setProps({handleSubmit: mockFunction});

    expect(wrapper.state('ingredient')).toEqual('chicken')
    
    wrapper.find('button').simulate('click');
    expect(mockFunction.calledOnce).toBeTruthy(); 

    mockFunction.restore;

  })
  

});
