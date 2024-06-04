import React, { CSSProperties } from "react";
import {Box, Typography } from '@mui/material';

//img
import homebtn from '../../assets/img/companybtn/Home.svg'
import companyBg from '../../assets/img/companybg/compay-bg.png'
import vision from '../../assets/img/vision/vision.svg'

import cs_01 from '../../assets/img/csimg/cs-01.svg'
import cs_02 from '../../assets/img/csimg/cs-02.svg'
import cs_03 from '../../assets/img/csimg/cs-03.svg'
import cs_04 from '../../assets/img/csimg/cs-04.svg'


class Company extends React.Component<{}, {}> {

    render(): React.ReactNode {
        return(
            <div style={{height: '100%'}}>
                <div style={styles.topMenu}>
                    <div style={styles.topSectionIn}>
                        <h1 style={{
                                margin: 0,
                                padding: '78px 0',
                                fontSize: '30px',  
                                fontWeight: '300',
                                textAlign: 'start'                    
                            }}>
                                안전과 노무를 한 곳에서!
                            <br/>
                            <strong style={styles.topTitleStrong}>(주)부산안전원</strong>
                        </h1>
                        <div style={styles.location}>
                            <a href="/" style={styles.locationA}>
                                <img src={homebtn} width={'20px'} alt="홈"/>
                            </a>
                            <strong style={styles.locationStrong}>
                                <p style={styles.before}>/</p>
                                회사소개
                            </strong>
                        </div>
                    </div>
                </div>
                <div style={styles.subContainer}>
                    <div className="section-in hello" style={styles.subConSectionInHello}>
                        <h3 style={styles.subTitle} >인사말</h3>
                        <div style={styles.cTxt}>
                            <div style={styles.cTxtBefore} />
                            <p style={{wordBreak: 'keep-all', textAlign: 'left'}}>
                                부산안전원은 노동부로부터 안전관리 대행 및 재해예방 기술지도 기관으로 지정 받아 산업현장의 종합안전컨설팅 업무뿐만 아니라 노무와 기타 법률(노무사 · 변호사 대기)까지 종합적으로 수행하고 있습니다.
                            </p>
                            <p style={{marginTop: '30px', wordBreak: 'keep-all', textAlign: 'left'}}>
                                근로자의 생명 및 권익을 보호하는 적법한 안전· 노무관리방안과 합리적인 기업경영 대안을 늘 강구하겠습니다.
                            </p>
                            <div style={{marginTop: '70px', textAlign: 'left'}}>
                                부산안전원 대표이사
                                <em style={{
                                    display: 'inline-block',
                                    margin: '0 0 8px',
                                    fontSize: '24px',
                                    verticalAlign: 'middle',
                                }}>
                                    최 진 철
                                </em>
                            </div>
                        </div>
                        <div style={{}}>
                            <img src={companyBg} width={'100%'} alt="배경이미지" style={styles.cImgImg} />
                        </div>
                        <div className="clear" style={{
                            content: "",
                            display: 'block',
                            clear: 'both'
                        }} ></div>
                    </div>
                    <div className="vision" style={styles.vision}>
                        <div style={styles.subConSectionInHello}>
                            <h3 style={styles.visionSubTitle}>비전</h3>
                            <div className="react-reveal v-img" style={{
                                animationFillMode: 'both',
                                animationDuration: '1200ms',
                                animationDelay: '400ms',
                                animationIterationCount: 1,
                                opacity: 1,
                                animationName: 'react-reveal-337152702948501-2',
                                width: '76%',
                                margin: '60px auto 50px'
                            }}>
                                <img src={vision} width={'100%'} alt="안전+노무=부산안전원" />
                            </div>
                        </div>
                         {/* mobile */}
                        <div className="v-txt">
                            <strong style={{
                                display: 'block',
                                marginBottom: '20px',
                                fontSize: '30px',
                                textAlign: 'center'
                            }}>
                                <span className="red" style={{color: '#da2128'}}>안전관리</span>
                                와 
                                <span className="green" style={{color: '#00934b'}}>인사노무관리</span>
                                를 한 그릇에!
                            </strong>
                            <p style={{
                                width: '60%',
                                margin: '0 auto',
                                fontSize: '18px',
                                lineHeight: 1.4,
                                color: '#282828',
                                textAlign: 'center'
                            }}>
                                저희 부산안전원은 수십 년 간 고용노동부 근속 또는 안전관리자로 근무한 직원들이 주축이 되어 설립한 회사(기술사 및 노무사 자격 보 유)로 기업의 안전관리 및 인사노무관리가 한 번에 이뤄질 수 있도 록 한 그릇에 담았습니다.
                            </p>
                        </div>
                    </div>
                    <div style={styles.subConSectionInHello}>
                        <h3 style={{
                            marginTop: '50px',
                            fontSize: '24px',
                            lineHeight: 1.3,
                            color: '#000',
                            // display: 'flex',
                            // justifyItems: 'flex-start'
                        }}>주요사업</h3>
                        <div className="cs-service" style={{
                            margin: '60px auto 50px'
                        }}>
                            <ul >
                                <li className="cservice-1" style={styles.csServiceUiLi}>
                                    <div className="sc-icon" style={{marginRight: '30px'}}>
                                        <img src={cs_01} width={'90px'} alt="제조 기타 서비스업종 안전관리 지원" />
                                    </div>
                                    <div className="cs-txt" style={styles.csTxt}>
                                        <strong style={styles.csTxtStrong}>제조 기타 서비스 업종 안전관리 지원</strong>
                                        <p>
                                            - 50인 이상 사업장 안전관리 대행(산업안정보건법 의무사항)
                                            <br/>
                                            - 50인 미만 사업장 컨설팅
                                            <br/>
                                            - 제조업 유해위험방지계획서, 위험성평가 컨설팅
                                        </p>
                                    </div>
                                </li>
                                <li className="cservice-2" style={styles.csServiceUiLi}>
                                    <div className="sc-icon" style={{marginRight: '30px'}}>
                                        <img src={cs_02} width={'90px'} alt="인사노무 컨설팅 및 교육" />
                                    </div>
                                    <div className="cs-txt" style={styles.csTxt}>
                                        <strong style={styles.csTxtStrong}>인사노무 컨설팅 및 교육</strong>
                                        <p>
                                            - 중대재해 특별관리
                                            <br/>
                                            - 직별,별 근로형태별 맞춤형 근로계약 설계
                                            <br/>
                                            - 업종과 규모의 특성에 맞는 취업규칙 설계 및 사규 검토
                                            <br/>
                                            - 최저임금, 통상임금, 평균임금, 포괄임금 등 임금체계 설계 및 검토
                                            <br/>
                                            - 노사협의회, 단체교섭, 단체협약, 쟁의행위 등 집단적 노사관계 관리 지원
                                            <br/>
                                            - 산업안전보건교육 안전사고에 대한 산재처리 등 사후관리, 성희롱예방교육 등 맞춤형교육 제공
                                            <br/>
                                            - 모의 근로감독, 방문, 유선, 이메일, 의견서 등을 통한 상시적 소통 제공
                                        </p>
                                    </div>
                                </li>
                                <li className="cservice-3" style={styles.csServiceUiLi}>
                                    <div className="sc-icon" style={{marginRight: '30px'}}>
                                        <img src={cs_03} width={'90px'} alt="각종 노동사건 대리 및 대관업무 지원" />
                                    </div>
                                    <div className="cs-txt" style={styles.csTxt}>
                                        <strong style={styles.csTxtStrong}>각종 노동사건 대리 및 대관업무 지원</strong>
                                        <p>
                                            - 부당해고, 부당징계, 부당노동행위 등 노동위원회 사건 대리
                                            <br/>
                                            - 중대재해, 진정, 고소, 고발 등 고용노동청 민원업무 지원
                                            <br/>
                                            - 요양, 휴업, 장해, 유족급여 청구 등 근로복지공단 민원업무 지원
                                        </p>
                                    </div>
                                </li>
                                <li className="cservice-4" style={styles.csServiceUiLi}>
                                    <div className="sc-icon" style={{marginRight: '30px'}}>
                                        <img src={cs_04} width={'90px'} alt="건설안전 관리 및 지도" />
                                    </div>
                                    <div className="cs-txt" style={styles.csTxt}>
                                        <strong style={styles.csTxtStrong}>건설안전 관리 및 지도</strong>
                                        <p>
                                            - 건설재해예방기술지도(공사금액 3억 이상 120억 미만 건설공사)
                                            <br/>
                                            - 건설업 안전관리계획서 및 유해위험방지계획서 작성
                                            <br/>
                                            - 건설업안전컨설팅
                                        </p>
                                    </div>
                                </li>
                                <div style={styles.csServiceUiafter}></div>
                            </ul>
                            <div className="customer">
                                <a href="/" style={styles.customerA}>고객사</a>
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
        width: '52%',
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
        zIndex: 0,
    },
    //2-1
    subConSectionInHello: {
        padding: '80px 0 84px',
        position: 'relative',
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
    cTxt: {
        position: 'relative',
        float: 'left',
        width: '55%',
        marginTop: '40px',
        paddingLeft: '64px',
        boxSizing: "border-box",
        fontSize: '18px',
        lineHeight: 1.4,
        color: '#282828',
    },
    cTxtBefore: {
        content: "",
        display: 'block',
        position: 'absolute',
        top: '5px',
        bottom: '5px',
        left: 0,
        width: '3px',
        backgroundColor: '#00934b',
    },
    cImgImg: {
        width: '45%',
        float: 'right',
        animationName: 'bounce',
        animationDuration: '3s',
        animationIterationCount: 3,
        animationDelay: '1s',
        animationDirection: 'alternate',
        verticalAlign: 'middle',
        border: 0
    },
    //2-2
    vision: {
        backgroundColor: '#f6fbf8',
    },
    visionSubTitle: {
        marginTop: '50px',
        textAlign: 'center',
        margin: 0,
        padding: 0,
        fontSize: '24px',
        lineHeight: 1.3,
        color: '#000',
    },
    //2-3
    csServiceUiafter: {
        content: "",
        display: 'block',
        clear: 'both'
    },
    csServiceUiLi: {
        display: 'flex',
        flexDirection: 'row',
        float: 'left',
        width: '46%',
        margin: '0 0 50px',
    },
    csTxt: {
        fontSize: '18px',
        lineHeight: 1.6,
        color: '#282828',
        textAlign: 'left'
    },
    csTxtStrong: {
        display: 'block',
        fontSize: '24px',
        fontWeight: '500',
        marginBottom: '8px'
    },
    customerA: {
        display: 'block',
        width: '302px',
        height: '70px',
        margin: '80px auto',
        lineHeight: '68px',
        borderRadius: '50px',
        backgroundColor: '#fff',
        border: '2px solid #00934b',
        fontSize: '22px',
        fontWeight: '700',
        color: '#00934b',
        textAlign: 'center',
        verticalAlign: 'initial',
        transition: 'all .3s ease-in',
        boxSizing: 'border-box'
    }
}

export default Company;