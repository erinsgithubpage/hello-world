import React, { Component } from 'react'

class UserGreeting extends Component {
 
 constructor(props) {
   super(props)
 
   this.state = {
      isLoggedIn: false
   }
 }
 
 
    render() {

        return this.state.isLoggedIn && <div>Welcome Erin</div>

        /*return (
            this.state.isLoggedIn ? (<div>Welcome Erin </div>) : (<div>Welcome Guest</div>)
        )*/

        /*let message 
        if (this.state.isLoggedIn) {
            message = <div>Welcome Erin</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>*/
       // if(this.state.isLoggedIn) {
         //  return <>Welcome Erin<///div>
         //} else {
         //   return <div>Welcome Guest</div>  
        //}
       
   /* return (
        <div>
            <div>Welcome Erin</div>
            <div>Welcome Guest</div>
        </div>
      
    );*/
  }
}


export default UserGreeting
