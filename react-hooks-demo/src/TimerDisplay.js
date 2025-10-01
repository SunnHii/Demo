import { useTimer } from "./useTimer";

function TimerDisplay() {
  const time = useTimer();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Thời gian đã trôi qua: {time} giây</h2>
    </div>
  );
}

export default TimerDisplay;
