import reactImg from '../../assets/Stocks.jpg';
import './Header.css';

export default function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>STOCKS TODAY</h1>
        <p>
          The stock market is a device to transfer money from the impatient to the patient.        
        </p>
      </header>
    );
  }