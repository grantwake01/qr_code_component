// qrCard.component.tsx

import React from 'react';
import './qrCard.css';

interface QRCardComponentProps {
  imageUrl: string; // URL or path to the provided QR code image
  title: string;    // Title text for the QR card
  description: string; // Description text
}

const QRCardComponent: React.FC<QRCardComponentProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="qr-card">
      <div className="qr-card__image">
        <img src={imageUrl} alt="QR code" />
      </div>
      <div className="qr-card_text">
      <h2 className="qr-card__title">{title}</h2>
      <p className="qr-card__description">{description}</p>
      </div>
    </div>
  );
};

export default QRCardComponent;
