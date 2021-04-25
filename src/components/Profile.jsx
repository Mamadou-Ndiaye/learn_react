
import React, { Component } from 'react'

export class Profile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: null
      }
    }
    componentDidMount()
    {
        //console.log(this.props.match.params.profileId)
        const data=this.props.match.params.profileId;
        this.setState({
            id: data
        })
    }
    
  render() {
    return (
      <div className="container mt-3">
            <h1>Profile </h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Id: {this.state.id} </li>
            </ul>
      </div>
    )
  }
}

export default Profile ;
