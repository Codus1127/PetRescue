import React, {Component} from 'react'
import Pet from './Pet'
import axios from 'axios'
import './dashboard.css'
import Hero from './Hero'

export default class Dashboard extends Component {
  constructor() {
    super() 
    this.state = {
        pets: []
    }

    this.deletePet = this.deletePet.bind(this)
  }

  componentDidMount() {
    axios.get('/api/pets').then(res => {
      this.setState({ pets: res.data })
    })
  }
  deletePet(pet_id){
    // console.log('any')
    axios.delete(`/api/pets/${pet_id}`).then(res => {
      this.setState({
        pets:res.data
      })
    })
  }

  render() {
    return (
    <div className="Dashboard">
      <Hero/>
      <form id="search">
      <input className="search" type="text" placeholder="Search pets..."/>
      </form>
      <div className="pet-list">
          {this.state.pets.map(pet => (
            <div key={pet.pet_id}>
            <Pet data={pet} remove={this.deletePet} />
            </div>
          ))}
        </div>
    </div>
    )
  }
}