import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    // this is where all values can be set
    // Set the structure of your data in how you want to represent it
    // Ex you can decide to add another field like 
    state = {
        users: [
            { firstName: 'George', age: 29 },
            { firstName: 'Rodrigue', age: 27 },
            { firstName: 'Jill', age: 30},
            { firstName: 'Bob', age: 22 },
            { firstName: 'Matt', age: 38},
            { firstName: 'Frank', age: 36}
        ],
        title: "Users List in the state structure with the List of names"
    }

    // This is a function utilized the button in event to show how an event flows through the component
    ageDecreaser = () => {
        // change the logic on how you want to decreace age in this function
        console.log('decrease clicked');
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 1;
            return tempUser;
        });
        this.setState({newState});
    }

    ageIncreaser = () => {
        console.log('increase clicked')
        const nextState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age += 1;
            return tempUser;
        });
        this.setState({nextState});
    }
    

    componentDidMount() {
        // this 
    }

    render() {
        return (
            <div className="container" id="user-list-header">
                <div>
                    <p>User List Section</p>
                </div>

                <button onClick={this.ageDecreaser} className="btn btn-primary">Lower age</button>
                <br />

                <h3>{this.state.title}</h3>
                <br />

                {/* Below is an example of how state can be rendered by using the index to track values in state */}

                <div id="user-list">
                    <User age={this.state.users[0].age}>{this.state.users[0].firstName}</User>
                    <User age={this.state.users[1].age}>{this.state.users[1].firstName}</User>
                </div>

                <br />

                <h2>Next Example: More effecient to get all users than the example above with id of user-list in JSX code</h2>
                <hr id="new-line"/>
                <br />

                {
                    this.state.users.map((testUser, i) => {
                    return <User age={testUser.age} key={i}>{testUser.firstName}</User>
                    })
                }

                <h2 id="second-ex">Next Example: Effecient as the second example but with increasing the age</h2>
                <button onClick={this.ageIncreaser} className="btn btn-secondary">Increase Age</button>
                <hr id="next-line"/>
            </div>
        )
    }
}

export default Users;