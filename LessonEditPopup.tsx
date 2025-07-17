import React, { useState } from 'react';
import type { Lesson } from './types';

interface LessonEditPopupProps {
  lesson: Lesson;
  onSave: (updatedLesson: Lesson) => void;
  onClose: () => void;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px',
  marginTop: '4px',
  marginBottom: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '0.9rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '8px 16px',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  borderRadius: '6px',
  cursor: 'pointer',
  border: 'none',
  color: '#fff',
};

const LessonEditPopup: React.FC<LessonEditPopupProps> = ({ lesson, onSave, onClose }) => {
  const [editedLesson, setEditedLesson] = useState<Lesson>({ ...lesson });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'memberName') {
      setEditedLesson((prev) => ({
        ...prev,
        memberName: value.split(',').map(name => name.trim()),
      }));
    } else {
      setEditedLesson((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    onSave(editedLesson);
  };

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Edit Lesson</h2>

      <label>Pro Name:
        <input
          name="proName"
          value={editedLesson.proName}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </label>

      <label>Member Name(s):
        <input
          name="memberName"
          value={Array.isArray(editedLesson.memberName) ? editedLesson.memberName.join(', ') : ''}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </label>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
        <button style={{ ...buttonStyle, backgroundColor: '#007bff' }} onClick={handleSave}>Save</button>
        <button style={{ ...buttonStyle, backgroundColor: '#6c757d' }} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LessonEditPopup;
