import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const CountdownTimer = ({ targetDate }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

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
      timeLeft = { launched: true };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);

    if (initialTimeLeft.launched) {
      return;
    }

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.launched) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  if (timeLeft.launched) {
    return (
      <Typography variant="body2" sx={{ fontFamily: theme.typography.monospace, fontWeight: 'bold', color: 'inherit' }}>
        🚀 Launched!
      </Typography>
    );
  }

  if (Object.keys(timeLeft).length === 0 || timeLeft.days === undefined) {
    return null;
  }

  let timerDisplayString = `${timeLeft.days}D : ${formatNumber(timeLeft.hours)}H : ${formatNumber(timeLeft.minutes)}M : ${formatNumber(timeLeft.seconds)}S`;

  if (isSm) {
    timerDisplayString = `${timeLeft.days}D : ${formatNumber(timeLeft.hours)}H : ${formatNumber(timeLeft.minutes)}M`;
  } else if (isXs) {
    timerDisplayString = `${timeLeft.days}D : ${formatNumber(timeLeft.hours)}H`;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textAlign: 'center' }}>
      <Typography
        variant="body2"
        sx={{
          fontFamily: theme.typography.monospace,
          fontWeight: 'bold',
          mr: 0.5,
          display: { xs: 'none', sm: 'inline' }
        }}
      >
        Launch:
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: theme.typography.monospace,
          fontWeight: 'bold',
        }}
      >
        {timerDisplayString}
      </Typography>
    </Box>
  );
};

export default CountdownTimer;