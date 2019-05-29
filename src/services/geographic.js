import request from '@/utils/request';

export async function queryProvince() {
  return request('/pro/api/geographic/province');
}

export async function queryCity(province) {
  return request(`/pro/api/geographic/city/${province}`);
}
