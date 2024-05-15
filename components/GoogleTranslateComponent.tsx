import React, { useEffect } from "react";
import "../public/Translate.css";

const GoogleTranslateComponent = () => {
  useEffect(() => {
    // Hàm chờ cho đến khi script được tải hoàn tất
    const waitForGoogleTranslateScript = () => {
      if ((window as any).google && (window as any).google.translate) {
        googleTranslateElementInit();
      } else {
        setTimeout(waitForGoogleTranslateScript, 100);
      }
    };

    // Hàm khởi tạo dịch vụ Google Translate
    const googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    // Tạo và thêm script vào trang
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Gọi hàm chờ
    waitForGoogleTranslateScript();

    // Loại bỏ script khi component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslateComponent;
