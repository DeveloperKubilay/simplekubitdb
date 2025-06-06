## 🔥🔥🔥 SimpleKubitDB is a local database module 🎉  
## It stores your data in `.kubitdb` files — smooth & simple 💾  

---

# 🚀 How to use SimpleKubitDB

```js
const { simplekubitdb } = require('simplekubitdb')
const db = new simplekubitdb("database") // you can change the filename
// or use: const db = new kubitdb("./database.kubitdb") // if you want that cool extension 😎
```
## Set
```js
db.ayarla('test', 'enabled')
db.set('test', 'true')
```
### output:
```txt
test = enabled
```

## Add
```js
db.ekle("money", 30)
db.add("money", 30)
```
### output:
```txt
money = 30
```

## Push
```js
db.push("serverSettings", Date.now())
db.push("serverSettings", Date.now())
```
### output:
```txt
serverSettings = 1653784957913||kubitdbpush||1653784960343
```

## Has
```js
db.varmı("prefix") 
db.has("prefix") 
```
### output:
```txt
true / false
```

## Fetch/Get
```js
db.al("money")
db.bak("money")
db.get("money")
db.fetch("money")
```
### output:
```txt
500
```

## Delete
```js
db.sil("serverStatus")
db.delete("serverStatus")
```
### output:
```txt
(deleted successfully)
```

## subtract
```js
db.cıkar("money", 1)
db.subtract("money", 1)
db.substr("money", 1)
db.sil("serverStatus", 1)
db.delete("serverStatus", 1)
db.del("serverStatus", 1)
```
### output:
```txt
serverStatus = 9
```

## Wipe db
```js
db.temizle()
db.clear()
db.deleteAll()
db.clearAll()
```
### output:
```txt
everything wiped 🔥
```

## Fetch everythink
```js
db.all()
console.log(db.json()) // Convert to JSON, integrate with other DBs, or just flex it 🤖
```
### output:
```txt
money = 500  
test = abc  
bread = {1: "not", 2: "not", 3: "not"}
```

# Made with ❤️ by DeveloperKubilay
