import './css/Button.css';
import { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const {onClickHandler, value, className} = this.props;
    
    
    return (
    <button className={'btn ' + className} onClick={onClickHandler}>
        {value}
    </button>
    );
  }
}
export default Button;