
import React, { useState, useEffect } from "react";
let line1Writer=2;
let line2Writer=0;
let introText="";
let completeText1="<>   Hi... I am  Hitendra  Patel.   </>"; 
let completeText2="{ job: \"Web Developer.\" }"; 
let text1=true;
let text2=false;
let boxClicked=false;
const writingData={
    intro:"<>   Hi... I am  Hitendra  Patel.   </>",
    line1:"{",
    line2:"  job: \"Web Developer.\"",
    line3:"}"
}



const Intro = () => {
    let [line1Writer , setLine1Writer]=useState(0);
    let [line2Writer , setLine2Writer]=useState(0);
    let [introductionTag , setIntroductionTag]=useState(introText);
    let [professionTag , setProfessionTag]=useState(introText);
    let [reverse , setReverse]=useState(false);
    let [writingStatus , setWritingStatus]=useState(true);

const textPrinter=(text:String ,index:Number)=>{
    setTimeout (() => {
        console.log(text +" "+index);
    },200);

    
}

    useEffect(() => {
        const textBuild=setTimeout (() => {
            if(line1Writer==0)setIntroductionTag("");
            if(text1) setIntroductionTag(completeText1.substring(0,line1Writer));
            if(text1 && line1Writer!=completeText1.length && !reverse){
                setLine1Writer(line1Writer+1);
            }
            if(text1 && line1Writer==completeText1.length){
                //reverse=!reverse;
                //setWritingStatus(false);//STOPPED HERE at 1st Line
                text1=false;
                text2=true;
                
            }
            if(line2Writer==0)setProfessionTag("");
            if(text2) setProfessionTag(completeText2.substring(0,line2Writer));
            
            if(reverse && line2Writer!=0){
                setLine2Writer(line2Writer-1);
                console.log("in 1st reverse logic ");
            }
            if(reverse && line2Writer==0){
                text1=true;
                text2=false;
                setLine1Writer(line1Writer-1);
                console.log("in 2st reverse logic ");
            }
            if(reverse && line1Writer==0 && line2Writer==0){
                setReverse(false);
                console.log("switched reverse ");
            }
            if(text2 && line2Writer!=completeText2.length && !reverse){
                setLine2Writer(line2Writer+1);
        
            }
            if(text2 && line2Writer==completeText2.length){
                //setWritingStatus(false);
                setReverse(true);
            } 

        },100);
        
         if(!writingStatus) return clearTimeout(textBuild);
      });


  return (
    <div id="introTextElement" className="block sm:w-56 lg:w-[30rem] sm:h-24 lg:h-24  rounded-lg  shadow-xl px-5 py-3 self-center font-cursive text-2xl text-gray-500  border-none border-2 border-pink-900 rounded-lg  shadow-xl">
    <p >
        {introductionTag} 
    </p>
    <p>
        {professionTag}
    </p>
    </div>
  )
}

export default Intro