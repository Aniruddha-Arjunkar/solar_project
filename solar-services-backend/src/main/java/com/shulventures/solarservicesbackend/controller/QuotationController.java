package com.shulventures.solarservicesbackend.controller;

import com.shulventures.solarservicesbackend.entity.Quotation;
import com.shulventures.solarservicesbackend.service.QuotationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quotations")
@CrossOrigin(origins = "http://localhost:5173")
public class QuotationController {

    private final QuotationService quotationService;

    public QuotationController(QuotationService quotationService) {
        this.quotationService = quotationService;
    }


    // ================= Create Quotation =================
    @PostMapping("/lead/{leadId}")
    public ResponseEntity<Quotation> createQuotation(
            @PathVariable Long leadId,
            @RequestBody Quotation quotation
    ) {
        Quotation savedQuotation =
                quotationService.createQuotation(
                        leadId,
                        quotation
                );

        return new ResponseEntity<>(
                savedQuotation,
                HttpStatus.CREATED
        );
    }


    // ================= Get all Quotations =================
    @GetMapping
    public ResponseEntity<List<Quotation>> getAllQuotations() {

        return ResponseEntity.ok(
                quotationService.getAllQuotations()
        );
    }


    // ================= Get Quotation by ID =================
    @GetMapping("/{id}")
    public ResponseEntity<Quotation> getQuotationById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(
                quotationService.getQuotationById(id)
        );
    }


    // ================= GET Quotations by lead =================
    @GetMapping("/lead/{leadId}")
    public ResponseEntity<List<Quotation>> getQuotationsByLead(
            @PathVariable Long leadId
    ) {
        return ResponseEntity.ok(
                quotationService.getQuotationsByLead(leadId)
        );
    }
}