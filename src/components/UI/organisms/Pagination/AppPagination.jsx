import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  filterComicsAsync,
  getComicsInfoAsync,
} from '../../../../core/redux/actions/comics.actions';

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
  const { comics, searchText } = useSelector((comics) => comics);
  const dispatch = useDispatch();
  console.log('🚀 ~ AppPagination ~ searchText', searchText);

  const handlePaginationChange = (event, page) => {
    const offset = page - 1;
    if (searchText.length > 0) {
      dispatch(filterComicsAsync(searchText, offset));
    } else {
      dispatch(getComicsInfoAsync(offset));
    }
    console.log('🚀 ~ handlePaginationChange ~ event', event, page);
  };

  const numberOfPages = Math.round(comics.total / comics.limit) || 0;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          variant="outlined"
          color="primary"
          count={numberOfPages}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default AppPagination;
