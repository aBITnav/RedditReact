import { Dropdown } from 'react-bootstrap';

export default function Drop({subRedditList=["Cats"],setSubReddit}){
  return(
    <Dropdown>

      <Dropdown.Toggle variant="success" id="dropdown-basic">
      SubReddits
      </Dropdown.Toggle>    
      <Dropdown.Menu>
      {
        subRedditList.map(function(subReddit,idx){ 
          return <Dropdown.Item href="#" key={idx} onClick={getContent}> {subReddit} </Dropdown.Item>})
      }
      </Dropdown.Menu>
    </Dropdown>
  );
}

function getContent(subReddit) {
  subReddit=subReddit.target.innerText;
  var url="https://www.reddit.com/r/"+subReddit+".json";
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
              console.log(cardInfo);
              cardInfos.push(cardInfo);
          }
      });
  })
  .catch(err =>{
      console.log(err)
  });
}