package com.example.PiTHomeIoT.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationDto {
    private String email;
    private String password;
    private String name; // 추가: 이름 필드
}