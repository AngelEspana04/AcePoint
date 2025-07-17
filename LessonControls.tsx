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
  const [proName, setProName] = useState(lesson.proName);
  const [memberNames, setMemberNames] = useState(
    Array.isArray(lesson.memberName) ? lesson.memberName.join(', ') : ''
  );

  const handleSave = () => {
    const updatedLesson: Lesson = {
      ...lesson,
      proName: proName.trim(),
      memberName: memberNames
        .split(',')
        .map(name => name.trim())
        .filter(name => name.length > 0),
    };
    onSave(updatedLesson);
  };

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Edit Lesson</h2>

      <label style={{ display: 'block' }}>
        Pro Name:
        <input
          type="text"
          value={proName}
          onChange={(e) => setProName(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'block' }}>
        Member Name(s):
        <input
          type="text"
          value={memberNames}
          onChange={(e) => setMemberNames(e.target.value)}
          style={inputStyle}
        />
      </label>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
        <button style={{ ...buttonStyle, backgroundColor: '#6c757d' }} onClick={onClose}>
          Cancel
        </button>
        <button style={{ ...buttonStyle, backgroundColor: '#007bff' }} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default LessonEditPopup;
