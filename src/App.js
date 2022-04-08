import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Api from './Api'

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>My example</h1>
                <p>Add a developer with a name and language</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                This is an example of consuming an API using Fetch.
                <div>
                    <Api/>
                </div>
            </div>
        );
    }
}

export default App;