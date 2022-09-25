// Imports MUI
import {
  Box,
  Card,
  CardContent,
  Grid
} from '@mui/material';


// Imports Atomic Design
import { BtnCard } from '../../atoms/BtnCard/BtnCard';
import { CardImg } from '../../atoms/CardImg/CardImg';
// import { CardDetail } from '../../atoms/CardDetail/CardDetail';
import { CardTitle } from '../../atoms/CardTitle/CardTitle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'space-between',
    marginLeft: 3,
    width: '80vw'
  },
});


export const CardComic = ({comic}) => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, marginTop: '50px' }}>
      <Card
        elevation={3}
        className={classes.card}
      >
        <CardContent>
          <CardTitle title={comic.title} />
          <CardImg imageSource={comic.thumbnail} />
          {/* <CardDetail description={comic.description} /> */}
          <BtnCard />
        </CardContent>
      </Card>
    </Box>
  );
}
