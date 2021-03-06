import React from 'react';
import { Typography, Input, Button } from 'antd';
import ReactGA from 'react-ga';

const { Title } = Typography;

function SavePlaylist(props) {
  return (
    <div className="rounded-component" style={{ padding: '1em', textAlign: 'center' }}>
      <Title level={3} align="center">
        Save Playlist
      </Title>

      <Input
        className="rounded"
        size="large"
        value={props.name}
        onChange={({ target: { value } }) => {
          props.setName(value);
          ReactGA.event({
            category: 'Save playlist',
            action: 'Change name',
            value: value,
          });
        }}
      />

      {props.isLoggedIn && props.isLoggedIn === true ? (
        <Button type="primary" shape="round" size="large" onClick={props.saveHandler} style={{ marginTop: '1em' }}>
          Save
        </Button>
      ) : (
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={props.saveStateAndLogin}
          style={{ marginTop: '1em' }}
        >
          Log in to save playlist
        </Button>
      )}
    </div>
  );
}

export default React.memo(SavePlaylist);
