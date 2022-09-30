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
  const [hitsPerPage, setHitsPerPage] = useState(20);
  const [searchType, setSearchType] = useState([])

  const kitchenSink = { page, setPage, hitsPerPage, loading, setLoading, newsType, setNewsType, news, setNews, searchType, setSearchType, setHitsPerPage }
  console.log('KS', kitchenSink)

  console.log('from APP', news)
  return (
    <>
      <div className="container text-left text-lg text-slate-800">
        <h1 className="text-5xl">Hacker News</h1>
        <NewsFetch {...kitchenSink} />
        <NewsPage {...kitchenSink} />
        <Pagination {...kitchenSink} />
      </div>
    </>
  )
}

export default App
