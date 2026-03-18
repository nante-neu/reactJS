import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 bg-white border rounded-3 shadow-sm">
        <h1 className="display-4">Welcome to the Library</h1>
        <p className="lead">Search for books and manage your resources directly from the Raspberry Pi.</p>
        <hr className="my-4" />
        <p>Use the navbar to navigate to your student dashboard.</p>
      </div>
    </div>
  );
}

export default Home;
