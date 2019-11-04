import React from 'react';
import axios from 'axios';

import './Quote.css';

class Quotes extends React.Component{
  constructor() {
    super();

    this.state = {
      quote: null,
      character:  null,
      image:  null,
    }
  }

  componentDidMount = () => {
    this.fetchJoke();
  }

  fetchJoke = () => {
    axios('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then((result) => {
      this.setState({
        quote: result.data[0].quote,
        character: result.data[0].character,
        image: result.data[0].image,
      })
    })
  }

  render () {
    return (
      <div className="container">
        <div className="ctn_api">

          <div className="ctn_character_picture">
            <img src={this.state.image} alt={this.state.character}/>
          </div>

          <div className="ctn_quote">
            <p className="txt_name">{this.state.character}</p>
            <p className="txt_quote">{this.state.quote}</p>
          </div>

        </div>
        <p className="btn" onClick={this.fetchJoke}>+</p>
      </div>
    )
  }
}

export default Quotes;