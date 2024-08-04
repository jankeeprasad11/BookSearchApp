import React ,{ useState }from "react";
import Card from "./Card";
import Footer from "./footer";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBGXDGg46uuIpTs7P4F_Ms9i9075YsfNYU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h1>Find Your Book</h1>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        {/* <button><i class="fas fa-search"></i></button> */}
                    </div>
                    <img src="./images/bg2.png" alt=""/>
                    <div className="img2">
                        <img src="./images/study_logo.png"/>
                    </div>
                </div>
            </div>
            <div className="container">
                {
                    <Card book={bookData}/>
                }
            </div>
            <div className="footer-bottom">
                <Footer/>
            </div>
        </>
    )
}
export default Main;