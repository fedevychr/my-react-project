import { useState } from 'react';
// import axios from 'axios';
import ArticlesList from './ArticlesList/ArticlesList';
import PacmanLoader from 'react-spinners/PacmanLoader';
import fetchArticlesWithTopic from './articles-api';
import SearchForm from './SearchForm/SearchForm';

const App41 = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <p style={{ fontSize: 20 }}>
          Loading data, please wait...
          <PacmanLoader color="#36d7b7" />
        </p>
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticlesList items={articles} />}
    </div>
  );
};

export default App41;
