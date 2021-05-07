package com.silvertrident.silvervendas.dto;

import java.io.Serializable;

import com.silvertrident.silvervendas.entities.Seller;

public class SaleSumDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String sellerName;
	
	private Double saleAllSum;
	
	public SaleSumDTO(){
		
	}

	public SaleSumDTO(Seller seler, Double saleAllSum) {
		this.sellerName = seler.getName();
		this.saleAllSum = saleAllSum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSaleAllSum() {
		return saleAllSum;
	}

	public void setSaleAllSum(Double saleAllSum) {
		this.saleAllSum = saleAllSum;
	}
	
	
	
}
