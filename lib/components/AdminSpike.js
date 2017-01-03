import React from 'react';
import firebase from '../firebase';
import moment from 'moment';
import uuid from 'uuid';

const AdminSpike = ({ spike, createSpike, updateSpike, deleteSpike }, key ) => {
  return (
    <div className="SpikeCard" key={key}>
      <p>Spike Topic:  {spike.title}</p>
      <p>Description:  {spike.description}</p>
      <p>Added by:  {spike.createdBy}</p>
      <p>Attendees: </p>
      <ul>
        {spike.attendees ?
          spike.attendees.map((attendee) => {
            return <li key={new uuid()}>{attendee}</li>
          })
          : <p>No Attendees</p>
        }
      </ul>
      <h3>Date Submitted:  {moment(spike.created_at).format("MM-DD-YYYY")}</h3>
        <form action="submit" className="location-form">
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
