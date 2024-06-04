import React from 'react';
import './App.css';

//Header, Footer
import Header from './components/Header';
import Footer from './components/Footer';
//Main
import Section1 from './components/main/Section_1';
import Section2 from './components/main/Section_2';
import Section3 from './components/main/Section_3';
import Section4 from './components/main/Section_4';
import Section5 from './components/main/Section_5';
//소개
import Company from './components/sub/Company';
import Introduction from './components/sub/Introduction';
import History from './components/sub/History';
//이력관리시스탬

//제공서비스

//고객센터


type AppState = {
  // 현재 표시되는 화면 추적
  currentScreen: 'main' | 'company' | 'intro' | 'history' | 'subvice' | 'customer';
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentScreen: 'main',
    };
  }

  handleCurrentScreen = (select : number) => {
    if(select === 0){
      this.setState({
        currentScreen : 'main',
      })
    } else if(select === 1 ){
      this.setState({
        currentScreen : 'company',
      })
    } else if(select === 2 ){
      this.setState({
        currentScreen : 'intro',
      })
    } else if(select === 3 ){
      this.setState({
        currentScreen : 'history',
      })
    } else if(select === 4 ){
      this.setState({
        currentScreen : 'subvice',
      })
    } else if(select === 5 ){
      this.setState({
        currentScreen : 'customer',
      })
    }        
  };


  render(): React.ReactNode {
    const { currentScreen } = this.state;
    return (
      <div className="App">
        <Header 
          handleCurrentScreen = {this.handleCurrentScreen}
        />
        {/* main */}
        {currentScreen === 'main' && (
          <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </>
        )}        
        {/* 회사 소개 */}
        {currentScreen === 'company' &&(
          <Company />
        )}
        {/* 스마트 안전 소개 */}
        {currentScreen === 'intro' &&(
          <Introduction />
        )}
        {/* 이력관리시스탬 */}
        {currentScreen === 'history' &&(
          <History />
        )}
        {/* 제공서비스 */}
        {currentScreen === 'subvice' &&(
          <></>
        )}
        {/* 고객센터 */}
        {currentScreen === 'customer' &&(
          <></>
        )}
        <Footer
          handleCurrentScreen = {this.handleCurrentScreen}
        />
      </div>
    );
  }
}

export default App;
