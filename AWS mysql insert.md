# AWS mysql insert

### apt를 이용해서 다운받는 방식

1. sudo apt update → 관리자 권한으로 업데이트 실행
2. sudo apt install mysql-server → 관리자 권한으로 mysql-server을 설치
3. sudo systemctl start mysql
4. sudo systemctl enable mysql
5. sudo systemctl status mysql
6. sudo mysql -u root
7. 

### brew를 통해서 다운받는 방식

1. brew의 설치
    
    → ubuntu의 비밀번호가 필요하다. 
    
    1. sudo su - → root계정으로 로그인
    2. passwd ubuntu 설정 필
    
    ```powershell
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    
2. 시키는거 실행
    
    ![Untitled](AWS%20mysql%20insert%20c1cadbcbb06e48b2ab846d915857e270/Untitled.png)
    
3. brew install mysql
4. 설치 끝