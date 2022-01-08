
import './App.css';

import Dropdown from './dropdown';

export default function App() {
  let subRedditList=[
    'Cats',
    'OldSchoolCool',
    'TheWayWeWere',
    'pic',
    'AbandonedPorn',
    'MilitaryPorn',
    'BlackPeopleTwitter',
    'EarthPorn',
    'astrophotography',
    'spaceporn'
  ]

  return (
    <div className='row'>
    <div className="col-md-12 text-center">
    <Dropdown subRedditList={subRedditList}/>
    </div>
    </div>
  );
}

