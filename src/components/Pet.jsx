import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Pet extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
      <div>
      <Link  key={this.props.data.pet_id} to={`/pet/${this.props.data.pet_id}`}>
    <div className="Pet">
      <img src={this.props.data.img} alt={this.props.data.title}/>
      <h3>Name: {this.props.data.pet_name}</h3>
      <h4>Breed: {this.props.data.breed}</h4>
    </div>
    </Link>
    <button className="delete" onClick={(id) => this.props.remove(this.props.data.pet_id)}>X</button>
    </div>
    )
  }
}