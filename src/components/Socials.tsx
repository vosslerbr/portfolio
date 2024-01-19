import socials from "../data/socials";

export default function Socials() {
  return (
    <section className="my-36">
      <h2 className="bg-gray-950 text-gray-50 rounded-lg py-4 shadow-xl">Want to connect?</h2>

      <div className="my-6 grid grid-cols-3 gap-6">
        {socials.map((social) => {
          return (
            <div
              className={`rounded-lg p-6 col-span-3 md:col-span-1 flex flex-col justify-between text-gray-50 bg-gray-950`}>
              <a href={social.url} className="text-2xl">
                <h3>{social.name}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
