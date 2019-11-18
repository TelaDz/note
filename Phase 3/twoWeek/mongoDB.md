# MongoDB 数据类型

Object  ID ：Documents 自生成的 _id

String： 字符串，必须是utf-8

Boolean：布尔值，true 或者false

Integer：整数 (Int32 Int64 你们就知道有个Int就行了,一般我们用Int32)

Double：浮点数 (没有float类型,所有小数都是Double)

Arrays：数组或者列表，多个值存储到一个键

Object：如果你学过Python的话,那么这个概念特别好理解,就是Python中的字典,这个数据类型就是字典

Null：空数据类型 , 一个特殊的概念,None Null

Timestamp：时间戳

## 数据库常用命令

### Help查看命令提示

- help
- db.help()
- db.test.help()
- db.test.find().help()

use music 创建/切换数据库

show dbs 查询数据库

db/db.getName() 查看当前使用的数据库

db.stats() 显示当前DB状态

db.version() 查看当前DB版本

db.getMongo() 查看当前DB的链接机器地址

db.dropDatabase() 删除数据库

### Collection集合操作

db.createCollection("collName", {size: 20, capped: true, max: 100});  创建一个集合

db.collName.isCapped(); //判断集合是否为定容量

db.getCollection("account"); 得到指定名称的集合

db.getCollectionNames(); 得到当前db的所有集合

db.printCollectionStats(); 显示当前db所有集合的状态

## 添加、修改与删除集合数据

db.users.save({name: ‘zhangsan', age: 25, sex: true});  添加

db.users.update({age: 25}, {$set: {name: 'changeName'}}, false, true); 修改

- 相当于：update users set name = ' changeName' where age = 25;

db.users.update({name: 'Lisi'}, {$inc: {age: 50}}, false, true);

- 相当于：update users set age = age + 50 where name = 'Lisi';

db.users.update({name: 'Lisi'}, {$inc: {age: 50}, $set: {name: 'hoho'}}, false, true);

- 相当于：update users set age = age + 50, name = 'hoho'  where name = 'Lisi';

db.users.remove({age: 132}); 删除

## 集合数据查询

db.userInfo.find();  查询所有记录

- 相当于：select* from userInfo;

db.userInfo.distinct("name");  查询去重后数据

- 相当于：select distict name from userInfo;

db.userInfo.find({"age": 22}); 查询age = 22的记录

- 相当于： select * from userInfo where age = 22;

db.userInfo.find({age: {$gt: 22}}); 查询age > 22的记录

- 相当于：select * from userInfo where age > 22;

db.userInfo.find({age: {$lt: 22}}); 查询age < 22的记录

- 相当于：select * from userInfo where age < 22;

db.userInfo.find({age: {$gte: 25}}); 查询age >= 25的记录

- 相当于：select * from userInfo where age >= 25;

db.userInfo.find({age: {$lte: 25}});  查询age <= 25的记录

db.userInfo.find({age: {$gte: 23, $lte: 26}});  查询name中包含 mongo的数据 查询age >= 23 并且 age <= 26

db.userInfo.find({name: /mongo/});  

- //相当于%% select * from userInfo where name like '%mongo%';

db.userInfo.find({name: /^mongo/}); 查询name中以mongo开头的

- 相当于： select * from userInfo where name like 'mongo%';

db.userInfo.find({}, {name: 1, age: 1}); 查询指定列name、age数据

- 相当于：select name, age from userInfo;

db.userInfo.find({age: {$gt: 25}}, {name: 1, age: 1}); 查询指定列name、age数据, age > 25

- 相当于：select name, age from userInfo where age >25;

升序：db.userInfo.find().sort({age: 1});  按照年龄排序

降序：db.userInfo.find().sort({age: -1});  按照年龄排序

db.userInfo.find({name: 'zhangsan', age: 22});  查询name = zhangsan, age = 22的数据

- 相当于：select * from userInfo where name = 'zhangsan' and age = ’22';

db.userInfo.find().limit(5);  查询前5条数据

- 相当于：select top 5 * from userInfo;

db.userInfo.find().skip(10); 查询10条以后的数据

- 相当于：select \* from userInfo where id not in (select top 10 \* from userInfo);

db.userInfo.find().limit(10).skip(5);  查询在5-10之间的数据

db.userInfo.find({$or: [{age: 22}, {age: 25}]});  or与 查询

- 相当于：select * from userInfo where age = 22 or age = 25;

db.userInfo.findOne();  查询第一条数据

- 相当于：select top 1 * from userInfo;db.userInfo.find().limit(1);

db.userInfo.find({age: {$gte: 25}}).count();  查询某个结果集的记录条数

- 相当于：select count(*) from userInfo where age >= 20;
