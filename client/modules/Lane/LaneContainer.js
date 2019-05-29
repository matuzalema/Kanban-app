import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { deleteLane, updateLane, editLane, moveBetweenLanes } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const noteTarget = {
 hover(targetProps, monitor) {
   const sourceProps = monitor.getItem();
   const { id: noteId, laneId: sourceLaneId } = sourceProps;

   if (!targetProps.lane.notes.length) {
     targetProps.moveBetweenLanes(
       targetProps.lane.id,
       noteId,
       sourceLaneId,
     );
   }
 },
};

const mapDispatchToProps = {
  editLane,
  deleteLane,
  updateLane,
  moveBetweenLanes,
  addNote: createNoteRequest,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget()
  }))
)(Lane);