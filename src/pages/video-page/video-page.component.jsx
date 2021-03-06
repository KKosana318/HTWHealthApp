import React from 'react';
import ConnectionStatus from '../../components/ConnectionStatus';
import Publisher from '../../components/Publisher';
import Subscriber from '../../components/Subscriber';
// import ReactDOM from 'react-dom';
import { OTSession, OTStreams } from 'opentok-react';
// import App from '../../App';
// import Config from '../../config';
import './video-page.styles.css';

class VideoPage extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null,
      connected: false
    }
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    }
  }
  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }
  render() {
    return (
      <OTSession
        apiKey={ this.props.apiKey }
        sessionId={ this.props.sessionId }
        token={ this.props.token }
        eventHandlers={ this.sessionEvents }
        onError={ this.onError }>
        { this.state.error ? <div id="error">{ this.state.error }</div> : null }
        <ConnectionStatus connected={ this.state.connected } />
        <Publisher />
        <OTStreams>
          <Subscriber />
        </OTStreams>
      </OTSession>
    );
  }
}

export default VideoPage;
