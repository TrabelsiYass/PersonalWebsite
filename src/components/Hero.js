import React from 'react';
import './Hero.css';


function Hero() {

  const Quantity ={
    '--quantity' : 7 ,
  };

  const SliderImage=(position)=>({
    '--position' : position,
  });
  
  return (
    <div className='main-box' id='hero'>
      <div className='aboutMeInner'>
        <div className='behindTheCodeParent'>
          <div className='behindTheCode'>Weapons Used</div>
          <div className='myStory'>Programming Languages</div>
          <img className='lineIcon' alt="" src="/line-12.svg" />
        </div>
      </div>
      <div className='banner'>
        <div className='slider' style={Quantity}>
        <img src='./CPlusPlus.svg' className='item' style={SliderImage(1)} alt='img'/>
        <img src='./Python.svg' className='item' style={SliderImage(2)} alt='img'/>
        <img src='./css.svg' className='item' style={SliderImage(4)} alt='img'/>
        <img src='./html.svg' className='item' style={SliderImage(5)} alt='img'/>
        <img src='./JS.svg' className='item' style={SliderImage(6)} alt='img'/>
        <img src='./Java.svg' className='item' style={SliderImage(7)} alt='img'/>
        <img src='./Prolog.png' className='item' style={SliderImage(3)} alt='img'/>
        </div>
        <div className='aboutMeInner2'>
        <div className='behindTheCodeParent2'>
          <div className='behindTheCode'>Weapons Used</div>
          <div className='myStory'>Database & Frameworks</div>
          <img className='lineIcon' alt="" src="/line-12.svg" />
        </div>
      </div>
      <div className='slider2'>
        <img src='./mongodb.svg' className='item' style={SliderImage(1)} alt='img'/>
        <img src='./mysql.svg' className='item' style={SliderImage(2)} alt='img'/>
        <img src='./react.svg' className='item' style={SliderImage(3)} alt='img'/>
        <img src='./spring.svg' className='item' style={SliderImage(4)} alt='img'/>
        </div>
      </div>

    </div>
  )
}

export default Hero
