import React, { useState, useEffect } from 'react';
import getComicInfo from '../../../../core/api/comicData';
import params from '../../../../core/client/paramConfig';
import AppPagination from '../../organisms/Pagination/AppPagination';
import { CardComic } from '../../molecules/Card/CardComic';
import { useSelector } from 'react-redux';

// Imports MUI
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
});

export const CardList = () => {
  const classes = useStyles();
  const { comics } = useSelector((comics) => comics);

  return (
    <>
      <Typography
        variant="h5"
        color="#fff"
        sx={{ marginLeft: '150px', marginTop: 5 }}
      >
        Comic Marvel List
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        {comics.results &&
          comics.results.map((comic, index) => (
            <div key={`key-${index}`}>
              <CardComic comic={comic} />
            </div>
          ))}
      </Box>
      <AppPagination />
    </>
  );
};
