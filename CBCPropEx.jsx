import React, { Component } from 'react';

export default class CBCPropEx extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h1>CBCPropEx</h1>
                <h2>{this.props.username}</h2>
                <h3>Age: {this.props.age}</h3>

                {this.props.hobbies?.length > 0 && (
                    <ul>
                        {this.props.hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                )}

                <h3>City: {this.props.address?.city || "No city provided"}</h3>

                {this.props.sendFun && <button onClick={this.props.sendFun}>Click</button>}
            </div>
        );
    }
}
