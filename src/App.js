import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'

const streamUrl = 'https://005d29004143.us-east-1.playback.live-video.net/api/video/v1/us-east-1.145578094312.channel.5f2F9HglcLaM.m3u8'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 900 }}>
          <ReactPlayer
            url={ streamUrl }
            width="100%"
            height="100%"
            playing
            />
        </div>
      </header>
    </div>
  );
}

export default App;
