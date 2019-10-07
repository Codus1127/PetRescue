import React, { Component } from 'react'
import axios from 'axios'
import './onepet.css'

export default class OnePet extends Component {
  constructor() {
    super()
    this.state = {
      type: '',
      locationId: 0,
      img: '',
      name: '',
      breed: '',
      gender: '',
      age: 0,
      color: '',
      weight: '',
      description: ''
    }
  }


  componentDidMount = () => {
    this.getOnePet()
  }

  getOnePet = async () => {
    const res = await axios.get(`/api/pets/${this.props.match.params.petid}`)
    console.log(res.data[0])
    this.setState({
      type: res.data[0].pet_type,
      locationId: res.data[0].location_id,
      img: res.data[0].img,
      name: res.data[0].pet_name,
      breed: res.data[0].breed,
      gender: res.data[0].gender,
      age: res.data[0].pet_age,
      color: res.data[0].color,
      weight: res.data[0].weight,
      description: res.data[0].description

    })
  }


  render() {
    return (
      <div className="OnePet">
        <div className="container-1">
          <img src={this.state.img} alt={this.state.name} />
          <div className="info">
            <h2>Name: {this.state.name}</h2>
            <h2>Type: {this.state.type}</h2>
            <h2>Location ID: {this.state.locationId}</h2>
            <h2>Breed: {this.state.breed}</h2>
            <h2>Gender: {this.state.gender}</h2>
            <h2>Age: {this.state.age}</h2>
            <h2>Color: {this.state.color}</h2>
            <h2>Weight: {this.state.weight} </h2>
          </div>
        </div>
        <p>{this.state.description}</p>
      </div>
    )
  }
}