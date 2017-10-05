import {createComponent} from 'react-fela'

const sidebar = () => ({
  width: 300,
  position: 'absolute',
  backgroundColor: '#333',
  height: '100%',
  zIndex: 100,
  transition: '200ms ease-in-out',
  // transform: 'translate3d(-100%,0,0)'
})

export default createComponent(sidebar)