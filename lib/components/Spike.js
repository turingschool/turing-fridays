import React from 'react';
import firebase from '../firebase';
import moment from 'moment';

const Spike = ({ spike, createSpike, updateCount, user }, key, admin ) => {
  if (spike) {
    return (
      <div className="spike-card" key={key}>
        <h1>{spike.title}</h1>
        <h2>{spike.description}</h2>
        <p>{moment(spike.createdAt).format("MM-DD-YYYY")}</p>
        <p>{spike.location}</p>
        <p>{spike.createdBy}</p>
        <p>{spike.attendees.length}</p>
        <button onClick={()=>updateCount(spike, user)}>Vote</button>
      </div>
    )
  } else {
    return (
      <form
        id='proposalForm'
        name='create-spike'
        onSubmit={ (e)=>createSpike(e, user) }>
        <input
          placeholder='title'
          name='title'/>
        <textarea
          placeholder='description'
          name='description'/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Spike