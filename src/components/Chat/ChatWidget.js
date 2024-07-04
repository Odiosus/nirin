import React, { useEffect } from 'react';


const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://tocha.online/36206a0011e961d05245f7b01a7766e8/widget.js?language=ru';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;
