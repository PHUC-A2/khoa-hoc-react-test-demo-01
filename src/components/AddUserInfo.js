import React from 'react'

class AddUserInfo extends React.Component {
    // hàm render
    // Cú pháp jsx cho phép viết code trong html
    // state là 1 biến obj
    //  khái báo state và dùng this để gọi đến thuộc tính
    state = {
        name: '',
        address: 'Hoi Dan IT',
        age: ''
    };
    // event dùng để cung cấp các thông tin ....
    // merge state => react class

    handleOnChangeInput = (event) => {

        this.setState({
            // cập nhật tên qua event
            name: event.target.value
        })

        // console.log(event,event.target.value);
    }

    handleOnChangeAge = (event) => {
        // Gọi là bad code
        this.setState({
            // cập nhật tên qua event
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        // ngăn tải lại trang bằng
        event.preventDefault();
        // dùng props để gọi đến hàm add
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1 ) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                {/* Ví dụ về Event */}
                <div>
                    <hr />
                </div>
                {/*  event onChange */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>
                        Your name:
                    </label>
                    <input
                        // mặc định có tên và thay đổi được trên input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <br />
                    <label>
                        Your age:
                    </label>
                    <input
                        // mặc định có tên và thay đổi được trên input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <br />
                    <button>submit</button>
                </form>
                <br />
                <hr />
            </div>
        );
    }
}

export default AddUserInfo;