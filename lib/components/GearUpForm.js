import React, { Component } from 'react';
import firebase, { gearUpReference } from '../firebase';
import GearUp from './GearUp';

export default class GearUpForm extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      description: '',
      link: ''
    };
  }

    setGearUpInfo(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    createGearUp(e) {
      e.preventDefault();
      const gearUp = {
        title: this.state.title,
        description: this.state.description,
        link: this.state.link
      };
      gearUpReference.push(gearUp);
      document.getElementById('GearUpForm').reset();
    }

  render() {
    return(
      <section className='Modal'>
        <section id='GearUpForm'>
          <form onSubmit={(e)=>this.createGearUp(e)}>
            <h1 className='FormTitle GearUpTitle'>Submit a Gear Up</h1>
            <input
              name='title'
              onChange={(e)=>this.setGearUpInfo(e)}
              placeholder='Gear Up Title'
            />
            <textarea
              name='description'
              onChange={(e)=>this.setGearUpInfo(e)}
              placeholder='Description'
            />
            <input
              name='link'
              onChange={(e)=>this.setGearUpInfo(e)}
              placeholder='Link'
            />
            <section className='ButtonContainer'>
              <button className='SubmitButton' type='submit'>Submit</button>
              <button className='CancelButton' onClick={(e) => {
                e.preventDefault();
                this.props.hideGearUpForm(e)
              }}
              >Cancel</button>
            </section>
          </form>
          <GearUp gearUp={this.props.gearUp}/>
        </section>
      </section>
    )
  }
}