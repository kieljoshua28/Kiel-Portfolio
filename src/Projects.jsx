function Projects() {
  const myProjects = [
    {
      title: 'VitalSense - IoT Health Monitoring System',
      description: 'Engineered secure IoT healthcare device for real-time monitoring of heart rate, oxygen levels, and body temperature. Implemented data security protocols for sensitive patient health metrics with secure intranet architecture to protect patient data confidentiality and system integrity. Deployed in clinic environment.',
      tech: 'IoT, Arduino, Python, Security Protocols, Healthcare',
      status: 'Thesis - Completed',
      link: '#',
      type: 'thesis'
    },
    {
      title: 'Network Vulnerability Assessment & Detection Lab',
      description: 'Architected multi-VM lab environment using VMware/VirtualBox with Kali Linux and Metasploitable to simulate real-world SOC scenarios. Performed network reconnaissance (NMAP), identified 100+ active services and open ports. Conducted vulnerability assessments using Nessus, prioritized findings by CVSS score, and documented remediation strategies.',
      tech: 'Kali Linux, Nessus, NMAP, Wireshark, VMware, Metasploitable',
      status: 'Completed',
      link: 'https://github.com/kieljoshua28',
      type: 'security'
    },
    {
      title: 'My Portfolio Website',
      description: 'Professional portfolio website showcasing projects, experience, and skills. Built with React and Vite featuring modern UI/UX design with responsive layout and smooth animations. Hope you Enjoy my Pokemons!',
      tech: 'React, JavaScript, Vite, CSS, Web Design',
      status: 'Live',
      link: '#',
      type: 'web'
    }
  ]

  const collegeProjects = [
    // Add your additional college projects here
  ]

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {/* MAIN PROJECTS */}
      <div className="projects-category">
        <h3>🚀 Featured & Thesis Projects</h3>
        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <div key={index} className="project-card-enhanced">
              <div className="project-header">
                <div>
                  <h4>{project.title}</h4>
                  <span className="project-type">{project.type.toUpperCase()}</span>
                </div>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* COLLEGE PROJECTS */}
      <div className="projects-category">
        <h3>📚 College & Academic Projects</h3>
        <div className="empty-state">
          <p>📖 Additional college projects coming soon...</p>
        </div>
      </div>
    </section>
  )
}

export default Projects