import { Component } from "react";

class Contact extends Component {
    render() {
        return(
            <div>
            <h1>This is a Contact Component</h1>
            <h1>The Contact name is : {this.props.name2}</h1>
            </div>
        )
    }
}
export default Contact;