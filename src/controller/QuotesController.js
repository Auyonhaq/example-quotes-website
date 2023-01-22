import React, {Component, Fragment} from "react";

class QuotesController extends Component{
    constructor(props){
    super(props);
    this.state ={
        items: [],
        isLoaded: false,
    }
}


componentDidMount(){
    fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json,
        })
    });
}

render(){
    var {isLoaded, items} = this.state;

    if(!isLoaded){
        return <div>LOADING</div>;

    }

    else{
        return(
            <div className = "QuotesController">
                <ul>
                    {items.map(item => (
                       <div dangerouslySetInnerHTML={{__html: item.content['rendered']}}>
                            
                            </div>
                        
                    ))};
                </ul>
            </div>
        );

        }
}

}


export default QuotesController;