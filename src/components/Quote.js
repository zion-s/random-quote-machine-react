import React from 'react';
import './Quote.css';

class Quote extends React.Component{
    render(){
        return(
            <div id="quote-box">
                <div id="text">
                    {this.props.quote}
                </div>
                <div id="author">
                    {this.props.author}
                </div>
                <button id="new-quote" onClick={this.props.randomQuote}>New Quote</button>
                <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>
            </div>
        )
    }
}

export default Quote;