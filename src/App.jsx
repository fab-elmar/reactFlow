import './App.css';
import NewsFetch from './components/NewsFetch';
import NewsPage from './components/NewsPage';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  const [newsType, setNewsType] = useState([])
  const [news, setNews] = useState([])
  const [page, setPage] = useState(0);
  const [hitsPerPage, setHitsPerPage] = useState(10);
  const [searchType, setSearchType] = useState([])

  const kitchenSink = { page, setPage, hitsPerPage, loading, setLoading, newsType, setNewsType, news, setNews, searchType, setSearchType }
  console.log('KS', kitchenSink)

  console.log('from APP', news)
  return (
    <>
      <NewsFetch {...kitchenSink} />
      <NewsPage {...kitchenSink} />
      <Pagination {...kitchenSink} />

    </>
  )
}

export default App
