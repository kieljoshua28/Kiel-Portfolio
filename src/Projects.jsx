import ProjectCard from './ProjectCard'


function Projects() {
  const myProjects = [
    { title: 'To-Do App', description: 'A simple task manager built with React' },
    { title: 'Weather App', description: 'Shows weather using an API' },
    { title: 'Portfolio', description: 'This website!' }
  ]

  return (
    <section id="projects" style={{ padding: '40px' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {myProjects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title} 
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects