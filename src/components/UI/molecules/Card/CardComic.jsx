// Imports MUI
import { Box, Card, CardContent, Grid } from '@mui/material';

// Imports Atomic Design
import { BtnCard } from '../../atoms/BtnCard/BtnCard';
import { CardImg } from '../../atoms/CardImg/CardImg';
// import { CardDetail } from '../../atoms/CardDetail/CardDetail';
import { CardTitle } from '../../atoms/CardTitle/CardTitle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'space-between',
    marginLeft: 3,
    width: '250px',
  },
  img: {
    // objectFit: 'contain',
  },
});

export const CardComic = ({ comic }) => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, margin: '30px', maxWidth: '250px' }}>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item>
          <Card elevation={3} className={classes.card}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardTitle title={comic.title} />
              <CardImg imageSource={comic.thumbnail} />
              {/* <CardDetail description={comic.description} /> */}
              <BtnCard />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
