import React from 'react';

const FooterWidget = ( {message} ) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">{message}</p>
      </div>
    </footer>
  )
}

export default FooterWidget;
