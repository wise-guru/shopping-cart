import AboutImage from "../Assets/aboutImage.jpg";

function About() {
  return (
    <main className="about">
      <h1 className="content">About us</h1>
      <div className="content">
        <p>
          Here at Useless inventions, we showcase a variety of creations that
          seem to be more inconvenient than the problems they solve.{" "}
        </p>
        <p>
          Since the dawn of time, we hae worked tirelessly to bring these
          award-winning innovations to the general public. What awards have we
          won, you ask? That&apos;s not relevant.
        </p>
        <p>
          Our founder, Anita Job, is a world-famous tinkerer who aimed to make
          life easier, and a little more humorous.
        </p>
        <p>
          Over the past two years, she has designed and fully prototyped over
          280 new inventions that solve problems that don&apos;t exist. Each
          week from the Useless Design Studio, Job develops 1-3 brand new fake
          consumer products using diverse production methods from 3D printing,
          sewing, mold making, wood working, laser cutter, and whatever else she
          can get her hands on. Follow along to see what gets built next!
        </p>
      </div>
      <div className="aboutImg">
        <img src={AboutImage} alt="Useless inventions" />
      </div>
    </main>
  );
}

export default About;
