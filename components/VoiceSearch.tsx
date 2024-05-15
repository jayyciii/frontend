import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const VoiceSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const voice = () => {
    const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
    recognition.lang = "vi-VN"; // Đặt ngôn ngữ thành tiếng Việt
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    }
    recognition.start();
  };

  return (
    <div className="bg-blue-100 flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
      <input
        className="bg-blue-100 outline-none max-sm:max-w-[120px]"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={voice}>
        <FontAwesomeIcon icon={faMicrophone} className="cursor-pointer h-4 w-4 hover:text-red-1" />
      </button>
    </div>
  );
};

export default VoiceSearch;
