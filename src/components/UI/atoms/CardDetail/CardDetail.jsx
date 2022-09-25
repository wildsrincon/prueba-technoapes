import Typography from '@mui/material/Typography';

export const CardDetail = ({description}) => {
  return (
    <div>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </div>
  );
};


