import React, { useEffect, useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('black');

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const onChangeHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const onChangeRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`) ;
  };

  useEffect(() => {
    if (typeOfColor === 'rgb') onChangeRgbColor();
    else onChangeHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '110vh',
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button
        onClick={typeOfColor === 'hex' ? onChangeHexColor : onChangeRgbColor}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
        }}
      >
        <h1>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
