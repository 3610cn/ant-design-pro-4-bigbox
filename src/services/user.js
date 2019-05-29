import request from '@/utils/request';

export async function query() {
  return request('/pro/api/users');
}

export async function queryCurrent() {
  return request('/pro/api/currentUser');
}
