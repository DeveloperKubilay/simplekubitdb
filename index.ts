declare module "simplekubitdb" {
  export class kubitdb {
    constructor(file?: string);
    private file: string;
    public set(data: string, value: any): void;
    public ayarla(data: string, value: any): void;
    public fetch(data: string): any;
    public get(data: string): any;
    public bak(data: string): any;
    public al(data: string): any;
    public get(data: string): any;
    public add(data: string, value: number): void;
    public ekle(data: string, value: number): void;
    public subtract(data: string, value: number): void;
    public cıkar(data: string, value: number): void;
    public has(data: string): boolean;
    public varmı(data: string): boolean;
    public json(): void;
    public clear(): void;
    public clearAll(): void;
    public temizle(): void;
    public deleteAll(): void;
    public all(): object;
    public push(array: string, value: any): void;
    public it(array: string, value: any): void;
    public delete(array: string, index: number | string): void;
    public sil(array: string, index: number | string): void;
  }
}