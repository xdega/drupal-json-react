import React from 'react';
import CatItem from "./CatItem";
import Preloader from "../Preloader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

let CAT_URL = process.env.REACT_APP_CAT_URL;

export default class CatList extends React.Component {
  constructor() {
    super();
    this.state = { 
      data: null,
      url: CAT_URL,
      offset: 0
    };
    this.loadPosts = this.loadPosts.bind(this);
    this.updateData = this.updateData.bind(this);
    this.loadPrevious = this.loadPrevious.bind(this);
    this.loadNext = this.loadNext.bind(this);
  }
  
  componentDidMount() {
    this.loadPosts();
  }
    
  async loadPrevious() {
    this.setState({ data: null });
    if (this.state.offset >= 9) {
      await this.setState({ offset: this.state.offset - 9 });
    }
      await this.loadPosts();
    }
    
  async loadNext() {
    this.setState({ data: null });
    await this.setState({ offset: this.state.offset + 9 });
    await this.loadPosts();
  }

  updateData(responseData) {
    this.setState({
      data: responseData.data
    });
  }

  loadPosts() {
    fetch(this.state.url + "&offset=" + this.state.offset, {mode:'cors'})
    .then(function (response) {
      return response.json();
    })
    .then((data) => this.updateData(data))
    .catch(err => console.log('Fetching Posts Failed', err));
  }

  render() {
    return (
      <div>
        <button className={ "invisible md:visible text-white p-1 px-3 mt-2 float-left " + (this.state.offset ? "bg-yellow-600" : "bg-gray-400")} onClick={ this.loadPrevious }>
          <FontAwesomeIcon icon={faAngleLeft} /> 
        </button>
        <button className="invisible md:visible bg-yellow-600 text-white p-1 px-3 mt-2 float-right" onClick={ this.loadNext }>
          <FontAwesomeIcon icon={faAngleRight} /> 
        </button>
        <div className="invisible md:visible text-center mt-2 mb-5 uppercase">Page { (this.state.offset / 9) + 1 }</div>
        <div className="text-center">
          { this.state.data ? this.state.data.map(item => <CatItem {...item} key={item.id}/>) :
            <Preloader /> 
          }
        </div>
      </div>
    );
  }
}
