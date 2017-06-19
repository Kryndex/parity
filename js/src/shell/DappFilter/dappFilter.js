// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import { observer } from 'mobx-react';
import React from 'react';

import Request from './Request';
import Store from './store';
import styles from './dappFilter.css';

function DappFilter () {
  const store = Store.get();

  if (!store || !store.hasRequests) {
    return null;
  }

  return (
    <div className={ styles.filter }>
      {
        store.requests.map(({ queueId, request: { data } }) => (
          <Request
            className={ styles.request }
            approveRequest={ store.approveRequest }
            denyRequest={ store.rejectRequest }
            key={ queueId }
            queueId={ queueId }
            request={ data }
          />
        ))
      }
    </div>
  );
}

export default observer(DappFilter);