import * as React from 'react'
import NavBar from '../components/NavBar'
import '../Sass/basics.scss'
import { Link } from 'gatsby'
import Footer from '../components/Footer'
import GeneralNav from '../components/GeneralNav'
import ApplyContent from '../components/ApplyContent'


function getPageUrl(){
    let webAddress = window.location.href;
    let result = webAddress.includes("index");

    return result
}

function AreweHome({result}){
    result = getPageUrl();
    if (result){
        return <NavBar/>
    }
    return <GeneralNav/>
}
const Apply = () =>
{
  return(
    <div>
        <head>
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <Link rel="manifest" href="/site.webmanifest"/>
        <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#000"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Victoria Travel Services | Book Flights and Holidays | Travel Leaders Rwanda </title>
      </head>
      <AreweHome/>
      <ApplyContent/>
      <Footer/>
    </div>

  )

}

export const Head = () => <title>About Us</title>
export default Apply