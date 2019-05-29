/**
 * 该文件为能力中心输出，供HOST调用
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { reactBridge } from '@lego/bigbox-bridge';
// eslint-disable-next-line import/no-unresolved
import { _DvaContainer as DvaContainer, _onCreate } from '@tmp/dva';
import * as plugins from 'umi/_runtimePlugin';
// eslint-disable-next-line import/no-unresolved
import '@tmp/polyfills';
import './global';
import './global.less';

plugins.init({
  validKeys: [
    'patchRoutes',
    'render',
    'rootContainer',
    'modifyRouteProps',
    'onRouteChange',
    'dva',
    'locale',
  ],
});

// eslint-disable-next-line no-underscore-dangle
_onCreate();

const Router = require('@tmp/router').default;

class A extends React.PureComponent {
  render() {
    return (
      <DvaContainer>
        <Router />
      </DvaContainer>
    );
  }
}

const app = {
  lifeCycles: reactBridge({
    React,
    ReactDOM,
    rootComponent: A,
  }),
  setHost() {},
  dvaApp: {},
};

// 兼容旧的HOST加载方式
window.xxInstance = app;
