import React, { Component } from 'react'

 class PCH_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"HIEU Đz"
        }
    }
    HandleGetName=()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Lấy dữ liệu từ Props</h2>
        <button onClick={this.HandleGetName}>Lấy Tên</button>
        <h2>Welcome to, {this.props.name}</h2>

      </div>
    )
  }
}
export default PCH_EventForm4;