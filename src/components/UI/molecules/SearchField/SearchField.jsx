import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import {
  filterComicsAsync,
  getComicsInfoAsync,
  setTextToSearch,
} from '../../../../core/redux/actions/comics.actions';

export const SearchField = () => {
  const [textSearch, setTextSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearchField = (event) => {
    event.preventDefault();
    setTextSearch(event.target.value);
  };

  // const notReset = (e) => e.preventDefault();

  const filterComics = () => {
    dispatch(setTextToSearch(textSearch));
    if (textSearch.length > 0) {
      dispatch(filterComicsAsync(textSearch));
    } else {
      dispatch(getComicsInfoAsync());
    }
  };
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            marginTop: 4,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search comics by title"
            inputProps={{ 'aria-label': 'search comics' }}
            onChange={handleSearchField}
          />
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={filterComics}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
};
