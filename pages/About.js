import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-page-bg">
      <div className=" mx-auto p-4 mt-40">
        <h1 className="text-3xl font-semibold mb-4 text-white text-center uppercase">
          Filmmakers
        </h1>
        <div className="flex flex-wrap justify-center">
          {/* Director 1 */}
          <div className="p-2 relative mb-8">
            <div className="group">
              <img
                src="/images/Momo.jpeg"
                alt="Momo"
                className="w-250 h-150 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 overflow-y-auto">
                <h2 className="text-2xl text-center">Momo Dione</h2>
                <p className="text-center mt-2 text-[16px] md:text-lg">
                  Momo Dione was born in Saudi Arabia. He is of Guinean and
                  Senegalese descent. He has been featured in plays, TV shows,
                  commercials, music videos, student films, independent films,
                  and feature films. His award winning short film “Maffé
                  Tiga”(Peanut Butter Stew) has screened at festivals and on
                  television all over the world. The film was nominated for an
                  Africa Movie Academy Award in 2012. He is also the Co-Founder
                  of Mansa Nzinga Productions. He has starred in feature film
                  projects including: Rahman Oladigbolu’s Boston-set “Theory of
                  Conflict” and Gahite Fofana’s Guinea-set “La Lune est Tombée”
                  (The Moon has Fallen). His travel documentary series "Momo
                  Dione: Going Home," explores the goals, struggles and
                  accomplishents of African immigrants who have returned home
                  and seek to reestablish their roots after enduring
                  displacement-for better or worse.
                </p>
              </div>
            </div>
          </div>

          {/* Director 2 */}
          <div className="p-2 relative">
            <div className="group">
              <img
                src="/images/Tejay.jpeg"
                alt="Tejay"
                className="w-250 h-150 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white ">
                <div className="flex flex-col justify-center items-center h-full overflow-y-auto p-4">
                  <p className="text-2xl text-center mt-2 md:mt-28">
                    Tejay Bah
                  </p>
                  <div className="sm:overflow-container">
                    <p className="text-center mt-2 text-[16px] md:text-lg">
                      Tejay Bah is a Sierra Leonean/American, Stage/Film Actor,
                      writer and director who was born in Freetown, Sierra
                      Leone. He graduated from the University of Missouri with a
                      degree in Business. He moved to California to pursue his
                      true passion and become an actor. He has appeared on the
                      Tracey Ullman show, State of the Union, Tim & Eric Awesome
                      Show and has also performed at the Hollywood Fringe
                      Festival, Nesona Play Reading Festival and many plays
                      around the Los Angeles areas and still continues. He is
                      the Co-Founder of Mansa Nzinga Productions LLC. He also
                      studied with the Robey Theatre Company, founded by Danny
                      Glover and Ben Guillory. He is passionate about African
                      cinema and the untold stories of immigrants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
