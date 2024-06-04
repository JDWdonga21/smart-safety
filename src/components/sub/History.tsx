import React, { CSSProperties } from "react";
import {Box, Typography } from '@mui/material';

//모달 기능
import Modal from '@mui/material/Modal';

//img
import homebtn from '../../assets/img/companybtn/Home.svg'
import h_01 from '../../assets/img/historyimg/h-01.svg'
import h_02_02 from '../../assets/img/historyimg/h-02-02.svg'
import h_04_02 from '../../assets/img/historyimg/h-04-02.svg'
import h_06 from '../../assets/img/historyimg/h-06.svg'
import { Translate } from "@mui/icons-material";


type HistoryState = {
    isModalOpen: boolean;
    isModal: number;
}

class history extends React.Component<{}, HistoryState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isModalOpen: false,
            isModal: 0,
        };
    }
    handleOpenModal = (num : number) => {
        this.setState({ 
            isModal: num,
            isModalOpen: true 
        });
    };
    
    handleCloseModal = () => {
        this.setState({
            isModalOpen: false
        })
    };

    render(): React.ReactNode {
        const { isModalOpen, isModal } = this.state;
        return(
            <div style={{height: '100%'}}>
                <div style={styles.topMenu}>
                    <div style={styles.topSectionIn}>
                        <h1 style={{
                                margin: 0,
                                padding: '78px 0 30px',
                                fontSize: '40px',  
                                fontWeight: '300',
                                textAlign: 'start'                    
                            }}>
                                법률에 따른 안전경영관리
                            <br/>
                            <strong style={styles.topTitleStrong}>이력관리시스템</strong>
                        </h1>
                        <div className="c-txt" style={styles.cTxt}>
                            <p style={{wordBreak: 'keep-all', margin: 0, textAlign: 'left'}}>
                            현업에서의 풍부한 경험과 노하우 및 사례를 바탕으로 산업재해로 인한 근로자의 귀중한 생명보호와 공공기관 안전담당자 및 기업 내 사업주, 안전관리자의 안전관리 근로생애를 관리해 드리겠습니다.
                            </p>
                        </div>
                        <div className="clear" style={styles.clear} />
                        <div style={styles.location}>
                            <a href="/" style={styles.locationA}>
                                <img src={homebtn} width={'20px'} alt="홈"/>
                            </a>
                            <strong style={styles.locationStrong}>
                                <p style={styles.before}>/</p>
                                이력관리시스템
                            </strong>
                        </div>
                    </div>
                </div>
                <div style={styles.subContainer}>
                    <div className="section-in history-in" style={styles.subConSectionIn}>
                        <div className="history-kinds">
                            <ul style={styles.kindsUl}>
                                <li onClick={()=>this.handleOpenModal(0)} style={styles.kindsLi}>
                                    <img src={h_01} alt="공공기관" style={styles.kindsLiImg}/>
                                    <div style={styles.kindsLiDiv}>
                                        <strong style={{fontSize: '18px'}}>공공기관</strong>
                                        <p style={{fontSize: '18px'}}>기관장, 학교장</p>
                                    </div>
                                    <a href="/" style={styles.kindsLiA}>+</a>
                                </li>
                                <li onClick={()=>this.handleOpenModal(1)} style={styles.kindsLin}>
                                    <img src={h_02_02} alt="제조업" style={styles.kindsLiImg}/>
                                    <div style={styles.kindsLiDiv}>
                                        <strong style={{fontSize: '18px'}}>제조업</strong>
                                        <p style={{fontSize: '18px'}}>기업체, 사업주</p>
                                    </div>
                                    <a href="/" style={styles.kindsLiA}>+</a>
                                </li>
                            </ul>
                        </div>
                        <div className="history-kinds">
                            <ul style={styles.kindsUl}>
                                <li onClick={()=>this.handleOpenModal(2)} style={styles.kindsLi}>
                                    <img src={h_04_02} alt="건설업" style={styles.kindsLiImg}/>
                                    <div style={styles.kindsLiDiv}>
                                        <strong style={{fontSize: '18px'}}>건설업</strong>
                                        <p style={{fontSize: '18px'}}>전문건설, 종합건설대표, 현장소장</p>
                                    </div>
                                    <a href="/" style={styles.kindsLiA}>+</a>
                                </li>
                                <li onClick={()=>this.handleOpenModal(3)} style={styles.kindsLin}>
                                    <img src={h_06} alt="기타" style={styles.kindsLiImg}/>
                                    <div style={styles.kindsLiDiv}>
                                        <strong style={{fontSize: '18px'}}>기타</strong>
                                        <p style={{fontSize: '18px'}}>병원 등 공공시설 사업주</p>
                                    </div>
                                    <a href="/" style={styles.kindsLiA}>+</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 모달 */}
                <Modal
                    open={this.state.isModalOpen}
                    onClose={this.handleCloseModal}
                    style={{ }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="basic-modal" style={styles.basicModal}>
                    <div style={styles.basicModalDiv}>
                        <div className="react-reveal modal pc-modal" style={styles.pcModal}>
                            <div className="pc-m-title" style={styles.pcMTitle}>
                                {isModal === 0 && (
                                    <>
                                        <img src={h_01} alt="공공기관" style={styles.pcMTitleImg}/>
                                        <h1 style={styles.pcMTitleH1}>공공기관</h1>
                                    </>                                    
                                )}
                                 {isModal === 1 && (
                                    <>
                                        <img src={h_02_02} alt="제조업" style={styles.pcMTitleImg}/>
                                        <h1 style={styles.pcMTitleH1}>제조업</h1>
                                    </> 
                                )}
                                 {isModal === 2 && (
                                    <>
                                        <img src={h_04_02} alt="건설업" style={styles.pcMTitleImg}/>
                                        <h1 style={styles.pcMTitleH1}>건설업</h1>
                                    </> 
                                )}
                                 {isModal === 3 && (
                                    <>
                                        <img src={h_06} alt="기타" style={styles.pcMTitleImg}/>
                                        <h1 style={styles.pcMTitleH1}>기타</h1>
                                    </> 
                                )}                                
                            </div>
                            <div className="pc-modal-in" style={styles.pcModalIn}>
                                {isModal === 0 && (
                                    <>
                                        <p>지난 2021.1.26. 중대재해처벌 등에 관한 법률안이 공포되었습니다.
                                            <br/>
                                            동법은 중대산업재해 및 중대시민재해가 발생 되었을 시 사업주와 경 영책임자 등에 대한 처벌, 행정적 제재, 징벌적 손해배상책임 등에 
                                            관 한 내용을 규정함으로써, 중대재해를 예방하고 근로자 등의 생명 보호 를 목적으로 제정되었으며 그 처벌이 엄정 합니다.
                                            <br/>
                                            (*사망자 발생 중대재해 시 1년 이상의 징역 또는 10억원 이하의 벌금, 사망자 발생 이외의 중대재해 시 
                                            7년 이하의 징역 또는 1억원 이하의 벌금, 5년 이내에 다시 같은 죄를 범한 경우 2분의 1까지 가중, 법인에 대한 벌금형과 징벌적 손해배상 별도)
                                        </p>
                                        <p>
                                          재해예방에 필요한 인력 및 예산으로 안전보건관리체계를 구축하고 그 이행에 관한 조치와 안전·보건 관계 법령에 따른 의무 관리 조치 역 시 취하였음에도 발생된 중대재해에 대하여는 그 처벌의 정도가 달라 질 수밖에 없다는 사실에 착안하여,
                                        </p>
                                        <p>                                            
                                            1. 원격 자문, 안전 경영활동 촉진
                                            <br/>
                                            2. 활동내용 수집·가공·편집
                                            <br/>
                                            3. 재직기간 동안 저장
                                            <br/>
                                            4. 유사시 노무사, 변호사 초동단계 공동 지원, 거증자료 활용
                                            <br/>
                                            5. 궁극적 무사고 경영
                                            <br/>
                                        </p>
                                        <p>위 다섯 가지를 가능토록 하는 방안을 마련하였습니다.</p>
                                        <p>
                                            노동부 근로감독관 재직당시(前 서기관) 관할 사업장에서 중대재해가 발생하면 사업장 전체 정상업무가 정지되고, 
                                            책임자는 대책방안도 없이 노동부와 경찰서로 동분서주하다가 제대로 된 거증자료를 제출하지 못한 채 처벌 받는 모습을 
                                            목격해 왔습니다.
                                            <br/>
                                            그저 입만으로 “저는 잘못이 없습니다.”라고 항변하지만 증거 없는 안전활동은 인정해 주지 않습니다.
                                        </p>
                                        <p>
                                            반면 지속적으로 스마트안전의 포인트체크식 안전관리를 받아 둔 것은 예산과 인력을 투입하여 안전관리체계를 
                                            구축하고 법정 의무를 충실히 이행하였다는 명백한 거증자료가 되어, 부득이 안전사고가 발생 할 경 우 개인적으로 
                                            불명예스러운 징계 또는 민사소송 등에서의 억울한 처 벌을 최소화 할 수 있을 것입니다.
                                        </p>
                                        <p>
                                        공공시설의 병원장 및 시설장의 관리 책임하의 직원과 입원시민, 출입 시민 모두의 안전을 누군가 관리를 해 줘야 할 것이나, 일반 기업과 달리 전문 안전관리자가 없는 병원 등 시설에서는 실현이 불가능한 상 태임을 감안하여 스마트안전이 안전경영이력관리시스템(30년 이상 경력자가 전담)을 통하여 안전담당자가 되고 안전지도자가 되어 적극 컨설팅 지원해 드리겠습니다.
                                        </p>
                                    </>
                                )}
                                 {isModal === 1 && (
                                    <>
                                        <p>
                                        중대재해처벌 등에 관한 법률(이하 “중재법”으로 표기)이 공포되었고 2022.1.27.부터는 동 법안이 발효되어지면서 과거 산업안전보건법 하의 벌금형 등 부드러운 처벌은 아득한 희망사항이 되어 버렸습니다.
                                            <br/>
                                            또한 최근(2021.1.12.자) 대법원 양형위원회에서는 산안법 체계 하의 양형 권고내용을 기존 10개월~3년 6개월 수준에서 2년~5년(가중인 경 우)으로 상향 조정한 바 있습니다.
                                        </p>
                                        <p>
                                        안전환경이 이렇게 변화되고 있음에도 불구하고 제조등서비스분야 현 장에서는 80%이상 기업체가 경제적 이유 등을 들어 대책 없이 정부의 시혜적 조정만을 바라고 있는 실정입니다.
                                        <br/>
                                        실제 현장에서 중대재해가 발생되면 회사는 사건 정리와 공장 재개를 위해 동분서주하다가 제대 로 된 소명이나 거증자료도 제출하지 못하고 얼떨결에 법의 판단을 받 게 되는 경우가 많습니다.
                                        </p>
                                        <p>
                                        이젠 회사대표 자신을 위하여 안전관리를 하셔야 합니다. 피치 못할 경우를 대비하여 안전활동 자료도 수집-편집-저장 및 관리하고 적극적 으로 제출하여 소명을 하여야만 살아남아 회사를 장기적으로 경영해 나갈 수 있습니다.
                                        </p>
                                        <p>
                                        이젠 자신을 위하여 안전관리를 하셔야 합니다. 피치 못할 경우를 대비하여 안전활동 자료도 수집-편집-저장 및 관리하고 적극적으로 제출하여 소명을 하여야만 살아남을 수 있습니다.
                                        </p>
                                        <p>
                                        그리고 최근 유행하는 팬데믹에도 흔들리지 않는 안전시스템을 정착시 킬 필요가 있습니다.
                                            <br/>
                                            난제들이 전진을 가로막는 이때, 대표님은 새로운 경영모멘텀을 찾고 그러한 경영을 지속시킬 시스템을 정착시켜야 할 것인데, 그중 하나가 스마트안전의 안전경영이력관리시스템(30년 이상 경력자가 전담)입니다.
                                            <br/>
                                            안전경영이력관리시스템을 활용하여, 평소엔 체 크포인트 방식의 안전관리를 받으며 그 자료를 시스템에 영구 저장하 여 경영생애동안 관리하고, 만약 불가피한 재해가 발생하면 중재법상 “재해예방에 필요한 인력 및 예산 등으로 안전보건관리체계를 구축하 고, 그 이행에 관한 조치를 취하였으며 안전·보건 관계 법령에 따른 의무이행에 필요한 관리상의 조치도 행하였음”에도 발생된 중대재해 라는 사실을 스마트안전 클라우드에 보관된 자료로 증명하여 불이익을 최소화하게 됩니다.
                                        </p>
                                        <p>
                                        회사의 안전에 관한 내용은 저희 안전멘토이자 총무인 스마트안전에 맡기고 오로지 경영에 매진하시기 바랍니다.
                                        </p>
                                    </>
                                )}
                                 {isModal === 2 && (
                                    <>
                                        <p>
                                        중대재해처벌 등에 관한 법률(이하 “중재법”으로 표기)이 공포되었고 2022.1.27.부터는 동 법안이 발효되어지면서 과거 산업안전보건법 하의 벌금형 등 부드러운 처벌은 아득한 희망사항이 되어 버렸습니다.
                                            <br/>
                                            또한 최근(2021.1.12.자) 대법원 양형위원회에서는 산안법 체계 하의 양형 권고내용을 기존 10개월~3년 6개월 수준에서 2년~5년(가중인 경 우)으로 상향 조정한 바 있습니다.
                                        </p>
                                        <p>
                                        안전환경이 이렇게 변화되고 있음에도 불구하고 제조등서비스분야 현 장에서는 80%이상 기업체가 경제적 이유 등을 들어 대책 없이 정부의 시혜적 조정만을 바라고 있는 실정입니다.
                                        <br/>
                                        실제 현장에서 중대재해가 발생되면 회사는 사건 정리와 공장 재개를 위해 동분서주하다가 제대 로 된 소명이나 거증자료도 제출하지 못하고 얼떨결에 법의 판단을 받 게 되는 경우가 많습니다.
                                        </p>
                                        <p>
                                        이젠 회사대표 자신을 위하여 안전관리를 하셔야 합니다. 피치 못할 경우를 대비하여 안전활동 자료도 수집-편집-저장 및 관리하고 적극적 으로 제출하여 소명을 하여야만 살아남아 회사를 장기적으로 경영해 나갈 수 있습니다.
                                        </p>
                                        <p>
                                        이젠 자신을 위하여 안전관리를 하셔야 합니다. 피치 못할 경우를 대비하여 안전활동 자료도 수집-편집-저장 및 관리하고 적극적으로 제출하여 소명을 하여야만 살아남을 수 있습니다.
                                        </p>
                                        <p>
                                        그리고 최근 유행하는 팬데믹에도 흔들리지 않는 안전시스템을 정착시 킬 필요가 있습니다.
                                            <br/>
                                            난제들이 전진을 가로막는 이때, 대표님은 새로운 경영모멘텀을 찾고 그러한 경영을 지속시킬 시스템을 정착시켜야 할 것인데, 그중 하나가 스마트안전의 안전경영이력관리시스템(30년 이상 경력자가 전담)입니다.
                                            <br/>
                                            안전경영이력관리시스템을 활용하여, 평소엔 체 크포인트 방식의 안전관리를 받으며 그 자료를 시스템에 영구 저장하 여 경영생애동안 관리하고, 만약 불가피한 재해가 발생하면 중재법상 “재해예방에 필요한 인력 및 예산 등으로 안전보건관리체계를 구축하 고, 그 이행에 관한 조치를 취하였으며 안전·보건 관계 법령에 따른 의무이행에 필요한 관리상의 조치도 행하였음”에도 발생된 중대재해 라는 사실을 스마트안전 클라우드에 보관된 자료로 증명하여 불이익을 최소화하게 됩니다.
                                        </p>
                                        <p>
                                        회사의 안전에 관한 내용은 저희 안전멘토이자 총무인 스마트안전에 맡기고 오로지 경영에 매진하시기 바랍니다.
                                        </p>
                                    </>
                                )}
                                 {isModal === 3 && (
                                    <>
                                        <p>
                                            지난 2021.1.26. 중대재해처벌 등에 관한 법률안이 공포되었습니다.
                                            <br/>
                                            동법은 중대산업재해 및 중대시민재해가 발생 되었을 시 사업주와 경 영책임자 등에 
                                            대한 처벌, 행정적 제재, 징벌적 손해배상책임 등에 관 한 내용을 규정함으로써, 
                                            중대재해를 예방하고 근로자 등의 생명 보호 를 목적으로 제정되었으며 
                                            그 처벌이 엄정 합니다.
                                            <br/>
                                            (*사망자 발생 중대재해 시 1년 이상의 징역 또는 10억원 이하의 벌금, 
                                            사망자 발생 이외의 중대재해 시 7년 이하의 징역 또는 1억원 이하의 벌금, 
                                            5년 이내에 다시 같은 죄를 범한 경우 2분의 1까지 가중, 
                                            법인에 대한 벌금형과 징벌적 손해배상 별도)
                                        </p>
                                        <p>
                                            재해예방에 필요한 인력 및 예산으로 안전보건관리체계를 구축하고 
                                            그 이행에 관한 조치와 안전·보건 관계 법령에 따른 의무 관리 조치 역 시 
                                            취하였음에도 발생된 중대재해에 대하여는 그 처벌의 정도가 달라 질 수밖에 없다는 
                                            사실에 착안하여,
                                        </p>
                                        <p>
                                            1. 원격 자문, 안전 경영활동 촉진
                                            <br/>
                                            2. 활동내용 수집·가공·편집
                                            <br/>
                                            3. 재직기간 동안 저장
                                            <br/>
                                            4. 유사시 노무사, 변호사 초동단계 공동 지원, 거증자료 활용
                                            <br/>
                                            5. 궁극적 무사고 경영
                                            <br/>
                                        </p>
                                        <p>위 다섯 가지를 가능토록 하는 방안을 마련하였습니다.</p>
                                        <p>
                                            노동부 근로감독관 재직당시(前 서기관) 관할 사업장에서 중대재해가 발생하면 
                                            사업장 전체 정상업무가 정지되고, 책임자는 대책방안도 없이 노동부와 경찰서로 
                                            동분서주하다가 제대로 된 거증자료를 제출하지 못한 채 처벌 받는 모습을 목격해 왔습니다.
                                            <br/>
                                            그저 입만으로 “저는 잘못이 없습니다.”라고 
                                            항변하지만 증거 없는 안전활동은 인정해 주지 않습니다.
                                        </p>
                                        <p>
                                            반면 지속적으로 스마트안전의 포인트체크식 안전관리를 받아 둔 것은 예산과 
                                            인력을 투입하여 안전관리체계를 구축하고 법정 의무를 충실히 이행하였다는 
                                            명백한 거증자료가 되어, 부득이 안전사고가 발생 할 경 우 개인적으로 
                                            불명예스러운 징계 또는 민사소송 등에서의 억울한 처 벌을 최소화 할 수 있을 것입니다.
                                        </p>
                                        <p>
                                            공공시설의 병원장 및 시설장의 관리 책임하의 직원과 입원시민, 
                                            출입 시민 모두의 안전을 누군가 관리를 해 줘야 할 것이나, 
                                            일반 기업과 달리 전문 안전관리자가 없는 병원 등 시설에서는 실현이 불가능한 
                                            상 태임을 감안하여 스마트안전이 안전경영이력관리시스템(30년 이상 경력자가 전담)을 
                                            통하여 안전담당자가 되고 안전지도자가 되어 적극 컨설팅 지원해 드리겠습니다.
                                        </p>
                                    </>
                                )}    
                            </div>
                            <div className="btn-wrap" style={styles.modalBtnWrap}>
                                <button className="modal-btn btn-cancel" onClick={()=>{this.handleCloseModal()}} style={styles.btnCancel}>
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </Modal>
                
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
    cTxt: {

        position: 'relative',
        float: 'left',
        color: '#282828',
        boxSizing: 'border-box',
        width: '80%',
        paddingLeft: 0,
        marginTop: 0,
        fontSize: '16px',
        lineHeight: 1.8
    },
    clear: {
        content: '',
        display: 'block',
        clear: 'both'
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
        marginTop: '300px',
        zIndex: 6,
        display: 'flex',
        unicodeBidi: 'isolate'
    },
    //2-1
    subConSectionIn: {
        padding: '80px 0 84px',
        position: 'relative',
        width: '100%',
        maxWidth: '75%',
        margin: '0 auto',
    },
    kindsUl: {
        marginTop: '15px',
        padding: 0,
        fontSize: 0,
        // listStyle: 'none',
        // boxSizing: 'border-box',
        // height: '100%'
    },
    kindsLi: {
        display: 'inline-block',
        width: '49%',
        height: '100%',
        padding: '52px',
        fontSize: '18px',
        color: '#282828',
        border: '5px solid #f4f4f4',
        boxSizing: 'border-box',
        verticalAlign: 'middle',
        cursor: 'pointer'
    },
    kindsLin: {
        display: 'inline-block',
        width: '49%',
        height: '100%',
        padding: '52px',
        fontSize: '18px',
        color: '#282828',
        border: '5px solid #f4f4f4',
        boxSizing: 'border-box',
        verticalAlign: 'middle',
        cursor: 'pointer',
        marginLeft: '2%'
    },
    kindsLiImg: {
        float: 'left',
        width: '80px',
        marginRight: '20px',
        verticalAlign: 'middle',
        border: 0,
    },
    kindsLiDiv: {
        float: 'left',
        paddingTop: '18px',
        display: 'block',
        unicodeBidi: 'isolate',
        alignItems: 'center'
    },
    kindsLiA: {
        fontSize: '60px',
        fontWeight: '300',
        lineHeight: 1.3,
        float: 'right',
        transition: 'all .3s linear',
        textDecoration: 'none',
        color: '#333'
    },
    // 모달
    basicModal: {
        zIndex: 999,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, .4)'
    },
    basicModalDiv: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        display: 'block',
        unicodeBidi: 'isolate',
        verticalAlign: 'baseline',
        wordBreak: 'keep-all',
        // height: '90vh'
    },
    pcModal: {
        width: '720px',
        // height: '90vh',
        padding: '80px 50px',
        border: '2px solid #00934b',
        boxSizing: 'border-box',
        position: 'static',
        transform: 'none',
        borderRadius: '4px',
    },
    pcMTitle: {
        width: '100%',
        // height: '30vh',
        fontSize: 0,
        display: 'flex',
        unicodeBidi: 'isolate'
    },
    pcModalIn: {
        width: '100%',
        height: '50vh',
        margin: '20px 0 60px',
        padding: '15px 15px 15px 0',
        overflowY: 'scroll'
    },
    modalBtnWrap: {
        // height: '10vh',
        marginBottom: 0,
        // margin: '50px auto 100px 0',
        textAlign: 'center'
    },
    pcMTitleImg: {
        width: '80px',
        marginRight: '20px',
        verticalAlign: 'bottom',
        display: 'inline-block',
        border: 0
    },
    pcMTitleH1: {
        fontSize: '24px',
        paddingBottom: '10px',
    },
    btnCancel: {
        width: '120px',
        height: '40px',
        fontSize: '16px',
        backgroundColor: '#fff',
        border: '1px solid #656565',
        color: '#656565',
        marginRight: '10px',
        display: 'inline-block',
        margin: '0 5px',
        borderRadius: '4px',
        fontWeight: '500',
        textAlign: 'center',
        boxShadow: 'none',
        padding: 0,
        overflow: 'visible',
        cursor: 'pointer'
    }
}

export default history;