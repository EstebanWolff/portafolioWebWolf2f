import React from "react";
import FotoLogoLetra from "../../assets/image/logoWOLF2F/PortadaWolf2f.png";
import MePhoto from "../../assets/image/logoWOLF2F/mePhoto.jpeg";
import JaviPhoto from "../../assets/image/presentacion/javiePhoto.png";

const AboutUs = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto ">
        <section className="bg-black py-12 ">
          <div className="mt-14 mb-20 text-[#FCFFDE] container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#FCFFDE]">
                Discover the solutions we offer to boost your brand and connect
                with your audience.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 md:gap-0">
              <div className="space-y-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FCFFDE] mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-camera"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                    <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold"> Photography and Video</h3>
                  <p className="text-sm text-gray-500 text-zinc-300">
                    We have for you personalized photography and video services.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FCFFDE] mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-world-www"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                    <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                    <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                    <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                    <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                    <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                    <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                    <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                    <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Web Design</h3>
                  <p className="text-sm text-gray-500 text-zinc-300">
                    We create attractive and functional sites that captivate
                    your visitors.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FCFFDE] mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Social Media</h3>
                  <p className="text-sm text-gray-500 text-zinc-300">
                    We manage your profiles to increase interaction and
                    followers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet our team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
                <h3 className="mt-4 text-xl font-bold">Esteban Wolff</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  CEO - Co-Founder
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
                <h3 className="mt-4 text-xl font-bold">Javiera Wolff</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Co-Founder
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

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
