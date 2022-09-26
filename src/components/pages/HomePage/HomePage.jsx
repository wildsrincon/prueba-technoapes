import { Box, Typography } from '@mui/material';
import { HeaderBar } from '../../UI/molecules/HeaderBar/HeaderBar';
import { CardList } from '../../UI/templates/CardList/CardList';
import { SearchField } from '../../UI/molecules/SearchField/SearchField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
});

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ backgroundColor: '#f0141e', height: '100%' }}>
        <HeaderBar />
        <Typography variant="h5">Comic Marvel List</Typography>
        <SearchField />
        <CardList />
      </Box>
    </>
  );
};
