/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { HomePage, ComicDetail, Four0Four } from '../components/pages';
import { makeStyles } from '@mui/styles';
import Loader from '../components/helper/Loader';
import getComicInfo from '../api/comicData';
import params from '../api/client/paramConfig';

const useStyles = makeStyles((theme) => ({
  loader: {
    opacity: 0,
  },
  loaderActive: {
    opacity: 100,
  },
}));

const AppRouter = () => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  getComicInfo('comics', params)
    .then(({ data }) => {
      if (data) {
        setLoading(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  useEffect(() => {
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 2000);
  });
  return (
    <>
      {loading ? (
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <Loader sx={{ opacity: 100 }} />
        </Box>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comics/:id" element={<ComicDetail />} />
            <Route path="*" element={<Four0Four />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default AppRouter;
