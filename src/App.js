import './App.css';
import PropTypes from 'prop-types';

function NotificationBanner({ type, message }) {
  return <div className={`banner ${type}`}>{message}</div>;
}

NotificationBanner.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NotificationBanner type="success" message="Success" />
        <NotificationBanner type="error" message="Error" />
        <NotificationBanner type="warning" message="Warning" />
        <NotificationBanner type="info" message="Information" />
      </header>
      <footer>
        <p>Harsayazheni P Y</p>
        <p>212222040052</p>
      </footer>
    </div>
  );
}

export default App;
