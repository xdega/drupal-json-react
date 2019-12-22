import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="mt-2 shadow">
        <h2 className="text-white text-lg bg-gray-800 p-2 py-1">Home</h2>
        <div className="bg-gray-200 border-2 border-gray-300 border-t-0 p-2"> 
          Greetings and welcome to my React sandbox.
        </div>
      </div>
    );
  }
}
