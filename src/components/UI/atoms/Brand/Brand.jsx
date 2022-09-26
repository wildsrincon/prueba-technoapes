import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { ReactComponent as Logo } from '../../../../assets/Marvel_Logo.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export const Brand = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ width: 200, height: 60 }}>
        <Logo sx={{ width: '100%', height: '100%' }} />
      </Box>
    </>
  );
};
