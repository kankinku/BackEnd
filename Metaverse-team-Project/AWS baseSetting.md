# AWS baseSetting

1. sudo mysql -u root
2. workbench로 이동
    
    ip와 3306포트 입력하고 생성
    
    instance - network에서 3306번 포트를 열어줘야한다. 
    
    → 생성 분야를 mysql 로 설정하면 열림
    
3.  sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf 접속
    1. bind-address = 0.0.0.0 으로 설정
    2. mysqlx-bind-addres = 0.0.0.0 으로 설정
4. sudo systemctl restart mysql → 재시작
5. sudo mysql -u root → mysql root계정으로 접속
6. 9SELECT User, Host FROM mysql.user WHERE User='root'; → root가 어디서 접속이 가능한지 확인
7. UPDATE mysql.user SET Host="%" WHERE User='root'; → root를 어디서든 접속 가능하도록 설정
8. FLUSH PRIVILEGES; → 저장
9. exit → ubuntu로 이동
10. sudo systemctl restart mysql → 재시작 : 8번부터 10번은 세트
11. 5번으로 mysql root에 접속
12. grant all privileges on *.* to 'root'@'%'; 
13. 8~10번 실행
14. alter user 'root'@'%' identified with mysql_native_password by '0000'; → root계정의 비밀번호를 0000으로 설정
15. 8~10

터미널에서 접속할때는 지금부터

→ sudo mysql  -u root -p 

→ 비밀번호 입력

으로 접속한다.