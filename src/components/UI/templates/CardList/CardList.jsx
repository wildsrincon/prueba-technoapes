import React, { useState, useEffect } from 'react';
import getComicInfo from '../../../../api/comicData';
import params from '../../../../api/client/paramConfig';
import AppPagination from '../../organisms/Pagination/AppPagination';
import { CardComic } from '../../molecules/Card/CardComic';

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
    <div>
      <div className="grid">
        {dataComic.map((comic, index) => (
          <div className="col-12 md:col-6 lg:col-4">
            <CardComic key={`key-${index}`}>{comic.title}</CardComic>
          </div>
        ))}
      </div>
      <AppPagination />
    </div>
  );
};
