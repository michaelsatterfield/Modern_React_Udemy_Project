import ReactDOM from 'react-dom';
import React from 'react'



// create react components//
const App = () => {
  const buttonText = {text:'Click Me'};

  return (
    <div>
      <label className="label"> Enter Name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color:'white'}}>
          {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
