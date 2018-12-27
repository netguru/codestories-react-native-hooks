import PT from 'prop-types'

export const NavigationPropTypes = PT.shape({
  navigate: PT.func.isRequired,
  getParam: PT.func.isRequired,
})
