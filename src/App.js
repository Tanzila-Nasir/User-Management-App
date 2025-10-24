import React from 'react';
import Header from './Header';
import Footer from './Footer';
import UserCard from './UserCard';

function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: '20px' }}>
        <h2>Our Users</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <UserCard name="Samrina Aziz" email="samreen321@gmail.com" role="Admin" />
          <UserCard name="Tanzila Nasir" email="tanzila768@gmail.com" role="User" />
          <UserCard name="Husna Qayyum" email="husna99@gmail.com" role="Moderator" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
