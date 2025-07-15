import React from 'react';

import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

// class component

class MyComponent extends React.Component {
    // jsx
    render() {

        const myInfo = ['ab','c','d']
        return (
            <div>
                <UserInfo />
                <DisplayInfo name="Hoi Dan IT" age="30" />
                <DisplayInfo name="Eric" age="26" />

                {/* Ví dụ muốn truyền vào các kiểu dữ liệu ngoài String */}
                <DisplayInfo name="Eric" age={26} myInfo={myInfo} />
            </div>
        );
    }

}

export default MyComponent;