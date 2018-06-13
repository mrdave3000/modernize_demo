import React, { Component } from 'react'
import InputMask from 'react-input-mask'

export default class Formdata extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      error: {},
    }
  }
  validateText(field, value, callback) { 
    const textValid = new RegExp(/^[A-Za-z0-9\_\@\#\!\?\s\,\.\-\_ÑñáéíóúÁÉÍÓÚ]+$/)
    const { error } = this.state
    if (textValid.test(value)) {
      callback(field, value)
      this.setState({
        error: {
          ...error,
          [field]: null,
        }
      })
    } else { 
      this.setState({
        error: {
          ...error,
          [field]: true,
        }
      })
    }
  }
  render() { 
    const { disabled, buttonVal, onChange, submiter } = this.props
    const { error } = this.state
    return (
      <div className='Formdata'>
        <input
          className={error['name'] ? 'input--error' : null}
          type='text' placeholder='Name'
          onChange={(event) => this.validateText('name', event.target.value, onChange)}
        />
        <div className='float-form'>
          <input
            className={error['city'] ? 'city input--error' : 'city'}
            type='text'
            placeholder='City'
            onChange={(event) => this.validateText('city', event.target.value, onChange)}
          />
          <input
            className={error['state'] ? 'state input--error' : 'state'}
            type='text'
            placeholder='State'
            onChange={(event) => this.validateText('state', event.target.value, onChange)}
          />
        </div>  
        <InputMask
          mask="(999) 999-999"
          type='text'
          placeholder='Phone Number'
          onChange={(event, value) => onChange('phone', event.target.value)}
        />
        <input
          type='email'
          placeholder='Email Address' onChange={(event, value) => onChange('email', event.target.value)}
        />
        <input
          className={disabled ? 'button--disabled animate' : 'button animate'}
          type='submit'
          value={buttonVal}
          disabled={disabled}
          onClick={(event) => {
            event.preventDefault(0)
            submiter()
          }}
        />
      </div>
    )
  }
}
