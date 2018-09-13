import React from "react";
import { render } from "react-dom";

const MyTitle = function(props) {
  console.log(props);
  return React.createElement('div', { id: 'i-am-title' }, React.createElement('h4', null, props.title));
};
const MyFirstComponent = function() {
  return React.createElement(
    'div',
    { id: 'my-first-component', className: 'hola' },
    // React.createElement('h1', null, 'Hi I am the first component')
    React.createElement(MyTitle, { title: 'Game of Thrones' }),
    React.createElement(MyTitle, { title: 'Rick and Morty' }),
    React.createElement(MyTitle, { title: 'Silicon Valley' }),
    React.createElement(MyTitle, { title: 'F.R.I.E.N.D.S' })
  );
};
render(React.createElement(MyFirstComponent), document.getElementById('app'));
