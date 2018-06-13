import React, { Component } from 'react'
import Formdata from './Formdata'

export default class FormContainer extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      disabled: true,
      submited: false,
      isFetching: false,
    }
  }
  
  setValue(field, value) {
    this.setState({
      [field]: value,
    })
  }
  
  submitForm() {
    const { name, email, phone, city, state, isFetching, submited} = this.state
    
    if (isFetching || submited) {
      return null
    }

    
    
    const returnEmpty = (value) => { 
      return value ? value : ""
    }
    const body = new FormData()
    
    console.log(name, email, phone, city, state)
    body.append('Name', returnEmpty(name))
    body.append('City', returnEmpty(city))
    body.append('State', returnEmpty(state))
    body.append('Phone', returnEmpty(phone))
    body.append('Email', returnEmpty(email))
      
    const data = {
      body,
      method: 'POST',
      credentials: 'same-origin',
    }

    this.setState({
      isFetching: true,
    })

    return fetch('https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar', data)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        if (response) {
          this.setState({
            isFetching: false,
            submited: true,
          })
        }
      })

  }
  
  get disabledForm() {
    const emailPatterm = RegExp(/^[A-Za-z0-9\._ÑñáéíóúÁÉÍÓÚ]+\@[A-Za-z0-9]+\.[a-z.]+$/);
    const { name, email, submited, isFetching} = this.state
    if (!email || !name) {
      return true
    }
    return !(name.length >= 2 && emailPatterm.test(email) && !submited && !isFetching)
  }
  
  render() {
    const { buttonVal, disabled, submited, isFetching } = this.state
    
    return (
      <div className='FormContainer Card'>
        <div className='form-header'>
          <p contentEditable={true}>Enter to win a 3rd generation Nest Learning Thermostat worth $249.</p>
        </div>
        <form
          ref={(form) => {
            this.formdata = form
          }}  
          autocomplete="off"
        >
          <Formdata
            disabled={this.disabledForm}
            buttonVal={submited || isFetching ? 'SUBMITTED' : 'ENTER TO WIN'}
            onChange={(field, value) => this.setValue(field, value)}
            submiter={() => this.submitForm()}
          />
        </form>
      </div>
    )
  }
}
