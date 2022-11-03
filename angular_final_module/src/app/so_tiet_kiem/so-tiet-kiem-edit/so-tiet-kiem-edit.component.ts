import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {KhachHang} from '../../model/khach-hang';
import {KyHan} from '../../model/ky-han';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-so-tiet-kiem-edit',
  templateUrl: './so-tiet-kiem-edit.component.html',
  styleUrls: ['./so-tiet-kiem-edit.component.css']
})
export class SoTietKiemEditComponent implements OnInit {
  soTietKiemFormGroup: FormGroup;
  id: number;
  danhSachKhachHang: KhachHang[];
  danhSachKyHan: KyHan[];

  constructor(private soTietKiemService: SoTietKiemService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.soTietKiemService.findAllKhachHang().subscribe(value => {
      this.danhSachKhachHang = value;
    });

    this.soTietKiemService.findAllKyHan().subscribe(value => {
      this.danhSachKyHan = value;
    });

    this.id = Number(this.activatedRoute.snapshot.params.id);

    this.soTietKiemService.getById(this.id).subscribe(soTietKiem => {
      this.soTietKiemFormGroup = new FormGroup({
        tenKhachHang: new FormControl(soTietKiem.khachHang.tenKhachHang, Validators.required),
        ngayMoSo: new FormControl(soTietKiem.ngayMoSo, Validators.required),
        thoiGianBatDau: new FormControl(soTietKiem.thoiGianBatDau, Validators.required),
        kyHan: new FormControl(soTietKiem.kyHan.tenKyHan, Validators.required),
        soTien: new FormControl(soTietKiem.soTien, [Validators.required, Validators.pattern('^[1-9]\\d{7}\\d*$')]),
        laiSuat: new FormControl(soTietKiem.laiSuat, [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        uuDai: new FormControl(soTietKiem.uuDai, Validators.required)
      });
    });
  }

  updateSoTietKiem(id: number) {
    const soTietKiem = this.soTietKiemFormGroup.value;
    this.soTietKiemService.updateSoTietKiem(id, soTietKiem).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Sổ tiết kiệm: ' + soTietKiem.id,
        showConfirmButton: false,
        timer: 2500
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật khách hàng thành công!');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
