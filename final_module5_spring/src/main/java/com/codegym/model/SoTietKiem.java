package com.codegym.model;
import javax.persistence.*;

@Entity
public class SoTietKiem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String ngayMoSo;
    private String thoiGianBatDau;
    private String soTien;
    private String laiSuat;
    private String uuDai;

    @ManyToOne
    @JoinColumn(name = "id", referencedColumnName = "id")
    private KhachHang customer;

    @ManyToOne
    @JoinColumn(name = "ten_ky_han", referencedColumnName = "id")

    private KyHan kyHan;

    public SoTietKiem() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNgayMoSo() {
        return ngayMoSo;
    }

    public void setNgayMoSo(String ngayMoSo) {
        this.ngayMoSo = ngayMoSo;
    }

    public String getThoiGianBatDau() {
        return thoiGianBatDau;
    }

    public void setThoiGianBatDau(String thoiGianBatDau) {
        this.thoiGianBatDau = thoiGianBatDau;
    }

    public String getSoTien() {
        return soTien;
    }

    public void setSoTien(String soTien) {
        this.soTien = soTien;
    }

    public String getLaiSuat() {
        return laiSuat;
    }

    public void setLaiSuat(String laiSuat) {
        this.laiSuat = laiSuat;
    }

    public String getUuDai() {
        return uuDai;
    }

    public void setUuDai(String uuDai) {
        this.uuDai = uuDai;
    }

    public KhachHang getCustomer() {
        return customer;
    }

    public void setCustomer(KhachHang customer) {
        this.customer = customer;
    }

    public KyHan getKyHan() {
        return kyHan;
    }

    public void setKyHan(KyHan kyHan) {
        this.kyHan = kyHan;
    }
}