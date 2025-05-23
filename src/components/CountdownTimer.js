import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const CountdownTimer = ({ targetDate }) => {
  const theme = useTheme();

  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { launched: true }; // Indicate launch has passed
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Recalculate on mount in case targetDate changed (though unlikely for this prop)
    // or if the component was re-mounted after some time.
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);

    // If already launched, no need for an interval
    if (initialTimeLeft.launched) {
      return;
    }

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.launched) {
        clearInterval(timer); // Stop timer if launched
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [targetDate, calculateTimeLeft]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  if (timeLeft.launched) {
    return (
      <Typography variant="body2" sx={{ fontFamily: theme.typography.monospace, fontWeight: 'bold', color: 'inherit' }}>
        🚀 Launched!
      </Typography>
    );
  }

  if (Object.keys(timeLeft).length === 0) {
    return null; // Or some loading/error state, but calculateTimeLeft should always return something
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
      <Typography variant="body2" sx={{ fontFamily: theme.typography.monospace, fontWeight: 'bold', mr: 0.5 }}>
        Launch:
      </Typography>
      <Typography variant="body2" sx={{ fontFamily: theme.typography.monospace, fontWeight: 'bold' }}>
        {timeLeft.days}D : {formatNumber(timeLeft.hours)}H : {formatNumber(timeLeft.minutes)}M : {formatNumber(timeLeft.seconds)}S
      </Typography>
    </Box>
  );
};

export default CountdownTimer;