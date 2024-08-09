// Import necessary modules
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo } from "../utils";
import { smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

// Define the Hero component
const Hero = () => {
  // State variable to hold the video source
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  // Function to handle setting the video source based on window size
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  // Use effect to add and remove event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  // UseGSAP hook to animate the hero title and CTA button
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1, // Fade in the hero title
      delay: 2, // Delay the fade-in animation by 2 seconds
    });
    gsap.to("#cta", {
      opacity: 1, // Fade in the CTA button
      y: -50, // Slide the CTA button up by 50 pixels
      delay: 2, // Delay the fade-in and slide-up animation by 2 seconds
    });
  }, []);

  // Return the JSX for the Hero component
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc} // Use the video source as the key to trigger a re-render when it changes
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl"> From $199/month or $999</p>
      </div>
    </section>
  );
};

// Export the Hero component
export default Hero;
