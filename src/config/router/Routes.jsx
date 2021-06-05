import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Aboutpage, Bandabout, Bandform, Bandsuccess, Contact, Expoabout, Expoormawaform, Expopartnerform, Exposuccess, Landingpage, Mobilelegendabout, Mobilelegendform, Mobilelegendsuccess, Pengumuman, Pengumumandetail, Webinarabout, Webinarform, Webinarsuccess } from '../../pages';
import ProtectedRouter from '../protectedrouter/ProtectedRouter';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Landingpage}/>
                            <Route path='/about' component={Aboutpage}/>
                            <Route path='/contact' component={Contact} />
                            {/* Mobile Legend Client */}
                            <Route exact path='/mobilelegend' component={Mobilelegendabout} />
                            <Route path='/mobilelegend/daftar' component={Mobilelegendform} />
                            <Route path='/mobilelegend/success' component={Mobilelegendsuccess} />
                            {/* Band Client */}
                            <Route exact path='/band' component={Bandabout} />
                            <Route path='/band/daftar' component={Bandform} />
                            <Route path='/band/success' component={Bandsuccess} />
                            {/* webinar Client */}
                            <Route exact path='/webinar' component={Webinarabout} />
                            <Route path='/webinar/daftar' component={Webinarform} />
                            <Route path='/webinar/success' component={Webinarsuccess} />
                            {/* expo Client */}
                            <Route exact path='/expo' component={Expoabout} />
                            <Route path='/expo/partner/daftar' component={Expopartnerform} />
                            <Route path='/expo/ormawa/daftar' component={Expoormawaform} />
                            <Route path='/expo/success' component={Exposuccess} />
                            {/* Pengumuman */}
                            <Route exact path='/pengumuman' component={Pengumuman} />
                            <Route path='/pengumuman/:title/:id' component={Pengumumandetail} />
                            <ProtectedRouter />
                        </Switch> 
                    </Router>
                </Fragment>
            </div>
        )
    }
}

export default Routes
