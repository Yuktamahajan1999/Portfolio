import React from 'react'

const Skills = () => {
    return (
        <div>
            {/* Simple Skills Section */}
            <section className="skills-section">
                <h2 className="section-title">Skills</h2>

                <div className="skills-container">
                    {/* Technical Skills */}
                    <div className="skills-category">
                        <h3>Technical</h3>
                        <ul className="skills-list">
                            <li>MERN Stack (MongoDB, Express, React, Node)</li>
                            <li>JavaScript (ES6+)</li>
                            <li>HTML5 & CSS3</li>
                            <li>RESTful APIs</li>
                            <li>Git Version Control</li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="skills-category">
                        <h3>Tools</h3>
                        <ul className="skills-list">
                            <li>VS Code</li>
                            <li>Postman</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;
