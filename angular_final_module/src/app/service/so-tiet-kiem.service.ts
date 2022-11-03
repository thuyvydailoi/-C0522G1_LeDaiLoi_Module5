import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SoTietKiem} from '../model/so-tiet-kiem';
import {KhachHang} from '../model/khach-hang';
import {KyHan} from '../model/ky-han';

@Injectable({
  providedIn: 'root'
})
export class SoTietKiemService {

  private API_URL = 'http://localhost:3000/';

  constructor(private  httpClient: HttpClient) {
  }

  findAllSoTietKiemSearch(tenKhachHangSearch: string, maSoTietKiemSearch: string): Observable<SoTietKiem[]> {
    return this.httpClient.get<SoTietKiem[]>(this.API_URL + 'danhSachSoTietKiem' +
      '?khachHang.tenKhachHang_like=' + tenKhachHangSearch + '&id_like=' + maSoTietKiemSearch);
  }

  findSoTietKiemSearchPaging(numberRecord: number, curPage: number,
                             tenKhachHangSearch: string, maSoTietKiemSearch: string): Observable<SoTietKiem[]> {
    return this.httpClient.get<SoTietKiem[]>(this.API_URL + 'danhSachSoTietKiem?_page=' + curPage + '&_limit=' + numberRecord +
      '&khachHang.tenKhachHang_like=' + tenKhachHangSearch + '&id_like=' + maSoTietKiemSearch);
  }

  deleteSoTietKiem(id: number): Observable<SoTietKiem> {
    return this.httpClient.delete<SoTietKiem>(this.API_URL + 'danhSachSoTietKiem/' + id);
  }

  findAllKhachHang(): Observable<KhachHang[]> {
    return this.httpClient.get<KhachHang[]>(this.API_URL + 'danhSachKhachHang');
  }

  findAllKyHan(): Observable<KyHan[]> {
    return this.httpClient.get<KyHan[]>(this.API_URL + 'danhSachKyHan');
  }

  updateSoTietKiem(id: number, soTietKiem: SoTietKiem): Observable<SoTietKiem> {
    return this.httpClient.put<SoTietKiem>(this.API_URL + 'danhSachSoTietKiem/' + id, soTietKiem);
  }

  getById(id: number): Observable<SoTietKiem> {
    return this.httpClient.get<SoTietKiem>(this.API_URL + 'danhSachSoTietKiem/' + id);
  }
}
