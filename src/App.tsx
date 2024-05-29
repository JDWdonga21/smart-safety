import React from 'react';
import './App.css';

//Header, Footer
import Header from './components/Header';
import Footer from './components/Footer';
//Main
import Section1 from './components/main/Section_1';
//소개

//이력관리시스탬

//제공서비스

//고객센터


class App extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
        {/* main */}
        <Section1 />
        {/* 소개 */}

        {/* 이력관리시스탬 */}

        {/* 제공서비스 */}

        {/* 고객센터 */}
        <Footer />
      </div>
    );
  }
}

export default App;
