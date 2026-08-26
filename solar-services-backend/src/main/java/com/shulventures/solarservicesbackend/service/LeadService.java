package com.shulventures.solarservicesbackend.service;


import com.shulventures.solarservicesbackend.entity.Lead;
import com.shulventures.solarservicesbackend.repository.LeadRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeadService {

    private final LeadRepository leadRepository;


    // ================= CONSTRUCTOR =================

    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }


    // ================= CREATE =================

    public Lead createLead(Lead lead) {

        return leadRepository.save(lead);
    }


    // ================= GET ALL =================

    public List<Lead> getAllLeads() {

        return leadRepository.findAll();
    }


    // ================= GET BY ID =================

    public Optional<Lead> getLeadById(Long id) {

        return leadRepository.findById(id);
    }


    // ================= UPDATE =================

    public Lead updateLead(Long id, Lead updatedLead) {

        Lead existingLead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Lead not found with id: " + id)
                );


        existingLead.setName(updatedLead.getName());
        existingLead.setContact(updatedLead.getContact());
        existingLead.setEmail(updatedLead.getEmail());
        existingLead.setAddress(updatedLead.getAddress());
        existingLead.setMessage(updatedLead.getMessage());

        existingLead.setStatus(updatedLead.getStatus());

        existingLead.setFollowUpDate(updatedLead.getFollowUpDate());

        existingLead.setVisitDate(updatedLead.getVisitDate());
        existingLead.setVisitTime(updatedLead.getVisitTime());

        existingLead.setServiceDate(updatedLead.getServiceDate());
        existingLead.setServiceTime(updatedLead.getServiceTime());
        existingLead.setServiceType(updatedLead.getServiceType());
        existingLead.setServiceRequirement(
                updatedLead.getServiceRequirement()
        );

        existingLead.setScheduleDate(updatedLead.getScheduleDate());
        existingLead.setScheduleTime(updatedLead.getScheduleTime());
        existingLead.setScheduleType(updatedLead.getScheduleType());

        existingLead.setRemarks(updatedLead.getRemarks());


        return leadRepository.save(existingLead);
    }


    // ================= DELETE =================

    public void deleteLead(Long id) {

        if (!leadRepository.existsById(id)) {

            throw new RuntimeException(
                    "Lead not found with id: " + id
            );
        }

        leadRepository.deleteById(id);
    }

//=== Action Buttons (Existing Leads is updating Instead of Creating New Lead) ============================================

//================= Add First Action Schedule ===================================
    public Lead scheduleLead(Long id, Lead scheduleData) {
        Lead lead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Lead not found with id: " + id
                        )
                );
        lead.setScheduleDate(scheduleData.getScheduleDate());
        lead.setScheduleTime(scheduleData.getScheduleTime());
        lead.setScheduleType(scheduleData.getScheduleType());
        lead.setRemarks(scheduleData.getRemarks());
        lead.setStatus("SCHEDULED");

        return leadRepository.save(lead);
    }

    //============== Create FollowUp of Existing Lead =================

    public Lead reFollowUpLead(Long id, Lead followUpData) {
        Lead lead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Lead not found with id: " + id
                        )
                );
        lead.setFollowUpDate(followUpData.getFollowUpDate());

        lead.setRemarks(followUpData.getRemarks());

        lead.setStatus("FOLLOW_UP");

        return leadRepository.save(lead);
    }

    // ================= CREATE VISIT OF EXISTING LEAD =================

    public Lead visitLead(Long id, Lead visitData) {

        Lead lead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Lead not found with id: " + id)
                );

        lead.setVisitDate(visitData.getVisitDate());
        lead.setVisitTime(visitData.getVisitTime());
        lead.setRemarks(visitData.getRemarks());
        lead.setStatus("VISIT");

        return leadRepository.save(lead);
    }

    
}
