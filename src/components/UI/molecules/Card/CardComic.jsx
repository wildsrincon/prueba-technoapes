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


export const CardComic = ({comic}) => {
  // console.log('comic', comic.thumbnail.path);
  return (
    <Box sx={{ flexGrow: 1, marginTop: 4 }}>
      <Card
        elevation={3}
        sx={{ maxWidth: 345, display: 'flex', justifyContent: 'center', marginLeft: 3 }}
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
