import React from 'react';
import { Box } from '@mui/material';

// img
import bgimg from '../../assets/img/bg/main-bg.png';
// store
import google from '../../assets/img/store/google.svg';
import apple from '../../assets/img/store/apple.svg';

//phone img
import phcover from '../../assets/img/phone/ph-cover.png'
import phback from '../../assets/img/phone/ph-back.png'

class Section1 extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <Box 
        sx={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '800px', // 원하는 높이 설정
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>코로나와 중대재해기업처벌법 시대에 부응한</h1>
          <h1>비대면 선제 안전 컨설팅</h1>
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <p>온라인 안전 컨설팅</p>
          <p>믿고 맡길 수 있는 안전 전문가에게 받아보세요</p>
        </Box>
        <Box 
          component="img" 
          src={google} 
          alt="store" 
          sx={{ 
            height: '50px', 
            width: '240px', 
            marginBottom: '40px',
            border: '2px solid #000', 
            borderRadius: '50px', // 알약 형태로 둥글게 만듦
            padding: '8px', // 내부 여백 추가
            backgroundColor: '#fff' // 배경색 추가
          }}  
        />
        <Box 
          sx={{
            zIndex: -1,
            position: 'absolute',
            width: '690px',
            height: '690px',
            backgroundImage: 'linear-gradient(45deg, #4ece39, #00a856)',
            borderRadius: '50%',
            bottom: '-330px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        ></Box>
        <Box 
          sx={{
            position: 'relative',
            width: '400px',
            margin: 'auto',
          }}
        >
          <img src={phcover} width={'100%'} alt='스마트 안전 앱 메인화면' style={{ position: 'relative', zIndex: 9 }} />
          <img src={phback} width={'100%'} alt='스마트폰 그림자' style={{ position: 'absolute', left: '50%', top: '0', transform: 'translateX(-50%)', opacity: 1, zIndex: 8 }} />
        </Box>
      </Box>
    );
  }
}

export default Section1;
