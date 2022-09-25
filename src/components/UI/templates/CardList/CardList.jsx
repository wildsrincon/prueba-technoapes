import React, { useState, useEffect } from 'react';
import getComicInfo from '../../../../api/comicData';
import params from '../../../../api/client/paramConfig';
import AppPagination from '../../organisms/Pagination/AppPagination';
import { CardComic } from '../../molecules/Card/CardComic';

// Imports MUI
import { Box, Grid } from '@mui/material';

export const CardList = () => {
  const [dataComic, setDataComic] = useState([]);
  const [page, setPage] = useState(0);
  // const [totalRecords, setTotalRecords] = useState(0);
  // const [activePage, setActivepage] = useState(0);

  // const handleChangePage = (e) => {
  //   setActivepage(e.page);
  //   console.log(activePage);
  // };

  useEffect(() => {
    getComicInfo('comics', params)
      .then(({ data }) => {
        console.log(data.results);
        setDataComic(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Box 
        sx={{ 
          flexGrow: 1
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}
        >
          {dataComic.map((comic, index) => (
            <div key={`key-${index}`}>
              <CardComic comic={comic} />
            </div>
          ))}
        </Grid>
      </Box>
      <AppPagination />
    </>
  );
};
