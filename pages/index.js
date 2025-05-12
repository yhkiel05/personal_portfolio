import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    projects: false,
    experience: false,
    education: false,
    contact: false
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      about: false,
      projects: false,
      experience: false,
      education: false,
      contact: false
    });

    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'education', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.75) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = (section) => {
    return isVisible[section] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  };

  return (
    <Layout>
      <section id="hero" className={`min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 transition-opacity duration-1000 ${fadeIn('hero')}`}>
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Younghoon Kiel</h1>
          <p className="text-xl md:text-3xl mb-10 text-gray-300">Aspiring Software Engineer | Building Innovative Solutions</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all hover:shadow-lg transform hover:-translate-y-1">
              View Projects
            </a>
            <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all hover:shadow-lg transform hover:-translate-y-1">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={`py-20 px-8 bg-gray-800 text-white transition-all duration-1000 ease-out transform ${fadeIn('about')}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm Younghoon Kiel, a passionate and driven student currently seeking software engineering internships. I have a strong foundation in computer science principles and a keen interest in developing innovative and user-friendly applications.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My technical skills include proficiency in languages such as JavaScript, Python, and Java, as well as experience with frameworks like React, Node.js, and Express. I'm also familiar with database technologies including MongoDB and MySQL.
            </p>
            <p className="text-lg leading-relaxed">
              I'm eager to apply my skills in a professional setting and contribute to meaningful projects. I thrive in collaborative environments and am always looking to learn and grow as a developer.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className={`py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-1000 ease-out transform ${fadeIn('projects')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="h-48 bg-blue-900 flex items-center justify-center">
                <svg className="w-20 h-20 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-4">A full-stack e-commerce application with user authentication, product catalog, and shopping cart functionality.</p>
                <p className="text-sm text-gray-500 mb-4"><strong>Technologies:</strong> React, Node.js, Express, MongoDB</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="h-48 bg-green-900 flex items-center justify-center">
                <svg className="w-20 h-20 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Weather App</h3>
                <p className="text-gray-400 mb-4">A responsive weather application that provides real-time weather data and forecasts for any location.</p>
                <p className="text-sm text-gray-500 mb-4"><strong>Technologies:</strong> React, OpenWeather API, Tailwind CSS</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="h-48 bg-purple-900 flex items-center justify-center">
                <svg className="w-20 h-20 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Task Management App</h3>
                <p className="text-gray-400 mb-4">A productivity application for managing tasks, with features like categories, due dates, and priority levels.</p>
                <p className="text-sm text-gray-500 mb-4"><strong>Technologies:</strong> React, Firebase, Material UI</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={`py-20 px-8 bg-gray-800 text-white transition-all duration-1000 ease-out transform ${fadeIn('experience')}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold">Software Engineering Intern</h3>
                <p className="text-blue-400 font-medium">Summer 2024</p>
              </div>
              <p className="text-xl text-gray-300 mb-4">Tech Company Name</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Developed and maintained features for the company's main web application using React and Node.js.</li>
                <li>Collaborated with the design team to implement responsive UI components.</li>
                <li>Participated in code reviews and contributed to improving the development workflow.</li>
                <li>Optimized database queries, resulting in a 30% improvement in application performance.</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold">Web Development Assistant</h3>
                <p className="text-blue-400 font-medium">2023 - Present</p>
              </div>
              <p className="text-xl text-gray-300 mb-4">University IT Department</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Assist in maintaining and updating the university's website using HTML, CSS, and JavaScript.</li>
                <li>Create and implement responsive designs for various department pages.</li>
                <li>Provide technical support for content management system users.</li>
                <li>Document website changes and create user guides for staff.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="education" className={`py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-1000 ease-out transform ${fadeIn('education')}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-blue-400 font-medium">Expected May 2026</p>
            </div>
            <p className="text-xl text-gray-300 mb-6">University Name</p>
            <div>
              <h4 className="text-lg font-medium mb-2 text-gray-200">Relevant Coursework:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Data Structures & Algorithms</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Web Development</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Database Systems</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Software Engineering</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Computer Networks</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Operating Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={`py-20 px-8 bg-gray-800 text-white transition-all duration-1000 ease-out transform ${fadeIn('contact')}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-10">I'm actively looking for internship opportunities. Feel free to reach out!</p>
          
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl inline-block">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:your.email@example.com" className="text-xl text-blue-400 hover:text-blue-300">your.email@example.com</a>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
