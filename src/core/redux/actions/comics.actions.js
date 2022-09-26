import { getComicsInfo, filterComics } from '../../api/comics.repository';
import params from '../../client/paramConfig';

export function comicsList(comics) {
  return {
    type: 'FILTER_COMICS',
    payload: comics,
  };
}

export function setTextToSearch(value) {
  return {
    type: 'SET_TEXT',
    payload: value
  }
}

export function getComicsInfoAsync(offset = 0) {
  return function (dispatch) {
    const param = new URLSearchParams({
      ts: 1,
      apikey: '843ba9dd57d226f0a86917894384f2ab',
      hash: '74c3d097d883f757de4e9ca720f648e7',
      offset: offset
    });
    getComicsInfo(param).then((respuesta) =>
      dispatch(comicsList(respuesta.data))
    );
  };
}

export function filterComicsAsync(value, offset = 0) {
  return function (dispatch) {
    const param = new URLSearchParams({
      ts: 1,
      apikey: '843ba9dd57d226f0a86917894384f2ab',
      hash: '74c3d097d883f757de4e9ca720f648e7',
      titleStartsWith: value,
      offset: offset,
    });
    filterComics(param).then((respuesta) =>
      dispatch(comicsList(respuesta.data))
    );
  };
}