import {KhachHang} from './khach-hang';
import {KyHan} from './ky-han';

export interface SoTietKiem {
  id?: number;
  ngayMoSo?: string;
  thoiGianBatDau?: string;
  soTien?: string;
  laiSuat?: string;
  uuDai?: string;
  khachHang?: KhachHang;
  kyHan?: KyHan;
}
