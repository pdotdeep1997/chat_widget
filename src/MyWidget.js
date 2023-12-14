// MyWidget.js
import React from 'react';
import ReactDOM from 'react-dom';

const MyWidget = ({ message }) => <div className="my-widget">{message}</div>;

MyWidget.init = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<MyWidget message="Hello from MyWidget!" />, container);
};

export default MyWidget;
