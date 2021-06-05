import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import { Admin, Bandcreate, Bandread, Bandupdate, Expoormawacreate, Expoormawaread, Expoormawaupdate, Expopartnercreate, Expopartnerread, Expopartnerupdate, Loginadmin, Loginadminsuccess, Mlcreate, Mlread, Mlupdate, Pengumumanadminread, Pengumumanadminupdate, Pengumumancreate, Webinarcreate, Webinarread, Webinarupdate, Subadminband, Subadminexpoormawa, Subadminexpopartner, Subadminml, Subadminwebinar } from '../../pages';
import Cookies from 'js-cookie';

function ProtectedRouter() {
    if(Cookies.get("user")){
        return (
            <div>
                <Route exact path='/admin' component={Admin}/>
                <Route path='/loginadmin' component={Loginadminsuccess}/>
                {/* Pengumuman */}
                <Route path='/admin/pengumuman/read' component={Pengumumanadminread} />
                <Route path='/admin/pengumuman/create' component={Pengumumancreate} />
                <Route path='/admin/pengumuman/update/:postId' component={Pengumumanadminupdate} />
                {/* Expo Partner */}
                <Route path='/admin/expopartner/read' component={Expopartnerread} />
                <Route path='/admin/expopartner/create' component={Expopartnercreate} />
                <Route path='/admin/expopartner/update' component={Expopartnerupdate} />
                {/* Expo ormawa */}
                <Route path='/admin/expoormawa/read' component={Expoormawaread} />
                <Route path='/admin/expoormawa/create' component={Expoormawacreate} />
                <Route path='/admin/expoormawa/update' component={Expoormawaupdate} />
                {/* Webinar */}
                <Route path='/admin/webinar/read' component={Webinarread} />
                <Route path='/admin/webinar/create' component={Webinarcreate} />
                <Route path='/admin/webinar/update' component={Webinarupdate} />
                {/* Band */}
                <Route path='/admin/band/read' component={Bandread} />
                <Route path='/admin/band/create' component={Bandcreate} />
                <Route path='/admin/band/update' component={Bandupdate} />
                {/* Mobile Legend */}
                <Route path='/admin/ml/read' component={Mlread} />
                <Route path='/admin/ml/create' component={Mlcreate} />
                <Route path='/admin/ml/update' component={Mlupdate} />
            </div>
        )
    }
    else if(Cookies.get("webinarjhavshvasd65a7sd867aduasgdhasjdgjadsgj")){
        return (
            <div>
                <Route exact path='/subadmin/webinar' component={Subadminwebinar} />
            </div>
        )
    }
    if(Cookies.get("expoasdbkajsbdjhavsjdasd7a646a54da5s4d76a")){
        return (
            <div>
                <Route exact path='/subadmin/expoormawa' component={Subadminexpoormawa} />
                <Route exact path='/subadmin/expopartner' component={Subadminexpopartner} />
            </div>
        )
        
    }
    else if(Cookies.get("mlasdbkabsdmnbmnv898xhjgajdsghjasd897889")){
        return (
            <Route exact path='/subadmin/ml' component={Subadminml} />
        )
        
    }
    else if(Cookies.get("bandasdmhagsdjgyashdjagsd7685a7sdghjasgdjy")){
        return(
            <Route exact path='/subadmin/band' component={Subadminband} />
        )
    }
    else{
        return(
            <Route path='/loginadmin' component={Loginadmin}/>
        )
    }
    
}

export default ProtectedRouter

