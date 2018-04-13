import React from 'react'
import { Route } from 'react-router'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

import NavBar from '../modules/NavBar/NavBar'

import HomePage from './HomePage/HomePage'
import ProjectsPage from './ProjectsPage/ProjectsPage'


const Routes = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={HomePage} />
    <Route path="/projects" component={ProjectsPage} />
  </div>
)

Routes.propTypes = {

}

Routes.defaultProps = {

}

// const mapStateToProps = state => ({
// })

// const mapDispatchToProps = dispatch => ({
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
export default Routes
