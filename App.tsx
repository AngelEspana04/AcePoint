import React, { useState, useEffect } from 'react';
import LessonForm from './LessonForm';
import CourtGrid from './CourtGrid';
import type { Lesson, LessonFormData } from './types';

const getLessonTimeSlots = (startTime: string, duration: string): string[] => {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const durationMin = parseInt(duration, 10);
  const slots: string[] = [];

  for (let i = 0; i < durationMin; i += 30) {
    const date = new Date();
    date.setHours(startHour, startMin + i);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    slots.push(`${hours}:${minutes === 0 ? '00' : '30'}`);
  }

  return slots;
};

const generateTimeSlots = () => {
  const times = [];
  for (let hour = 6; hour <= 20; hour++) {
    times.push(`${hour}:00`);
    times.push(`${hour}:30`);
  }
  return times;
};

const courts = Array.from({ length: 12 }, (_, i) => `Court ${i + 1}`);
const timeSlots = generateTimeSlots();

function App() {
  const [formData, setFormData] = useState<LessonFormData>({
    memberName: '', // temporarily store string
    proName: '',
    startTime: '',
    duration: '30',
    court: 'Court 1',
  });

  const [lessons, setLessons] = useState<Lesson[]>(() => {
    const stored = localStorage.getItem('lessons');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('lessons', JSON.stringify(lessons));
  }, [lessons]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedPro = formData.proName.trim().toLowerCase();
    const newLessonSlots = getLessonTimeSlots(formData.startTime, formData.duration);

    const isConflict = lessons.some((lesson) => {
      const existingPro = lesson.proName.trim().toLowerCase();
      if (existingPro !== normalizedPro) return false;

      const existingSlots = getLessonTimeSlots(lesson.startTime, lesson.duration);
      return newLessonSlots.some(slot => existingSlots.includes(slot));
    });

    if (isConflict) {
      alert(`⚠️ This pro is already booked at that time.`);
      return;
    }

    const newLesson: Lesson = {
      ...formData,
      proName: formData.proName.trim(),
      memberName: formData.memberName
        .split(',')
        .map(n => n.trim())
        .filter(n => n !== ''),
      status: 'Pending',
    };

    setLessons(prev => [...prev, newLesson]);
    setFormData({
      memberName: '',
      proName: '',
      startTime: '',
      duration: '30',
      court: 'Court 1',
    });
  };

  const handleUpdateStatus = (target: Lesson, status: 'Done' | 'Cancelled') => {
    if (status === 'Cancelled') {
      setLessons(prev =>
        prev.filter(lesson =>
          !(
            lesson.startTime === target.startTime &&
            lesson.court === target.court &&
            lesson.proName === target.proName
          )
        )
      );
    } else {
      setLessons(prev =>
        prev.map(lesson =>
          lesson.startTime === target.startTime &&
          lesson.court === target.court &&
          lesson.proName === target.proName
            ? { ...lesson, status }
            : lesson
        )
      );
    }
  };

  return (
    <div style={{ padding: '1rem', overflowX: 'auto', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <h1>MIC Tennis Court Reservation Sheet</h1>

      <LessonForm
        formData={formData}
        timeSlots={timeSlots}
        courts={courts}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <CourtGrid
        timeSlots={timeSlots}
        courts={courts}
        lessons={lessons}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}

export default App;
