import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

export default () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <div className="header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
}
