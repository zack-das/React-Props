import React from 'react';

function Links({github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <p><a href={linkedin}>{linkedin}</a></p>
      <p><a href={github}>{github}</a></p>
    </div>
  );
}

export default Links;
