import React from "react";
import { Box, Typography } from '@mui/material';

// img
import bubble1 from '../../assets/img/bubbles/bubble1.png';
import bubble2 from '../../assets/img/bubbles/bubble2.png';
import bubble3 from '../../assets/img/bubbles/bubble3.png';

import rightgreen from '../../assets/img/arrows/right-green.svg';

class Section3 extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return(
            <div style={{
                position: 'relative',
                width: '100%',
                margin: '0 auto',
                // padding: '5vh 0'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '90%',
                    margin: '0 auto'
                }}>
                    {/* left */}
                    <div style={{
                        width: '48%',
                        paddingRight: '2%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <Typography variant="h4" component="h1" sx={{ textAlign: 'left' }}>
                            법정안전경영관리
                            <br />
                            <strong>이력관리시스템</strong>
                        </Typography>
                        <Typography variant="body1" sx={{
                            padding: '36px 0 28px',
                            textAlign: 'left',
                            lineHeight: 1.6,
                            fontWeight: '400',
                            color: '#444'
                        }}>
                            풍부한 경험과 노하우를 바탕으로 산업재해로 인한
                            <br/>
                            근로자의 귀중한 생명보호는 물론 공공기관 안전담당자,
                            <br/>
                            기업 내 사업주 및 안전관리자의 '안전관리 근로생애' 를 관리해드립니다.
                        </Typography>
                        <a href="#" style={{color: '#00934b', fontSize: '16px', textAlign: 'left',}}>
                            이력관리시스템 자세히보기
                            <img src={rightgreen} width="8px" alt="바로가기" />
                        </a>
                    </div>
                    {/* right */}
                    <ul style={{
                        width: '52%',
                        display: 'flex',
                        flexDirection: 'column',
                        // alignItems: 'flex-end'
                    }}>
                        <li style={{
                            position: 'relative',
                            marginBottom: '-10%', // 간격 조정
                            textAlign: 'right',
                            width: '100%'
                        }}>
                            <img src={bubble1} width="474px" alt="중대재해처벌 등에 관한 법률이 공포되었던데 어떻게 대비할 수 있을까요?" />
                            <Typography sx={{
                                position: 'absolute',
                                top: '51%',
                                transform: 'translateY(-50%)',
                                right: '118px',
                                color: '#fff',
                                textAlign: 'left',
                                fontSize: '16px'
                            }}>
                                중대재해처벌 등에 관한 법률이
                                <br/>
                                공포되었던데 어떻게 대비할 수 있을까요?
                            </Typography>
                        </li>
                        <li style={{
                            position: 'relative',
                            marginBottom: '-10%', // 간격 조정
                            textAlign: 'left',
                            width: '100%',
                        }}>
                            <img src={bubble2} width="523px" alt="스마트안전의 안전활동이력관리시스템을 활용해  안전활동 자료를 수집˙편집˙저장 및 관리하여 피치 못할 경우를 대비하실 수 있습니다 :)" />
                            <Typography sx={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                left: '20%',
                                right: '20%',
                                color: '#000',
                                textAlign: 'left',
                                fontSize: '16px'
                            }}>
                                스마트안전의 안전활동이력관리 시스템을
                                <br/>
                                활용해 평상의 안전활동 자료를 수집·편집·저장
                                <br/>
                                및 관리한 것을 불시의 안전사고 발생 시
                                <br/>
                                거증자료로 활용하실 수 있습니다 :)
                            </Typography>
                        </li>
                        <li style={{
                            position: 'relative',
                            textAlign: 'right',
                            width: '100%'
                        }}>
                            <img src={bubble3} width="406px" alt="그런 간편하고 좋은 서비스가 있는 줄 몰랐어요! 감사합니다!!" />
                            <Typography sx={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                right: '20%',
                                color: '#fff',
                                textAlign: 'left',
                                fontSize: '16px'
                            }}>
                                그런 간편하고 좋은 서비스가
                                <br/>
                                있는 줄 몰랐어요! 감사합니다!!
                            </Typography>
                        </li>
                    </ul>
                </div>                
            </div>
        )
    }
}

export default Section3;
