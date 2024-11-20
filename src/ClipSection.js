import React, { useState } from 'react';
import './ClipSection.css';

const ClipSection = () => {
  const clips = [
    { id: 'hpJUuSljAl4', name: 'Go Deep' },
    { id: 'YlKM3H46Uyk', name: 'Piano Man' },
    { id: 'M7JKRpq0bpk', name: 'Hot Chicken' },
  ];

  const [selectedClip, setSelectedClip] = useState(clips[0]);

  return (
    <div className="clip-section">
      <div className="clip-section__list">
        {clips.map((clip) => (
          <button
            key={clip.id}
            className={`clip-section__item ${
              clip.id === selectedClip.id ? 'clip-section__item--active' : ''
            }`}
            onClick={() => setSelectedClip(clip)}
          >
            {clip.name}
          </button>
        ))}
      </div>
      <div className="clip-section__video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${selectedClip.id}`}
          title="Clip video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ClipSection;
