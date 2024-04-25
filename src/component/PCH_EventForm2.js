import React from 'react'

export default function PCH_EventForm2() {
    //định nghĩa các hàm xử lý sự kiện
    const eventHandleclick1=(content)=>{
        console.log('====================');
        console.log(content);
        console.log('====================');

    }
  return (
    <div className='alert alert-success'>
        <h2>Event Demo - Funcion Components - Pham Cong Hieu</h2>
        <button onClick={eventHandleclick1("Pham Cong Hieu")}>Gọi khi Render</button>
        <button onClick={()=>eventHandleclick1("K22CNT3-ReactJs")}> Gọi khi Click</button>
    </div>
  )
}