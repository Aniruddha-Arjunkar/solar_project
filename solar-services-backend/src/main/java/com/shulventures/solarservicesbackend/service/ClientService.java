package com.shulventures.solarservicesbackend.service;

import com.shulventures.solarservicesbackend.entity.Client;
import com.shulventures.solarservicesbackend.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    private final ClientRepository clientRepository;


    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }


    // ==================== CREATE CLIENT ====================

    public Client createClient(Client client) {

        if (client.getApplyGst() == null) {
            client.setApplyGst(false);
        }

        if (client.getAddedBy() == null || client.getAddedBy().isBlank()) {
            client.setAddedBy("ADMIN");
        }

        return clientRepository.save(client);
    }


    // ==================== GET ALL CLIENTS ====================

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }


    // ==================== GET CLIENT BY ID ====================

    public Optional<Client> getClientById(Long id) {
        return clientRepository.findById(id);
    }


    // ==================== GET NON-GST CLIENTS ====================

    public List<Client> getNonGstClients() {
        return clientRepository.findByApplyGst(false);
    }


    // ==================== GET GST CLIENTS ====================

    public List<Client> getGstClients() {
        return clientRepository.findByApplyGst(true);
    }


    // ==================== GET ADMIN CLIENTS ====================

    public List<Client> getAdminClients() {
        return clientRepository.findByAddedBy("ADMIN");
    }


    // ==================== GET VENDOR CLIENTS ====================

    public List<Client> getVendorClients() {
        return clientRepository.findByAddedBy("VENDOR");
    }


    // ==================== UPDATE CLIENT ====================

    public Client updateClient(Long id, Client updatedClient) {

        Client existingClient = clientRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Client not found with id: " + id
                        )
                );

        existingClient.setCustName(updatedClient.getCustName());
        existingClient.setCustPhone(updatedClient.getCustPhone());
        existingClient.setCustEmail(updatedClient.getCustEmail());
        existingClient.setCustAddress(updatedClient.getCustAddress());

        existingClient.setService(updatedClient.getService());
        existingClient.setServiceTermCondition(
                updatedClient.getServiceTermCondition()
        );
        existingClient.setTotalAmount(updatedClient.getTotalAmount());
        existingClient.setWarranty(updatedClient.getWarranty());
        existingClient.setServiceCovered(
                updatedClient.getServiceCovered()
        );
        existingClient.setServiceDate(updatedClient.getServiceDate());

        existingClient.setApplyGst(updatedClient.getApplyGst());
        existingClient.setGstType(updatedClient.getGstType());
        existingClient.setGstAmount(updatedClient.getGstAmount());
        existingClient.setGstInvoiceNo(updatedClient.getGstInvoiceNo());

        existingClient.setBillingAddress(
                updatedClient.getBillingAddress()
        );

        existingClient.setShippingAddress(
                updatedClient.getShippingAddress()
        );

        existingClient.setDocuments(updatedClient.getDocuments());

        existingClient.setConsumerNo(updatedClient.getConsumerNo());
        existingClient.setSubdivision(updatedClient.getSubdivision());
        existingClient.setTechnicalName(updatedClient.getTechnicalName());

        existingClient.setAddedBy(updatedClient.getAddedBy());
        existingClient.setVendorId(updatedClient.getVendorId());

        return clientRepository.save(existingClient);
    }


    // ==================== DELETE CLIENT ====================

    public void deleteClient(Long id) {

        if (!clientRepository.existsById(id)) {
            throw new RuntimeException(
                    "Client not found with id: " + id
            );
        }

        clientRepository.deleteById(id);
    }
}
