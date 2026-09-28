function Header() {
  return (
    <header className="header-new">
      <div className="header-container">
        
        <div className="header-left">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        </div>

        <div className="header-right">
          <div className="header-content">
            <h1>Kiel Joshua P. Lozada</h1>
            <p className="subtitle">Computer Engineer | ISC2 Certified in Cybersecurity (CC)</p>
          </div>
          
          <nav className="header-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header