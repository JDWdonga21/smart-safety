import React from "react";
import {Box, Typography } from '@mui/material';

//img
import s4phone1 from '../../assets/img/s4phone/s4-phone1.png';
import s4phone2 from '../../assets/img/s4phone/s4-phone2.png';

import rightgreen from '../../assets/img/arrows/right-green.svg';

class Section4 extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return(
            <div style={{
                backgroundColor: '#f6fbf8',
                padding: '100px 0',
            }}>
                <div style={{
                    maxWidth: '90%',
                    position: 'relative',
                    width: '100%',
                    margin: '0 auto'
                }}>
                    <Typography variant="h4" component="h1" sx={{textAlign: 'center'}}>
                        믿고 맡길 수 있는
                        <br/>
                        <strong>안전관리 전문가</strong>
                        로 구성
                    </Typography>
                    <div style={{
                        width: '56%',
                        position: 'relative',
                        margin: '0 auto'
                    }}>
                        {/* 첫 사진 */}
                        <div style={{
                            margin: '90px 0 20px',
                        }}>
                            <img src={s4phone1} width={'100%'} alt=""/>
                        </div>
                        {/* 두번째 사진 */}
                        <div style={{
                            position: 'absolute',
                            width: '90%',
                            top: '-42px',
                            right: '-15%',
                        }}>
                            <img src={s4phone2} width={'100%'} alt="" />
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <a href="/" style={{
                            fontSize: '18px',
                            width: '240px',
                            height: '60px',
                            lineHeight: '60px',
                            marginRight: '15px',
                            display: 'inline-block',
                            borderRadius: '50px',
                            backgroundColor: '#fff',
                            border: '1px solid #00934b',
                            color: '#00934b',
                            textAlign: 'center',
                            verticalAlign: 'initial',
                            transition: 'all .3s ease-in',
                            boxSizing: 'border-box',
                            textDecoration: 'none'
                        }}>
                            안전관리 전문기관
                            <img src={rightgreen} width="9px" alt="바로가기" 
                                style={{
                                    transform: 'translateX(10px)',
                                    transition: 'all .3s ease-in',
                                    verticalAlign: 'inherit'
                                }} 
                            />
                        </a>
                        <a href="/" style={{
                            fontSize: '18px',
                            width: '240px',
                            height: '60px',
                            lineHeight: '60px',
                            marginRight: 0,
                            display: 'inline-block',
                            borderRadius: '50px',
                            backgroundColor: '#fff',
                            border: '1px solid #00934b',
                            color: '#00934b',
                            textAlign: 'center',
                            verticalAlign: 'initial',
                            transition: 'all .3s ease-in',
                            boxSizing: 'border-box',
                            textDecoration: 'none'
                        }}>
                            건설재해예방 전문기관
                            <img src={rightgreen} width="9px" alt="바로가기" 
                                style={{
                                    transform: 'translateX(10px)',
                                    transition: 'all .3s ease-in',
                                    verticalAlign: 'inherit'
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section4;