import React, { CSSProperties } from "react";
import { Box, Typography } from '@mui/material';

class Section_5 extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return (
            <div style={{
                padding: '100px 0',
                backgroundColor: '#0e110e',
            }}>
                <div style={{
                    maxWidth: '90%',
                    position: 'relative',
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {/* hp-left */}
                    <div style={{
                        width: 'calc(49% - 50px)',
                        float: 'left'
                    }}>
                        <Typography variant="h4" component="h1" sx={{ fontSize: '30px', textAlign: 'left', color: '#fff' }}>
                            특히 회원 가입이 필요한 경우
                        </Typography>
                        <ul style={styles.section5hplistui}>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>1</span>
                                <div style={styles.hplistlidiv}>최근 5년 이내 중대재해발생 사업장· 건설현장의 대표자나 소장 등 관련자</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>2</span>
                                <div style={styles.hplistlidiv}>최근 5년 이내 재해다발사업장·건설현장의 대표자나 소장 등 관련자</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>3</span>
                                <div style={styles.hplistlidiv}>안전관련 조직이 미비한 전문건설회사 대표 및 관련자</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>4</span>
                                <div style={styles.hplistlidiv}>안전의 사각지대인 50인 미만 제조업체(서비스업 포함) 대표자 및 관련자</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>5</span>
                                <div style={styles.hplistlidiv}>관할 인원과 지역이 넓고 신분이 공무원이라 불안한 학교장 및 기관장</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>6</span>
                                <div style={styles.hplistlidiv}>1월에 2회의 안전관리위탁으론 불안한 300인 미만 사업장 대표 및 책임자</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>7</span>
                                <div style={styles.hplistlidiv}>안전 담당자(관리자)로 선임되어 자문 받을 대상이 없어 힘든 경우</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>8</span>
                                <div style={styles.hplistlidiv}>기타 개인적으로 평생안전관리이력이 필요하거나 보완 조치가 필요한 경우</div>
                            </li>
                        </ul>
                    </div>
                    {/* hp-right */}
                    <div style={{
                        width: 'calc(49% - 50px)',
                        float: 'right'
                    }}>
                        <Typography variant="h4" component="h1" sx={{ fontSize: '30px', textAlign: 'left', color: '#fff' }}>
                            스마트안전 시스템의 특장점
                        </Typography>
                        <ul style={styles.section5hplistui}>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>1</span>
                                <div style={styles.hplistlidiv}>중대재해 처벌 등에 관한 법률에 선제적인 대응책</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>2</span>
                                <div style={styles.hplistlidiv}>코로나 시대의 비대면, 양방향, 족집게, 즉답식 안전 관리</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>3</span>
                                <div style={styles.hplistlidiv}>경영책임자 등 개인 위주의 법적 처벌에 대한 풍부한 거증 자료로 활용</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>4</span>
                                <div style={styles.hplistlidiv}>기관장이나 학교장, 현장소장 등은 억울한 징계를 면하는 자료로 활용</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>5</span>
                                <div style={styles.hplistlidiv}>개인 위주의 자료 평생관리</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>6</span>
                                <div style={styles.hplistlidiv}>비전문가 출신 안전담당자의 담당업무를 항시 지원 가능</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>7</span>
                                <div style={styles.hplistlidiv}>노동부 등 각종 감독, 점검에 대한 사전 대안</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>8</span>
                                <div style={styles.hplistlidiv}>담당자나 경영책임자의 안전마인드 형성부터 완벽한 제도 형성까지 안내</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>9</span>
                                <div style={styles.hplistlidiv}>안전과 간단한 노무를 한 곳에서 정리</div>
                            </li>
                            <li style={styles.section5hplistli}>
                                <span style={styles.hplistlispan}>10</span>
                                <div style={styles.hplistlidiv}>긴급 상황이나 재해 발생 시 초등단계에서 보관 중인 자료를 이용, 요청 시 노무사나 변호사 개입</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const styles: {[key in string]: CSSProperties} = {
    section5hplistui: {
        marginTop: '30px',
        padding: 0,
        listStyle: 'none',
    },
    section5hplistli: {
        fontSize: '18px',
        lineHeight: '1.4',
        color: '#fff',
        padding: '15px 0',
        borderBottom: '1px solid #676767',
        display: 'flex',
        // alignItems: 'center'
    },
    hplistlispan: {
        display: 'block',
        width: '20px',
        height: '20px',
        marginTop: '3px',
        marginRight: '10px',
        lineHeight: '20px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        fontSize: '14px',
        fontWeight: '700',
        color: '#000',
        textAlign: 'center'
    },
    hplistlidiv: {
        width: 'calc(100% - 30px)',
        float: 'right',
        textAlign: 'left'
    }
}

export default Section_5;
