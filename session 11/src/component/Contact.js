import React from "react";


class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
// execution seq -> 1.constructor 2.render 3.compountDidMount
// so we call api in compountDidMount
    componentDidMount(){
        //api call , like useEffeect
    }

    componentDidUpdate(){

        // to use depencey array like useEffect(,[count, count1])
        /**
         * write function like this because componentDidUpdtate call after first each render
         * componentDidUpdate(prevProps,prevState){
         * 
         * if(this.state.count!= prevState.count  || this.state.count!=prevState.count2){
         *      code
         * 
         * }
         * }
         * 
         * 
        */
    }

    componentWillUnmount(){
        // will be called after we leave the page
        // why we use this 

        // because in Single Page Application like ours(single page with multiple components )
        /**
         * if we write like this 
         * componentDidMount(){
         * this.timer=setInterval(()=>{
         * console.log("hello")},1000)
         * }
         * 
         * hello will be called even after we leave the contact page , and when we will again 
         * visit the concat two intervals will be called and vice versa , so we need to unmount
         * 
         *  */

        // so we can write clearInterval(this.timer)
    }

    render(){
        // to create a useState variable 
        const {count}=this.state;
        return(
            <>
        <div>Contact : {this.props.contact}</div>
        <h2>count {count} </h2>

            <button onClick={()=>{
                //dont use this.state directly react will not get tract of it else use this.setState
                this.setState({
                    count:1
                })
            }}>button</button>

        </>
    )}
}

export default Contact;