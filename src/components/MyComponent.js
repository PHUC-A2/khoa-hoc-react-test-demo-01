import React from 'react';

import DisplayInfo from "./DisplayInfo";
import AddUserInfo from './AddUserInfo';

// class component

class MyComponent extends React.Component {

    // tạo state để lưu được nhiều USER xuống props
    state = {
        listUser: [
            { id: 1, name: "Hoi Dan IT 1", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "HaryPhamDev", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {

        //  cập nhật list user để thêm khi nhấn submit
        this.setState({
            // copy lại mảng và thêm user mới vào đầu mảng
            listUser: [userObj, ...this.state.listUser]
        })
    }

    // jsx
    render() {

        // const myInfo = ['ab', 'c', 'd']
        return (
            <div>
                <AddUserInfo
                    // hàm thêm người dùng
                    handleAddNewUser={this.handleAddNewUser}
                />
                {/* Ví dụ muốn truyền vào các kiểu dữ liệu ngoài String */}
                <DisplayInfo
                    listUser={this.state.listUser}
                />
            </div>
        );
    }

}

export default MyComponent;