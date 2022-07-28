import React from 'react'
import {connect} from 'react-redux'
import {List} from './utils'
import {getPets} from './store'

class Pets extends React.Component {

  componentDidMount() {
    console.log("Props before getPets():", this.props)
    this.props.getPets()
    console.log("Props after getPets():", this.props)
  }
  render () {
    const {pets} = this.props

    return (
      <div>
        <List
          forEachOfThese={pets}
          doThis={pet => (
            <div key={pet.id}>
              <img src={pet.imageUrl} />
              <p>{pet.name}</p>
            </div>
          )}
          unlessEmpty={() => <div>Where are the pets?!?</div>}
        />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    pets: state.pets
  }
}

const mapDispatch = (dispatch) => {
  return {
    // thunk creator, not action creator
    // this allows us to call this.props.getPets() - which dispatches our thunk, getPets
    getPets: () => dispatch(getPets())
  }
}

export default connect(mapState, mapDispatch)(Pets)
