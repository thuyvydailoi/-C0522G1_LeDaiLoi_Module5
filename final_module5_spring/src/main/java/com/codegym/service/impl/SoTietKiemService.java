package com.codegym.service.impl;

import com.codegym.model.SoTietKiem;
import com.codegym.repository.ISoTietKiemRepository;
import com.codegym.service.ISoTietKiemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public class SoTietKiemService implements ISoTietKiemService {
    @Autowired
    private ISoTietKiemRepository iSoTietKiemRepository;


    @Override
    public List<SoTietKiem> showSoTietKiemList() {
        return iSoTietKiemRepository.findAll();
    }

    @Override
    public void add(SoTietKiem soTietKiem) {
        iSoTietKiemRepository.save(soTietKiem);
    }

    @Override
    public void delete(SoTietKiem soTietKiem) {
        iSoTietKiemRepository.delete(soTietKiem);
    }

    @Override
    public void update(SoTietKiem soTietKiem) {
        iSoTietKiemRepository.save(soTietKiem);
    }

    @Override
    public SoTietKiem findById(int id) {
        return iSoTietKiemRepository.findById(id).orElse(null);
    }


    @Override
    public Page<SoTietKiem> search(Pageable pageable, String nameSearch) {
        return iSoTietKiemRepository.search(pageable, nameSearch);
    }
}
