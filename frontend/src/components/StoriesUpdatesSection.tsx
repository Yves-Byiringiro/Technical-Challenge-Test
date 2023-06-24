export default function StoriesUpdatesSection() {
  return (
    <section className="stories-list">
    <div className="container">
      <div>
        <h3>
          LATEST STORIES AND <br /> UPDATES
        </h3>
        <span className="accent-line"></span>

        <div className="card-container">
          {[
            {
              img: "Rectangle 8.png",
              title: "Blandit dolor eu enim sed diam. ",
              description: `Fames elementum scelerisque lectus sit id. 
              Maecenas porttitor adipiscing gravida tincidunt 
              sed aliquet condimentum leo.`,
            },
            {
              img: "2.png",
              title: "Egestas integer bibendum sapien",
              description: `Fames elementum scelerisque 
              lectus sit id. Maecenas porttitor nunc 
              adipiscing gravida tincidunt sed aliquet condimentum leo.`,
            },
            {
              img: "3.png",
              title: "Blandit dolor eu enim ac nisl enim sed diam Egestas.",
              description: `Fames elementum scelerisque lectus 
              sit id. gravida tincidunt sed aliquet condimentum leo.`,
            },
          ].map(({ title, description, img }, i) => (
            <div key={i} className="card">
              <img src={img} alt="" />
              <div className="typography">
                <h4>{title}</h4>
                <p>{description}</p>
                <button className='add-button'>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button>lorem ipsum</button>
        </div>
      </div>
    </div>
  </section>
  );
}