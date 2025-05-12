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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Thomas Younghoon Kiel</h1>
          <p className="text-xl md:text-3xl mb-10 text-gray-300">Software Engineer | U.S. Citizen</p>
          <p className="text-lg mb-6">832-217-5716 — younghoon.kiel@gmail.com</p>
          <p className="text-lg mb-10">linkedin.com/in/tykiel — github.com/yhkiel05</p>
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
          <h2 className="text-4xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Languages</h3>
              <p className="text-lg leading-relaxed">
                C/C++, Java, Python, JavaScript, SQL, Bash, HTML/CSS, R
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Frameworks & Tools</h3>
              <p className="text-lg leading-relaxed">
                Node.js, Express.js, React, Docker, Git, Linux, PostgreSQL, Firebase, VS Code, GoogleTest, .NET
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Libraries</h3>
              <p className="text-lg leading-relaxed">
                OpenCV, TensorFlow, NumPy, pandas, Matplotlib
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={`py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-1000 ease-out transform ${fadeIn('projects')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 lg:col-span-3">
              <div className="h-48 bg-blue-900 flex items-center justify-center">
                <svg className="w-20 h-20 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Custom Operating System for Multiplayer Doom</h3>
                <p className="text-sm text-gray-500 mb-4"><strong>Technologies:</strong> C/C++, QEMU, Systems Programming</p>
                <p className="text-gray-400 mb-2">• Built a custom operating system capable of running multiplayer Doom over a networked QEMU environment.</p>
                <p className="text-gray-400 mb-2">• Engineered core OS features including ext2 filesystem, virtual memory, system calls, multithreading, and device drivers.</p>
                <p className="text-gray-400 mb-2">• Developed a networking stack supporting DHCP, ARP, and UDP protocols for dynamic IP configuration, MAC resolution, and real-time packet delivery.</p>
                <p className="text-gray-400 mb-2">• Achieved reliable multiplayer synchronization through low-latency inter-process communication and custom networking logic.</p>
                <p className="text-gray-400 mb-2">• Demonstrated the OS in a live gameplay scenario using test cases and real-time interaction.</p>
                <p className="text-gray-400 mb-4">• Source code available upon request due to academic policy.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                    Request Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 lg:col-span-3/2">
              <div className="h-48 bg-green-900 flex items-center justify-center">
                <svg className="w-20 h-20 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Multithreaded Kernel Simulation (QEMU)</h3>
                <p className="text-sm text-gray-500 mb-4"><strong>Technologies:</strong> C++, Linux, Systems Programming</p>
                <p className="text-gray-400 mb-2">• Designed and implemented a thread-safe kernel simulation using mutexes, semaphores, and condition variables.</p>
                <p className="text-gray-400 mb-2">• Identified and resolved concurrency bottlenecks via debugging tools and performance profiling.</p>
                <p className="text-gray-400 mb-4">• Demonstrated mastery of multithreading, systems-level development, and debugging in low-level C++ environments.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 lg:col-span-3/2">
              <div className="h-48 bg-purple-900 flex items-center justify-center">
                <svg className="w-20 h-20 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Real-Time Facial Recognition App</h3>
                <p className="text-sm text-gray-500 mb-4"><strong>Technologies:</strong> C++, OpenCV, Machine Learning</p>
                <p className="text-gray-400 mb-2">• Developed a cross-platform application for live facial recognition, boosting inference performance by 25% through pipeline optimization.</p>
                <p className="text-gray-400 mb-2">• Integrated computer vision and ML using OpenCV, enhancing recognition accuracy with real-time preprocessing techniques.</p>
                <p className="text-gray-400 mb-4">• Deployed the system with live video input and validated its robustness through unit testing and multi-device compatibility.</p>
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
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={`py-20 px-8 bg-gray-800 text-white transition-all duration-1000 ease-out transform ${fadeIn('experience')}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold">Software Engineering Intern</h3>
                <p className="text-blue-400 font-medium">May 2025 - Present</p>
              </div>
              <p className="text-xl text-gray-300 mb-4">Phillips 66</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Modernized a legacy pricing system using C++ and the .NET framework, enhancing scalability and maintainability in a production-grade environment.</li>
                <li>Designed and refactored core modules to improve system modularity and alignment with SOLID principles.</li>
                <li>Developed and tuned SQL queries for performance at scale, supporting rapid and accurate data retrieval for financial reporting.</li>
                <li>Practiced full software development lifecycle (SDLC) processes within Agile teams, including daily scrums, planning, and retrospectives.</li>
                <li>Conducted code reviews, participated in CI/CD workflows, and ensured adherence to software quality and testing standards.</li>
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
              <p className="text-blue-400 font-medium">Expected May 2027</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <p className="text-xl text-gray-300">University of Texas at Austin, Austin, TX</p>
              <p className="text-gray-300">GPA: 3.8/4.0</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2 text-gray-200">Relevant Coursework:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Data Structures</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Algorithms</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Operating Systems</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Computer Architecture</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Software Engineering</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Linear Algebra</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Probability and Statistics</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Cloud Computing</span>
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
                <a href="mailto:younghoon.kiel@gmail.com" className="text-xl text-blue-400 hover:text-blue-300">younghoon.kiel@gmail.com</a>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-xl">832-217-5716</span>
              </div>
              
              <div className="flex space-x-6">
                <a href="https://linkedin.com/in/tykiel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="https://github.com/yhkiel05" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
