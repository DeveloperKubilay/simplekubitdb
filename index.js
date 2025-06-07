const fs = require('fs');

const SEPARATOR = '=';
const PUSH_SEPARATOR = '||kubitdbpush||';
const DEFAULT_EXT = '.kubitdb';

class simplekubitdb {
    constructor(file) {
        this.dosya = file || 'database.kubitdb';
        if (!this.dosya.endsWith(DEFAULT_EXT)) this.dosya = this.dosya + DEFAULT_EXT;
        if (!this.dosya.includes("./")) this.dosya = "./" + this.dosya;
        
        try {
            fs.accessSync(this.dosya, fs.constants.F_OK);
        } catch (err) {
            fs.writeFileSync(this.dosya, '');
        }
    }

    set(aranacak, deger) {
        if (!aranacak || deger === undefined) return;
        const isObject = deger !== null && deger.toString() === "[object Object]";
        const value = isObject ? JSON.stringify(deger, null, 0) : deger;
        
        try {
            const b = fs.readFileSync(this.dosya, 'utf8');
            
            if (b === "" || !b.includes(aranacak + SEPARATOR)) {
                const content = b === "" ? 
                    aranacak + SEPARATOR + value : 
                    b + "\n" + aranacak + SEPARATOR + value;
                fs.writeFileSync(this.dosya, content);
                return;
            }
            
            const lines = b.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].split(SEPARATOR)[0] === aranacak) {
                    fs.writeFileSync(
                        this.dosya, 
                        b.replace(
                            lines[i], 
                            aranacak + SEPARATOR + value
                        )
                    );
                    return;
                }
            }
        } catch (err) {
            console.error("Error during set operation:", err);
        }
    }
    
    ayarla(aranacak, deger) { return this.set(aranacak, deger); }
    
    add(aranacak, deger) {
        if (!aranacak || deger === undefined) return;
        
        try {
            const b = fs.readFileSync(this.dosya, 'utf8');
            
            if (b === "" || !b.includes(aranacak + SEPARATOR)) {
                const content = b === "" ? 
                    aranacak + SEPARATOR + deger : 
                    b + "\n" + aranacak + SEPARATOR + deger;
                fs.writeFileSync(this.dosya, content);
                return;
            }
            
            const lines = b.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].split(SEPARATOR)[0] === aranacak) {
                    const currentValue = lines[i].split(SEPARATOR)[1];
                    const newValue = Number(currentValue) + Number(deger);
                    
                    if (isNaN(newValue)) return;
                    
                    fs.writeFileSync(
                        this.dosya,
                        b.replace(
                            lines[i],
                            aranacak + SEPARATOR + newValue
                        )
                    );
                    return;
                }
            }
        } catch (err) {
            console.error("Error during add operation:", err);
        }
    }
    
    ekle(aranacak, deger) { return this.add(aranacak, deger); }
    
    delete(aranacak, deger) {
        if (!aranacak) return;
        
        try {
            const b = fs.readFileSync(this.dosya, 'utf8');
            if (b === "" || !b.includes(aranacak + SEPARATOR)) return;
            
            const lines = b.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].split(SEPARATOR)[0] === aranacak) {
                    if (deger !== undefined) {
                        const currentValue = lines[i].split(SEPARATOR)[1];
                        const newValue = Number(currentValue) - Number(deger);
                        
                        if (isNaN(newValue)) return;
                        
                        fs.writeFileSync(
                            this.dosya,
                            b.replace(
                                lines[i],
                                aranacak + SEPARATOR + newValue
                            )
                        );
                    } else {
                        let newContent;
                        
                        if (i === 0) {
                            newContent = b.replace(lines[i], "").slice(1);
                        } 
                        else if (i === lines.length - 1) {
                            newContent = b.slice(0, -lines[i].length - 1);
                        } 
                        else {
                            newContent = b.replace(lines[i], "").split("\n\n").join("\n");
                        }
                        
                        fs.writeFileSync(this.dosya, newContent);
                    }
                    return;
                }
            }
        } catch (err) {
            console.error("Error during delete operation:", err);
        }
    }
    
    del(aranacak, deger) { return this.delete(aranacak, deger); }
    sil(aranacak, deger) { return this.delete(aranacak, deger); }
    
    subtract(aranacak, deger) {
        if (!aranacak || deger === undefined) return;
        
        try {
            const b = fs.readFileSync(this.dosya, 'utf8');
            
            if (b === "" || !b.includes(aranacak + SEPARATOR)) {
                const content = b === "" ? 
                    aranacak + SEPARATOR + deger : 
                    b + "\n" + aranacak + SEPARATOR + deger;
                fs.writeFileSync(this.dosya, content);
                return;
            }
            
            const lines = b.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].split(SEPARATOR)[0] === aranacak) {
                    const currentValue = lines[i].split(SEPARATOR)[1];
                    const newValue = Number(currentValue) - Number(deger);
                    
                    if (isNaN(newValue)) return;
                    
                    fs.writeFileSync(
                        this.dosya,
                        b.replace(
                            lines[i],
                            aranacak + SEPARATOR + newValue
                        )
                    );
                    return;
                }
            }
        } catch (err) {
            console.error("Error during subtract operation:", err);
        }
    }
    
    cıkar(aranacak, deger) { return this.subtract(aranacak, deger); }
    substr(aranacak, deger) { return this.subtract(aranacak, deger); }
    
    has(aranacak) {
        if (!aranacak) return false;
        
        try {
            const b = fs.readFileSync(this.dosya, 'utf-8');
            return b.includes(aranacak + SEPARATOR);
        } catch (err) {
            console.error("Error during has operation:", err);
            return false;
        }
    }
    
    varmı(aranacak) { return this.has(aranacak); }
    
    get(aranacak) {
        if (!aranacak) return undefined;
        
        try {
            const b = fs.readFileSync(this.dosya, 'utf-8');
            if (!b.includes(aranacak + SEPARATOR)) return undefined;
            
            const lines = b.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].split(SEPARATOR)[0] === aranacak) {
                    const value = lines[i].split(SEPARATOR)[1];
                    
                    if (value.includes(PUSH_SEPARATOR)) {
                        try {
                            const objectItems = value.split(PUSH_SEPARATOR).filter(z => z.includes('{'));
                            const stringItems = value.split(PUSH_SEPARATOR).filter(z => !z.includes('{'));
                            
                            if (objectItems.length > 0) {
                                return JSON.parse("[" + objectItems.join(',') + 
                                    (stringItems.length > 0 ? `,"${stringItems.join('","')}"` : '') + 
                                    "]");
                            } else if (stringItems.length > 0) {
                                return JSON.parse(`["${stringItems.join('","')}"]`);
                            }
                        } catch (jsonErr) {
                            console.error("JSON parse error:", jsonErr);
                            return value;
                        }
                    }
                    
                    if (!isNaN(Number(value))) return Number(value);
                    
                    return value;
                }
            }
        } catch (err) {
            console.error("Error during get operation:", err);
            return undefined;
        }
    }
    
    al(aranacak) { return this.get(aranacak); }
    bak(aranacak) { return this.get(aranacak); }
    fetch(aranacak) { return this.get(aranacak); }
    
    all() { 
        try {
            return fs.readFileSync(this.dosya, 'utf8'); 
        } catch (err) {
            console.error("Error during all operation:", err);
            return "";
        }
    }
    
    temizle() { 
        try {
            fs.writeFileSync(this.dosya, ""); 
        } catch (err) {
            console.error("Error during clean operation:", err);
        }
    }
    
    clear() { this.temizle(); }
    deleteAll() { this.temizle(); }
    clearAll() { this.temizle(); }
    
    json() {
        try {
            const b = fs.readFileSync(this.dosya, 'utf-8');
            if (b === "") return "{}";
            
            let jsonData = {};
            const lines = b.split("\n");
            
            for (let i = 0; i < lines.length; i++) {
                if (!lines[i] || !lines[i].includes(SEPARATOR)) continue;
                
                const key = lines[i].split(SEPARATOR)[0];
                let value = lines[i].split(SEPARATOR)[1];
                
                if (value.includes(PUSH_SEPARATOR)) {
                    try {
                        const objectItems = value.split(PUSH_SEPARATOR).filter(z => z.includes('{'));
                        const stringItems = value.split(PUSH_SEPARATOR).filter(z => !z.includes('{'));
                        
                        if (objectItems.length > 0) {
                            value = JSON.parse("[" + objectItems.join(',') + 
                                (stringItems.length > 0 ? `,"${stringItems.join('","')}"` : '') + 
                                "]");
                        } else if (stringItems.length > 0) {
                            value = JSON.parse(`["${stringItems.join('","')}"]`);
                        }
                    } catch (jsonErr) {
                    }
                } 
                else if (!isNaN(Number(value))) {
                    value = Number(value);
                }
                
                jsonData[key] = value;
            }
            
            return jsonData;
        } catch (err) {
            console.error("Error during JSON conversion:", err);
            return {};
        }
    }
    
    push(aranacak, deger) {
        if (!aranacak || deger === undefined) return;
        
        try {
            const b = fs.readFileSync(this.dosya, 'utf8');
            const isObject = deger !== null && deger.toString() === "[object Object]";
            const valueToAdd = isObject ? JSON.stringify(deger, null, 0) : deger;
            
            if (b === "" || !b.includes(aranacak + SEPARATOR)) {
                const content = b === "" ? 
                    aranacak + SEPARATOR + valueToAdd : 
                    b + "\n" + aranacak + SEPARATOR + valueToAdd;
                fs.writeFileSync(this.dosya, content);
                return;
            }
            
            const lines = b.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].split(SEPARATOR)[0] === aranacak) {
                    const currentValue = lines[i].split(SEPARATOR)[1];
                    const newValue = currentValue + PUSH_SEPARATOR + valueToAdd;
                    
                    fs.writeFileSync(
                        this.dosya,
                        b.replace(
                            lines[i],
                            aranacak + SEPARATOR + newValue
                        )
                    );
                    return;
                }
            }
        } catch (err) {
            console.error("Error during push operation:", err);
        }
    }
    
    it(aranacak, deger) { return this.push(aranacak, deger); }
}

module.exports = simplekubitdb;
