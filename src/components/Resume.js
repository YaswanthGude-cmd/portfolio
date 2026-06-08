import React from 'react'

function Resume() {
  return (
    <div>
      <section className="resume section" id="resume">
        <h2 className="section-title">Resume</h2>
        <div className="resume-container">
            <h3 className="section-title3">
            Download My Resume
            </h3>
            <p>
            Explore my education, technical skills, projects,
            internships, certifications, and achievements.
            </p>
            <div className="resume-buttons">
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
            >
                View Resume
            </a>
            <a
                href="/resume.pdf"
                download
                className="btn btn-outline"
            >
                Download Resume
            </a>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Resume
