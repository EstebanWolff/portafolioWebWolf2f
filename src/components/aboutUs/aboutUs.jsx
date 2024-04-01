import React from "react";
import FotoLogoLetra from "../../assets/image/logoWOLF2F/PortadaWolf2f.png";
import MePhoto from "../../assets/image/logoWOLF2F/mePhoto.jpeg";
import JaviPhoto from "../../assets/image/presentacion/javiePhoto.png";
import portadaColorBlack from "../../assets/image/logoWOLF2F/portadaColorBlack.png";

const AboutUs = () => {
  return (
    <section>
      <section className="flex-1 overflow-y-auto ">
        <div className=" bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Meet our team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                We are a team passionate about technology. We are here to help
                you help you achieve your goals.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 md:grid-cols-2 md:gap-6">
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Avatar"
                  className="rounded-full border object-cover object-center"
                  height="180"
                  src={MePhoto}
                  style={{
                    aspectRatio: "180/180",
                    objectFit: "cover",
                  }}
                  width="180"
                />
                <h3 className="mt-4 text-xl font-bold text-black">
                  Esteban Wolff
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  CEO - Founder
                </p>
              </div>
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Avatar"
                  className="rounded-full border object-cover object-center"
                  height="180"
                  src={JaviPhoto}
                  style={{
                    aspectRatio: "180/180",
                    objectFit: "cover",
                  }}
                  width="180"
                />
                <h3 className="mt-4 text-xl font-bold text-black">
                  Javiera Wolff
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Co-Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-fixed lg:bg-cover"
        style={{
          backgroundImage: `url(${portadaColorBlack})`,
          backgroundSize: "contain",
        }}
      >
        {" "}
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
                  <p className="text-[#FCFFDE] max-w-[700px] text-[#FCFFDE] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#FCFFDE] text-stroke-black">
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
    </section>
  );
};

export default AboutUs;
