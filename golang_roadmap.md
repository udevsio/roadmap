# roadmap for gophers


1. Install Ubuntu, Learn Linux commands(**Only install Ubuntu. Do not install other Linux distributions**) 
2. Install Golang with binary file(**Do not use apt, snap**)
   Set environment variables in .bash_profile
   **For example:**
   _export GOPATH=$HOME/projects/go
   export GOROOT=/usr/local/go
   export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin_
3. Syntax (**tour.golang.org**)
4. **_Tasks for syntax_**:
    1. Fibonacci
    2. FizBuzz
    3. Palindrome
    4. Odd even sum
    5. Has duplicate element in array
5. **_Git_**
    1. Learn git commands
    2. Repo
    3. Remote
6. **_Tasks for git_**:
    1. Generate ssh key and add git account(one of them github, bitbucket, gitlab) 
    3. Init
    3. Add
    4. Commit
    5. Add remote 
    6. Push
    7. Pull
    8. Resolve conflict
    9. Merge request
    10. Revert, reset
7. **_Struct in Golang_**:
    1. Contact list
    2. Task list
8. **_Unit Tests in Golang_**
    1. Writing unit tests for Contact List & Task List
9. **_Package managers ( mod )_**
    1. How go packaging works
10. **_Tasks for package management_**
    1. init
    2. install ( add )
    3. update ( update )
11. **_Alya OOP in Golang_**
    1. Struct as Class
    2. Constructor
    3. Interfaces
12. **_Tasks for OOP_**
    1. Director → Team Lead → Programmer
        1. Director → Give dev task (title str) (id int. err error) 
        2. Team Lead → Delegate dev task (step str) ( status str, err error )
        3. Programmer → develop (task_step str) error
13. **_Working with Postgres_**
    1. Models with postgres
    2. Connecting to postgres
    3. Create user, database, table
    4. DDL commands(Create, Drop, Alter, Truncate, Comment, Rename)
    5. DML commands(Insert, Update, Delete, )
    6. DQL commands(Select)
    7. Constraints(check, unique, primary key, foreign key, index ...)
    8. Join (inner join, left join, right join)
    9. Aggregate functions(group by, max, min, count, sum ...)
    10. Ordering 
14. **_Tasks for Postgres_**
    1. Contact list(Add, Update, Delete, List, Get)
    2. Task list(Add, Update, Delete, List, Get)
15. **_gRPC_**
    1. What is the gRPC
    2. Why need gRPC
    3. Protocol buffers(version3)
    4. Generate protocol buffers
16. **_Tasks for gRPC_**
    1. Contact list with gRPC
    2. Task list with gRPC
17. **_Docker_**
    1. Install
    2. Pull image
    3. Run image
    4. Docker-compose
