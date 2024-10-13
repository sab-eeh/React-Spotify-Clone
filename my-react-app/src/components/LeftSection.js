import React from 'react'
import LibraryIcon from './Svgs/Library.svg'
import PlusIcon from './Svgs/Plus.svg'

function LeftSection() {
  return (
    <>
    <div style={{height : "77vh" , width : "25%" , backgroundColor : "#121212" ,  borderRadius : "8px"}}>
    {/* LIBRARY TOP SECTION */}
    <div className="library-section d-flex align-middle justify-content-between">
        <div style={{gap : "10px"}} className='library d-flex align-middle'>
            <img className='svgs-size invert' src={LibraryIcon} alt="Library-Icon" />
            <a style={{color : "grey"}} href="">Your Library</a>
        </div>
        <div className='plus-icon'>
            <img className='invert plus' src={PlusIcon} alt="Plus-Icon" />
        </div>
    </div>
    {/* LIBRARY MIDDLE SECTION */}
    <div className='d-flex' style={{paddingLeft : "8px" , paddingRight : "8px" , paddingTop :"4px" , paddingBottom : "30px" , flexDirection : "column" , gap : "25px" , height :"29vh", overflow :"auto"}}>
        <div style={{backgroundColor : "#1F1F1F" , padding : "18px 20px" , borderRadius : "8px" }}>
            <div className=' flex-column'>
                <h6 style={{fontWeight :"550" ,fontSize : "16px"}}>Create your first playlist</h6>
                <p style={{fontSize: "14px" , fontWeight :"600" }}>It's easy, we'll help you</p>
                <button style={{border : "none" , fontSize : "14px" , fontWeight : "bold" , backgroundColor:"white",
            padding : "6px 18px" , borderRadius :"30px"}}>Create playlist</button>
            </div>
        </div>
        <div style={{backgroundColor : "#1F1F1F" , padding : "18px 20px" , borderRadius : "8px" }}>
            <div className=' flex-column'>
                <h6 style={{fontWeight :"600" ,fontSize : "16px"}}>Let's find some podcasts to follow</h6>
                <p style={{fontSize: "13px" , fontWeight :"600" }}>We'll keep you updated on new episodes</p>
                <button style={{border : "none" , fontSize : "14px" , fontWeight : "bold" , backgroundColor:"white",
            padding : "6px 18px" , borderRadius :"30px"}}>Browse podcasts</button>
            </div>
        </div>
    </div>
    {/* LIBRARY FOOTER SECTION */}
    <div className='left-footer'>
        <div>
            <a href="https://www.spotify.com/pk-en/legal/end-user-agreement/">Legal</a>
            <a href="https://www.spotify.com/pk-en/safetyandprivacy">Safety & Privacy Center</a>
            <a href="https://www.spotify.com/pk-en/legal/privacy-policy/">Privacy Policy</a>
        </div>
        <div>
            <a href="https://www.spotify.com/pk-en/legal/cookies-policy/">Cookies</a>
            <a href="https://www.spotify.com/pk-en/legal/privacy-policy/#s3">About Ads</a>
            <a href="https://www.spotify.com/pk-en/accessibility">Accessibility</a>
        </div>
        <div>
            <a href="https://www.spotify.com/pk-en/legal/cookies-policy/">Cookies</a>
        </div>
    </div>
    </div>
    </>
  )
}

export default LeftSection
