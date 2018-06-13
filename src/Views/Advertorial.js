import React, { Component } from 'react'

export default class Advertorial extends Component {
  render() { 
    return (
      <div>
        <h2 className='floating-text' contentEditable={true}> EVEN MORE SAVINGS </h2>
        <div className='Advertorial'>
          <div className='content'>
            <h6 contentEditable={true}>Advertorial</h6>
            <h1 contentEditable={true}>Tricks Homeowners Use to Eliminate Bills</h1>
            <p contentEditable={true}>Surging energy bills, unpredictable weather patterns and dissatisfaction with utility companies have homeowners scrambling…</p>
            <a href='https://google.com/' target='_blank' >READ MORE</a>
          </div>  
        </div>
      </div>  
    )
  }
}
