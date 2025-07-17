import React from 'react';

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const modalStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const boxStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  width: '300px',
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  margin: '10px',
  padding: '8px 16px',
  borderRadius: '6px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div style={modalStyle}>
      <div style={boxStyle}>
        <p style={{ fontSize: '1rem', marginBottom: '20px' }}>{message}</p>
        <div>
          <button style={{ ...buttonStyle, backgroundColor: '#dc3545', color: '#fff' }} onClick={onCancel}>
            Cancel
          </button>
          <button style={{ ...buttonStyle, backgroundColor: '#28a745', color: '#fff' }} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
