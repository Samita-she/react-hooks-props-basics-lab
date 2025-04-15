import React from "react";
import Links from "./Links";

function About({ bio, links = {} }) {
  return (
    <div id="about">
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      {(links.github || links.linkedin) && (
        <Links github={links.github} linkedin={links.linkedin} />
      )}
    </div>
  );
}

export default About;

