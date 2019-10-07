import React, { Component } from 'react'
import axios from 'axios'

export default class AddEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      locationId: 0,
      img: '',
      name: '',
      breed: '',
      gender: '',
      age: 0,
      color: '',
      description: ''
    }
  }


  handleChange = async (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  addPet = async () => {
    let { type, locationId, img, name, breed, gender, age, color, weight, description } = this.state
    await axios.post(`/api/pets`, { type, locationId, img, name, breed, gender, age, color, weight, description })
    this.props.history.push('/')
  }


  render() {
    return (
      <div className="AddEditForm">
        Type:
        <input value={this.state.type} onChange={e => this.handleChange(e, 'type')} type="text" placeholder="Species" />
        <br />Location ID:
        <input value={this.state.locationId} onChange={e => this.handleChange(e, 'locationId')} type="number" placeholder="Location ID" />
        <br /> Picture:
        <input value={this.state.img} onChange={e => this.handleChange(e, 'img')} type="img" placeholder="Img URL" />
        <br /> Name:
        <input value={this.state.name} onChange={e => this.handleChange(e, 'name')} type="text" placeholder="Name" />
        <br />Breed:
        <input value={this.state.breed} onChange={e => this.handleChange(e, 'breed')} type="text" placeholder="Breed" />
        <br /> Gender:
        <input value={this.state.gender} onChange={e => this.handleChange(e, 'gender')} type="text" placeholder="Gender" />
        <br />Age:
        <input value={this.state.age} onChange={e => this.handleChange(e, 'age')} type="number" placeholder="Age" />
        <br />Color:
        <input value={this.state.color} onChange={e => this.handleChange(e, 'color')} type="text" placeholder="Color" />
        <br /> Description:
        <input value={this.state.description} onChange={e => this.handleChange(e, 'description')} type="text" placeholder="Description" />
        ,<br />
        <button onClick={this.addPet}>Submit</button>
      </div>
    )
  }
}