function ProjectCard({ title, description, image }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '20px', 
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {image && <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
    </div>
  )
}

export default ProjectCard