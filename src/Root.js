import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const Root = () => {
    console.log({store})
    return (
        <div>
            <Provider store={store}>
                <App></App>
            </Provider>
        </div>
    )
}

export default Root