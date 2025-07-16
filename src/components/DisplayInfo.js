import React from "react";

class DisplayInfo extends React.Component {
    render() {
        // console.log(this.props);
        // distructuring
        // const { age, name } = this.props;
        const { listUser } = this.props;
        console.log(listUser)

        return (
            // props => viết tắt từ properties
            // props truyền data từ cha sang con còn
            // event truyền từ con sang cha
            <div>
                {/* bên trong map là 1 function */}
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's:{user.name}</div>
                            <div>My age's:{user.age}</div>
                            <hr />
                        </div>
                    );
                })}


                {/* 
                <div>My name's: {name}</div>
                <div>My age's: {age}</div>
                <hr />
                <div>My name's: {name}</div>
                <div>My age's: {age}</div>
                <hr/>
                <div>My name's: {name}</div>
                <div>My age's: {age}</div> */}
            </div>
        );
    };
}

export default DisplayInfo;