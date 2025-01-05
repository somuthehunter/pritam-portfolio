import { PROJECTS } from "../constant";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((projs, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full justify-center lg:w-1/4"
            >
              <a href={projs.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={projs.image}
                  alt={projs.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded-2xl"
                />
              </a>
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{projs.title}</h6>
              <p className="mb-4 text-neutral-400"> {projs.description}</p>
              <div className="mb-4">
                {projs.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-5 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Link to Project */}
              <a
                href={projs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-purple-900 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800"
              >
                View Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
