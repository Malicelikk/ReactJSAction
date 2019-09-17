import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) => {
  switch(action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
      case "ADD_USER":
        return {
          ...state,
          users : [...state.users,action.payload]
        }
      default:
        return state
  }
}

export class UserProvider extends Component {

    state = {
        users: [
          {
            id : 1,
            name : "Max Kruse",
            salary : "10000",
            department : "Sport"
          },
          {
            id : 2,
            name : "Mali Çelik",
            salary : "5000",
            department : "Software"
          },
          {
            id : 3,
            name : "Emre Belozoglu",
            salary : "8000",
            department : "Sport"
          }
        ],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }

    render() {
        return (
            <div>
                <UserContext.Provider value = {this.state}>
                    {this.props.children}
                </UserContext.Provider>
            </div>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
