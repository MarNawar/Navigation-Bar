import { useReducer } from 'react'
import './App.css'
import Page from './Page';

export default function App() {
  const [navigationPage,  dispatch] = useReducer(navigationReducer, initialPage);

  function changePage(page){
    console.log(page)
    dispatch({
      type: 'changePage',
      payload: page,
    })
  }
  
  return (
    <Page navigationPage={navigationPage} changePage={changePage} />
  )
}

const initialPage = {
  path : 'home',
  data : 'HOME' 
}

const navigationReducer = (state, action) => {
  switch(action.type){
    case 'changePage':
      return {
        ...state,
        page: action.payload.path,
        data: action.payload.data,
      }
    default:
      return state;
  }
}