import { SHOW_MODAL, HIDE_MODAL } from '../constants/actions';

export const showModal = (type, props) => ({
  type: SHOW_MODAL,
  payload: {
    type,
    props
  }
});

export const hideModal = () => ({
  type: HIDE_MODAL
});