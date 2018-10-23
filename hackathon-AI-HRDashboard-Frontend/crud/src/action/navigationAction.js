import history from '../helpers/history'
import { CHANGE_PAGE, TOGGLE_CLIENT } from '../constants/actions'

export function toggleClient(isOpen, name){
  return {
    type: TOGGLE_CLIENT,
    isOpen, name
  }
}