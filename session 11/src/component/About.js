import React, { useEffect } from 'react'
import Contact from './Contact';

//shortcut rafc type to get component automatically
const About = () => {

  useEffect(()=>{
      const timer=setInterval(()=>{
        console.log("hello")
      },1000)

    return(()=>{
          console.log("use Effect return like ComponentDidUnMount");
          clearInterval(timer);
    })
  })

  return (
    <>
    <h1>About section </h1>
    <div>
    <Contact contact="firstChild" />
    <Contact contact="Second Child" />
    </div>
    </>
  )
}
export default About;

/**
 * Parent Constructor
 * parent render
 *      first child Constructor
 *      first child render
 *      second child constructor
 *      second child render
 *      first child componentDidMount
 *      second child componentDidMount
 * parent componentDidMount
*/

/**
 * componentDidMount will be called after first render
 * and componentDidUpdate will be called after each render
 * componentWillUnount will be called when go to another page 
 * 
*/