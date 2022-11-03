package com.codegym.repository;

import com.codegym.model.KhachHang;
import com.codegym.service.impl.KhachHangService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IKhachHangRepository extends JpaRepository<KhachHang, Integer> {
}
