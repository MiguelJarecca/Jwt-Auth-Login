package com.com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.com.entidad.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserName(String userName);
}
