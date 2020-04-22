import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, changeService, changeServiceCancel } from '../actions/actionCreators.js';

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const itemsActive = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleRemove = id => {
    console.log(itemsActive);
    console.log(id);
    if (itemsActive.id !== id) {
      dispatch(removeService(id));
    } else {
      dispatch(changeServiceCancel());
      dispatch(removeService(id));
    }
  };

  const handleChange = (o) => {
    const { id, name, price } = o;
    dispatch(changeService(id, name, price));
  };

  return (
    <ul>
      {items.map((o) => <li key={o.id}>
        {o.name} {o.price}
        <button className="material-icons" onClick={() => handleChange(o)}>create</button>
        <button className="material-icons" onClick={() => handleRemove(o.id)}>clear</button>
      </li>)}
    </ul>
  );
}
