import React from "react";
import { Box, Typography } from '@mui/material';



//img
import sicon1 from '../../assets/img/sicon/sicon1.svg';
import sicon2 from '../../assets/img/sicon/sicon2.svg';
import sicon3 from '../../assets/img/sicon/sicon3.svg';


class Section2 extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return(
            <Box sx={{position: 'relative', padding: '100px 0', backgroundColor: '#f9f9f9', marginTop: '-0.6vh'}}>
                <Box sx={{position: 'relative', maxWidth: '75%', margin: '0 auto'}}>
                    <h1 style={{fontSize: '30px', margin: 0, lineHeight: '1.3', fontWeight: '400', color: '#000', textAlign: 'center'}}> 
                        양방향, 즉답식 안전관리가 가능한
                        <br />
                        <strong> 
                        스마트안전
                        </strong> 
                    </h1>
                    <h6 style={{fontSize: '16px', margin: 0, paddingTop: '16px', paddingBottom: '16px', lineHeight: '1.6', fontWeight: '400', color: '#444', textAlign: 'center'}}>
                        <> 
                        ‘스마트안전’은 사업장 안전관리 솔루션으로써 스마트폰을 이용하여
                        <br />
                        손쉽게 사업장의 안전을 관리하는 모바일 서비스입니다
                        </> 
                    </h6>
                    <ul style={{
                            fontSize: 0, 
                            textAlign: 'center', 
                            listStyle: 'none', 
                            margin:0, 
                            padding: 0,
                            border: 0,
                            verticalAlign: 'baseline',
                            wordBreak: 'keep-all',
                        }}
                    >
                        <li
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                boxShadow: '0 8px 18px rgba(0,0,0,.1)',
                                textAlign: 'center',

                                width: '152px',
                                height: '152px',
                                // paddingTop: '24px',
                                margin: '10px', // 여백 추가
                            }}
                        >
                            <img 
                                src={sicon1} 
                                width={'58px'} 
                                alt='안전관리현황' 
                                style={{
                                    margin: '0 auto 12px',
                                    overflowClipMargin: 'content-box',
                                    overflow: 'clip'
                                }}
                            />
                            <text style={{textAlign: 'center', color: '#000', fontSize: '18px'}}>안전관리현황</text>
                        </li>
                        <li
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                boxShadow: '0 8px 18px rgba(0,0,0,.1)',
                                textAlign: 'center',

                                width: '152px',
                                height: '152px',
                                // paddingTop: '24px',
                                margin: '10px', // 여백 추가
                            }}
                        >
                            <img 
                                src={sicon2} 
                                width={'58px'} 
                                alt='이력관리' 
                                style={{
                                    margin: '0 auto 12px',
                                    overflowClipMargin: 'content-box',
                                    overflow: 'clip'
                                }}
                            />
                            <span style={{textAlign: 'center', color: '#000', fontSize: '18px'}}>이력관리</span>
                        </li>
                        <li
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                boxShadow: '0 8px 18px rgba(0,0,0,.1)',
                                textAlign: 'center',

                                width: '152px',
                                height: '152px',
                                // paddingTop: '24px',
                                margin: '10px', // 여백 추가
                            }}
                        >
                            <img 
                                src={sicon3} 
                                width={'58px'} 
                                alt='이력관리'
                                style={{
                                    margin: '0 auto 12px',
                                    overflowClipMargin: 'content-box',
                                    overflow: 'clip'
                                }} 
                            />
                            <span style={{textAlign: 'center', color: '#000', fontSize: '18px'}}>이력관리</span>
                        </li>
                    </ul>
                </Box>
            </Box>
        );
    }
}

export default Section2;