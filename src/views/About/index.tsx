import React from "react";
import Button from "../../components/Button";
import "./About.css";

const About: React.FC = (): JSX.Element => {
  return (
    <div className="page">
      <h1 className="page__title">About Me</h1>

      <div className="main-about">
        <h3 className="green-text">WHO AM I?</h3>
        <p className="main-about__text">
          My name is Roberto Cortés Monroy, better known as whoIsBeto, I'm 20 years old, and I'm a
          Full Stack Developer with 2 years of experience, from México 🇲🇽. I love to use JavaScript
          technologies to create web applications. I also have a YouTube channel, where I share my
          knowledge and experience with everyone., you can visit my channel{" "}
          <a
            className="green-text"
            href="https://www.youtube.com/channel/UCehw60DY3v3t5ez7mYIbYmQ"
            target="_blank"
          >
            here.
          </a>
        </p>
        <p className="main-about__text">
          My vision to do what I do is not just for money, I'd like to help people, comanies and
          everyone who needs help with the most powerful power; Technology!
        </p>
        <p className="main-about__text">
          I really believe that technology can help people to solve problems and a have a better
          life. 💪🏻
          <br />
          And thats my work, make projects to help people to live now, beacuse now, is future.
        </p>
      </div>

      <div className="curriculums">
        <Button
          blank={true}
          href={"https://docs.google.com/document/d/1SgLnSAFD6zahw1G8ScNJzWyVfVmrwNdL8MR53ncC_nc/"}
        >
          CV in English 🇬🇧
        </Button>
        <Button
          blank={true}
          href={"https://docs.google.com/document/d/1hHwEolx4e7fXgxiJmHTAW_rNOjo6NpWprVGx1dJ_Lko/"}
        >
          CV in Spanish 🇲🇽
        </Button>
      </div>

      <div className="more-about">
        <h3 className="green-text">MORE ABOUT ME</h3>
        <p className="main-about__text">
          I also have a YouTube channel where often I make covers and translate the music that I
          love, you can check it{" "}
          <a
            className="green-text"
            href="https://www.youtube.com/channel/UCN1MFjyOHyJ03va3ydAf0Sg"
            target="_blank"
          >
            here,
          </a>
          here you can find music of artists I like, for example, Radiohead, Jameson Buivier, Pink
          Floyd and more, go and check it by yourself! Also if you wanna colaborate with me and play
          music, make a video or some stuff related with music, you can contact me too!
        </p>
      </div>
      <div className="more-about">
        <p className="main-about__text">
          I play videomages with frinds and often I do livestreams on my{" "}
          <a
            className="green-text"
            href="https://www.youtube.com/channel/UCoaEo9mhshJYNb67i5hut-Q"
            target="_blank"
          >
            YouTube Gaming channel,
          </a>{" "}
          and I make some videos about videogames I like. If you want to join to my videogames
          discord you can contact me, and play some stuff, or make a video together! and meet all
          the team toxic.
        </p>
      </div>
    </div>
  );
};

export default About;
