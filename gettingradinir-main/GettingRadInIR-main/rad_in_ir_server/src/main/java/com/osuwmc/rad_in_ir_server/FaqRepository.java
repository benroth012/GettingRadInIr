package com.osuwmc.rad_in_ir_server;
import org.springframework.data.repository.CrudRepository;

import com.osuwmc.rad_in_ir_server.Faq;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface FaqRepository extends CrudRepository<Faq, Integer> {

}
