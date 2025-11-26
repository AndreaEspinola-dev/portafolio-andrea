import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div
      className="text-center mb-16 opacity-0 animate-fadeUp"
    >
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        <span 
          className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-500 
                     bg-clip-text text-transparent animate-gradient"
        >
          //
        </span>{" "}
        <span 
          className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
        >
          {title}
        </span>
      </h2>

      <p 
        className="text-white/60 text-lg mt-4 opacity-0 animate-fadeUpSlow"
      >
        {subtitle}
      </p>
    </div>
  );
}
