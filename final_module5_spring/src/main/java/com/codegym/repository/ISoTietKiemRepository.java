package com.codegym.repository;

import com.codegym.model.SoTietKiem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ISoTietKiemRepository extends JpaRepository<SoTietKiem, Integer> {

    @Query(value = "select so_tiet_kiem.* from so_tiet_kiem join khach_hang on so_tiet_kiem.khach_hang_id = khach_hang_id where khach_hang.khach_hang_name like %:nameSearch%", nativeQuery = true,
            countQuery = "select count(*) from (select so_tiet_kiem.* from so_tiet_kiem join khach_hang on so_tiet_kiem.khach_hang_id = khach_hang.id where khach_hang.ten_khach_hang like %:nameSearch%) temp_table")
    Page<SoTietKiem> search(Pageable pageable, @Param("nameSearch") String nameSearch);
}
