declare module 'react-slick' {
    import * as React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      [key: string]: any; // 추가적인 설정을 위해
    }
  
    export default class Slider extends React.Component<Settings, any> {}
  }
  