import { Typography } from '@mui/material';
import React from 'react';

const UTCDatetime = () => {
  // Lấy thời gian hiện tại theo múi giờ của người dùng
  const now = new Date();

  // Định dạng thời gian theo múi giờ của người dùng
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };
  
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);

  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '500',
        fontSize: { xs: '15px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {formattedDate}
    </Typography>
  );
};

export default UTCDatetime;
