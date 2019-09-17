import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context';

class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "Bilgi yok",
        salary: "Bilgi yok",
        department: "Bilgi yok"
    }

    onClickEvent = (e) => {
        this.setState({  // State i değiştir
            isVisible: !this.state.isVisible // o anki durumun tersi
        })
    }
    onDeleteUser = (dispatch,e) => {
         const {id} = this.props;
         dispatch({type : "DELETE_USER",payload:id});
    }
    render() {
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;

                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card" style={isVisible ? {backgroundColor: "#62848d",color: "white"} : null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" style={{cursor:"pointer",color:"blue"}} onClick={this.onClickEvent}>{name}</h4><p>Detaylı bilgi için isme tıklayınız (State değişimi)</p>
                                        <i onClick={this.onDeleteUser.bind(this,dispatch)} className="" style={{ cursor: "pointer" }}> X</i>
                                    </div>
                                    {isVisible ? // isVisible sa div i göster
                                        <div className="card-body">
                                            <p className="card-text">Salary : {salary}</p>
                                            <p className="card-text">Department : {department}</p>
                                        </div> : null}
                                </div>

                            </div>
                        )

                    }
                }
            </UserConsumer>)


    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}
export default User;
