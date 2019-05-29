import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryProjectNotice() {
  return request('/pro/api/project/notice');
}

export async function queryActivities() {
  return request('/pro/api/activities');
}

export async function queryRule(params) {
  return request(`/pro/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/pro/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/pro/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/pro/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/pro/api/forms', {
    method: 'POST',
    data: params,
  });
}

export async function fakeChartData() {
  return request('/pro/api/fake_chart_data');
}

export async function queryTags() {
  return request('/pro/api/tags');
}

export async function queryBasicProfile(id) {
  return request(`/pro/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/pro/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/pro/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/pro/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/pro/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/pro/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/pro/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function fakeRegister(params) {
  return request('/pro/api/register', {
    method: 'POST',
    data: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/pro/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/pro/api/captcha?mobile=${mobile}`);
}
