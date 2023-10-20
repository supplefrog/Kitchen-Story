package com.kitchenstory;

public interface UserService {
    User createUser(User user);
    User getUserById(int id);
    User getUserByUsername(String username);
    User updateUser(User user);
    void deleteUser(int id);
}
