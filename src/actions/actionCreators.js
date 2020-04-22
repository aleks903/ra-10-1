import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CHANGE_SERVICE, CHANGE_SERVICE_CANCEL } from './actionTypes.js';

export function addService(id, name, price) {
  return {type: ADD_SERVICE, payload: {id, name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(nameField, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {nameField, value}};
}

export function changeService(id, name, price) {
  return {type: CHANGE_SERVICE, payload: {id, name, price}};
}

export function changeServiceCancel () {
  return {type: CHANGE_SERVICE_CANCEL};
}
