# AWS connect

1. AWS LinghtSail 접속및 회원가입
2. instance생성
    1. Linux , ubuntu로 설정
    
    → 윈도우 터미널의 ubuntu로 연결할 예정
    
3. ubuntu에서 
    
    ```jsx
    vi ~/.ssh/config
    	Hostname aws
    		username : 고정 ip
    		name : ubuntu
    		-> instace의 ip와 이름을 입
    ```
    
    ![Untitled](AWS%20connect%20739ee8e134e64fe38d47101a49d9bc08/Untitled.png)
    
4. 키 생성 (ubuntu)
    
    ![Untitled](AWS%20connect%20739ee8e134e64fe38d47101a49d9bc08/Untitled%201.png)
    
5. pub키 입력 ( instance )
    
    ![Untitled](AWS%20connect%20739ee8e134e64fe38d47101a49d9bc08/Untitled%202.png)
    
    1. connect using SSH 를통해서 터미널 열기
    2. vi ~/.ssh/authorized_keys 를 통해서 vi열기
    3. vi의 o를 통해서 새로운 줄을 열고 거기에 
    4. ubuntu에서 cat ~/.ssh/id_rsa.pub의 값을 붙여넣고 
    5. esc 누르고 ZZ입력으로 저장하고 나가기
6. ubuntu 에서 ssh aws로 접속하면 끝