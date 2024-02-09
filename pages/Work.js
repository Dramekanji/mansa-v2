import React from "react";
import WorkData from "@/components/WorkData";

const Work = () => {
  return (
    <div className="work-page-bg p-4 mt-20">
      <h1 className="text-3xl font-semibold mb-4 text-white text-center uppercase">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {WorkData.map((WorkData) => (
          <div key={WorkData.id} className="bg-white p-4 shadow-md">
            <iframe
              title={WorkData.title}
              width="100%"
              height="315"
              src={WorkData.videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h2 className="text-lg font-semibold mt-2 text-black">
              {WorkData.title}
            </h2>
            <p className="text-gray-600">{WorkData.description}</p>
            <p className="text-gray-600">Year: {WorkData.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
