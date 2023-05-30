import React, { Component } from 'react'
 class TableField extends Component {
  render() {
    return (
      const {students} = this.props
      <div className='container'>
      <div class="row mb-3">
          <div class="col">
              <div>
                  <p>Tìm kiếm sinh viên theo mã</p>
                  <div className="input-group">
                      <input type="text" className="form-control" placeholder="Nhập mã sinh viên" onChange={this.handleInput} value={} />
                      {/* <div className="input-group-prepend">
                          <span className="input-group-text" id="btnSearch"><i className="fa fa-search" /></span>
                      </div> */}
                  </div>
              </div>

          </div>
      </div>
      <table className='table'>
          <thead>
              <tr>
                  <th>Mã SV</th>
                  <th>Họ Tên</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
                  {/* {studentsArray.length > 0 && studentsArray.map(student => {
                      return <tr>
                          <td>{student.key}</td>
                          <td>{student.name}</td>
                          <td>{student.phoneNumber}</td>
                          <td>{student.email}</td>
                          <td>
                              <button className='btn btn-primary mx-3' onClick={() => {
                                  edit(student.key)
                              }}>Edit</button>
                              <button className='btn btn-danger' onClick={() => {
                                  deleteStudent(student.key)
                              }}>Delete</button>
                          </td>
                      </tr>
                  })} */}
          </tbody>
      </table>
      {/* Không cần cái này */}
      {/* <h3>Kết quả tìm kiếm</h3> */}
      
      {/* <Result result={this.state.result}></Result> */}
  </div>
    )
  }
}

const mapStateToProps = state => ({
  students: state.students
})

export default connect(mapStateToProps)(TableField);
