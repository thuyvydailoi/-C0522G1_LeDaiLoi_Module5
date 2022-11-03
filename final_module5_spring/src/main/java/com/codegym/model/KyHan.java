package com.codegym.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;
import java.util.Set;

@Entity
public class KyHan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String tenKyHan;

    @OneToMany(mappedBy = "kyHan")

    @JsonBackReference
    private Set<SoTietKiem> soTietKiems;

    public KyHan() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenKyHan() {
        return tenKyHan;
    }

    public void setTenKyHan(String tenKyHan) {
        this.tenKyHan = tenKyHan;
    }

    public Set<SoTietKiem> getSoTietKiems() {
        return soTietKiems;
    }

    public void setSoTietKiems(Set<SoTietKiem> soTietKiems) {
        this.soTietKiems = soTietKiems;
    }
}