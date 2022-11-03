package com.codegym.service;

import com.codegym.model.SoTietKiem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ISoTietKiemService {
    List<SoTietKiem> showSoTietKiemList();

    void add(SoTietKiem soTietKiem);

    void delete(SoTietKiem soTietKiem);

    void update(SoTietKiem soTietKiem);

    SoTietKiem findById(int id);

    Page<SoTietKiem> search(Pageable pageable, String nameSearch);
}
