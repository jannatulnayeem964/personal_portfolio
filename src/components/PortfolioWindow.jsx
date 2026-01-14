import React, {useState} from "react";
import './PortfolioWindow.css';

const PortfolioWindow = ({onClose}) => {
    const [activeTab, setActiveTab] = useState("Home");


    const projects = [
        {
            name: 'Safefier - AI Safety and Filtering System',
            tech: "Next.js, FastAPI, Tailwind, Gemini API",
            description: 'Safefier acts as a “responsible parent” for AI chatbots, sitting between the user and the model to detect and replace unsafe responses. The project showcases how a minimal safety layer can meaningfully reduce harm without replacing the underlying AI.',
            link: 'https://github.com/NazimTheAllFather/Patriot_Hacks_2025.git'
        }, 
        {
            name: 'Bias Detection Framework for LLMs',
            tech: "LangTest, Hugging Face, Python",
            description: 'Built reproducible evaluation scripts to quantify demographic bias and performance disparities, supporting systematic AI fairness analysis',
            link: 'https://github.com/BTT-Relativity1B/Main.git'
        },
        {
            name: 'Quizly - Full-Stack Study Tool',
            tech: "React, Node.js, FastAPI, OpenAI API",
            description: 'An intelligent flashcard generation platform that generates flashcards from PDFs or text',
            link: 'https://github.com/BTT-Relativity1B/Main.git'
        }, 
        {
            name: 'Image Classification with CNNs (MNIST)',
            tech: "Python, TensorFlow, Keras",
            description: 'Trained CNN model on MNIST dataset achieving 98% accuracy in handwritten digit recognition',
            link: 'https://github.com/jannatulnayeem964/Handwritten-Digit-Classifier-with-CNN.git'
        }
    ];

    const experience = [
        {
            role: 'Software Engineer',
            company: 'Tech Company',
            period: '2020 - Present',
            description: 'Developed web applications using modern technologies.'
        }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Home':
                return (
                    <div className="tab-content-container">
                        {/* Welcome Message */}
                        <div className="dialog-box dialog-pink text-center">
                            <div className="star-emoji">🌟</div>
                            <h1 className="main-title">★ JANNATUL NAYEEM ★</h1>
                            <p className="subtitle">♡ Full Stack Developer ♡</p>
                            <div className="status-badge">
                                STATUS: READY TO CODE! ✨
                            </div>
                        </div>

                        {/* About Me Dialog */}
                        <div className="dialog-box dialog-purple">
                            <div className="dialog-header">
                                <span className="dialog-icon">💭</span>
                                <h2 className="dialog-title">About Me.txt</h2>
                            </div>
                            <p className="dialog-text">
                            I'm a passionate developer with experience in creating modern, responsive web applications. 
                            I enjoy working with cutting-edge technologies and solving complex problems through clean, 
                            efficient code. When I'm not coding, you can find me exploring new frameworks or contributing 
                            to open-source projects. ♡
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="skills-grid">
                            <div className="skill-box dialog-blue">
                                <div className="skill-emoji">💻</div>
                                <h3 className="skill-title">Skills</h3>
                                <p className="skill-text">React, Vue, Typescript</p>
                            </div>
                            <div className="skill-box dialog-green">
                                <div className="skill-emoji">⚙️</div>
                                <h3 className="skill-title">Backend</h3>
                                <p className="skill-text">Node.js, Python, APIs</p>
                            </div>
                            <div className="skill-box dialog-yellow">
                                <div className="skill-emoji">🔧</div>
                                <h3 className="skill-title">Tools</h3>
                                <p className="skill-text">Git, Docker, AWS</p>
                            </div>
                        </div>

                        {/* Loading Bar */}
                        <div className="dialog-box dialog-gray">
                            <p className="loading-text">Loading awesome projects...</p>
                            <div className="loading-bar-container">
                                <div className="loading-bar-fill"></div>
                            </div>
                            <p className="loading-percent">95% complete!</p>
                        </div>
                    </div>
                );
            
            case 'Projects':
                return (
                    <div className="tab-content-container">
                        <div className="dialog-box dialog-pink text-center">
                            <h2 className="dialog-title">📁 MY PROJECTS FOLDER 📁</h2>
                        </div>

                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-header">
                                    <div className="project-info">
                                        <div className="project-name-row">
                                            <span className="project-icon">💾</span>
                                            <h3 className="project-name">{project.name}</h3>
                                        </div>
                                        <div className="tech-badge">{project.tech}</div>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                    <button className="visit-btn">VISIT →</button>
                                </div>
                            </div>
                            ))}

                            <div className="dialog-box dialog-yellow text-center">
                                <div className="fun-message">
                                    <span className="fun-emoji">🎉</span>
                                    <p className="fun-text">More projects loading soon...</p>
                                    <span className="fun-emoji">🚀</span>
                                </div>
                            </div>
                    </div>
                );

            case 'Experience':
                return (
                    <div className="tab-content-container">
                        <div className="dialog-box dialog-purple text-center">
                            <h2 className="dialog-title">💼 WORK EXPERIENCE.DOC 💼</h2>
                        </div>

                        {experience.map((job, index) => (
                            <div key={index} className="experience-card">
                                <div className="job-header">
                                    <div className="job-title-row">
                                        <span className="job-icon">💼</span>
                                        <h3 className="job-title">{job.role}</h3>
                                    </div>
                                    <div className="period-badge">{job.period}</div>
                                </div>
                                <div className="company-badge">{job.company}</div>
                                <p className="job-description">{job.description}</p>
                            </div>
                        ))}

                        <div className="dialog-box dialog-purple">
                            <div className="dialog-header">
                                <span className="dialog-icon">🛠️</span>
                                <h3 className="dialog-title">SKILLS.EXE</h3>
                            </div>
                            <div className="skills-tags">
                            {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'Git'].map((skill) => (
                                <div key={skill} className="skill-tag">
                                    {skill}
                                </div>
                            ))}
                            </div>
                        </div>

                        <div className="dialog-box dialog-gray">
                            <div className="dialog-header">
                                <span className="dialog-icon">⚡</span>
                                <h3 className="dialog-title">SYSTEM STATUS</h3>
                            </div>
                            <div className="system-info">
                                <p>► Motivation: 100%</p>
                                <p>► Coffee Level: Maximum</p>
                                <p>► Ready for new challenges: TRUE</p>
                            </div>
                        </div>
                    </div>
                );

            case 'Contact':
                return (
                    <div className="tab-content-container">
                        <div className="dialog-box dialog-pink text-center">
                            <div className="contact-emoji">💌</div>
                            <h2 className="contact-title">★ GET IN TOUCH! ★</h2>
                            <p className="contact-text">
                                I'm always interested in new opportunities and exciting projects. 
                                Feel free to reach out if you'd like to collaborate! ♡
                            </p>
                            <button className="email-btn">📧 SEND EMAIL</button>
                        </div>

                        <div className="contact-grid">
                            <div className="dialog-box dialog-purple">
                                <div className="dialog-header">
                                    <span className="dialog-icon">🌐</span>
                                    <h3 className="dialog-title">CONNECT.EXE</h3>
                                </div>
                                <div className="social-buttons">
                                    <button className="social-btn">🐙 GitHub Profile</button>
                                    <button className="social-btn">💼 LinkedIn</button>
                                </div>
                            </div>

                            <div className="dialog-box dialog-blue">
                                <div className="dialog-header">
                                    <span className="dialog-icon">📱</span>
                                    <h3 className="dialog-title">INFO.TXT</h3>
                                </div>
                                <div className="info-list">
                                    <div className="info-item">
                                        <span>📍</span>
                                        <span>Ashburn, VA</span>
                                    </div>
                                    <div className="info-item">
                                        <span>⏰</span>
                                        <span>Available for work</span>
                                    </div>
                                    <div className="info-item">
                                        <span>⚡</span>
                                        <span>Response time: 24hrs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dialog-box dialog-yellow text-center">
                            <div className="thanks-message">
                                <span className="thanks-emoji">💝</span>
                                <p className="thanks-text">Thanks for visiting my digital space!</p>
                                <span className="thanks-emoji">💝</span>
                            </div>
                            <p className="thanks-subtitle">Have a wonderful day~ ✨</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="portfolio-overlay">
            <div className="portfolio-window-container">
                {/* Title Bar */}
                <div className="portfolio-title-bar">
                    <div className="title-content">
                        <span className="title-icon">💖</span>
                        <span className="title-text">♡ MESSAGE FOR YOU! ♡</span>
                    </div>
                
                    <div className="window-controls">
                        <button className="control-btn minimize-btn">_</button>
                        <button className="control-btn maximize-btn">□</button>
                        <button className="control-btn close-btn" onClick={onClose}>✕</button>
                    </div>
                </div>
            

            {/* Navigation Tabs */}
            <div className="portfolio-nav-tabs">
                {[
                    { name: 'Home', icon: '🏠' },
                    { name: 'Projects', icon: '📁' },
                    { name: 'Experience', icon: '💼' },
                    { name: 'Contact', icon: '💌' }
                ].map((tab) => (
                    <button 
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`nav-tab ${activeTab === tab.name ? 'active' : ''}`}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-text">{tab.name}</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="portfolio-content-area">
                {renderContent()}
            </div>
        </div>
    </div>
    );
};

export default PortfolioWindow;
