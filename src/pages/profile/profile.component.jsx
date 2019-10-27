import React from 'react';
import './profile.style.scss'
import {Link , Switch, Route} from 'react-router-dom';
import { ViewReports } from './view-reports.component';
import { MakeReport } from './make-report.component';
import { SearchReport } from './report-search.component';

export default function Profile() {
  

  return (
      <div className='dashboard'>
          {/* sidebar */}
          <div className='sidebar'>
            <ul >
                <Link className='link' to='/profile/view-reports'>
                    View Reports
                </Link>
                <Link className='link' to='/profile/make-report'>
                    Make Report
                </Link>
                <Link className='link' to='/profile/search'>
                    Search
                </Link>
                <Link className='link'>
                    Update Profile
                </Link>
            </ul>
        </div>
        {/* sidebar */}

        <main className='main'>
        <Switch> 
          <Route exact path='/profile/view-reports' component={ViewReports} />
          <Route exact path='/profile/make-report' component={MakeReport} />
          <Route exact path='/profile/search' component={SearchReport} />

          {/* <Route exact path='/profile'  render = {() => !this.props.currentUser ? <Redirect to='/signin' /> : <Profile />}></Route>
          <Route exact path='/signin' render = {() => this.props.currentUser ? <Redirect to='/' /> : <Accounts />}></Route> */}
        </Switch>

        </main>


      </div>
    
  );
}