import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    zIndex: 200,
    backgroundColor: '#e7e7e7',
    padding: '10px 80px',
    color: 'white',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});

const AppPagination = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination variant='outlined' color="primary" count={10} />
      </div>
    </div>
  );
};

export default AppPagination;
