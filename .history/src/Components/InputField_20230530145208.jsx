import React, { Component } from 'react'
import { connect } from 'react-redux'
import { students } from './Reducer/students';




class InputField extends Component {
  handleInput = e => {
    const { id, value } = e.target;
    const action = {
      type: "HANDLE_CHANGE",
      payload: {
        id: id,
        value: value
      }
    }
    this.props.dispatch(action)
  }
  handleSubmit = e => {
    const values = {...this.props.student};
    const action = {
      type: "HANDLE_SUBMIT",
      payload: values
    }
    this.props.dispatch(action)
  }
  render() {
    const { student,errors } = this.props;
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
            <button type='button' className='btn btn-primary mx-2' onClick={this.handleEdit}>Update</button>
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
