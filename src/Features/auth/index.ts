import { Platform } from 'react-native'
import { connect } from 'react-redux'

import { AppMapDispatchToProps, AppMapStateToProps } from 'Services/redux/index'

const mapStateToProps: AppMapStateToProps = (state) => ({
  state: state.__version
})
const mapDispatchToProps: AppMapDispatchToProps = (dispatch) => ({
  log: () => dispatch({ type: 'hi' })
})
let Component

if (Platform.OS === 'web') {
  Component = require('./screen.web')
} else {
  Component = require('./screen')
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
