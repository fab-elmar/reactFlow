import './App.css';
import NewsFetch from './components/NewsFetch';
import NewsPage from './components/NewsPage';
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [newsType, setNewsType] = useState([])
  const [news, setNews] = useState([])
  const [searchType, setSearchType] = useState([])

  const kitchenSink = { loading, setLoading, newsType, setNewsType, news, setNews, searchType, setSearchType }
  console.log('KS', kitchenSink)

  console.log('from APP', news)
  return (
    <>
      <NewsFetch {...kitchenSink} />
      <NewsPage {...kitchenSink} />


    </>
  )
}

export default App
