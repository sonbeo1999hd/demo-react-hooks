import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

ClockComponent.propTypes = {

};

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2)
  const seconds = `0${date.getSeconds()}`.slice(-2)
  return `${hours}:${minutes}:${seconds}`
}

function ClockComponent() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTime(newTimeString)
    }, 1000);
    return () => {
      clearInterval(clockInterval)
    }
  }, [])
  return (
    <div>{time}</div>

  );
}

export default ClockComponent;