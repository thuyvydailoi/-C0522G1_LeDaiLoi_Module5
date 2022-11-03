package com.codegym.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class KhachHang {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String tenKhachHang;

    @OneToMany(mappedBy = "khachHang")

    @JsonBackReference
    private Set<SoTietKiem> soTietKiems;

    public KhachHang() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenKhachHang() {
        return tenKhachHang;
    }

    public void setTenKhachHang(String tenKhachHang) {
        this.tenKhachHang = tenKhachHang;
    }

    public Set<SoTietKiem> getSoTietKiems() {
        return soTietKiems;
    }

    public void setSoTietKiems(Set<SoTietKiem> soTietKiems) {
        this.soTietKiems = soTietKiems;
    }
}