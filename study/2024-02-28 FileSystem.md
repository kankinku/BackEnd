# 2024-02-28 FileSystem

### ### Filesystem 관리

```markdown
more /proc/filesystems
/etc/fstab // mount 가능한 파일시스템
/etc/mtab // mount 된 파일 시스템
```

```markdown
ls -l /dev/disk/by-uuid
```

```markdown
fdisk -l
```

```markdown
/dev/sda1 /boot
/dev/sda2 swap
/dev/sda3 /
```

### ### 1. partition

```markdown
fdisk /dev/sdb
n
p
1
<enter>
<enter>
p
w
```

### ### 2. create file system

```markdown
mkfs /dev/sdb1
ls -l /dev/disk/by-uuid
rm -rf /work
```

### ### 3. create mount point

```markdown
mkdir /work
```

### ### 4. mounting

```markdown
mount /dev/sdb1 /work
cd /work
ll
df -Th | grep work
```

### ### 5. /etc/fstab에 추가…

> vi /etc/fstab
> 

> 14 /dev/sdb1       /work   ext2    defaults        1       2
> 

> shutdown -r now
> 

> df
> 

> umount /dev/sdb1
> 

> mount /work
> 

> df
> 

> umount /work
> 

> df
> 

> /etc/fstab에 추가했던 마지막 줄 삭제
> 

> fdisk /dev/sdc
> 

> n
<enter>
<enter>
<enter>
+500M
p
n
<enter>
<enter>
<enter>
<enter>
p
w
> 

> mkdir /disk1
> 

> mkdir /disk2-1
> 

> mkdir /disk2-2
> 

> mount /dev/sdb1 /disk1
> 

> mkfs -t ext3 /dev/sdc1
> 

> mkfs.ext4 /dev/sdc2
> 

> mount /dev/sdc1 /disk2-1
> 

> mount /dev/sdc2 /disk2-2
> 

> df -T | grep disk
> 

> umount /disk1
> 

> umount /disk2-1
> 

> umount /disk2-2
> 

> rm -rf /disk*
> 

### ### LVM Volume

> fdisk /dev/sdc
> 

> d
d
p
w
> 

> fdisk /dev/sdb
> 

> d
w
> 

> fdisk /dev/sdb
> 

> n
<enter>
<enter>
<enter>
<enter>
Y
p
t
L
8e
p
w
> 

> fdisk /dev/sdc
> 

> n
<enter>
<enter>
<enter>
<enter>
Y
p
t
L
8e
p
w
> 

> fdisk /dev/sdd
> 

> n
<enter>
<enter>
<enter>
<enter>
p
t
L
8e
p
w
> 

> fdisk /dev/sde
> 

> n
<enter>
<enter>
<enter>
<enter>
p
t
L
8e
p
w
> 

> apt --fix-broken install
> 

> apt -y install lvm2
> 

---

> pvcreate /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1
> 

> pvscan
> 

> vgcreate vg /dev/sdb1 /dev/sdc1 /dev/sdd1
> 

> vgdisplay vg
> 

> vgdisplay -v vg
> 

> lvcreate -l 765 vg -n lvm1
> 

> lvscan
> 

> mkfs.ext4 /dev/vg/lvm1
> 

> mount /dev/vg/lvm1 /work
> 

> df -T | grep work
> 

> cd /work
> 

> git clone [http://github.com/impelfin/meta](http://github.com/impelfin/meta)
> 

> cd meta
> 

> cd
> 

> umount /work
> 

> pvscan
> 

> vgextend vg /dev/sde1
> 

> vgdisplay -v vg
> 

> lvscan
> 

> lvextend -l +255 /dev/vg/lvm1
> 

> lvscan
> 

> mount /dev/vg/lvm1 /work
> 

> df
> 

> resize2fs /dev/vg/lvm1
> 

> e2fsck -f /dev/vg/lvm1
> 

> resize2fs /dev/vg/lvm1
> 

> mount /dev/vg/lvm1 /work
> 

> df
> 

> cd /work/meta
> 

> ls -l /dev/disk/by-uuid/
> 

> f30dbcdc-74ba-4ff7-a9c4-b5772af34e66
> 

> vi /etc/fstab
> 

> 14 UUID=f30dbcdc-74ba-4ff7-a9c4-b5772af34e66  /work           ext4    defaults        1       2
> 

> umount /work
> 

> mount /work
> 

> shutdown -r now
> 

> shutdown -h now
>