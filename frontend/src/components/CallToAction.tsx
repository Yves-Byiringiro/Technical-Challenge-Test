export default function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="container grid">
        {[
          {
            title: "LOREM IPSUM DOLOR SIT CONSECTETUR.",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quam unde dolores doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quam unde dolores doloremque.`,
          },
          {
            title: "LOREM IPSUM DOLOR SIT CONSECTETUR.",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quam unde dolores doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quam unde dolores doloremque.`,
          },
        ].map(({ title, description }, i) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              <button className={i == 1 ? "outline" : ""}>lorem ipsum</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
