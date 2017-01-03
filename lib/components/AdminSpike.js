import React from 'react';
import firebase from '../firebase';
import moment from 'moment';
import uuid from 'uuid';

const AdminSpike = ({ spike, createSpike, updateSpike, deleteSpike }, key ) => {
  return (
    <div className="SpikeCard AdminSpikeCard" key={key}>
      <p>Spike Topic:  <br/> <span>{spike.title}</span></p>
      <p>Description: <br/> <span>{spike.description}</span></p>
      <p>Added by:  <span>{spike.createdBy}</span></p>
      <p>Session Leaders:  <span>Posse/Student Name(s)</span></p>
      <p>Attendees: </p>
      <ul>
        {spike.attendees ?
          spike.attendees.map((attendee) => {
            return <li key={new uuid()}>{attendee}</li>
          })
          : <p>No Attendees</p>
        }
      </ul>
      <p>
        Date Submitted:  <span>{moment(spike.created_at).format("MM-DD-YYYY")}</span>
      </p>
      <p>
        Spike Session Date:
        <span>Friday, January 6, 2017</span>
      </p>
      <form className="location-form">
        <p>Location: </p>
        <input
          type='radio'
          name='location'
          value='GBank'
          onClick={(e)=>updateSpike(spike, 'location', e.target.value)}
        /> GBank
        <input
          type='radio'
          name='location'
          value='Gusto'
          onClick={(e)=>updateSpike(spike, 'location', e.target.value)}
        /> Gusto
        <input
          type='radio'
          name='location'
          value='Blake'
          onClick={(e)=>updateSpike(spike, 'location', e.target.value)}
        /> Blake
        <button onClick={()=>updateSpike(spike, 'appr', true)}>Approve</button>
        <button onClick={()=>deleteSpike(spike)}>Delete</button>
      </form>
    </div>
  )
}

export default AdminSpike;
