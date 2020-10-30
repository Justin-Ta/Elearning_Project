import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="row">
        <div className="col-4">
          <div className='form-group'>
          <label for="exampleFormControlSelect">User Type</label>
            <select class="form-control" id="exampleFormControlSelect">
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
        </div>

        <div className="col-4">
          <div className='form-group'>
            <label>User Name</label>
            <input className="form-control"/>
          </div>
        </div>

        <div className="col-4">
          <div className='form-group'>
            <label>Name</label>
            <input className="form-control"/>
          </div>
        </div>

        <div className="col-4">
          <div className='form-group'>
            <label>Password</label>
            <input className="form-control"/>
          </div>
        </div>

        <div className="col-4">
          <div className='form-group'>
            <label>Email</label>
            <input className="form-control"/>
          </div>
        </div>

        <div className="col-4">
          <div className='form-group'>
            <label>Phone</label>
            <input className="form-control"/>
          </div>
        </div>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">CLOSE</button>
        <button type="button" className="btn btn-primary">ADD</button>
      </div>
    </div>
  </div>
</div>
    )
  }
}

// import { Modal, Button } from 'antd';

// class Modal extends React.Component {
//   state = { visible: false };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <>
//         <Button type="primary" onClick={this.showModal}>
//           Open Modal
//         </Button>
//         <Modal
//           title="Basic Modal"
//           visible={this.state.visible}
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//       </>
//     );
//   }
// }

// ReactDOM.render(<Modal />, mountNode);