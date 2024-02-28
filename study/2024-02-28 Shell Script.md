# 2024-02-28 Shell Script

more /proc/filesystems : 사용가능한 시스템의 종류를 나타냄

ext : 초기형

ext2 : ext3전까지 표준 파일 시스템 이론적으로 32TB 

ext3 : 

ext4 : 1EB정도 지원가능 1개의 파일이 16TB정도를 처리한다.

XFS : 16EB까지 지원이 가능하다.

> cd /etc/apt
> 

> more sources.list
> 

> apt -y update; apt -y upgrade
> 

> apt-cache stats
> 

> apt-cache show vsftpd
> 

> apt-cache search vsftpd
> 

> apt-cache search xterm
> 

> apt-cache showpkg vsftpd
> 

> apt-get check
> 

> apt-get clean
> 

> apt-get autoclean
> 

> apt -y install xterm
> 

### ### 콘솔에서..

> xterm &
> 

> apt -y remove xterm
> 

> apt-get -y autoremove
> 

> ubuntu iso 넣고
> 

> cd /media/root/Ubuntu\ 22.04.3\ LTS\ amd64/pool/main/n/ncurses/
> 

> ls
> 

> cp libtinfo6_6.3-2ubuntu0.1_i386.deb /tmp
> 

> cd /tmp
> 

> ls
> 

> dpkg -i libtinfo6_6.3-2ubuntu0.1_i386.deb
> 

> eject cdrom
> 

> rm -rf libtinfo6_6.3-2ubuntu0.1_i386.deb
> 

> apt download xterm
> 

> dpkg -i xterm_372-1ubuntu1_amd64.deb
> 

> apt download libutempter0
> 

> dpkg -i libutempter0_1.2.1-2build2_amd64.deb
> 

> dpkg -i xterm_372-1ubuntu1_amd64.deb
> 

> dpkg -r xterm
> 

> dpkg -r libutempter0
> 

> snap install hello-world
> 

> snap find hello-world
> 

> hello-world
> 

> snap info hello-world
> 

> snap remove hello-world
> 

### ### shell script

> cd /work/meta/shells
> 

## [if.sh](http://if.sh/)

#!/bin/bash

man=10
woman=20

if [ $man -lt $woman ]
then
echo woman
fi

> chmod +x *.sh
> 

## [hello.sh](http://hello.sh/)

#!/bin/bash

man=10
woman=20

if [ $man -lt $woman ]
then
echo woman
fi

> !ch
> 

> ./hello.sh
> 

## [str.sh](http://str.sh/)

#!/bin/bash

STR="Have a nice day!!"
echo $STR

## [if1.sh](http://if1.sh/)

#!/bin/bash

echo "File name : $0"
echo "Parameter Count : $#"
echo "All parameter : $@ "

if [ "$1" = ok ]; then
echo "good"
else
echo "bad"
fi

## [ifelif.sh](http://ifelif.sh/)

#!/bin/bash

a=0

echo -n "input : "
read a

if [ $a -ge 90 ]; then
echo A
elif [ $a -ge 80 ]; then
echo B
elif [ $a -ge 70 ]; then
echo C
elif [ $a -ge 60 ]; then
echo D
else

echo F
fi

echo "Thank you~ Bye!"

## [case.sh](http://case.sh/)

#!/bin/bash

case "$1" in
ko) echo "Seoul";;
us) echo "Washington" ;;
cn) echo "Beijing" ;;
jp) echo "Tokyo" ;;
*) echo "Enter the contry name~!!"
esac

## [case1.sh](http://case1.sh/)

#!/bin/bash

a=0

echo -n "input : "
read a

let b=a/10

case $b in
9) echo A ;;
8) echo B ;;
7) echo C ;;
6) echo D ;;
*) echo F ;;
esac

echo "Thank you~ Bye!"

> cp [case.sh](http://case.sh/) case_new.sh
> 

> case_new.sh
> 

#!/bin/bash

if [ $# -eq 0 ]; then
echo "Enter the contry name~!!"
else
case "$1" in
ko) echo "Seoul";;
us) echo "Washington" ;;
cn) echo "Beijing" ;;
jp) echo "Tokyo" ;;
*) echo "Your entry => $1 is not in the list."
esac
fi

## [for.sh](http://for.sh/)

#!/bin/bash

for k in L I N U X
do
echo -n "$k"
done
echo

## [for1.sh](http://for1.sh/)

#!/bin/bash

for k in L I N U X
do
echo "$k"
done

## [for2.sh](http://for2.sh/)

#!/bin/bash

row="one two three"

for mon in $row; do
for ((i=0; i<9; i++)) do
echo "$mon $i"
done
done

## [while.sh](http://while.sh/)

```markdown
#!/bin/bash
a=1
while [ $a != "0" ]; do
echo -n "input : "
read a
if [ $a != "0" ]; then
    for k in 1 2 3 4 5 6 7 8 9
    do
        echo " $a * $k = `expr $a \\* $k `"
    done
fi
done
echo Exit
```

## while_new.sh

```markdown
#!/bin/bash
a=1
while [ $a != "0" ]; do
echo -n "input : "
read a
if [ $a != "0" ]; then
    for ((k=1; k<=9; k++)); do
        echo " $a * $k = `expr $a \\* $k `"
    done
fi
done
echo Exit
```

## [while2.sh](http://while2.sh/)

```markdown
#!/bin/bash
a=1
while [ $a != "0" ]; do
echo -n "input : "
read a
if [ $a -eq 0 ]; then
    break;
elif [ $a -eq 1 ]; then
    echo "The number of inputs must be between 2 and 9."
elif [ $a -gt 9 ]; then
    echo "The number of inputs must be between 2 and 9."
else
    for ((k=1; k<=9; k++)); do
        echo " $a * $k = `expr $a \\* $k `"
    done
fi
done
echo Exit
```

## [while3.sh](http://while3.sh/)

```markdown
#!/bin/bash
a=1
while [ $a != "0" ]; do
echo -n "input : "
read a
if [ $a -eq 0 ]; then
    break;
elif [ $a -lt 0 -o $a -eq 1 -o $a -gt 9 ]; then
    echo "The number of inputs must be between 2 and 9."
else
    for ((k=1; k<=9; k++)); do
        echo " $a * $k = `expr $a \\* $k `"
    done
fi
done
echo Exit
```

## [while4.sh](http://while4.sh/)

```markdown
#!/bin/bash
row=$1
if [ $# -eq 0 ]; then
echo "This program is have to one parameter~!!"
else
while [[ 10 -gt $row ]]; do
echo $row
row=`echo "$row"+1|bc`
done
fi
```

## [file.sh](http://file.sh/)

```markdown
#!/bin/bash
if [ -f /home/$1/.plan ]; then
cat /home/$1/.plan
else
echo "User $1 is not make .plan file."
fi
```

> !ch
> 

> ./file.sh ubuntu
> 

> User ubuntu is not make .plan file.
> 

> cat > ~ubuntu/.plan
> 

> I will go to travel this weekend.
^d
> 

## [dir.sh](http://dir.sh/)

```markdown
#!/bin/bash
if [ -d $1 ]; then
echo "$1 directory is exit~!!"
echo "======================"
echo ls -l $1
else
echo "$1 directory is not exit~!!"
fi
```

./file.sh ubuntu

I will go to travel this weekend.

./dir.sh /work/meta

./dir.sh /work/good

/work/good directory is not exit~!!

## [newerfile.sh](http://newerfile.sh/)

```markdown
#!/bin/bash
file1=$1
file2=$2
if [ $# -eq 2 ]; then
if [ $file1 -nt $file2 ]; then
echo $file1 is newer file than $file2.
else
echo $file2 is newer file than $file1.
fi
else
echo "Input two paramters...!!"
fi
```

> !ch
> 

> chmod +x *.sh
> 

> touch test1 test2
> 

> ./newerfile.sh test1 test2
> 

> test2 is newer file than test1.
> 

> touch test1
> 

> ./newerfile.sh test1 test2
> 

> test1 is newer file than test2.
> 

> ./newerfile.sh test1 test2 test3
> 

> Input two paramters...!!
> 

## [logic.sh](http://logic.sh/)

```markdown
#!/bin/bash
opt=$1
if [ $opt == 'test' -o $opt == "aaa" ]; then
echo good
else
echo bad
fi
```

> ./logic.sh test
> 

> good
> 

> ./logic.sh aaa
> 

> good
> 

> ./logic.sh bbb
> 

> bad
> 

## logic_new.sh

```markdown
#!/bin/bash
opt1=$1
opt2=$2
if [ $# -eq 2 ]; then
if [ $opt1 == 'test' -a $opt2 == "aaa" ]; then
echo good
elif [ $opt1 == 'aaa' -a $opt2 == "test" ]; then
echo good
else
echo bad
fi
else
echo "Input two parameters..!!"
fi
```

## logic_new2.sh

```markdown
#!/bin/bash
opt1=$1
opt2=$2
if [ $# -eq 2 ]; then
if [ $opt1 == 'test' -a $opt2 == "aaa" ] || [ $opt1 == 'aaa' -a $opt2 == "test" ]; then
echo good
else
echo bad
fi
else
echo "Input two parameters..!!"
fi
```

> grep users /etc/group
> 

> /etc/passwd
> 

username:pw:uid:gid:comment:home_directory:shell
-u    -g     -c             -d          -s
-m : make
-k : /etc/skel 외에 다른 곳에서 가져올때

> useradd -u 1001 -g 100 -c "User1" -d /home/user1 -s /bin/bash -m user1
> 

> tail /etc/passwd
> 

> ll /home
> 

> useradd -u 1002 -g 100 -c "User2" -m -k user1 user2
> 

> userdel user2
> 

> rm -rf /home/user2
> 

> userdel -r user1
> 

> ll /home
> 

> tail /etc/passwd
> 

## [useradd.sh](http://useradd.sh/)

```markdown
#!/bin/bash
i=1
uid=$1
cnt=$2
while [ $i -le $cnt ]; do
let uid+=1
useradd -u $uid -g users -d /home/user$i -s /bin/bash -m user$i
passwd -d user$i
let i+=1
done
echo Complete!!
echo tail /etc/passwd
```

# ./useradd.sh 2000 10

## [userdel.sh](http://userdel.sh/)

```markdown
#!/bin/bash
i=1
cnt=$1
while [ $i -le $cnt ]; do
userdel -r user$i
let i+=1
done
echo Complete!!
```

> ./userdelsh 10
> 

## test

The quick brown dog jumps over the lazy fox.
This is a test, this is only a test.
Romeo, Romeo!! Wherefore art thou Romeo?

## [readfile.sh](http://readfile.sh/)

```markdown
#!/bin/bash
count=1
cat test | while read line
do
echo "Line $count : $line"
count=$[ $count + 1 ]
done
echo "Finishing processing the file."
```

> ./readfile.sh
> 

## user.dat

romeo,3001,users,romeo test user
mica,3002,users,mica test user
andrea,3003,users,andrea test user

## useradd_file.sh

```markdown
#!/bin/bash
input="user.dat"
while IFS=',' read -r username uid gid comment
do
echo "Adding $username"
useradd -u "$uid" -g "$gid" -c "$comment" -m "$username"
done < $input
```

IFS (Internal Field Separator)

> ./useradd_file.sh
> 

## userdel_file.sh

```markdown
#!/bin/bash
input="user.dat"
while IFS=',' read -r username uid gid comment
do
userdel -r "$username"
echo "Delete $username"
done < $input
```

> ./userdel_file.sh
> 

> tail -3 /etc/passwd
>