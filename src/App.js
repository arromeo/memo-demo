import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Reducers
import rootReducer from './reducers'

// Components
import { CardList } from './components/CardList'

const store = createStore(rootReducer)

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CardList />
			</div>
		</Provider>
	)
}

export default App
