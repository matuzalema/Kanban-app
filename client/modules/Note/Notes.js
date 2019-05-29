import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import Edit from '../../components/Edit';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote, moveWithinLane}) => {
  return (
  <ul className="notes">
    {notes.map((note, id) =>
      <Note
        id={note.id}
        key={note.id}
        moveWithinLane={moveWithinLane}
        laneId={laneId}
        _id={note._id}
      >
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => editNote(note.id)}
          onUpdate={(task) => updateNote({
              ...note,
              task,
              editing: false,
            }
          )}
          onDelete={() => deleteNote(note.id, laneId)}
        />
      </Note>
    )}
  </ul>
  );
};


Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;