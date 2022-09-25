import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CardTitle = ({title}) => {
  return (
    <>
      <span>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
        >
          {title}
        </Typography>

      </span>
    </>
  );
};
