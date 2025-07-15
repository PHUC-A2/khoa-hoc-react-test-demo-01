// class component
// funcliton component
import React from 'react';

// class component

class MyComponent extends React.Component {
    // hàm render
    // Cú pháp jsx cho phép viết code trong html
    // state là 1 biến obj
    //  khái báo state và dùng this để gọi đến thuộc tính
    state = {
        name: 'Eric',
        address: 'Hoi Dan IT',
        age: 26
    };

    // event dùng để cung cấp các thông tin ....
    handleClick(event){ // dùng hàm mũi tên mới tham chiếu được với this
        console.log("Click me my button");
        //  in state
        console.log("My name is: ", this.state.name);
    }

    // chuột
    hanldleOnMoverOver(event) {
        console.log(event.pageX);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                {/* Ví dụ về Event */}
                <div>
                    <hr />
                </div>
                {/* <button onMouseOver={this.hanldleOnMoverOver}>Hover me</button> */}
                {/* <button onClick={this.handleClick}>Click me</button> dùng với hàm mũi tên trên */}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button> {/* dùng với hàm mũi trực tiếp*/}
            </div>
        );
    }

}

export default MyComponent;