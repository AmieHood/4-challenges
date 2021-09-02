import React, { Component } from 'react';

class CatList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        breeds: this.props.breeds
      }
    }

    render(){
      return (
        <div>
          {this.props.breeds.map((cat, catId) =>  <li key={catId}>{cat}</li>)}
        </div>
      )
    }
}

export default CatList
