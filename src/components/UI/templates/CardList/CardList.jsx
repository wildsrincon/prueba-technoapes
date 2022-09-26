import React, { useState, useEffect } from 'react';
import getComicInfo from '../../../../api/comicData';
import params from '../../../../api/client/paramConfig';
import AppPagination from '../../organisms/Pagination/AppPagination';
import { CardComic } from '../../molecules/Card/CardComic';

// Imports MUI
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
});

export const CardList = () => {
  const classes = useStyles();
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
          flexGrow: 1,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        {dataComic.map((comic, index) => {
          return (
            <div key={`key-${index}`}>
              <CardComic comic={comic} />
            </div>
          );
        })}
      </Box>
      <AppPagination />
    </>
  );
};
