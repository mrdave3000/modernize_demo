import React, { Component } from 'react'
import Header from './Views/Header/Header'
import Layout from './Views/Layout/Layout'
import FormContainer from './Views/Form/FormContainer'
import Advertorial from './Views/Advertorial'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      bg: 'bg',
    }
  }
  componentDidMount() { 
    this.timer = setInterval(() => { 
      this.toggleBG()
    }, 5000)
  }
  toggleBG() {
    if (this.state.bg === 'bg') {
      this.setState({
        bg: 'bg--colored',
      })
    } else {
      this.setState({
        bg: 'bg',
      })
    }
  }
  componentWillMount() {
    this.time = null
  }
  render() {
    const {bg} = this.state
    return (
      <div>
        <div className={`${bg} animate--slow`} />  
        <Header />
        <Layout >
          <FormContainer />
          <Advertorial />
        </Layout>
      </div>
    );
  }
}

export default App;
