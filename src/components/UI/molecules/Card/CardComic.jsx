// Imports MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Imports Atomic Design
import { BtnCard } from '../../atoms/BtnCard/BtnCard';
import { CardImg } from '../../atoms/CardImg/CardImg';
import { CardDetail } from '../../atoms/CardDetail/CardDetail';


export const CardComic = (props) => {
  console.log('props', props);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardImg />
        <CardDetail />
        <BtnCard />
      </CardContent>
      
    </Card>
  );
}
