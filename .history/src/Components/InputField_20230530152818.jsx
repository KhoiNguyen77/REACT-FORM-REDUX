import React, { Component } from 'react'
import { connect } from 'react-redux'
import { students } from './Reducer/students';




class InputField extends Component {
  handleInput = e => {
    const { id, value } = e.target;
    this.handleError();
    const action = {
      type: "HANDLE_CHANGE",
      payload: {
        id: id,
        value: value
      }
    }
    this.props.dispatch(action)
  }
  // handleError = e => {
  //   const { id, value, } = e.target;
  //   let message = ""
  //   let dataType = e.target.getAttribute("data-type");
  //   // eslint-disable-next-line default-case
  //   switch (dataType) {
  //     case "letter": {
  //       let regexLetter = /^[a-zA-Z]+$/;
  //       if (!regexLetter.test(value)) {
  //         message = id + ' must be letters';
  //       }
  //       break;
  //     }
  //     case "number": {
  //       let min = JSON.parse(e.target.getAttribute("min-maxLength"))[0];
  //       let max = JSON.parse(e.target.getAttribute("min-maxLength"))[1];
  //       if (value.length < min || value.length > max) {
  //         message = id + ` must be from ${min} to ${max} length`
  //       }
  //       break;
  //     }
  //     // eslint-disable-next-line no-fallthrough
  //     case "email": {
  //       var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       if (!mailformat.test(value)) {
  //         message = id + ' must be in correct form'
  //         break;
  //       }
  //     }
  //   }
  //   if (e.target.getAttribute("uniqe")) {
  //     if (students.find(student => student.key == value)) {
  //       message = id + " has exists!";
  //     }
  //   }
  //   if (value.trim() == "") {
  //     message = id + " can't be blank";
  //   }
  //   const action = {
  //     type: "HANDLE_ERROR",
  //     payload: {message, id}
  //   }
  //   this.props.dispatch(action);
  // }
  handleSubmit = e => {
    const values = { ...this.props.student };
    const action = {
      type: "HANDLE_SUBMIT",
      payload: values
    }
    this.props.dispatch(action)
  }
  render() {
    const { student, errors } = this.props;
    return (
      <div className='container mb-5'>
        <form className='card'>
          <div className="card-header bg-dark">
            <h3 className='text-white'>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-6">
                <p className='d-inline-block'>Key</p> <span className='text-danger'>{errors.key}</span>
                <input
                  type="number" id='key' uniqe="id"
                  min-maxLength="[3,5]" data-type="number"
                  className='form-control' onChange={this.handleInput}
                  placeholder='Please enter your key'
                  value={student.key}
                // disabled={this.props.student}
                />
              </div>
              <div className="col-6">
                <p className='d-inline-block' >Name</p> <span className='text-danger'>{errors.name}</span>
                <input
                  type="text" id='name' data-type="letter" className='form-control'
                  onChange={this.handleInput}
                  placeholder='Please enter your name'
                  value={student.name}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className='d-inline-block'>Phone Number</p> <span className='text-danger'>{errors.phoneNumber}</span>
                <input type="number" id='phoneNumber' className='form-control' min-maxLength="[8,10]"
                  data-type="number" onChange={this.handleInput}
                  placeholder='Please enter your phone number'
                  value={student.phoneNumber}
                />
              </div>
              <div className="col-6">
                <p className='d-inline-block'>Email</p> <span className='text-danger'>{errors.email}</span>
                <input type="email" id='email' className='form-control' onChange={this.handleInput} data-type="email"
                  placeholder='Please enter your email'
                  value={student.email}
                />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type='button' onClick={this.handleSubmit} className='btn btn-success'>Thêm</button>
            <button type='button' className='btn btn-primary mx-2'>Update</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  student: state.student,
  errors: state.errors
})

export default connect(mapStateToProps)(InputField);
