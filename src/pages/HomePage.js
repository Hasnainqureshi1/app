import { useCallback, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import axios from "axios";
import { Link ,useParams  } from "react-router-dom";

const HomePage = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const refresh_Token = process.env.REACT_APP_REFRESH_TOKEN;
 
  const data1 = [
    {'no':1,'name' :'Piano'}, 
    {'no':2,'name' :'Ambient'}, 
    {'no':3,'name' :'Phonk'}, 
    {'no':4,'name' :'Indie'}, 
    {'no':5,'name' :'Funk'}, 
    {'no':6,'name' :'Electronic/Dance'}, 
    {'no':7,'name' :'Synthwave'}, 
    
  
    
  ]
 
  
  const params = useParams();
   
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState(data1);
  const [newToken, setnewToken] = useState();
  const  getToken =async()=> {
    //TODO : API CALL
    const response = await fetch( `https://api.chartmetric.com/api/token`, {
       
      method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(
        {
          "refreshtoken":{refresh_Token}
        }

      )
    });
    try {
      const json =await response.json();
      const expirationTime = new Date().getTime() + json.expires_in * 1000; // convert to milliseconds
      localStorage.setItem('accessTokenExpirationTime', expirationTime);
      localStorage.setItem("token",json.token)
 
       
      
      
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('accessTokenExpirationTime');
    
    if (!accessToken || !expirationTime ||  new Date().getTime()>= expirationTime ) {
      // If access token or expiration time is not available or has already passed,
      // navigate to home page and refresh token
      
      getToken();
    }
  }, []);

  

  const search = (e) => {
   
  const searchList = data1.filter((item) => {
  return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
});
 
  console.log(setArtists(searchList));
 
 
  };



  return (
    <>
        <div className={styles.header}>
        
        <Link className={styles.navLogo} to="/" />
        <div className={styles.navMenu}>
          <div className={styles.contact}>
          <Link className={styles.contact} to="mailto:contact@kuratemusic.com">Contact</Link>
          </div>
          <div  className={styles.contact}>

          
          <Link className={styles.home +''}  to="/" >
            Home
          </Link>
          </div>
        </div>
      </div>
      <div className={styles.artistPage}>
      <div className={styles.mainBody}>
      <input
            className={styles.searchBar}
            type="text"
            placeholder="Search "
            onChange={search}
          />
      <div
        className="container  bg-light p-sm-1 p-md-5 mx-lg-5 rounded  "
        style={{ marginTop: "60px" ,height:"auto", minHeight:"70vh"  }}
      >
        <table className="table table-responsive-md">
          <thead>
            <tr>
              
              <th scope="col">Genre</th>
              <th scope="col center-text" style={{textAlign:"center" ,width:"32%"}}>Details</th>
            </tr>
          </thead>
          <tbody>
            {artists.length >0 ?
               artists.map((item) => { 
                return (
                    <tr scope="row" key={item.no}>
                      
                      <td scope="col" style={{lineHeight: "2.3rem"}}>{item.name}</td>
                      <td scope="col text-center " style={{textAlign:"center",width:"32%"}}>
                        <Link to={"/card/" + item.name.replace('/', '')}>
                          <button className="btn btn-outline-dark view-btn">
                            View 
                          </button>
                        </Link>
                      </td>
                    </tr>
                  
                );
              
                }):<div style={{marginTop:"10px"}}>Match Not found</div>}
          </tbody>
        </table>
      </div>
      </div>
   
    </div>
    </>
  );
};

export default HomePage;
