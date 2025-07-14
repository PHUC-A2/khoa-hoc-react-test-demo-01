// class component
// funcliton component
import React from 'react';

// class component

class MyComponent extends React.Component {
// hàm render
//     Cú pháp jsx cho phép viết code trong html
    render() {
        return (
            <div>
                My first component
                {/*Test gọi hàm random*/}
                {Math.random()}
            </div>
        );
    }

}

export default MyComponent;