import React from "react";
export class Home extends React.Component{
    constructor(props){
        super();
        this.state={
           age:props.initialAge,
           status:0,  
           homeLink:"changed link"
        }; 
        setTimeout(()=>{
            this.setState({
                status:1
            });
        },3000);


    }
    onMakeOlder(){
       this.setState({
           age:this.state.age+3
       }); 
       
   
    }
    onChangeLink(){
       this.props.changeLink(this.state.homeLink);
    }
    render(){
       
        return (
            <div>
                <p>In a new Component!</p>
                
                <p>Your name is {this.props.name},your age is {this.state.age}</p>
                <p>Status:{this.state.status}</p>
                <hr/>


                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
        {/*<button onClick={()=>this.onMakeOlder()} className="btn btn-primary">Make me older</button>*/}
            <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
            <hr/>
            <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}
Home.propTypes={
name:React.PropTypes.string,
initialAge :React.PropTypes.number,
greet:React.PropTypes.func
};
