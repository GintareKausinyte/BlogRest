import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import CreateBlog from '../../pages/CreateBlog'
import ArticleList from '../../pages/ArticleList'
import LogIn from '../../pages/LogIn'
import Registration from '../../pages/Registration'
import AboutUs from '../../pages/AboutUs'
import ReadBlog from '../../pages/ReadBlog'
import ArticleListByTopic from '../../pages/AricleListByTopic'
import SubmittedPage from '../../pages/SubmittedPage'
import Favourites from '../../pages/Favourites/Favourites';
import UserArticles from '../../pages/UserArticles';
import DeleteArticle from '../../pages/DeleteArticle';
import DeletedPage from '../../pages/DeletedPage';
import UpdateArticle from '../../pages/UpdateArticle';
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export default ()=>(
<Switch>

    <PrivateRoute exact path='/createBlog'>
        <CreateBlog/>
    </PrivateRoute>
    <Route exact path='/readBlog/:id'>
       <ReadBlog/>
    </Route>
    <PrivateRoute exact path='/userArticle/:id'>
       <DeleteArticle/>
    </PrivateRoute>
    <PrivateRoute exact path='/update/:id'>
       <UpdateArticle/>
    </PrivateRoute>
    <Route exact path='/blogList'>
       <ArticleList/>
    </Route>
    <Route exact path='/favourites'>
       <Favourites/>
    </Route>
    <Route exact path='/blogList/:topic'>
       <ArticleListByTopic/>
    </Route>
    <PrivateRoute exact path='/userArticles'>
       <UserArticles/>
    </PrivateRoute>
    <Route exact path='/logIn'>
       <LogIn/>
    </Route>
    <Route exact path='/registration'>
       <Registration/>
    </Route>
    <Route exact path='/home'>
      <AboutUs/>
    </Route>
    <Route exact path='/submitted'>
      <SubmittedPage/>
    </Route>
    <Route exact path='/deleted'>
      <DeletedPage/>
    </Route>
     <Redirect exact from='/' to='/home'/>
</Switch>
)