import React, { useState } from "react";

// class Clicker extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             num: props.value,
//             isDark: false
//         }
//         this.clickHandler = this.clickHandler.bind(this);
//     }

//     clickHandler(ev) {
//         const newState = {
//             num: this.state.num + 1,
//             isDark: !this.state.isDark
//         }
//         this.setState(newState)
//             console.log(this.state)
//         }

//         render() {
//             return (
//                 <button
//                     className={"btn" + (this.state.isDark ? " btn-dark" : "")}
//                     onClick={this.clickHandler}
//                 >
//                     Clicker {this.state.num}
//                 </button>)
//         }
//     }

const Clicker = ({ value }) => {
    const [num, setNum] = useState(value);
    const [isDark, setIsDark] = useState(false);

    const clickHandler = (ev) => {
        setNum(num + 1);
        setIsDark(!isDark);
    };

    return (
        <button
            className={"btn" + (isDark ? " btn-dark" : "")}
            onClick={clickHandler}
        >
            Clicker {num}
        </button>
    );
};

export default Clicker

Clicker.defaultProps = {
        value: 0
    }