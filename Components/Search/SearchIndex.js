import React from 'react';
import { Component } from 'react';
import {Input, Button} from 'reactstrap';

class SearchIndex extends Component {
  constructor(props){
  super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      newThing: []
    }

    this.searchFunction = this.searchFunction.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleChange(e) {
  //   this.setState({
  //     newThing: e.target.value
  //   })
  // }

  // handleClick(e) {
  //   this.searchFunction() 
  // }
  
  searchFunction(value) {
    console.log(value);
    let newThing = this.state.things.filter(result => result.includes(value.toLowerCase()))
      this.setState({
        newThing: newThing
      })
  }

  displaySearchItem = (newThing, itemId) => <li key={itemId}>{newThing}</li>

    // return(
      // this.state.newThing =='' ?
      // <>
      // {this.state.things.map((result, resultId) => <li key={resultId}>{result}</li>)} 
      // </>
      // :
      // <>
      // {this.state.things.map(result => <li>{result}</li>)}
      // </>
      // this.state.newThing.value 
      // <>
      //  {this.state.things.map((item, itemId) =>  <li key={itemId}>{item}</li>)}
      // </>
    // )

  
  
  render() {
    // let { result } = this.state
    return(
      <div>
        <Input placeholder='Search Here' type='text' onChange={e => this.searchFunction(e.target.value)} />
        {/* <Button onClick={this.handleClick} >Submit</Button> */}

        <h3 >Results:</h3>
        {this.state.newThing && this.state.newThing.length >0 ?
        this.state.newThing.map(this.displaySearchItem) :
        this.state.things.map(this.displaySearchItem)}
        


      </div>
    )
  }
}
  
export default SearchIndex;
