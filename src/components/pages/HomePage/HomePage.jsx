import { 
  Box,
  Typography 
} from '@mui/material';
import { CardList } from '../../UI/templates/CardList/CardList';
import { SearchField } from '../../UI/molecules/SearchField/SearchField';

export const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f0141e" }}>
      <Typography variant="h5">Comic Marvel List</Typography>
      <SearchField />
      <CardList />
    </Box>
  );
};
