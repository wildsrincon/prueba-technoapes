import CardMedia from '@mui/material/CardMedia';

export const CardImg = ({ imageSource }) => {
  // console.log('comic', comic.thumbnail.path);
  const imageUrl = `${imageSource.path}.${imageSource.extension}`;
  return (
    <>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="green iguana"
      />
    </>
  );
};
