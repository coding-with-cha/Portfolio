import React from 'react'
import {Link} from 'react-router-dom'
import {Linkedin} from 'react-bootstrap-icons'
import {Github} from 'react-bootstrap-icons'

const Home = () => {
  return (
    <div className='About'>
      <h1>CHAIMA <span>MEJBRI</span></h1>

      <h2>Web Developer, <a href="mailto:chaimamejbri@gmail.com">chaimamejbri@gmail.com</a></h2>

      <p>As a certified JS full-stack developer, I'm proficient in web technologies 
        (<span>HTML5</span>, <span>CSS3</span>, <span>SASS</span>, <span>JavaScript</span>, <span>React Js</span> and <span>Node JS</span>) as well as in mastering
        various technical stages involved in creating a website or web application, 
        from understanding user needs, to front-end and back-end development and maintenance.
        <br/>My objective is to join a company that can offer me an interesting career path and confirm
        my skills and versatility in the creation and development of websites.</p>

      <div className='icons'>
        <Link to='https://tn.linkedin.com/in/chaima-mejbri-228157234'><Linkedin className='linkedin'/></Link>
        <Link to='https://github.com/coding-with-cha'><Github className='github'/></Link>
      </div>
    </div>
  )
}

export default Home