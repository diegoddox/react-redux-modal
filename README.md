##`react-redux-modal` [demo](http://diegoddox.github.io/react-redux-modal/)

## Implementation Guide

##### 1. Installation

`npm install --save react-redux-modal`

##### 2. Add the `react-redux-modal` css link to your app
```
<link href="http://diegoddox.github.io/react-redux-modal/0.1.0/react-redux-modal.min.css" rel="stylesheet" type="text/css">
```
##### 3. The third thing you need to do is to add the `react-redux-modal` `reducer` to Redux.

```
import {createStore, combineReducers} from 'redux'
import {reducer as modalReducer} from 'react-redux-modal'
const reducers = {
  // ... other reducers ...
  modals: modalReducer // <- Mounted at modals.
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
```

##### NOTE: The default mount point for `react-redux-modal` is `modals`.

##### 4. Add the `react-redux-modal` React component to the root of your app
```
import {Provider}  from 'react-redux'
import ReduxModal from 'react-redux-modal'

<Provider store={store}>
  <div>
    ... other things like router ...
    <ReduxModal />
  </div>
</Provider>
```

##### 5. Add the `react-redux-modal`  `modal` emitter
The `modal` method use [eventemitter3](https://github.com/primus/eventemitter3) to dispatch the actions

```
import React, {Component}  from 'react'
import {modal} from 'react-redux-modal' // The modal emitter
```

Create a `component` that will be injected in the modal
```
class myModalComopnent extends Component {
  constructor(props) {
    super(props);
    console.log('## MODAL DATA AND PROPS:', this.props);
  }

  removeThisModal() {
    this.props.removeModal();
  }
	
  render() {
    return (
      <div>
        <p>this is my modal</p>
        <button
          type="button"
          onClick={this.removeThisModal.bind(this)}>
          close this modal
        </button>
      </div>
    );
  }
}
```
```
export class YourComponent extends Component {
  constructor(props) {
	  super(props);
  }

  addModal() {
    modal.add(myModalComopnent, {
      title: 'This is my modal',
      size: 'medium', // large, medium or small,
      closeOnOutsideClick: false // (optional) Switch to true if you want to close the modal by clicking outside of it,
      hideCloseButton: false // (optional) if you don't wanna show the top right close button
      //.. all what you put in here you will get access in the modal props ;)
    });
  }
  
  render() {
    return <button onClick={this.addModal.bind(this)}>Add modal</button>;
  }
}
```

The `modal` `add` method takes two arguments, first a `react` `component`  and a `object` that will specify the modal `title`, `size` and `data` 

# Run a local demo
```
git clone https://github.com/diegoddox/react-redux-modal.git
cd react-redux-modal
npm install
npm start
```
open your browser at `http://localhost:3001`

# TODO
create test.