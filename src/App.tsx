import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='card'>
        <img src="minha_foto.jpg" alt="minha foto" width={317} height={317} className='profilePhoto' />
        <h1>Tomás Hugo</h1>
        <h2>Fullstack Developer</h2>
        <p>tomashugo.website</p>
        <div className='buttons'>
          <button className='button-email'><i className="fa-solid fa-envelope"></i> Email</button>
          <button className='button-linkedin'><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
        </div>
        <div className='content'>
          <h2>About</h2>
          <p>I am a Fullstack developer with a particular interest in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h2>Interests</h2>
          <p>Active Musician. Avid Learner. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <div className='footer'>
          <i className="fa-brands fa-square-twitter fa-2xl r24"></i>
          <i className="fa-brands fa-square-facebook fa-2xl r24"></i>
          <i className="fa-brands fa-square-instagram fa-2xl r24"></i>
          <i className="fa-brands fa-square-github fa-2xl last"></i>
        </div>
      </div>
    </div>
  )
}

export default App
