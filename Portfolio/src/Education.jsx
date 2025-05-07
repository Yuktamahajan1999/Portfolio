import React, { useState } from 'react';
import education from './data';

const Education = () => {
    const [expand, setExpand] = useState(null);

    const handleExpand = (index) => {
        setExpand(prev => (prev === index ? null : index));
    };

    return (
        <section className="education-section" id="education">
            <h1 className="edu-title">Education</h1>
            <div className="edu-card-container">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className={`edu-card ${expand === index ? 'expanded' : ''}`}
                        onClick={() => handleExpand(index)}
                    >
                        <h2>{edu.degree}</h2>

                        {expand === index && (
                            <div className="expanded-info">
                                <p><strong>Institution:</strong> {edu.institution}</p>
                                {edu.location && (
                                    <p><strong>Location:</strong> {edu.location}</p>
                                )}

                                <p><strong>Duration:</strong> {edu.duration}</p>

                                {edu.cgpa && edu.cgpa !== '-' && (
                                    <p><strong>CGPA:</strong> {edu.cgpa}</p>
                                )}

                                {edu.courses && (
                                    <div>
                                        <strong>Course:</strong>
                                        <ul>
                                            {Array.isArray(edu.courses)
                                                ? edu.courses.map((course, i) => <li key={i}>📘 {course}</li>)
                                                : <li>📘 {edu.courses}</li>}
                                        </ul>
                                    </div>
                                )}

                                {edu.skillsLearned && edu.skillsLearned.length > 0 && (
                                    <div>
                                        <strong>Skills Learned:</strong>
                                        <ul>
                                            {edu.skillsLearned.map((skill, i) => (
                                                <li key={i}> {skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {edu.certificate && (
                                    <div>
                                        <strong>Certificate:</strong>
                                        <a href={edu.certificate} target="_blank" rel="noopener noreferrer" download>
                                            View Certificate
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
