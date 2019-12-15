import React from 'react';
import PostItem from "./PostItem";

export default class PostList extends React.Component {
    render() {
        let { data } = this.props
    
        return (
            <div>
                <h1>Here are the latest posts</h1>
                <button onClick={this.props.loadPosts}>reload</button>
                { data !== null && data !== undefined && data.length > 0 ?
                    data.map(item => <PostItem {...item} key={item.id}/>)
                    :
                    <div>No posts found.</div>
                }
            </div>
        );
    }
}
