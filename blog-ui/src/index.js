import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//kaip pasidaryti isfiltruotu straipsniu puslapiavima->isspresta, pasiklaust ar gerai/
//kaip istraukti userio info, kuris dabar prisijunges?
//org.h2.jdbc.JdbcSQLDataException: Value too long for column "TEXT VARCHAR(255)": "STRINGDECODE('All APIs that implement PagingAndSortingRepository will return a Page. If we need to return the list of the result... (927)"; SQL statement:
//insert into articles (article_id, author, create_date, text, title, topic) values (null, ?, ?, ?, ?, ?) [22001-200] KURIANT ILGESNI TEKSTA
//kaip daryt favourites skilty, autentifikuotams bet neautorizuotamas useeriams

///javascript add to local storage