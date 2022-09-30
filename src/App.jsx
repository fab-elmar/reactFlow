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
      <div className="container text-left text-lg text-slate-800">
        <header className="py-5 container bg-gradient-to-r from-orange-400 via-orange-400 to-orange-600">
          <h1 className="py-5 text-5xl text-center text-white uppercase">Hacker News</h1>
          <NewsFetch {...kitchenSink} />
        </header>
        <body className="my-5">
          <NewsPage {...kitchenSink} />
        </body>
        <footer className="text-center">
          <Pagination {...kitchenSink} />
        </footer>
      </div>
    </>
  )
}

export default App
