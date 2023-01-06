import React, { useRef, useEffect } from 'react';

function CursorFollower() {
  // Create a reference to the SVG element
  const svgRef = useRef(null);

  useEffect(() => {
    // Create a new SVG element and add it to the component
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cursor-follower");
    svgRef.current.appendChild(svg);

    // Create a circle element and add it to the SVG
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", 50); // set the radius to 50
    svg.appendChild(circle);

    // Set the initial position of the circle to be the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    circle.setAttribute("cx", centerX);
    circle.setAttribute("cy", centerY);

    // Add the "mousemove" event listener to update the position of the circle
    // so that it follows the cursor smoothly
    const handleMouseMove = (event) => {
      // Update the circle's position to the cursor's position
      circle.setAttribute("cx", event.clientX);
      circle.setAttribute("cy", event.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);

    // Remove the "mousemove" event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []); // Empty array ensures that the effect is only run on mount

  return (
    <div className="cursor-follower-container" ref={svgRef}>
      {/* The SVG element will be added here */}
    </div>
  );
}
