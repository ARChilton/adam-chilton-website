import React from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import createHistory from 'history/createBrowserHistory'
import configureStore from '../redux/store'
import theme from '../css/theme'

const history = createHistory()
const store = configureStore({}, history)

const Provider = ({ story }) => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      {story}
    </ReduxProvider>
  </ThemeProvider>
)

Provider.propTypes = {
  story: PropTypes.func.isRequired,
}
export default Provider
