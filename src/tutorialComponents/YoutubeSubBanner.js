import react from 'react'


import './YoutubeSubBanner.css'

class SubBanner extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            subscribed: false
        }
    }
    subscribeClicked =()=>{
        this.setState({subscribed:!this.state.subscribed})
    }
    render(){
        return(
            <div className='sub-banner'>
                <img src={this.props.image}/>
                <h1>{this.props.name}</h1>
                <button 
                    className={this.state.subscribed === false? 'subscribe':'subscribed'}
                    onClick={this.subscribeClicked}
                >
                    {this.state.subscribed === false? 'Subscribe':'Subscribed'}
                </button>
            </div>
        )
    }
}

export default SubBanner