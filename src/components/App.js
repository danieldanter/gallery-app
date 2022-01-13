import React from 'react'
import Nav from './Nav'
import Search2 from './Search2'


import Topic1 from './topics/Topic1';
import Topic2 from './topics/Topic2';
import Topic3 from './topics/Topics3';
import SearchT from './topics/SearchT';
import NotFound from './NotFound';


import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


class App extends React.Component {


render() {

  
  return (
    <BrowserRouter>
      <div className="container">
      <Search2 />
      <Nav />
        
      <Switch>
          <Route exact path="/"   component={Topic1} />
          <Route path="/cats"   component={Topic1} />
          <Route path="/dogs" component={Topic2}/>
          <Route path="/computers" component={Topic3}/>
          <Route path="/search/:name" component={SearchT} />
          
          <Route  component={NotFound}/>
      </Switch>
        
        
        
      </div>
    </BrowserRouter>

  )
}
};


export default App;


// api key: 408b42017625533afa2c75a1113eeb04
// secret:  1208841024b64ef0