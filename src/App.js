import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTask/>
      <Filter />
      <TaskList/>
    </div>
  );
}

export default App;
