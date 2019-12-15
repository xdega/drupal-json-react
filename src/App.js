import React, { Component } from 'react';
import PostList from "./components/PostList"

const POST_URL = 'http://drupal.docker.localhost:8000/jsonapi/node/article';

class App extends Component {

    constructor() {
        super();
        this.state = { data: null };
        this.loadPosts = this.loadPosts.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.loadPosts();
    }

    updateData(responseData) {
        this.setState({data: responseData.data});
    }

    loadPosts() {
        console.log("Loading posts...");
        fetch(POST_URL, {mode:'cors'})
            .then(function (response) {
                return response.json();
            })
            .then((data) => this.updateData(data))
            .catch(err => console.log('Fetching Posts Failed', err));
    }

    render() {
        return (
            <div className="App">
                <PostList
                    data={this.state.data}
                    loadPosts={this.loadPosts}
                />
            </div>
        )
    }
}

export default App;
