import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    // Truy cập trực tiếp phần tử DOM thông qua ref
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập gì đó..." />
      <button onClick={handleFocus}>Focus vào ô input</button>
    </div>
  );
}

export default FocusInput;
