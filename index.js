// If you have got a problem go to discord.gg/4Xpwwz6pgN
// Version: 1.0.0 Guarded by MIT LICENSE

//First version created in 2 days so nice
const fs = require('fs');//thx fs
class simplekubitdb {constructor(file) {
this.dosya = file || 'database.kubitdb'
if(!this.dosya.endsWith('.kubitdb')) this.dosya = this.dosya + '.kubitdb'
if (!this.dosya.includes('./')) this.dosya = './' + this.dosya
try{fs.readFile(this.dosya, 'utf-8')}catch{fs.appendFile(this.dosya, '', function (err) {})}}//Developed in 10 minutes because I'dont know

set(aranacak, deger) {//Developed in 4 hours
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === ""){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,aranacak+"="+deger)}}//wtf
if(!b.includes(aranacak+"=")){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+deger)}} 
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){ 
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+
b.split("\n")[i].split("=")[1],aranacak+"="+JSON.stringify(deger, null, 0)))}else{
return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+deger))}
}}});return;}
ayarla(aranacak, deger) {
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === ""){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,aranacak+"="+deger)}}
if(!b.includes(aranacak+"=")){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+deger)}} 
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){ 
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+
b.split("\n")[i].split("=")[1],aranacak+"="+JSON.stringify(deger, null, 0)))}else{
return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+deger))}
}}});return;}

add(aranacak, deger) {//Developed in 1 hours
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === "") return fs.writeFileSync(this.dosya,aranacak+"="+deger)
if(!b.includes(aranacak+"=")) return fs.writeFileSync(this.dosya, b+"\n"+aranacak+"="+deger)
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
var eklenicek = Number(b.split("\n")[i].split("=")[1])+Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))
}}})
return;}
ekle(aranacak, deger) {
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === "") return fs.writeFileSync(this.dosya,aranacak+"="+deger)
if(!b.includes(aranacak+"=")) return fs.writeFileSync(this.dosya, b+"\n"+aranacak+"="+deger)
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
var eklenicek = Number(b.split("\n")[i].split("=")[1])+Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))
}}})
return;}

delete(aranacak, deger) {//Developed in 1.5 hours
if (!aranacak) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") || b === "") return;
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){ 
if(deger){
var eklenicek = Number(b.split("\n")[i].split("=")[1])-Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))}else {
if(0 === i){return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i],"").slice(1))}
if(b.split("\n").length === i+1){return fs.writeFileSync(this.dosya, b.slice(0, -b.split("\n")[i].length-1))}
return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i],"").split("\n\n").join("\n"))
}}}});return;}
del(aranacak, deger) {
if (!aranacak) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") || b === "") return;
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){ 
if(deger){
var eklenicek = Number(b.split("\n")[i].split("=")[1])-Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))}else {
if(0 === i){return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i],"").slice(1))}
if(b.split("\n").length === i+1){return fs.writeFileSync(this.dosya, b.slice(0, -b.split("\n")[i].length-1))}
return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i],"").split("\n\n").join("\n"))
}}}});return;}
sil(aranacak, deger) {
if (!aranacak) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") || b === "") return;
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){ 
if(deger){
var eklenicek = Number(b.split("\n")[i].split("=")[1])-Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))}else {
if(0 === i){return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i],"").slice(1))}
if(b.split("\n").length === i+1){return fs.writeFileSync(this.dosya, b.slice(0, -b.split("\n")[i].length-1))}
return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i],"").split("\n\n").join("\n"))
}}}});return;}

subtract(aranacak, deger) {//Developed in 1 minutes because db.add I am paste after copy .d
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === "") return fs.writeFileSync(this.dosya,aranacak+"="+deger)
if(!b.includes(aranacak+"=")) return fs.writeFileSync(this.dosya, b+"\n"+aranacak+"="+deger)
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
var eklenicek = Number(b.split("\n")[i].split("=")[1])-Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))
}}})
return;}
cıkar(aranacak, deger) {
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === "") return fs.writeFileSync(this.dosya,aranacak+"="+deger)
if(!b.includes(aranacak+"=")) return fs.writeFileSync(this.dosya, b+"\n"+aranacak+"="+deger)
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
var eklenicek = Number(b.split("\n")[i].split("=")[1])-Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))
}}})
return;}
substr(aranacak, deger) {
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === "") return fs.writeFileSync(this.dosya,aranacak+"="+deger)
if(!b.includes(aranacak+"=")) return fs.writeFileSync(this.dosya, b+"\n"+aranacak+"="+deger)
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
var eklenicek = Number(b.split("\n")[i].split("=")[1])-Number(deger)
if(isNaN(eklenicek)) return;
fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],aranacak+"="+eklenicek))
}}})
return;}

has(aranacak) {//Very simple
if (!aranacak) return;
var b = fs.readFileSync(this.dosya, 'utf-8')
if(!b.includes(aranacak+"=")) return false;
if(b.includes(aranacak+"=")) return true;
}
varmı(aranacak) {
if (!aranacak) return;
var b = fs.readFileSync(this.dosya, 'utf-8')
if(!b.includes(aranacak+"=")) return false;
if(b.includes(aranacak+"=")) return true;
}

all(){return fs.readFileSync(this.dosya, 'utf8')}//Developed in 2 minutes
temizle(){fs.writeFileSync(this.dosya,"");return;}
clear(){fs.writeFileSync(this.dosya,"");return;}
deleteAll(){fs.writeFileSync(this.dosya,"");return;}
clearAll(){fs.writeFileSync(this.dosya,"");return;}

json() {//Oh, developed in 4.5 hours i not feel good push system not nice but this is so cool
var b = fs.readFileSync(this.dosya, 'utf-8')
if(b === "") return "{}";
for (let i = 0; i < b.split("\n").length; i++) {let yapılcak;
if(!isNaN(Number(b.split("\n")[i].split("=")[1]))) yapılcak = Number(b.split("\n")[i].split("=")[1])+","
if(isNaN(Number(b.split("\n")[i].split("=")[1]))) yapılcak = `"`+b.split("\n")[i].split("=")[1]+`",`
if(b.split("\n")[i].split("=")[1].includes("||kubitdbpush||")){
yapılcak = "["+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => z.includes(`{`)).join(`,`)+`,"`+
b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]]`//wtf
if(yapılcak.startsWith("[,")) yapılcak = `["`+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]]`}
else{yapılcak = b.split("\n")[i].split("=")[1]+","} b = b.split(b.split("\n")[i]).join(b.split("\n")[i].split("=")[0]+`=`+yapılcak)}
return JSON.parse((`{"`+b.slice(0, -1)+`}`).split("\n").join(`\n"`).split("=").join(`":`))
}

push(aranacak, deger) {//Developed in 2.5 hours ;)
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === ""){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,aranacak+"="+deger)}}
if(!b.includes(aranacak+"=")){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+deger)}}  
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],
aranacak+"="+b.split("\n")[i].split("=")[1]+"||kubitdbpush||"+JSON.stringify(deger, null, 0)))}else{
return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],
aranacak+"="+b.split("\n")[i].split("=")[1]+"||kubitdbpush||"+deger))} 
}}})}
it(aranacak, deger) {
if (!aranacak || !deger) return;
fs.readFile(this.dosya, 'utf8', (err, b) => {
if(!b.includes(aranacak+"=") && b === ""){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,aranacak+"="+deger)}}
if(!b.includes(aranacak+"=")){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+JSON.stringify(deger, null, 0))}else{
return fs.writeFileSync(this.dosya,b+"\n"+aranacak+"="+deger)}}  
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
if(deger.toString() === "[object Object]"){return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],
aranacak+"="+b.split("\n")[i].split("=")[1]+"||kubitdbpush||"+JSON.stringify(deger, null, 0)))}else{
return fs.writeFileSync(this.dosya, b.replace(b.split("\n")[i].split("=")[0]+"="+b.split("\n")[i].split("=")[1],
aranacak+"="+b.split("\n")[i].split("=")[1]+"||kubitdbpush||"+deger))} 
}}})}

get(aranacak) {//Developed in 1 hours -_-
if (!aranacak) return;
var b = fs.readFileSync(this.dosya, 'utf-8')
if(!b.includes(aranacak+"=")) return "undefined";
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
if(b.split("\n")[i].split("=")[1].includes("||kubitdbpush||")){
try{return JSON.parse("["+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => z.includes(`{`)).join(`,`)+`,"`+
b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}
catch{if(b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`))){
return JSON.parse(`["`+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}}}
if(!isNaN(Number(b.split("\n")[i].split("=")[1])))  return Number(b.split("\n")[i].split("=")[1])
return b.split("\n")[i].split("=")[1]
}}}
al(aranacak) {
if (!aranacak) return;
var b = fs.readFileSync(this.dosya, 'utf-8')
if(!b.includes(aranacak+"=")) return "undefined";
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
if(b.split("\n")[i].split("=")[1].includes("||kubitdbpush||")){
try{return JSON.parse("["+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => z.includes(`{`)).join(`,`)+`,"`+
b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}
catch{if(b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`))){
return JSON.parse(`["`+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}}}
if(!isNaN(Number(b.split("\n")[i].split("=")[1])))  return Number(b.split("\n")[i].split("=")[1])
return b.split("\n")[i].split("=")[1]
}}}
bak(aranacak) {
if (!aranacak) return;
var b = fs.readFileSync(this.dosya, 'utf-8')
if(!b.includes(aranacak+"=")) return "undefined";
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
if(b.split("\n")[i].split("=")[1].includes("||kubitdbpush||")){
try{return JSON.parse("["+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => z.includes(`{`)).join(`,`)+`,"`+
b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}
catch{if(b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`))){
return JSON.parse(`["`+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}}}
if(!isNaN(Number(b.split("\n")[i].split("=")[1])))  return Number(b.split("\n")[i].split("=")[1])
return b.split("\n")[i].split("=")[1]
}}}
fetch(aranacak) {
if (!aranacak) return;
var b = fs.readFileSync(this.dosya, 'utf-8')
if(!b.includes(aranacak+"=")) return "undefined";
for (let i = 0; i < b.split("\n").length; i++) {
if(b.split("\n")[i].split("=")[0] === aranacak){
if(b.split("\n")[i].split("=")[1].includes("||kubitdbpush||")){
try{return JSON.parse("["+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => z.includes(`{`)).join(`,`)+`,"`+
b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}
catch{if(b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`))){
return JSON.parse(`["`+b.split("\n")[i].split("=")[1].split("||kubitdbpush||").filter(z => !z.includes(`{`)).join(`","`)+`"]`)}}}
if(!isNaN(Number(b.split("\n")[i].split("=")[1])))  return Number(b.split("\n")[i].split("=")[1])
return b.split("\n")[i].split("=")[1]
}}}

}module.exports = { simplekubitdb };
/*/// The finish, Developed by kubi and thx reading code :)
  ____                              _         ____  _             _ _       
 |  _ \  __ _ _ __   __ _  ___ _ __(_) ___   / ___|| |_ _   _  __| (_) ___  
 | | | |/ _` | '_ \ / _` |/ _ \ '__| |/ _ \  \___ \| __| | | |/ _` | |/ _ \ 
 | |_| | (_| | | | | (_| |  __/ |  | | (_) |  ___) | |_| |_| | (_| | | (_) |
 |____/ \__,_|_| |_|\__, |\___|_|  |_|\___/  |____/ \__|\__,_|\__,_|_|\___/ 
                    |___/  

*///                Discord:https://discord.gg/4Xpwwz6pgN