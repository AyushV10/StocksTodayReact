import Header from './components/Header/Header.jsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Dynamically create a script tag to load the TradingView widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script.async = true;

    // The widget configuration as a JSON object, which needs to be inserted into the script
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      exchange: "BSE",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "100%",
      height: "550",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "rgba(19, 23, 34, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)"
    });
    const script2 = document.createElement('script');
    script2.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
    script2.async = true;

    script2.innerHTML = JSON.stringify({
      exchanges: [],
      dataSource: 'SENSEX',
      grouping: 'sector',
      blockSize: 'market_cap_basic',
      blockColor: 'change',
      locale: 'en',
      symbolUrl: '',
      colorTheme: 'dark',
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      isMonoSize: false,
      width: '100%',
      height: '500',
    });

    // Append the script to the document body
    document.body.appendChild(script);
    document.body.appendChild(script2);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <Header />
      <h2>Core Stocks</h2>
    {/* TradingView Widget */}
    <section id="trading-widgets">
    <div id="trading-view">
    {/* TradingView Widget 1 */}
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
    </div>
    <div id="second-trading-view">
      {/* TradingView Stock Heatmap Widget */}
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
          </a>
        </div>
      </div>
      </div>
    </section>
  </div>
  );
}

export default App;