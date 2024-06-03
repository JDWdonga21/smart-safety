import React, { CSSProperties } from 'react';

import logo from '../assets/logo/logo.svg';
import qr2 from '../assets/img/qrcode/qr2.svg';
import blogimg from '../assets/img/blog/blog.svg'
import topBtn from '../assets/img/footerbtn/top.svg'

class Footer extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div style={styles.footer}>
        <div style={styles.footerIn}>
          {/* Logo */}
          <div style={styles.fTopM}>
            <div style={styles.fLogo}>
              <a href='/' style={{ textDecoration: 'none', color: '#333' }}>
                <img src={logo} width={'125px'} alt='스마트안전 로고' style={styles.noColor} />
              </a>
            </div>
          </div>
          {/* Navigation and Info */}
          <div style={styles.fUtill}>
            <ul style={styles.fGnb}>
              <li style={styles.fGnbLi}>
                <a href='/' style={{ color: '#000', textDecoration: 'none' }}>회사소개</a>
              </li>
              <li style={styles.fGnbLi}>
                <a href='/' style={{ color: '#000', textDecoration: 'none' }}>스마트안전소개</a>
              </li>
              <li style={styles.fGnbLi}>
                <a href='/' style={{ color: '#000', textDecoration: 'none' }}>이력관리시스템</a>
              </li>
              <li style={styles.fGnbLi}>
                <a href='/' style={{ color: '#000', textDecoration: 'none' }}>제공서비스</a>
              </li>
              <li style={styles.fGnbLi}>
                <a href='/' style={{ color: '#000', textDecoration: 'none' }}>공지사항</a>
              </li>
            </ul>
            <p style={styles.fInfo}>
              부산광역시 사상구 모라로 22, 1316-2호(모라동, 부산벤처타워)
              <span style={{ display: 'inline-block', width: '26px' }}></span>
              대표이사 : 최진칠
              <br />
              사업자번호 : 811-81-02315
              <span style={{ display: 'inline-block', width: '26px' }}></span>
              고객센터 1661-1844
            </p>
            <div style={styles.utills}>
              <a href='/' style={{ textDecoration: 'none', color: '#333' }}>이용약관</a>
              <span style={styles.fline}></span>
              <a href='/' style={{ textDecoration: 'none', color: '#333' }}>개인정보처리방침</a>
            </div>
            <small style={styles.fInfo}>
              Copyright ⓒ 2021 (주)부산안전원 All Rights Reserved.
            </small>
          </div>
          {/* App Download and Blog */}
          <div style={styles.fApp}>
            <div>
              <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <img src={qr2} width={'68px'} alt='앱 다운로드 qr 코드' />
              </div>
              <div style={styles.appDownloadText}>
                <strong>APP 다운로드</strong>
                <div>
                  스마트안전을
                  <br />
                  모바일 앱으로 만나보세요
                </div>
              </div>
            </div>
            <a href='/' target='_blank' style={styles.blog}>
              <img src={blogimg} width={'38px'} alt='네이버 블로그' />
            </a>
          </div>
          {/* Clear Fix */}
          <div style={styles.clear}></div>
          <div>
            <div style={styles.goTop}>
              <img src={topBtn} width={'100%'} alt='홈페이지 상단으로 가기' />
            </div>
            <a href='/' style={styles.faqBtn}>FAQ</a>
          </div>
        </div>
      </div>
    );
  }
}

const styles: { [key in string]: CSSProperties } = {
  footer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTop: '1px solid #ccc'
  },
  footerIn: {
    maxWidth: '75%',
    padding: '5% 0',
    position: 'relative',
    width: '100%',
    margin: '0 auto',
  },
  fTopM: {
    
  },
  fUtill: {
    // marginTop: '30px',
    width: '60%',
    float: 'left'
  },
  fApp: {
    // marginTop: '30px',
    float: 'right',
    textAlign: 'center'
  },
  clear: {
    
  },
  fLogo: {
    float: 'left',
    marginRight: '5%',
  },
  fGnb: {
    fontSize: 0,
    listStyle: 'none'
  },
  fGnbLi: {
    display: 'inline-block',
    paddingRight: '30px',
    fontSize: '15px',
    cursor: 'pointer',
  },
  fInfo: {
    margin: '26px 0',
    fontSize: '14px',
    lineHeight: 1.4,
    color: '#605d5b'
  },
  utills: {
    marginBottom: 0,
    margin: '26px 0',
    fontSize: '14px',
    lineHeight: 1.4,
    color: '#605d5b',
  },
  fline: {
    display: 'inline-block',
    margin: '0 10px',
    width: '1px',
    height: '10px',
    backgroundColor: '#b7b7b7'
  },
  blog: {
    display: 'block',
    marginTop: '20px',
    width: '90px',
    height: '35px',
    lineHeight: '36px',
    textAlign: 'center',
    borderRadius: '18px',
    border: '1px solid #8d8d8d',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#333'
  },
  appDownloadText: {
    marginLeft: '10px',
    fontSize: '14px',
    lineHeight: 1.3,
    color: '#605d5b',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  noColor : {
    filter: 'grayscale(100%)',
  },
  goTop: {
    bottom: '9%',
    cursor: 'pointer',
    zIndex: '99',
    transition: 'all .5s',
    opacity: 1,

    width: '80px',
    height: '80px',
    borderRadius: '100%',
    position: 'fixed',
    right: '5%',
  },
  faqBtn: {
    paddingTop: 0,
    lineHeight: '80px',
    position: 'fixed',
    right: '5%',
    bottom: '21%',
    display: 'block',
    width: '80px',
    height: '80px',
    background: 'linear-gradient(45deg, #4ece39, #00a856)',
    borderRadius: '100%',
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 0 0 rgba(244,154,25,.8)',
    opacity: 1,
    transition: 'all .5s',
    zIndex: '99'
  }
}

export default Footer;