const Main = ({
  isTimerRunning,
  onPlayPause,
  onReset,
  isBreakTime,
  TimerValue,
}) => {
  const formatDigit = (n) => {
    return n < 10 ? "0" + n : n;
  };
  const getTimerString = (timeMs) => {
    let mins = parseInt(timeMs / (60 * 1000));
    timeMs -= mins * 60 * 1000;
    let secs = parseInt(timeMs / 1000);
    timeMs -= secs * 1000;

    return formatDigit(mins) + ":" + formatDigit(secs);
  };
  return (
    <main>
      <div className="container">
        <div className="timer-wrapper">
          <div className="timer-head">
            <div className="timer-label" id="timer-label">
              {isBreakTime ? "Break" : "Session"}
            </div>
            <div className="timer-value" id="time-left">
              {getTimerString(TimerValue)}
            </div>
          </div>
          <div className="timer-body">
            <div className="timer-controls">
              <button
                className="btn btn-success timer-control"
                id="start_stop"
                onClick={onPlayPause}
              >
                {isTimerRunning ? (
                  <i className="fa-regular fa-circle-pause"></i>
                ) : (
                  <i className="fa-solid fa-circle-play"></i>
                )}
              </button>

              <button
                className="btn btn-success timer-control"
                id="reset"
                onClick={onReset}
              >
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
