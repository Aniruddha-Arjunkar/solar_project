package com.shulventures.solarservicesbackend.controller;

import com.shulventures.solarservicesbackend.dto.InvoiceResponse;
import com.shulventures.solarservicesbackend.entity.Invoice;
import com.shulventures.solarservicesbackend.service.InvoiceService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * ============================================================
 * INVOICE CONTROLLER
 * ============================================================
 *
 * API endpoints for Invoice Management.
 *
 * ============================================================
 */

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin(origins = "http://localhost:5173")
public class InvoiceController {


    private final InvoiceService invoiceService;


    public InvoiceController(
            InvoiceService invoiceService
    ) {

        this.invoiceService = invoiceService;
    }


    // ============================================================
    // CREATE INVOICE FOR CLIENT
    // ============================================================

    @PostMapping("/client/{clientId}")
    public ResponseEntity<InvoiceResponse> createInvoice(
            @PathVariable Long clientId,
            @RequestBody Invoice invoice
    ) {

        Invoice savedInvoice =
                invoiceService.createInvoice(
                        clientId,
                        invoice
                );

        InvoiceResponse response =
                invoiceService.toInvoiceResponse(savedInvoice);

        return new ResponseEntity<>(
                response,
                HttpStatus.CREATED
        );
    }

    // ============================================================
    // GET ALL INVOICES
    // ============================================================

    @GetMapping
    public ResponseEntity<List<InvoiceResponse>> getAllInvoices() {

        return ResponseEntity.ok(
                invoiceService.getAllInvoices()
        );
    }


    // ============================================================
    // GET INVOICES OF SPECIFIC CLIENT
    // ============================================================

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<InvoiceResponse>> getInvoicesByClient(
            @PathVariable Long clientId
    ) {

        return ResponseEntity.ok(
                invoiceService.getInvoicesByClient(clientId)
        );
    }


    // ============================================================
    // GET INVOICE BY ID
    // ============================================================
    @GetMapping("/{id}")
    public ResponseEntity<InvoiceResponse> getInvoiceById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                invoiceService.getInvoiceById(id)
        );
    }


    // ============================================================
    // GET INVOICE BY INVOICE NUMBER
    // ============================================================

    @GetMapping("/number/{gstInvoiceNo}")
    public ResponseEntity<InvoiceResponse> getInvoiceByNumber(
            @PathVariable String gstInvoiceNo
    ) {

        return ResponseEntity.ok(
                invoiceService.getInvoiceByNumber(
                        gstInvoiceNo
                )
        );
    }
}
