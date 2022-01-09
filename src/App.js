
import './App.css';
import { useEffect, useState } from "react";
import Dropdown from './dropdown';

export default function App() {
  const subRedditTitles=[
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
  const [list, setList] = useState([])
  return (
    <div className='row'>
      <div className="col-md-12 text-center">
      <Dropdown subRedditTitles={subRedditTitles}/>
      </div>
    </div>
  );
}

