import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, changeServiceCancel } from '../actions/actionCreators.js';

export default function ServiceAdd(props) {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {name, value} = event.target;
    dispatch(changeServiceField(name, value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (item.id) {
      dispatch(addService(item.id, item.name, item.price))
    } else {
      dispatch(addService('', item.name, item.price))
    }
  };

  const handleRest = (event) => {
    console.log('reset');
    dispatch(changeServiceCancel());
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleRest}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      {item.id && <button type='reset'>Cancel</button>}
    </form>
  );
}
