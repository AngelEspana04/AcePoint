import React from 'react';
import type { Lesson } from './types';
import LessonControls from './LessonControls';

const proColorMap: Record<string, string> = {
  Harry: '#FFD6A5',
  Tony: '#B5EAD7',
  Jason: '#FFDAC1',
  Harman: '#C7CEEA',
  Angel: '#FFB7B2',
  Miguel: '#B8F2E6',
  Emma: '#E2F0CB',
  Dafne: '#FFC6FF',
  TK: '#A0D2EB',
};

interface CourtGridProps {
  timeSlots: string[];
  courts: string[];
  lessons: Lesson[];
  onUpdateStatus: (lesson: Lesson, status: 'Done' | 'Cancelled') => void;
}

const CourtGrid: React.FC<CourtGridProps> = ({ timeSlots, courts, lessons, onUpdateStatus }) => {
  const getLessonForCell = (time: string, court: string) => {
    return lessons.find((lesson) => {
      if (lesson.court !== court) return false;
      const slots = getLessonTimeSlots(lesson.startTime, lesson.duration);
      return slots.includes(time);
    });
  };

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

  const getProColor = (proName: string): string => {
    return proColorMap[proName] || '#f9f9f9';
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `120px repeat(${courts.length}, 1fr)`, border: '1px solid #ccc' }}>
      {/* Header Row */}
      <div style={{
        background: '#f1f1f1',
        padding: '10px',
        fontWeight: 'bold',
        borderBottom: '1px solid #ccc',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>Time</div>
      {courts.map((court) => (
        <div key={court} style={{
          background: '#f1f1f1',
          padding: '10px',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '0.9rem',
          borderBottom: '1px solid #ccc'
        }}>
          {court}
        </div>
      ))}

      {/* Time Slot Rows */}
      {timeSlots.map((time) => (
        <React.Fragment key={time}>
          <div style={{
            padding: '10px',
            borderTop: '1px solid #ccc',
            fontSize: '0.85rem',
            textAlign: 'center',
            backgroundColor: '#fafafa'
          }}>
            {time}
          </div>

          {courts.map((court) => {
            const lesson = getLessonForCell(time, court);
            const isCancelled = lesson?.status === 'Cancelled';
            const isInLesson = lesson !== undefined;
            const isStart = lesson?.startTime === time;
            const backgroundColor = lesson ? getProColor(lesson.proName) : '#ffffff';

            return (
              <div
                key={`${time}-${court}`}
                style={{
                  borderTop: '1px solid #ddd',
                  borderLeft: '1px solid #eee',
                  height: '64px',
                  backgroundColor,
                  padding: '6px',
                  fontWeight: isInLesson ? 'bold' : 'normal',
                  color: isStart ? '#000' : 'transparent',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {lesson && isStart && !isCancelled ? (
              <div
                style={{
                position: 'relative',
                overflow: 'visible',
                top: 0,
                left: 0,
                width: '100%',
                height: '64px', // 64px per 30min slot
                zIndex: 1,
                }}
              >
              <LessonControls
                lesson={lesson}
                onUpdateStatus={onUpdateStatus}
              />
              </div>
            ) : null}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CourtGrid;
