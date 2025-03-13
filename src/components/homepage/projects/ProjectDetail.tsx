import { Project } from "@type/project";

interface ProjectDetailProps {
    project?: Project;
}

const ProjectDetail : React.FC<ProjectDetailProps> = ({project}) => {
  
    if (!project) {
      return <p className="text-center text-red-500">Project not found!</p>;
    }
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
  
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="bg-gray-200 px-3 py-1 rounded-md text-sm">
              {tool}
            </span>
          ))}
        </div>
  
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Links:</h3>
          <ul className="list-disc pl-5">
            {Object.entries(project.link).map(([key, url]) => (
              <li key={key}>
                <a href={typeof url === 'string' ? url : '#'} className="text-blue-500 hover:underline">
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default ProjectDetail;