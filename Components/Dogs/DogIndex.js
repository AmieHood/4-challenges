import React, { Component } from 'react'
import Button from 'reactstrap/lib/Button'

class DogChallenge extends Component {
    constructor(props){
        super(props)
        this.state = { 
            loaded: false,
            results: []
        }
        this.returnDog = this.returnDog.bind(this)
    }



    async returnDog(){
        try{
            let res = await fetch("https://dog.ceo/api/breeds/image/random")
            let json = await res.json()
            
            this.setState({ 
                loaded: true,
                results: json.message
            })
        } catch (err) {
            console.log(err);
        }

    }

    // async componentDidUpdate(){

    // }

    componentDidMount() {
        this.returnDog()
    }

    render(){
        return(
            <>
            <Button type='button' onClick={this.returnDog}>Show Dog</Button>
            {this.state.loaded ?
            <img src={this.state.results} /> :
            <p>"Loading..."</p>
            }
            </>
        )
    }
}

export default DogChallenge