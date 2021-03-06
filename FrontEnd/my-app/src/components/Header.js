import React, {Component} from 'react';
import NavBar from './Navbar';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {data : new Date()};
        // setInterval(() => this.tick(), 1000);
        // console.log('componentDidMount');
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick(){
        this.setState({data: new Date()});
    }

    render(){

        const styleImg = {width: 180, height: 100};

        return(  
            <div>
                 <div className="container-fluid" >
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center mt-3">
                            
                        <a className="mt-2 col" href="/"><img style={styleImg} src="/images/logo.png" alt="/"/> </a>
                        </div>
                        <div className="col-md-1 offset-md-2 text-left">
                            <h5 className="text-muted">{this.state.data.toLocaleTimeString()}</h5>
                        </div>
                    </div>
                 </div>   
            <NavBar />
            <hr />
            
            </div>
        )
    }

}

export default Header;