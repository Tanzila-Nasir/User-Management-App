import React from 'react';

function UserCard({ name, email, role }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '180px',
      textAlign: 'center'
    }}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p><strong>{role}</strong></p>
    </div>
  );
}

export default UserCard;
