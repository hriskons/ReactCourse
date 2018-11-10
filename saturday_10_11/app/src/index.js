import React from 'react'
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './Redux/Counter3/components'
import store from './Redux/Counter3/store'
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
	<div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
		<App />
	</div>
  </Provider>,
  rootEl
);

registerServiceWorker();