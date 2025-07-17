import React from 'react';
import type { LessonFormData } from './types';

interface LessonFormProps {
  formData: LessonFormData;
  timeSlots: string[];
  courts: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minWidth: '140px',
};

const LessonForm: React.FC<LessonFormProps> = ({ formData, timeSlots, courts, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        marginBottom: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        name="memberName"
        placeholder="Member Name(s)"
        value={formData.memberName}
        onChange={onChange}
        required
        style={inputStyle}
        autoComplete="off"
        inputMode="text"
        spellCheck={false}
      />
      <input
        type="text"
        name="proName"
        placeholder="Pro Name"
        value={formData.proName}
        onChange={onChange}
        required
        style={inputStyle}
      />
      <select name="startTime" value={formData.startTime} onChange={onChange} required style={inputStyle}>
        <option value="">Select Start Time</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <select name="duration" value={formData.duration} onChange={onChange} style={inputStyle}>
        <option value="30">30 min</option>
        <option value="60">1 hour</option>
        <option value="90">1.5 hours</option>
      </select>
      <select name="court" value={formData.court} onChange={onChange} style={inputStyle}>
        {courts.map((court) => (
          <option key={court} value={court}>
            {court}
          </option>
        ))}
      </select>
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Add Lesson</button>
    </form>
  );
};

export default LessonForm;
