import React from "react";

class DisplayInfo extends React.Component {
    render() {
        // console.log(this.props);
        // distructuring
        const {age,name} = this.props;

        return (
            // props => viết tắt từ properties
            // props truyền data từ cha sang con còn
            // event truyền từ con sang cha
            <div>
                <div>My name's: {name}</div>
                <div>My age's: {age}</div>
            </div>
        );
    };
}

export default DisplayInfo;