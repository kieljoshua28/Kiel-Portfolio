function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-info">
        <p>
          <strong>📧 Email:</strong>{' '}
          <a href="mailto:kieljoshua28@gmail.com">kieljoshua28@gmail.com</a>
        </p>
        
        <p>
          <strong>💼 LinkedIn:</strong>{' '}
          <a 
            href="https://www.linkedin.com/in/lozada-kiel-joshua-p-886704316" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Kiel Joshua P. Lozada
          </a>
        </p>
        
        <p>
          <strong>🐙 GitHub:</strong>{' '}
          <a 
            href="https://github.com/kieljoshua28" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            @kieljoshua28
          </a>
        </p>

        <p>
          <strong>📱 Phone:</strong>{' '}
          <a href="tel:+639291064439">+63 929 106 4439</a>
        </p>
      </div>

      <div className="contact-cta">
        <p>💡 Feel free to reach out! I'm always open to new opportunities.</p>
      </div>
    </section>
  )
}

export default Contact