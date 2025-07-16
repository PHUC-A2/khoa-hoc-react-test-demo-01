import React from 'react';

import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

// class component

class MyComponent extends React.Component {

    // tạo state để lưu được nhiều USER xuống props
    state = {
        listUser: [
            { id: 1, name: "Hoi Dan IT 1", age: "30" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "HaryPhamDev", age: "30" },
        ]
    }

    // jsx
    render() {

        const myInfo = ['ab', 'c', 'd']
        return (
            <div>
                <UserInfo />
                {/* <DisplayInfo name="Hoi Dan IT" age="30" />
                <DisplayInfo name="Eric" age="26" /> */}

                {/* Ví dụ muốn truyền vào các kiểu dữ liệu ngoài String */}
                <DisplayInfo
                    listUser={this.state.listUser}
                />
            </div>
        );
    }

}

export default MyComponent;