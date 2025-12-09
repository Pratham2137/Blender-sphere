function App() {
  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden px-[8%]">
        <div className="absolute top-0 left-0 w-full h-full -z-10 object-cover">
          <video autoPlay loop muted playsInline>
            <source src="../public/BlendSphere.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="max-w-[600px]">
          <div className="font-bold text-[1.1rem] mb-[1.2rem]">~ light sphere</div>
          <div className="inline-block rounded-3xl py-1.5 px-3.5 text-[0.85rem] mb-6 backdrop-blur-xs bg-[rgba(255,255,255,0.35)]">✨ new release</div>
          <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-4">
            Future of <br />
            design an development
          </h1>
          <p className="text-[1.1rem] font-light leading-[1.6] mb-8 text-[#272727]">
            I'm Pratham Shinde, Your friendly web developer and this is my first
            web site using Blender.
          </p>

          <div className="buttons flex gap-4">
            <a
              href="#"
              className="btn btn-primary"
            >
              View Portfolio
            </a>
            <a href="#" className="btn btn-secondary">
              See more →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
