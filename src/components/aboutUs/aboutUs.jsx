import React from "react";
import FotoLogoLetra from "../../assets/image/logoWOLF2F/PortadaWolf2f.png";
import MePhoto from "../../assets/image/logoWOLF2F/mePhoto.jpeg";
import JaviPhoto from "../../assets/image/presentacion/javiePhoto.png";

const AboutUs = () => {
  return (
    <>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="space-y-4 ">
              <div className="text-center space-y-2">
                <div className="text-2xl inline-block rounded-lg bg-[#FCFFDE] px-3 py-1 text-sm text-black uppercase ">
                  About Us
                </div>
                <div className="space-y-2 bg-black bg-opacity-90 p-6 rounded-lg">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#FCFFDE] text-stroke-black">
                    We are a team passionate about technology, specializing in:
                  </h2>
                  <p className="text-[#FCFFDE] max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-stroke-black">
                    Our passion lies in capturing meaningful moments through
                    photographic and audiovisual projects, implementing
                    strategies to enhance online presence through social media,
                    and designing and developing innovative and professional
                    websites. We are committed to grow your brand through
                    customized and effective digital solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#FCFFDE] relative group overflow-hidden rounded-xl">
              <img
                alt="Team"
                className="object-cover w-full h-60 md:h-full"
                height="400"
                src={FotoLogoLetra}
                style={{
                  aspectRatio: "800/400",
                  objectFit: "cover",
                }}
                width="800"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
