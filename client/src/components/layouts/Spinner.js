import React from 'react';

const Spinner = () => {
  if (document.getElementById('spinner')) {
    let counter = 0;
    setInterval(function() {
      let frames = 12;
      let frameWidth = 15;
      let offset = counter * -frameWidth;
      document.getElementById('spinner').style.backgroundPosition =
        offset + 'px' + ' ' + 0 + 'px';
      counter++;
      if (counter >= frames) counter = 0;
    }, 100);
  }

  return (
    <>
      <div id="spinner"></div>
    </>
  );
};

export default Spinner;
