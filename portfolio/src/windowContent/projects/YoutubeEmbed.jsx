import React from "react";
import PropTypes from "prop-types";
import './Projects.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe className="bea-video"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="beabadoobee mixed-media animation"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
