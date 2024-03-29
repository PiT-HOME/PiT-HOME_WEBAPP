package com.example.PiTHomeIoT.user;

import com.example.PiTHomeIoT.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    // 회원가입
    @PostMapping("/register")
    public Long join(@RequestBody UserRegistrationDto registrationDto) {
        String encodedPassword = passwordEncoder.encode(registrationDto.getPassword());

        User user = User.builder()
                .email(registrationDto.getEmail())
                .password(encodedPassword)
                .name(registrationDto.getName()) // 추가: 이름 설정
                .build();

        return userRepository.save(user).getId();
    }

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user) {
        User member = userRepository.findByEmail(user.get("email"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 E-MAIL 입니다."));

        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }

        return jwtTokenProvider.createToken(member.getUsername());
    }

    @PostMapping("/logout")
    public void logout() {
        // Spring Security가 자동으로 로그아웃 처리를 수행하므로 별도의 작업이 필요 없음
    }

}
