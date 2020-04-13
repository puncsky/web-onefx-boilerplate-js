import {clientReactRender} from 'onefx/lib/iso-react-render/client-react-render';
import {noopReducer} from 'onefx/lib/iso-react-render/root/root-reducer';
import React from 'react';
import {AppContainer} from '../../shared/app-container';

clientReactRender({
  VDom: (
    <AppContainer />
  ),
  reducer: noopReducer,
});
