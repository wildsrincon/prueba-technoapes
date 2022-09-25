import React, { useState, useEffect } from 'react';
import getComicInfo from './api/comicData';
import params from './api/client/paramConfig';
import AppPagination from './components/UI/organisms/Pagination/AppPagination';
// import Card from './components/UI/molecules/Card/Card';
import './style.css';

export default function App() {
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
      .then(({data}) => {
        console.log(data);
        setDataComic(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="grid">
        { 
          dataComic.map((el) => (
          <div className="col-12 md:col-6 lg:col-4">
            <li key={el.id}>{el.title}</li>
          </div>
        ))}
      </div>
      <AppPagination />
    </div>
  );
}
