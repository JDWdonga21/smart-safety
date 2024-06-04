import React, { CSSProperties } from "react";
import {Box, Typography } from '@mui/material';

//img
import homebtn from '../../assets/img/companybtn/Home.svg'
import companyBg from '../../assets/img/companybg/compay-bg.png'
import vision from '../../assets/img/vision/vision.svg'

import sv_overview from '../../assets/img/svoverview/sv-overview.png'
import google from '../../assets/img/store/google.svg';


class Introduction extends React.Component<{}, {}> {

    render(): React.ReactNode {
        return(
            <div style={{height: '100%'}}>
                <div style={styles.topMenu}>
                    <div style={styles.topSectionIn}>
                        <h1 style={{
                                margin: 0,
                                padding: '78px 0',
                                fontSize: '40px',  
                                fontWeight: '300',
                                textAlign: 'start'                    
                            }}>
                                산업현장의 모든 근로자가
                            <br/>
                            <strong style={styles.topTitleStrong}>가족의 품으로 무사히 돌아갈 수 있도록!</strong>
                        </h1>
                        <div style={styles.location}>
                            <a href="/" style={styles.locationA}>
                                <img src={homebtn} width={'20px'} alt="홈"/>
                            </a>
                            <strong style={styles.locationStrong}>
                                <p style={styles.before}>/</p>
                                스마트안전소개
                            </strong>
                        </div>
                    </div>
                </div>
                <div style={styles.subContainer}>
                    <div className="section-in smart-sv" style={styles.subConSectionInHello}>
                        <div className="phone-ex" style={styles.phoneEx}>
                            <img src={sv_overview} width={'100%'} alt="스마트안전 보고서 목록" />
                        </div>
                        <div className="c-txt" style={styles.smartSvTxt}>
                            <p style={{wordBreak: 'keep-all'}}>
                                <strong style={styles.smartSvTxtStrong}>
                                    사업장 안전관리 솔루션 '
                                    <span style={{fontWeight: '700', color: '#da2128'}}>스마트</span>
                                    <span style={{fontWeight: '700', color: '#00934b'}}>안전</span>
                                    ' 은
                                </strong>    
                            </p> 
                            <p style={{marginTop: '30px', wordBreak: 'keep-all', textAlign: 'start'}}>
                                안전관리현황, 모니터링, 이력관리 등 사업장의 안전을 위한 전반 관리를 애플리케이션을 활용하여 손쉽게 할 수 있는 부산안전원이 제공하는 모바일 서비스로써
                            </p> 
                            <p style={{marginTop: '30px', wordBreak: 'keep-all', textAlign: 'start'}}>
                                클라우드 기술을 기반으로 실시간 안전일지 작성, 사업장 현장 사진 및 동영상 등을 업로드하고 안전전문가로부터 즉각적인 안전 컨설팅까지 받을 수 있는 국내 유일 모바일 안전관리 솔루션입니다.
                            </p>  
                            <div className="download" style={{marginTop: '30px'}}>
                                <a href="/" target="_blank" style={styles.downloadA}>
                                    <img src={google} width={'100%'} alt="구글 다운로드" style={{width: '140px'}} />    
                                </a>  
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles: {[key in string]: CSSProperties} = {
    // 1
    topMenu : {
        width: '100%',
        position: 'fixed',
        top: '100px',
        left: 0,
    },
    topSectionIn: {
        position: 'relative',
        width: '100%',
        maxWidth: '75%',
        margin: '0 auto',
    },
    topTitleStrong: {
        display: 'block',
        width: '60%',
        fontWeight: '700'
    },
    location: {
      position: 'absolute',
      top: '156px',
      right: 0,  
    },
    locationA: {
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: 1.3,
        verticalAlign: 'middle',
        color: '#595959',
        textDecoration: 'none',  
    },
    locationStrong: {
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: 1.3,
        verticalAlign: 'middle',
        color: '#595959',
    },
    before: {
        content: "",
        display: 'inline-block',
        width: '8px',
        height: '18px',
        margin: '0 12px',
        verticalAlign: 'bottom',
    },
    // 2
    subContainer: {
        position: 'relative',
        backgroundColor: '#fff',
        marginTop: '208px',
        zIndex: 6,
        display: 'flex',
        unicodeBidi: 'isolate'
    },
    //2-1
    subConSectionInHello: {
        padding: '0 0 150px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        maxWidth: '75%',
        margin: '0 auto',
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 0,
        padding: 0,
        fontSize: '24px',
        lineHeight: 1.3,
        color: '#000',
    },
    phoneEx: {
        position: 'relative',
        float: 'left',
        width: '46%',
        margin: '20px auto'
    },
    smartSvTxt: {
        width: '50%',
        paddingLeft: 0,
        position: 'relative',
        alignItems: 'center',
        float: 'left',
        marginTop: '40px',
        boxSizing: 'border-box',
        fontSize: '18px',
        lineHeight: 1.4,
        color: '#28282',
        textAlign: 'left'
    },
    smartSvTxtStrong: {
        color: '#000',
        fontSize: '30px',
        fontWeight: '500',
        lineHeight: 1.4,
    },
    downloadA: {
        display: 'inline-block',
        marginRight: '15px',
        width: '210px',
        height: '64px',
        lineHeight: '62px',
        fontSize: 0,
        textAlign: 'center',
        borderRadius: '35px',
        border: '1px solid #8d8d8d',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: '#333'
    },
}

export default Introduction;