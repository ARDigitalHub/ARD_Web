import React, { useState, useEffect, useRef } from "react";

interface SomePropInterface {
  jsonObject: Record<string, string>;
  initialDelay: number;
}

const Intro: React.FC<SomePropInterface> = ({ jsonObject, initialDelay }) => {
  const [currentText, setCurrentText] = useState<string>("");
  const isUnmounted = useRef(false);
  const textRef = useRef<string>('');
  const lineIndex = useRef<number>(0);
    
  useEffect(() => {
    isUnmounted.current = false;
    textRef.current = '';

    const typingTimeout = setTimeout(() => {
      let keys = Object.keys(jsonObject);
      let currentKey = keys[lineIndex.current];
      let charIndex = 0;
      let isDeleting = false;

      const intervalId = setInterval(() => {
        if (!isUnmounted.current) {
          const value = jsonObject[currentKey];
          if (!isDeleting && value) {
            if (charIndex < value.length) {
              textRef.current += value.charAt(charIndex);
              setCurrentText(textRef.current);
              charIndex++;
            } else {
              // Add a new line after typing each value
              textRef.current += '\n';
              setCurrentText(textRef.current);
             
              // Start deleting after typing is complete
              if(currentKey!="intro")isDeleting = true;
              else {isUnmounted.current = true;
                clearInterval(intervalId);
                clearTimeout(typingTimeout);}
            }
          } else if (textRef.current.length > 0) {
            textRef.current = textRef.current.slice(0, -1);
            setCurrentText(textRef.current);
          } else {
            // Stop deleting after all lines are deleted
            isDeleting = false;

            // Move to the next key once the entire value is deleted
            lineIndex.current = (lineIndex.current + 1) % keys.length;
            currentKey = keys[lineIndex.current];
            charIndex = 0;
            
          }
        }
      }, 150);

      // Clear the interval and set isUnmounted when the component is unmounted
      return () => {
        isUnmounted.current = true;
        clearInterval(intervalId);
        clearTimeout(typingTimeout);
      };
    }, initialDelay);

    // Clear the timeout if the component is unmounted before the initial delay
    return () => clearTimeout(typingTimeout);
  }, [jsonObject, initialDelay]);

  return (
    <div
      id="introTextElement"
      className="inline-block lg:w-[30rem] sm:h-24 lg:h-24  rounded-lg  shadow-xl px-5 py-3 self-center font-cursive text-2xl text-gray-500  border-none border-2 border-pink-900 rounded-lg  shadow-xl"
    >
      <pre className="whitespace-pre-wrap">{currentText}</pre>
    </div>
  );
};

export default Intro;
