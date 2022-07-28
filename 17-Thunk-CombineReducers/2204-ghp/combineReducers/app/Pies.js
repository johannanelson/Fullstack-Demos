import React from 'react'
import {connect} from 'react-redux'
import {fetchPies} from './store'

class Pies extends React.Component {
  // I want to fetch my pies from state when my component mounts
  componentDidMount() {
    this.props.fetchPies();
  }

  render () {
    console.log(this.props.pies);
    const {pies} = this.props

    return (
      <div>
        {pies.map((pie) => {
          return (
            <div key={pie.id}>
              <img src={pie.imageUrl} />
              <p>{pie.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    pies: state.pies
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchPies: () => dispatch(fetchPies())
  }
}

export default connect(mapState, mapDispatch)(Pies)
