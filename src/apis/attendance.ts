import { TodayAttendanceData, TodayAttendanceListData } from '@@types/request';
import { IToken } from '@utils/state';
import { getAuthAxios } from './authAxios';
import { toDateString } from '@utils/index';

export function getAttendance(token: IToken) {
  const authAxios = getAuthAxios(token);
  const today = new Date();
  return authAxios
    .get<TodayAttendanceData>(`api/attendance`, {
      params: {
        date: toDateString(today),
      }
    })
    .then((res) => res.data);
}
export function postAttendance(password: string, token: IToken) {
  const authAxios = getAuthAxios(token);
  return authAxios
    .post(
      'api/attendance',
      {
        password: password,
      },
    );
}
export function getAttendanceList(token: IToken) {
  const authAxios = getAuthAxios(token);
  return authAxios
    .get<TodayAttendanceListData>(`/api/attendance/list`)
    .then((res) => res.data);
}

