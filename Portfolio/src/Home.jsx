import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <h1 className="greeting">Hello, I'm <span className="name-highlight">Yukta Mahajan</span></h1>
                <p className="intro">MCA Student | MERN Stack Developer | Problem Solver</p>
                
                <div className='profile-pic-container'>
                    <div className="img-border-effect">
                        <img 
                            src="/image.jpg" 
                            alt="Yukta Mahajan" 
                            className="profile-img" 
                        />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="section-divider"></div>
                </div>
                
                <p className="about-text">
                    Hi, I'm Yukta, a passionate <span className="tech-highlight">MERN stack developer</span> currently pursuing my MCA. 
                    I specialize in building full-stack web applications that solve real-world problems with clean, 
                    efficient code and intuitive user experiences.
                </p>

                <div className="subsection">
                    <h3 className="subsection-title">My Journey</h3>
                    <p className="journey-text">
                        From writing my first "Hello World" during BCA to developing complete web applications today, 
                        my journey has been fueled by curiosity and persistence. Through my internship and personal projects, 
                        I've learned to transform ideas into functional digital products.
                    </p>
                </div>

                <div className="tech-skills-container">
                    <div className="subsection">
                        <h3 className="subsection-title">Technologies I Work With</h3>
                        <ul className="tech-list">
                            <li><span className="tech-category">Frontend:</span> React, JavaScript (ES6+), HTML5, CSS3, Tailwind</li>
                            <li><span className="tech-category">Backend:</span> Node.js, Express.js, REST APIs</li>
                            <li><span className="tech-category">Database:</span> MongoDB</li>
                            <li><span className="tech-category">Tools:</span> Git, GitHub, VS Code, Postman</li>
                        </ul>
                    </div>

                    <div className="subsection">
                        <h3 className="subsection-title">What I Do Best</h3>
                        <ul className="skills-list">
                            <li>
                                <span className="skill-icon">▹</span> 
                                Building responsive web applications with modern frameworks
                            </li>
                            <li>
                                <span className="skill-icon">▹</span> 
                                Designing intuitive user interfaces and experiences
                            </li>
                            <li>
                                <span className="skill-icon">▹</span> 
                                Solving complex problems with elegant solutions
                            </li>
                            <li>
                                <span className="skill-icon">▹</span> 
                                Continuous learning and adapting to new technologies
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="subsection">
                    <h3 className="subsection-title">My Approach</h3>
                    <p className="approach-text">
                        I believe in <span className="highlight">learning by building</span>. When I'm not studying, 
                        you'll find me working on new projects, contributing to open-source, 
                        or exploring the latest web technologies. I maintain a growth mindset 
                        and enjoy tackling challenges that push my boundaries.
                    </p>
                </div>

                <div className="subsection">
                    <h3 className="subsection-title">Looking Ahead</h3>
                    <p className="future-goals">
                        I'm excited to collaborate on meaningful projects that leverage technology 
                        to create positive impact. My goal is to develop solutions that are 
                        <span className="highlight"> accessible, performant, and enjoyable</span> for all users.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;