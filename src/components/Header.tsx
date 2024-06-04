import React from 'react';
import Box from '@mui/material/Box';

// logo
import ad_logo from '../assets/logo/ad_logo.svg'
// icon
import MenuIcon from '../assets/icons/menu.svg';

type HeaderProps = {
  handleCurrentScreen : (select : number) => void
}

class Header extends React.Component<HeaderProps, {}> {
  render(): React.ReactNode {
    return (
      <Box 
        sx={{
          display: 'flex',  
          minHeight: '94px', 
          alignItems: 'center', 
          justifyContent: 'center', 
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: 'white'
        }}
      >
        <Box sx={{
          maxWidth: '1200px', 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%',
          padding: '0 24px'
        }}>
          <img onClick={() => this.props.handleCurrentScreen(0)} src={ad_logo} alt="logo" style={{ height: '50px', width : "188px", cursor: 'pointer', }} />
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, fontSize: '16px' }}>
              <li onClick={() => this.props.handleCurrentScreen(2)} style={{ marginRight: '24px', cursor: 'pointer', }}>스마트 안전 소개</li>
              <li onClick={() => this.props.handleCurrentScreen(3)} style={{ marginRight: '24px', cursor: 'pointer', }}>이력 관리 시스템</li>
              <li onClick={() => this.props.handleCurrentScreen(4)} style={{ marginRight: '24px', cursor: 'pointer', }}>제공 서비스</li>
              <li onClick={() => {}} style={{ marginRight: '24px', cursor: 'pointer', }}>고객센터</li>
            </ul>
            <div>
                <img src={MenuIcon} alt="logo" style={{ height: '24px', width : '24px', cursor: 'pointer', }} />
            </div>
          </Box>
        </Box>        
      </Box>
    );
  }
}

export default Header;
