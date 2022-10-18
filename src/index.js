import React from "react";
import ReactDom from "react-dom";
import "./styles/style.scss";
import CardList from "./components/CardList"
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page from "./components/Page";
import Hakkimda from "./pages/hakkimda"
import Kategori from "./pages/kategori"
import {Helmet} from "react-helmet"





ReactDom.render(<Router>
             <Helmet>
                  <meta charSet="utf-8" />
                  <title>  Kişisel Blog & Felsefe</title>
                  <link rel="canonical" href="http://mysite.com/example" />
              </Helmet>
                      <Navbar/>
                      <div className="container">
                        <Switch>
                            <Route path="/" exact component={CardList}/>
                            <Route path="/hakkimda" exact component={Hakkimda}/>
                            <Route path="/kategori" exact component={Kategori}/>
                            <Route path="/kategori/:tag" exact component={Kategori}/>
                            <Route path="/posts/:pageId" component={Page}/>
                        </Switch>
                      </div>
                </Router>,
document.getElementById('root'));