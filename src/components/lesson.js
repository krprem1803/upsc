import React, { useState } from "react";
import downSvg from "../svg/down.svg";
const Lesson = ({ item }) => {
  const [showVideos, setShowVideos] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "#A59C9D",
          margin: 10,
          padding: 10,
          color: "#000",
          fontWeight: 700,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setShowVideos(!showVideos)}
      >
        <div style={{ letterSpacing: 1 }}>{item.name}</div>
        <img src={downSvg} style={{ height: 40 }} />
      </div>
      {showVideos &&
        item?.videos.map((video, index) => {
          return (
            <a
              key={index}
              style={{
                padding: 10,
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
              }}
              href={video?.video_url}
            >
              <div style={{ color: "#000" }}>{video.name}</div>
              <div>{video?.video_url?.includes("pdf") ? "PDF" : "Video"}</div>
            </a>
          );
        })}
    </>
  );
};

export default Lesson;
