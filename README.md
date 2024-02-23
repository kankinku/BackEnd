# Linux
## 기본 WSL 버전 설정

> wsl --set-default-version <Version>
> 

## 기본 Linux 배포판 설정

> wsl --set-default <Distribution Name>

## Ubuntu installation

이름 : ubuntu

기본메모리 : 4096M
Processors  : 2개

Virtual Hard disk : 25 GB

디스플레이 탭 클릭

비디오 메모리 : 64MB

ISO image 선택

설치 -> 한국어 -> Ubuntu 설치 <설정한 한국어는 설치과정에만 작용>

Korean - 101/104

Ubuntu 설치 중 업데이트 다운로드 체크 박스 해제

기타 -> 계속하기

/dev/sda

## Linux partitioning

/boot : 500MB, 커널 이미지
SWAP : RAM * 2, 2048
/ : 나머지 영역


> 실제 서비스시 필요함
> 

/home : 사용자의 홈
/usr : 실행파일, 라이브러리 등
/var  : 로그, 메일, www 등


Useraname : ubuntu
Hostname : ubuntu00
Password : 1234
Repeat Password : 1234

### windows powershell에서

> ubuntu config --default-user root
> 

→ 기본적으로 비활성화 되어있는 root계정을 활성화 시키는 것

### ubuntu

> sudo passwd root
> 

→ root계정의 암호를 재설정 하는것

→ **sudo** root계정을 설정하는 명령어

> su -
> 

→ "Substitute User"의 약자이며, 특정 사용자로 전환하거나 (관리자 권한이 있는 경우) root 사용자로 전환하는 명령어 이다.

> cat
> 

→ concatenate의 줄임말로, 파일의 내용을 표준 출력(터미널이나 콘솔)에 보여주는 명령어이다.

> cat > .exrc 
set nu ai sm
^d
> 

" cat > .exrc  

→  명령어는 새로운 `.exrc` 파일을 생성하거나 기존의 `.exrc` 파일을 덮어쓰는 명령어입니다. 

" set nu ai sm

→ nu : 줄 번호를 표시

→ ai : 자동 들여쓰기 활성화

→ sm : 텍스트 변경사항 표시(하단)

" ^d

→ 입력 종료

> cat .exrc
> 

→ cat .exrc 를 실행

> cat > .nanorc
> 

→ 리다이렉션을 의미한다. cat명령어로 출력된 내용을 .nanorc라는 파일에 저장하게 된다.

> set linenumbers
^d
> 

→ nano에서 사용하는 명령어 편집기에서 행 번호를 표시하도록 설정

cat .nanorc

### 장치: 게스트 확장 CD 이미지 삽입

> cd /media/ubuntu(project이름)/VB ~~~
> 

→ 윈도우 창이랑 왔다갔다가 편해짐, 

> ls
> 

> ./VBoxLinuxAdditions.run
> 

→ → 윈도우 창이랑 왔다갔다가 편해짐, 

> cd
> 

→ Home으로 돌아옴

> eject cdrom
> 

→ cdrom 제거

> mkdir /data
> 

→ make directory의 약자로 디렉토리(폴더)를 생성할 때 사용하는 명령어

### 장치 -> 공유폴더 -> 공유폴더 설정

- 다운로드 폴더를 선택하고
마운트 포인트 /data
아래 자동 마운트, 항상 사용하기 선택. (영구사용)

### 장치 -> 클립보드 공유 -> 양방향

### 장치 -> 드래그앤드랍 -> 양방향

——————————————————————

### utm 공유폴더 설정 방법

> mkdir /data
> 

> mount -t 9p -o trans-virtio share /data -oversion=9p2000.L
> 

——————————————————————

> shutdown -r now
> 

→ 바로 끄기

ubuntu 계정으로 로그인 후

$ su -
1234

> cd /data
> 

> ls
> 

> apt -y update; apt -y upgrade
> 

> nano test
^x
^x -> y -> <Enter>
> 

---

> nano /etc/gdm3(windowManeger)/custom.conf
> 

18 [security] 
19 AllowRoot=true

> nano /etc/pam.d(비밀번호 관리자)/gdm-password
> 

3 #auth   required        pam_succeed_if.so user != root quiet_success

(root만 호출?)

^X -> y -> <Enter>

> nano /etc/gdm3/greeter.dconf-defaults
> 

disable-user-list=true ( root아닌user 안보이게 )
29번째 줄 찾아서 주석 제거후

^X -> y -> <Enter> : 저장 후 종료

---

> shutdown -r now
> 

root - 1234

위처럼 입력해서 root로 로그인 합니다.

DHCP ( AP(공유기) - ISP ) : 부팅시 setup을 불러온다.

NAT ( AP-Client ): 가짜 ip 

Bridge (Client - Client): AccessPoint에 모든 Client가 같은 ip를 가지고 연결됨 

> shutdown -h now
> 

Virtualbox -> 네트워크 -> 네트워크 어댑터 사용하기 -> 다음에 연결됨 -> 어댑터에 브리지로 변경

다시 ubuntu를 시작한 후에 root로 로그인

터미널 열어서

> apt -y update
> 

### Github에 meta repository 생성

github Desktop에서 File -> Clone repository -> meta 찾아서 clone

> cd ~/Documents/Github/meta
> 

> ls
> 

> cat [README.md](http://readme.md/)
> 

### ### PowerShell

> ipconfig
> 

### ### Wsl

### ifconfig -a

inet 172.20.10.4

## ubuntu에서

### ifconfig -a

### apt -y install net-tools

### ifconfig -a

enp0s3 172.20.10.5

ip가 같으면 성공
