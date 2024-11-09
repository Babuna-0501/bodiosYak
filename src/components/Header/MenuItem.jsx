import React from 'react';

function MenuItem({ label, width }) {
  return (
    <div className="flex flex-col self-stretch my-auto" style={{ width }}>
      <button className="self-center focus:outline-none focus:ring-2 focus:ring-white" tabIndex="0">
        {label}
      </button>
      <div className="flex w-full min-h-0" />
    </div>
  );
}

export default MenuItem;