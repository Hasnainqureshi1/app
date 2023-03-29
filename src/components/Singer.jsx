import React from 'react'
import { useEffect,useState } from 'react';
import { Link, useNavigate , useParams } from "react-router-dom";
import './Tracks.css'
import Spinner from './Spinner';
const Singer = ({artists}) => {
    const [artistData, setartistData] = useState([]);
    const [AcessToken, setAcessToken] = useState(localStorage.getItem("token"))
    const [loading, setLoading] = useState(true)

   const navigate = useNavigate();
    //method for fetching the monthly listernes of artists
    // console.log(artists.id);
    const monthlyListernes =async()=>{
      const newData = [];
      if(artists){
          setLoading(true)      
        for (const id of artists) {
           
        const response = await fetch( `https://api.chartmetric.com/api/artist/${id.id}`, {
       
        method: 'GET', 
          headers: {
          'Content-Type': 'application/json',
            'Authorization':`Bearer ${AcessToken}`
          // "refreshtoken":"9BQWqEmD55Z0U51Cqs8bpB0vCm5nHim4R1n8bvNBeRb9Hp2etHCpqgMXui9UGcyi"
        }
       
      });
     
      
     try {
      
     
        const {obj}=await response.json();
     console.log(obj.cm_statistics.sp_monthly_listeners);
     newData.push({
        id,
        name:obj.name,
        img:obj.image_url,
        monthlyListeners: obj.cm_statistics.sp_monthly_listeners,
      });
    } 
      catch (error) {
         
      console.log(error.message);
      
      
      }
    }
    setartistData(newData);
    setLoading(false) ; 
     

    }
    }


    function checkAccessTokenValidity(accessToken) {
      if (!accessToken) {
        // If access token is not available
        return false;
      }
    
      const tokenExpirationTime = localStorage.getItem('accessTokenExpirationTime');
      console.log(tokenExpirationTime);
      const currentTime = new Date().getTime();
    
      if (!tokenExpirationTime || tokenExpirationTime < currentTime) {
        // If expiration time is not available or has already passed
        return false;
      }
    
      // Access token is valid
      return true;
    }
       
  

useEffect(() => {
  if (AcessToken) {
    // logic to check the validity of the access token before each API request
    const isAccessTokenValid = checkAccessTokenValidity(AcessToken);
    if (!isAccessTokenValid) {
      // redirect the user to the home page if the access token is invalid
     navigate('/');
    }
    else{
      monthlyListernes();
    }
  }
    
 
 
 

   
}, [])
function formatNumber(numberString) {
  const number = parseInt(numberString, 10);
  return number.toLocaleString();
}

function MyComponent(props) {
  const { listeners } = props;
  const formattedStreams = formatNumber(listeners);

  return (
    <h6 className="text-center card-third-text">
      Monthly Listeners : {formattedStreams}
    </h6>
  );
}



  return (
    <>
        {loading && <Spinner />}

    <div className='d-flex flex-wrap justify-content-center mt-4'>
        {
      artistData.map(({ id, monthlyListeners,img,name }) => (
//    console.log(artist)
  
      
    <div key={id} className=" mt-4 cardContainer">
      <div className="card tracksCard"  >
     <div className="img-body card-img-top img-fluid"  style={{ height:"333px" }}>
  {img ? (
          <img
            src={img}
            className="w-100 h-100 object-fit-cover"
            alt="..."
           
          />
        ) : (
          <img src={"https://storage.googleapis.com/cm-app-assets/images/main/av2.png"}   className="w-100 h-100 object-fit-cover"/>
        )}
        </div>
        <div className="card-body" style={{  height: "100px" }}>
          <div className="card-text">
            <h4 className="text-center card-head-text " >{name}</h4>
           
            <MyComponent listeners={monthlyListeners} />
         
          </div>
        </div>
      </div>
    </div> 
    ))
  }
  
    </div>
    </>
  )
}

export default Singer