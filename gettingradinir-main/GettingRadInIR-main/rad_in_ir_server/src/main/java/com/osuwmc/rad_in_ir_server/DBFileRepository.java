package com.osuwmc.rad_in_ir_server;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

@Repository
public interface DBFileRepository extends JpaRepository<DBFile, String> {

}
