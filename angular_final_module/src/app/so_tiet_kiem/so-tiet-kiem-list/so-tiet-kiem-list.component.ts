import {Component, OnInit} from '@angular/core';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {SoTietKiem} from '../../model/so-tiet-kiem';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-so-tiet-kiem-list',
  templateUrl: './so-tiet-kiem-list.component.html',
  styleUrls: ['./so-tiet-kiem-list.component.css']
})
export class SoTietKiemListComponent implements OnInit {
  maSoTietkiemSearch = '';
  tenKhachHangSearch = '';

  soTietKiemListPaging: SoTietKiem[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  maSoTietKiemDelete: number;

  constructor(private soTietKiemService: SoTietKiemService) {
  }

  ngOnInit(): void {

    this.soTietKiemService.findAllSoTietKiemSearch(this.tenKhachHangSearch, this.maSoTietkiemSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
        console.log(list);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.soTietKiemService.findSoTietKiemSearchPaging(this.numberRecord, this.curPage,
      this.maSoTietkiemSearch, this.tenKhachHangSearch).subscribe(pagingList => {
      this.soTietKiemListPaging = pagingList;
      console.log(pagingList);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị sổ tiết kiệm ở trang ' + this.curPage);
    });
  }

  getInfoSoTietKiemDelete(id: number): void {
    this.maSoTietKiemDelete = id;
  }

  deleteSoTietKiem(): void {
    this.soTietKiemService.deleteSoTietKiem(this.maSoTietKiemDelete).subscribe(() => {
      Swal.fire({
        title: 'Xóa thành công!',
        text: 'Khách hàng:....',
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });

      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previous(): void {
    this.curPage--;
    this.ngOnInit();
  }

  searchByMore(): void {
    this.ngOnInit();
  }
}
