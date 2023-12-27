import React, { useState } from "react";
import downSvg from "../svg/down.svg";
const Lesson = ({ item }) => {
  const [showVideos, setShowVideos] = useState(false);
  const videos = item?.videos
    ?.filter(({ video_url }) => !video_url?.includes("pdf"))
    .sort((video1, video2) => video1?.id - video2?.id);
  const pdfs = item?.videos?.filter(({ video_url }) =>
    video_url?.includes("pdf")
  );

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
        <img src={downSvg} style={{ height: 40 }} alt="show-content" />
      </div>
      {showVideos && (
        <>
          {videos.map((video, index) => {
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ color: "#000" }}>{video.name}</div>
                <div>{video?.video_url?.includes("pdf") ? "PDF" : "Video"}</div>
              </a>
            );
          })}
          {pdfs.map((video, index) => {
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ color: "#000" }}>{video.name}</div>
                <div>{video?.video_url?.includes("pdf") ? "PDF" : "Video"}</div>
              </a>
            );
          })}
        </>
      )}
    </>
  );
};

export default Lesson;
