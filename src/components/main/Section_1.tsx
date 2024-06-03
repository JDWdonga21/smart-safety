import React from 'react';
import { Box, Typography } from '@mui/material';
// 이미지 슬라이드
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import bgimg from '../../assets/img/bg/main-bg.png';
// store
import google from '../../assets/img/store/google.svg';
import apple from '../../assets/img/store/apple.svg';

// phone img
import phcover from '../../assets/img/phone/ph-cover.png';
import phback from '../../assets/img/phone/ph-back.png';

// phone inner img
import sd1 from '../../assets/img/slideimg/sd1.png';
import sd2 from '../../assets/img/slideimg/sd2.png';
import sd3 from '../../assets/img/slideimg/sd3.png';

class Section1 extends React.Component<{}, {}> {
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  render(): React.ReactNode {
    return (
      <Box
        sx={{
          position: 'relative', 
          paddingTop: '100px'
        }}
      >
        {/* 배경 */}
        <Box 
        sx={{
          position : 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '93vh',
          backgroundImage: `url(${bgimg})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // 화면 전체 높이
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // position: 'relative',
          overflow: 'hidden',
          padding: '20px'
        }}
      >
        
        
        
        

       
        
      </Box> 
      {/* 해드글 */}
        <Box sx={{maxWidth: '90%', position: 'relative', width: '100%', margin: '0 auto'}}>
          {/* <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <Typography variant="h4" component="h1">
              코로나와 중대재해기업처벌법 시대에 부응한
            </Typography>
            <Typography variant="h4" component="h1">
              비대면 선제 안전 컨설팅
            </Typography>
          </Box> */}
          <h1 style={{fontSize: '30px', lineHeight: '1.3', fontWeight: '400', color: '#000', textAlign: 'center'}}> 
            <strong> 
              코로나와 중대재해기업처벌법 시대에 부응한
              <br />
              비대면 선제 안전 컨설팅
            </strong> 
          </h1>
          {/* <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
            <Typography variant="subtitle1">
              온라인 안전 컨설팅
            </Typography>
            <Typography variant="subtitle1">
              믿고 맡길 수 있는 안전 전문가에게 받아보세요
            </Typography>
          </Box> */}
          <h6 style={{fontSize: '16px', paddingTop: '16px', lineHeight: '1.6', fontWeight: '400', color: '#444', textAlign: 'center'}}>
            <> 
              온라인 안전 컨설팅
              <br />
              믿고 맡길 수 있는 안전 전문가에게 받아보세요
            </> 
          </h6>
          <Box
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
              alignItems: 'center'
            }}
          >
            <Box sx={{ width: '180px', height: '56px', lineHeight: '54px', display: 'inline-block', marginRight: '15px', fontSize: 0, border: '1px solid #8d8d8d', borderRadius: '35px', verticalAlign: 'middle',}}>
              <img src={google} width={'100%'} alt='구글 다운로드' style={{ width: '140px', fontSize: '100%', overflowClipMargin: 'content-box', overflow: 'clip', verticalAlign: 'middle'}}/>
            </Box>
            
            {/* <Box 
              component="img" 
              src={google} 
              alt="store" 
              sx={{ 
                width: '100%'
              }}  
            /> */}
            </Box> 
          {/* 초록 동그라미 */}
          <Box 
            sx={{
              zIndex: -1,
              position: 'absolute',
              width: '690px',
              height: '690px',
              backgroundImage: 'linear-gradient(45deg, #4ece39, #00a856)',
              borderRadius: '100%',
              bottom: '-330px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          ></Box>
          {/* 휴대폰 그림 */}
          <Box 
          sx={{
            position: 'relative',
            width: '400px',
            height: '100%',
            margin: 'auto',
          }}
        >
          <img src={phcover} width={'100%'} height={'100%'} alt='스마트 안전 앱 메인화면' style={{ position: 'relative', zIndex: 9 }} />
          {/* 이미지 슬라이드 */}
          <Box className='slide-inner' 
            sx={{ 
              position: 'absolute', 
              top: '2%', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              // WebkitTransform: translateX(-50%),
              width: '85%', 
              // zIndex: 1,
              overflow: 'hidden',
              backgroundColor: '#f9f9f9',
              borderRadius: '50px 50px 0 0', // 둥근 모서리를 위한 클립 패스 
            }}
          >
            <div style={{ height: '100%' }}>
              <Slider {...this.settings} >
                <Box>
                  <img src={sd1} alt='slide1' style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box>
                  <img src={sd2} alt='slide2' style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box>
                  <img src={sd3} alt='slide3' style={{ width: '100%', height: '100%' }} />
                </Box>
              </Slider>
            </div>
            
          </Box>
          {/* <img src={phback} width={'100%'} alt='스마트폰 그림자' style={{ position: 'absolute', left: '50%', top: '0', transform: 'translateX(-50%)', opacity: 1, }} /> */}
        </Box>
        </Box>
      </Box>      
    );
  }
}

export default Section1;
