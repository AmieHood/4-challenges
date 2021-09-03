import React, { Component } from 'react'
import { render } from 'react-dom'
import { Input, Button, Form } from 'reactstrap'

class ToDoIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: '',
            newTask: '',
            taskList: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    toDo(item, itemId){
        return(
            <li key={itemId}>{item}</li>
        )
    }

    handleChange(e) {
        this.setState({
            newTask: e.target.value
        })
    }

      handleSubmit(value) {
        // console.console.log(value);
        this.toDo(value) 
    }

    componentDidMount(){
        console.log('component mounted');
        this.setState({

        })
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <Form>
            <Input placeholder='Add to List' type='text' value={this.state.newTask} onChange={this.handleChange} />
            <Button onSubmit={this.handleSubmit}>Submit</Button>
            <h1>To Do:</h1>
            {/* {this.state.value.map(this.toDo)} */}
            </Form>
        )
    }
}

export default ToDoIndex