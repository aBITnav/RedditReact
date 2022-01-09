import { Dropdown } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './cards';

export default function Drop({subRedditTitles=["Cats"],setSubReddit}){
  return(
    <Dropdown style={{padding:"1%"}}>

      <Dropdown.Toggle variant="success" id="dropdown-basic" >
      SubReddits
      </Dropdown.Toggle>    
      <Dropdown.Menu>
      {
        subRedditTitles.map((subReddit,idx) => {
          return <Dropdown.Item href="#" key={idx} onClick={getContent}> {subReddit} </Dropdown.Item>})
      }
      </Dropdown.Menu>
    </Dropdown>
  );
}

function getContent(subReddit) {
  const newDiv = document.createElement("div");
  newDiv.className = 'row';
  subReddit=subReddit.target.innerText;
  const url="https://www.reddit.com/r/"+subReddit+".json";
  let cardInfos=[];
  fetch(url)
  .then(response => response.json())
  .then(data => {
      data.data.children.forEach(element => {
          let link=element.data.url;
          if(link.substring(0,18) === "https://i.redd.it/"){
              const cardInfo={
                  title:element.data.title,
                  author:element.data.author,
                  upvotes:element.data.ups,
                  url:link
              }
              cardInfos.push(cardInfo);
          }
      });
  })
  .then( _ => {
    let list=[]
    cardInfos.map(cardInfo => {
        list.push(<Cards cardInfo={cardInfo}/>)
        return cardInfo;
    });
    ReactDOM.render(
      <div className='row'>
        {list}
      </div>,
      document.getElementById('render')
    );
})
  .catch(err =>{
      console.log(err)
  });
}