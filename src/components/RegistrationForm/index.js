import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    last: '',
    firstErrorMsg: '',
    lastErrorMsg: '',
    submit: false,
  }

  onSumbitForm = event => {
    event.preventDefault()
    const {first, last} = this.state
    if (first === '' && last === '') {
      this.setState({firstErrorMsg: '*Required', lastErrorMsg: '*Required'})
    } else if (last === '') {
      this.setState({lastErrorMsg: '*Required'})
    } else if (first === '') {
      this.setState({firstErrorMsg: '*Required'})
    } else {
      this.setState({submit: true})
    }
  }

  onChangeFirst = event => {
    this.setState({first: event.target.value})
  }

  onChangeLast = event => {
    this.setState({last: event.target.value})
  }

  onFirstname = event => {
    if (event.target.value === '') {
      this.setState({firstErrorMsg: '*Required'})
    } else if (event.target.value !== '') {
      this.setState({firstErrorMsg: '', first: event.target.value})
    }
  }

  onLastname = event => {
    if (event.target.value === '') {
      this.setState({lastErrorMsg: '*Required'})
    } else if (event.target.value !== '') {
      this.setState({lastErrorMsg: '', last: event.target.value})
    }
  }

  onNewStart = () => {
    this.setState({submit: false, first: '', last: ''})
  }

  render() {
    const {first, last, firstErrorMsg, lastErrorMsg, submit} = this.state
    console.log(first)
    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration</h1>
        {submit ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <div className="next-btn-container">
              <button
                type="button"
                className="next-btn"
                onClick={this.onNewStart}
              >
                Another response
              </button>
            </div>
          </div>
        ) : (
          <form className="registration-container" onSubmit={this.onSumbitForm}>
            <labe htmlFor="last-name">FIRST NAME</labe>
            <input
              type="text"
              placeholder="First name"
              onBlur={this.onFirstname}
              className="first-name"
              onChange={this.onChangeFirst}
              value={first}
            />
            <p className="error-msg">{firstErrorMsg}</p>
            <labe htmlFor="last-name">LAST NAME</labe>
            <input
              type="text"
              placeholder="Last name"
              onBlur={this.onLastname}
              className="last-name"
              onChange={this.onChangeLast}
              value={last}
            />
            <p className="error-msg">{lastErrorMsg}</p>
            <div className="button-container">
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
