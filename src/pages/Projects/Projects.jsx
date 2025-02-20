// import { useState, useEffect } from 'react';
// import { FaRegEye } from 'react-icons/fa';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch('/projects.json')
//       .then(response => response.json())
//       .then(data => {
//         setProjects(data);
//       })
//       .catch(error => console.error('Error loading project data:', error));
//   }, []);

//   return (
//     <section className="portfolio" data-page="portfolio">
//       <header>
//         <h2 className="h2 article-title">Portfolio</h2>
//       </header>

//       {/* Portfolio items */}
//       <section className="projects">
//         <ul className="project-list">
//           {projects.map(project => (
//             <li
//               className="project-item active"
//               data-filter-item
//               data-category={project.category}
//               key={project.id}
//             >
//               <a href={project.live}
//                 target="_blank">
//                 <figure className="project-img">
//                   <div className="project-item-icon-box">
//                     <FaRegEye />
//                   </div>
//                   <img src={project.image} alt={project.title} loading="lazy" />
//                 </figure>
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-category">{project.description}</p>
//                 {/* <button>{project.live}</button> <button>{project.github}</button> */}
//               </a>
//               {/* <a
//                 href={project.frontend}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="project-link"
//               >
//                 Code
//               </a> */}
//               <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="project-link">Frontend</a>
//               {project.backend && (
//                 <a href={project.backend} target="_blank" rel="noopener noreferrer" className="project-link">Backend</a>
//               )}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </section>
//   );
// };

// export default Projects;

import { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {projects.map(project => {
            const hasBackend = Boolean(project.backend);
            return (
              <li
                className="project-item active"
                data-filter-item
                data-category={project.category}
                key={project.id}
              >
                <a href={project.live} target="_blank">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.description}</p>
                </a>
                <div className="project-links" style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{ width: hasBackend ? '45%' : '100%' }}
                  >
                    Frontend
                  </a>
                  {hasBackend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ width: '45%' }}
                    >
                      Backend
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Projects;
