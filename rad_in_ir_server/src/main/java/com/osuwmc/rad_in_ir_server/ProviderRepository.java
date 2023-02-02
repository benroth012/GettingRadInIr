package com.osuwmc.rad_in_ir_server;

import org.springframework.data.repository.CrudRepository;

import com.osuwmc.rad_in_ir_server.Provider;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ProviderRepository extends CrudRepository<Provider, Integer> {

}