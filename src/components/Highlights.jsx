// Import necessary modules
import React from "react"; // Import React for creating components
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook from GSAP React for animation
import gsap from "gsap"; // Import GSAP for animations
import { rightImg, watchImg } from "../utils"; // Import image assets
import VideoCarousel from "./VideoCarousel"; // Import the VideoCarousel component

// Define the Highlights component
const Highlights = () => {
  // Use the useGSAP hook to apply GSAP animations to the section title and links
  useGSAP(() => {
    gsap.to("#title", {
      opacity: "1", // Set the opacity to 1 (fully visible) to fade in the section title
      y: 0, // Slide the section title vertically to its original position (from offscreen or above)
      delay: 1, // Start the animation after a delay of 1 second
    });

    gsap.to(".link", {
      opacity: "1", // Set the opacity to 1 (fully visible) to fade in the links
      y: 0, // Slide the links vertically to their original position
      delay: 1, // Start the animation after a delay of 1 second
      duration: 1, // Animate over a duration of 1 second
      stagger: 0.25, // Stagger the start of each link's animation by 0.25 seconds for a cascading effect
    });
  }, []); // The empty array ensures that the animation runs only once when the component mounts

  // Return the JSX for rendering the Highlights component
  return (
    <section
      id="highlights" // The section has an ID of "highlights" for targeting in animations or styling
      className="w-screen overflow-hidden h-full common-padding bg-zinc" // Full-width section with specific styling
    >
      <div className="screen-max-width">
        {/* Flex container for the title and links with margin at the bottom */}
        <div className="md:flex mb-12 w-full items-end justify-between">
          {/* Section title with an ID for GSAP targeting */}
          <h1 id="title" className="section-heading">
            Get the highlights. {/* Title text */}
          </h1>

          {/* Flex container for the links; they wrap on smaller screens and have spacing */}
          <div className="flex flex-wrap items-end gap-5">
            {/* Link to "Watch the film" */}
            <p className="link">
              {" "}
              {/* "link" class is used for GSAP targeting */}
              Watch the film {/* Link text */}
              <img src={watchImg} alt="watch" className="ml-2" />{" "}
              {/* Icon next to the link */}
            </p>

            {/* Link to "Watch the event" */}
            <p className="link">
              {" "}
              {/* Another link with "link" class for GSAP targeting */}
              Watch the event {/* Link text */}
              <img src={rightImg} alt="right" className="ml-2" />{" "}
              {/* Icon next to the link */}
            </p>
          </div>
        </div>

        {/* Include the VideoCarousel component below the title and links */}
        <VideoCarousel />
      </div>
    </section>
  );
};

// Export the Highlights component for use in other parts of the application
export default Highlights;
