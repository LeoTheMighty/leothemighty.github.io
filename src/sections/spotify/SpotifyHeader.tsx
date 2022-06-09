import React from 'react';
import { SpotifyType } from './types';

type Props = {
  value: SpotifyType;
  setValue: (type: SpotifyType) => void;
};

const SpotifyHeader = ({ value, setValue }: Props) => {
  return (
    <header>
      <div>
        { /* View type */ }
      </div>
      <h2 className="above">
        My Favorite Albums <i className="bi-chevron-down" />

        {/*<button onClick={() => alert('hey')}>*/}
        {/*</button>*/}
      </h2>
      <div>
        <div>
          { /* ??? anything else to go to right? Sort options? */ }
        </div>
      </div>
    </header>
  );
};

export default SpotifyHeader;
