// MyComponent.js
import React from 'react';

function MyWidget() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
MyWidget.init = (config) => {
  ReactDOM.render(<MyWidget {...config} />, document.getElementById('my-widget-container'));
};

export default MyWidget;
