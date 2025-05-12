import React from 'react';

export default function StatBox({ icon, label, id, count, alt }) {
  return (
    <div className="statsDiv">
      <img src={icon} alt={alt} width="70px" height="70px" id={id} />
      <div className="statsColumn">
        <p className="light">{label}</p>
        <p className="num">{count}</p>
      </div>
    </div>
  );
}