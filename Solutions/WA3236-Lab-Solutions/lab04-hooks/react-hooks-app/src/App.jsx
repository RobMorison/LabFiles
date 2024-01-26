import { useState, useEffect } from 'react';
import './App.css';

const initialArticles = [{ title: 'ONE' }, { title: 'TWO' }, { title: 'THREE' }];

export default function App() {
  const [formObject, setFormObject] = useState({ title: 'title1', content: 'content1' });
  const [selectedArticleId, setSelectedArticleId] = useState(-1);
  const [articles, setArticles] = useState(initialArticles);
  const getArticles = function () {
    fetch('articles.json')
      .then(response => response.json())
      .then(data => {
        setArticles(data)
      }
      );
  };

  useEffect(() => { getArticles() }, []);

  const selectedArticle = (articles[selectedArticleId]) ?
    articles[selectedArticleId].content : 'none';

  const changeHandler = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    formObject[name] = value;
    setFormObject({ ...formObject })
  }

  const validSelectedArticleId = function () {
    return (selectedArticleId >= 0 && selectedArticleId < articles.length);
  }

  const deleteSelected = function () {
    if (validSelectedArticleId()) {
      articles.splice(selectedArticleId, 1);
      setArticles([...articles]);
    }
  }

  return (<div className={'app'}>
    <h2>React Hooks App</h2>
    <ul>
      {articles.map(
        (article, index) => {
          return <li key={index}
            onClick={(event) => setSelectedArticleId(index)}
            className={(selectedArticleId === index) ? 'selected' : ''}
          >
            {article.title}</li>
        }
      )}
    </ul>
    <br /><span className={'bold'}>Selected Article:</span>
    <p>{selectedArticle}</p><br />
    <div className={'controls'}>
      <span className={'bold'}>Controls:</span><br />
      <button
        onClick={() => setArticles([...articles, formObject])}
      >Add Article</button>&nbsp;
      <button
        disabled={!validSelectedArticleId()}
        onClick={() => deleteSelected()}
      >Delete Selected</button>
      <br />
      <input type={'text'} name={'title'}
        onChange={(e) => changeHandler(e)}
        placeholder={'title'} value={formObject.title}
      /><br />
      <input type={'text'} name={'content'}
        onChange={(e) => changeHandler(e)}
        placeholder={'content'} value={formObject.content}
      /><br />
    </div>
  </div>
  );
}