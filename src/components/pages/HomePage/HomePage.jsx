import { Box } from '@mui/material';
import { HeaderBar } from '../../UI/molecules/HeaderBar/HeaderBar';
import { CardList } from '../../UI/templates/CardList/CardList';
import { SearchField } from '../../UI/molecules/SearchField/SearchField';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getComicsInfoAsync } from '../../../core/redux/actions/comics.actions';
import params from '../../../core/client/paramConfig';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
});

export const HomePage = () => {
  const classes = useStyles();
  const state = useSelector((comics) => comics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComicsInfoAsync('comics', params));
    console.log('🚀 ~ dispatch ~ state', state);
  }, []);

  return (
    <>
      <Box sx={{ backgroundColor: '#f0141e', height: '100%' }}>
        <HeaderBar />
        <SearchField />
        <CardList />
      </Box>
    </>
  );
};
