import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="my-36">
      <h2 className="bg-gray-950 text-gray-50 rounded-lg py-4 shadow-xl">Featured Projects</h2>

      <div className="my-6 grid grid-cols-2 gap-6">
        {projects.map((project) => {
          return (
            <div
              className={`rounded-lg p-6 col-span-2 lg:col-span-1 flex flex-col justify-between text-gray-50 ${project.css_class}`}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 shadow-xl">
                {project.tags.map((tag) => {
                  return (
                    <p className="bg-gray-50 text-2xl text-gray-950 px-4 py-1 rounded-lg  inline text-center">{tag}</p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
