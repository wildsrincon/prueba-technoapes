import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CardTitle = ({title}) => {
  return (
    <>
      <span
        style={{
          backgroundColor: '#ffff00',
          maxWidth: '100%',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {title}
        </Typography>
      </span>
    </>
  );
};
