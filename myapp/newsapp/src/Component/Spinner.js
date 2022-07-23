import React, { Component } from 'react'
import loading from './loading2.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
          <img  className="my-3" src={loading} alt="loading2" />
      </div>
    )
  }
}
