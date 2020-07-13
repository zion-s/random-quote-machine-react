import React from 'react';
import Quote from './Quote';

class QuoteContainer extends React.Component{

        state={
            quote:'',
            author:''
        }

    randomQuote = async ()=> {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json();
        this.setState({
            quote:data.content,
            author:data.author
        })
    }
    componentDidMount = ()=>{
        this.randomQuote();
    }

    render(){
        return (
                <Quote  randomQuote={this.randomQuote}
                        quote={this.state.quote}
                        author={this.state.author}/>
        )
    }
}
// class QuoteContainer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             quote:'',
//             author:''
//         }
//         this.randomQuote=this.randomQuote.bind(this);
//     }
//     async randomQuote() {
//         const response = await fetch('https://api.quotable.io/random')
//         const data = await response.json();
//         this.setState({
//             quote:data.content,
//             author:data.author
//         })
//     }
//     componentDidMount(){
//         this.randomQuote();
//     }

//     render(){
//         return (
//                 <Quote  randomQuote={this.randomQuote}
//                         quote={this.state.quote}
//                         author={this.state.author}/>
//         )
//     }
// }

export default QuoteContainer;