import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import  Upcoming from './Upcoming'
import Popular from './Popular'
import Toprated from './Toprated'
import Movie from './Movie'
import Footer from './Footer'


function  Moviegallery() {
    return (
        <BrowserRouter>
            <div>
              <Navbar/>
                  <Switch>
                     <Route exact path='/' component={Upcoming} />
                     <Route path='/popular' component={Popular} />
                     <Route path='/toprated' component={Toprated} />
                     <Route path='/:movie_id' component={Movie} />
                  </Switch>
                  <Footer/>
             </div>


      </BrowserRouter>

    )
}

export default  Moviegallery