import uuid from 'uuid';
// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
import callApi from '../../util/apiCaller';

export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const MOVE_WITHIN_LANE = 'MOVE_NOTES';

// Export Actions
export function createNote(note, laneId) {
 return {
   type: CREATE_NOTE,
   laneId,
   note,
 };
}

export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

export function editNote(noteId){
  return {
    type: EDIT_NOTE,
    noteId,
  }
}

export function moveWithinLane(laneId, targetId, sourceId) {
 return {
   type: MOVE_WITHIN_LANE,
   laneId,
   targetId,
   sourceId,
 };
}