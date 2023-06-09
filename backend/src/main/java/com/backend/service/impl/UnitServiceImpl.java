package com.backend.service.impl;

import com.backend.mapper.UnitMapper;
import com.backend.pojo.Unit;
import com.backend.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class UnitServiceImpl implements UnitService {

    @Autowired
    private UnitMapper unitMapper;


    @Override
    public Map<String, String> addUnit(Map<String, String> map) {

        Map<String, String> resp = new HashMap<>();


        try {
            unitMapper.insertOne(map);
        } catch (Exception e) {
            resp.put("error_info", "插入失败");
            return resp;
        }

        resp.put("error_info", "success");
        return resp;
    }

    @Override
    public List<Unit> getAll() {
        return unitMapper.getAll();
    }

    @Override
    public Map<String, String> delete(Map<String, String> map) {
        Map<String, String> resp = new HashMap<>();
        System.out.println(map);
        try {
            unitMapper.delete(map);
        } catch (Exception e) {
            resp.put("error_info", "删除失败");
            return resp;
        }
        resp.put("error_info", "success");
        return resp;
    }

    @Override
    public Map<String, String> update(Map<String, String> map) {
        Map<String, String> resp = new HashMap<>();
        try {
            unitMapper.update(map);
        } catch (Exception e) {
            resp.put("error_info", "修改失败");
            return resp;
        }
        resp.put("error_info", "success");
        return resp;
    }
}
