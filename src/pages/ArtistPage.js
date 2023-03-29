import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./ArtistPage.module.css";
import def from "../images/img.jpeg";
import jwtDecode from "jwt-decode";
 
import Singer from './../components/Singer';
import Tracks from './../components/Tracks';
import Spinner from './../components/Spinner';

 

const ArtistPage = () => {
  const navigate = useNavigate();

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
 
  
 
 
 useEffect(() => {
   //  fetchAllNotes();
   console.log(localStorage.getItem('token') );
 
    
 }, [])

 const track ={
  ElectronicDance: [
    {
      id:"98632663",
    
    },
    {
      id:"92650596",
      name: "OGUZ",
      tracks: '',
      list: '237,967',
      img: "https://i.scdn.co/image/ab6761610000e5eb8af775b7b0edd88476e5c6a6",
    },
  ],
  Indie:[
    {
      id:'17902186',
      name: "Bonjr",
      tracks: '8,567,352',
      list: '594,912 ',
      img: "https://i.scdn.co/image/ab6761610000e5eb7793e87ec8de3afaa76f8b0c",
    },
    {
      id:'31825656',
      name: "consule",
      tracks: '1,566,348',
      list: '25,473 ',
      img: "https://i.scdn.co/image/ab6761610000e5eb933778fbddf72942a4501d62",
    },
    {
      id:'68752519',
      name: "Ali Akbar 14",
      tracks: '16,731,753',
      list: '25,473 ',
      img: "https://i.scdn.co/image/ab6761610000e5eb6d1586c5e8126a420f17720d",
    },
  ]
  
 }
  const data = {
    Piano: [
      {
        id:"9468643",
     
      },
      {
        id:"1666033",
        name: "Dorian Marko",
        tracks: '',
        list: '232,433',
        img: "https://i.scdn.co/image/ab6761610000e5eb49cdb6d1ed2824c2eee37855",
      },
    ],
    Ambient: [
      {
        id:"3578846",
        name: "Øneheart",
        tracks: '',
        list: '6,180,074',
        img: "https://i.scdn.co/image/ab6761610000e5ebd4f8ad3f489b17c01130d1e6",
      },
      {
        id:"4308986",
        name: "TileKid",
        tracks: '',
        list: '821,035 ',
        img: "https://i.scdn.co/image/ab67616d0000b2733497a2d76707810970d08d9b",
      },
      {
        id:"547808",
        name: "Mathbonus",
        tracks: '',
        list: '483,055 ',
        img: "https://i.scdn.co/image/ab6761610000e5eb53efe6d1a1796889e77a81f5",
      },
      {
        id:"564578",
        name: "Antent",
        tracks: '',
        list: '1,109,326',
        img: "https://i.scdn.co/image/ab6761610000e5ebd141689a6b91bd687b941e92",
      },
    ],
    Phonk: [
      {
        id:"9331094",
        name: "Xantesha",
        tracks: '',
        list: '3,946,681',
        img: "https://i.scdn.co/image/ab6761610000e5eb7aa2ec37235894b417cf4f73",
      },
      {
        id:"9843191",
        name: "Ariis",
        tracks: '',
        list: '1,769,072',
        img: "https://i.scdn.co/image/ab6761610000e5eb95a2eddb36638bf53676c0df",
      },
      {
        id:"9599095",
        name: "STAYSOLD",
        tracks: '',
        list: '1,027,427 ',
        img: "https://i.scdn.co/image/ab6761610000e5eb6a4e30b979d4914c94035b12",
      },
      {
        id:"4708455",
        name: "$werve",
        tracks: '',
        list: '2,518,134',
        img: "https://i.scdn.co/image/ab6761610000e5eb685823f00ee0713cea7588ce",
      },
      {
        id:"4508329",
        name: "Wilee",
        tracks: '',
        list: '1,424,398',
        img: "https://i.scdn.co/image/ab6761610000e5ebd4d97727ba4e12096f98edf2",
      },
    ],
    Indie: [
    
      {
        id:"3555876",
        name: "Hinshi",
        tracks: '',
        list: '220,091 ',
        img: "https://i.scdn.co/image/ab6761610000e5ebe0336f7e8d60bc277276b502",
      },
      {
        id:"1792900",
        name: "Zebatin",
        tracks: '',
        list: '266,572 ',
        img: "https://i.scdn.co/image/ab6761610000e5ebb337eba266e46ae0364540bd",
      },
    ],
    Funk: [
      {
        id:"7665469",
        name: "DJ AG O GRINGO",
        tracks: '',
        list: '800,173 ',
        img: "https://i.scdn.co/image/ab6761610000e5eb136bb3d5dd869fc6acf9b6ee",
      },
      {
        id:"10079911",
        name: "DJ LZIN",
        tracks: '3,634,679',
        list: '570,085 ',
        img: "https://i.scdn.co/image/ab67616d0000b27383667dcaf34136e35ee34c40",
      },
      {
        id:"10094677",
        name: "DJ RAMON SP",
        tracks: '2,493,018',
        list: '570,085 ',
        img: "https://i.scdn.co/image/ab67616d0000b2733f34c4b6b64a5c5f546c4c3a",
      },
    ],
   
    Synthwave: [
      {
        id:"1153103",
        name: "Hotel Pools",
        tracks: '',
        list: '353,267',
        img: "https://i.scdn.co/image/ab6761610000e5eb58c4b5c755c9bdc606b4c4ba",
      },
      
    ],
  };
  const [artists, setArtists] = useState([data]);
  const [item, setitem] = useState([]);
  const params = useParams();
  const [id, setid] = useState("");

  useEffect(() => {
    setid(params.id);

    Object.entries(artists).map(
      ([k, v]) => (
        id === "Piano" ? setitem(v.Piano) : console.log("no"),
        id === "Ambient" ? console.log(setitem(v.Ambient)) : console.log("no"),
        id === "Electronic/Dance" ? console.log(setitem(v.ElectronicDance)) : console.log("no"),
        id === "Funk" ? console.log(setitem(v.Funk)) : console.log("no"),
        id === "Indie" ? console.log(setitem(v.Indie)) : console.log("no"),
        id === "Phonk" ? console.log(setitem(v.Phonk)) : console.log("no"),
        id === "Synthwave" ? console.log(setitem(v.Synthwave)) : console.log("no")
      )
    );
  });
 
  
  return (
   <>
   <div className={styles.header}>
     
    <Link className={styles.navLogo} to="/" />
    <div className={styles.navMenu}>
      <div className={styles.contact}>Contact</div>
      <Link className={styles.nonAactive} to="/" onClick={onHomeClick}>
        Home
      </Link>
    </div>
  </div>
    <div className={styles.artistPage} style={{background:'black'}}>
    <div className={styles.NaviateHead}>
    <div className={styles.heading}  >
      
          <span>{`Artist Showcase: `}</span>
          <b>  {id=="ElectronicDance"?"Electronic/Dance":id }</b>
        </div>
        {/* <Spinner/> */}
        <div className={styles.backButton} onClick={onBackButtonContainerClick}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.back}>Back</div>
        </div>
    </div>
      <div className={styles.mainBody}>


<div className="container ps-1" style={{marginTop:'40px', height:"auto"}}>
  <div className="row ">
 
{/* <Funk artists = {data.Piano}/> */}
{/* <Piano artists = {data.Piano}/> */}
  
    {/* // console.log(data.Piano)
  {/* { <Piano artists = {data.Piano}/> } */}
  { (id=="Funk" && <Singer artists = {data.Funk}/>)  }
  { (id=="Piano" && <Singer artists = {data.Piano}/>)  }
  { (id=="Phonk" && <Singer artists = {data.Phonk}/>)  }
  { (id=="Ambient" && <Singer artists = {data.Ambient}/>)  }
  { id=="Indie" && <div className="">
     <Tracks tracks = {track.Indie} />
    <Singer artists = {data.Indie} />
  </div>
   }
  { (id=="ElectronicDance" && <Tracks  tracks = {track.ElectronicDance}/>)  }
  { (id=="Synthwave" && <Singer artists = {data.Synthwave}/>)  }
        
  </div>
</div>

       
      </div>
   
    </div>
    </>

  );
};

export default ArtistPage;
