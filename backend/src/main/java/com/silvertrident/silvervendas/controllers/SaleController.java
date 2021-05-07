package com.silvertrident.silvervendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silvertrident.silvervendas.dto.SaleDTO;
import com.silvertrident.silvervendas.dto.SaleSuccessDTO;
import com.silvertrident.silvervendas.dto.SaleSumDTO;
import com.silvertrident.silvervendas.service.SaleService;

@RestController
@RequestMapping(value  = "/sales")
public class SaleController {
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageabe){
		Page<SaleDTO> list = service.findAll(pageabe);
		
		return ResponseEntity.ok(list);
		
	}
	
	
	@GetMapping(value="/amaunt-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
		List<SaleSumDTO> list = service.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value="/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller(){
		List<SaleSuccessDTO> list = service.successGroupedBySeller();
		return ResponseEntity.ok(list);
	}
}
