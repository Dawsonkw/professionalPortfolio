import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import placeholder from '../images/placeholder.png'

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

function Carousel(props) {

    
    return (
        <div>
                <div className="">
                  <h2 className="text-center p-4 iphone5:text-2xl"> Portfolio Spotlight </h2>
                  <Slider {...settings} className=' w-full mx-auto' style={{maxWidth: '500px', }}>
                  <div className='flex justify-center items-center'>
                        <img className='iphone5:w-4/5 mx-auto' src={placeholder} alt="" />
                        <h1 className="text-center p-2">Chatbox.js</h1>
                        <p className=" iphone5:w-full iphone5:text-sm py-2 px-4  " >Chatbox.js is a full stack messaging platform that allows end to end communication. Users can create profiles, update their profile name and avatar, and share messages and images between each other across the app. The platform uses Firebase as a backend and utilizes firebase Auth, firebase storage and firestore database to store account info, pictures and messages across the service. </p>
                  </div>
                  <div className='flex justify-center items-center'>
                        <img className='iphone5:w-4/5 mx-auto' src={placeholder} alt="" />
                        <h1 className="text-center p-2">Shamazon E-commerce Platform</h1>
                        <p className="iphone5:w-full iphone5:text-sm py-2 px-4 " style={{maxWidth: '400px'}}>Shamazon is a fullstack web application that operates as an ecommerce platform. Built in React js it uses Firebase for both authentication and data storage using the firebase-auth and Firestore features provided. Users can create accounts, login to existing accounts and shop for items. There is a search feature that allows users to find items based on their names and a total that is calculated as items are put into the cart. </p>
                  </div>
                  <div className='flex justify-center items-center'>
                        <img className='iphone5:w-4/5 mx-auto' src={placeholder} alt="" />  
                        <h1 className="text-center p-2">Protogen Data Visualization App</h1>
                        <p className="iphone5:w-full iphone5:text-sm py-2 px-4 " style={{maxWidth: '400px'}}>The Protogen Data Visualization App is an application that displays various information about companies and calculates scores based off mock data generated by representatives and artificial intelligence. The Protogen Scored Opportunities Chart opens into a dialog view that displays various datasets about the fictional companies in graphical format. The various charts are built using Formidables Victory Charts library and the various components are built using MaterialUI.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='iphone5:w-4/5 mx-auto' src={placeholder} alt="" />
                        <h1 className="text-center p-2">The Otter MMA News App</h1>
                        <p className="iphone5:w-full iphone5:text-sm py-2 px-4 " style={{maxWidth: '400px'}}>The Otter is a dynamic news application that serves the user with MMA based news. It was built in react. The data is pulled from 2 API's and served in a card based system. There is a dynamic carousel that displays the first three articles from each API call. The app is fully responsive and utilizes API Calls and manipulation of JSON data, dynamic DOM events and is styled using Tailwind CSS.</p>
                    </div>                
                  </Slider>
                  <style>
                    
                    {`.slick-prev:before {
                    color: black;}
                    .slick-next:before {
                    color: black;}`}
                  </style>
                </div>
        </div>
    );
}

export default Carousel;