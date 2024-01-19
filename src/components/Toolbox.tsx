import tools from "../data/tools";

export default function Toolbox() {
  return (
    <section className="my-36">
      <h2 className="bg-gray-950 text-gray-50 rounded-lg py-4 shadow-xl">My Toolbox</h2>

      <div className="my-6 grid grid-cols-3 gap-6">
        {tools.map((tool) => {
          return (
            <div
              className={`rounded-lg p-6 col-span-3 md:col-span-1 flex flex-col justify-between text-gray-50 bg-gray-950 text-center bg-repeat-space ${tool.css_class}`}>
              <h3>{tool.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
