package com.curd.simple.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curd.simple.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
}