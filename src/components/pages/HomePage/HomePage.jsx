import { Typography } from '@mui/material';
import { CardList } from '../../UI/templates/CardList/CardList';

export const HomePage = () => {
  return (
    <div>
      <Typography variant="h2">Comic Marvel List</Typography>
      <CardList />
    </div>
  );
};
