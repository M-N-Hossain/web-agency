"use client";

export function ScrollIndicator() {
  return (
    <div
      className="scroll-indicator cursor-pointer hover:scale-[0.5] "
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: 1,
        zIndex: 20,
      }}
      onClick={() => {
        const nextSection = document.querySelector("section:not(.hero-section)");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      title="Scroll down"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        className="hover:scale-150 transition-transform duration-300"
        viewBox="0 0 36 36"
        style={{ display: "block", margin: "0 auto" }}
      >
        <circle 
          cx="18" 
          cy="18" 
          r="17" 
          className="stroke-white dark:stroke-gray-300" 
          strokeWidth="2" 
          opacity="0.3" 
        />
        <path 
          d="M12 16l6 6 6-6" 
          className="stroke-blue-600 dark:stroke-blue-400" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}
