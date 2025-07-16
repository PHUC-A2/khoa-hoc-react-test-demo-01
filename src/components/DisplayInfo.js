import React from "react";

class DisplayInfo extends React.Component {

    handleShowHide = () => {
        this.setState({
            // isShowListUser: false
            isShowListUser: !this.state.isShowListUser // nếu đang true thì chuyển sang false
        })
    }

    state = {
        isShowListUser: true
    }

    render() {
        // distructuring
        const { listUser } = this.props;

        return (
            <div>
                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {/* Ẩn danh sách user */}
                        {this.state.isShowListUser === true ? "Hiện danh sách User" : "Ẩn danh sách User"}
                    </span>
                </div>
                {/* nếu true => hiện list user */}
                {this.state.isShowListUser &&
                    <div>
                        {/* bên trong map là 1 function */}
                        {listUser.map((user) => {
                            return (
                                // điều kiện
                                <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                    <div>My name's:{user.name}</div>
                                    <div>My age's:{user.age}</div>
                                    <hr />
                                </div>

                            );
                        })}
                    </div>}
            </div>
        );
    };
}

export default DisplayInfo;