import React from 'react'
import Me from './Me'

function Profilee({FullName, profession, bio, handleName}) {
 
  return (
    
   <div style={{textAlign:"center", marginTop:"200px"}}>
    <h1 style={{color:"purple"}}>{FullName}</h1>   
    <h1>{profession}</h1>    
    <h1>{bio}</h1>    
    <button onClick={()=> handleName("Mamia")} > Click Here to Show Message </button>
    <Me FullName={FullName}>
    <img style={{width:'900px', height:'300px', marginTop:'-80px'}} src='https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg' />
    </Me>
    </div>
    
  )
}
ComponentProfile.propTypes={
    FullName:propTypes.string.isRequired,
    bio:propTypes.string.isRequired,
    profession:propTypes.string.isRequired,
    handleName:propTypes.func

export default Profilee
