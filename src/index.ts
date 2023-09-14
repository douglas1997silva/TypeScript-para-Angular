type heroi = {
    name: string;
    vulgo: string;
};

function printObjetos(pessoa:heroi){
    console.log(pessoa);
}
printObjetos({
    name :"bruce wayne",
    vulgo : "batman",
});

//tipos primitivos : boolean , number, string
let ligado : boolean = false 
let num : number = 5.5
let nome : string = "douglas"

//tipos especias
//null
//undefined
let nulo :null = null;
let indefinido: undefined = undefined;


//tipos abrangentes:
//any
//void
let nada :void 
let retornoiw:any = 1


// trabalhando com objetos - sem previsibilidade
let produto : object = {
    name:"felipe",
    cidade: "sp",
    idade:"25",
};
// objeto tipado - com previbilidade
type produtoLoja = {
    nome: string;
    preco: number;
    unidade:number;
}
 
let meuProduto: produtoLoja = {
    nome: "bela prata;",
    preco: 220,
    unidade: 2 ,

}
// trabalhando arrays 

let dados : string[]= ["douglas",'oliveira',"silva"];
let dados2 : Array<string>=["douglas","oliveira",];


//trabalhando com arrays de mult types

let infos:(string|number)[]=["douglas",5,"silva", 25]

// trabalhando tuplas 

let boleto :[string,number,number] = ['agua conta',220.0, 5 ];


//reaproveitando conhecimento de javascript

//trabalhando com dates

let aniversario: Date = new Date('2022-12-01 05:00');
console.log(aniversario.toString());

//funçoes
function addNumber(x:number,y:number): number {
    return x + y ;
}
function addhello (name:string): string{
    return `ola ${name}`
}
console.log(addhello("douglas"))
let soma : number = addNumber(5,7);
console.log(soma)

//fumçoes mult tipos 
function tiposmult (nome:string | Number) : string|number{
    return `ola ${nome}}` ;

}

let tipos : number |string = tiposmult(50)

// funçoes async

async function getbase(params:number):Promise<string | number> {
    return "douglas";
    
}

//interfaces

type robot = {
     readonly id: number ;
    name : string;
}
interface robot2 {
    readonly id : number| string , 
    name: string,
}
const bot : robot = {
    id: 2,
    name: "douglas",
}
 const bot1 : robot2 = {
    id: 1 ,
    name:"douglas",
    
 }

 console.log(bot1);
 console.log(bot);
 class pessoas implements robot2{
    
    id: string | number;
    name: string;
    constructor(id:string|number,name:string){
     this.id = id
     this.name = name
    }
   
 }

 const p = new pessoas(1,"douglas")
  console.log(p)
  //classes
class personagem {
    name?: string ;
    vida: number;
   ataque:number;

   constructor(name:string, vida: number, ataque:number){
       this.name = name
       this.ataque = vida
       this.vida = ataque
   }
    private attack() : void {
       console.log(`o ataque do personagem ${this.ataque}`)
   }

}
const d = new personagem("dodo",10,50)
console.log(p)
console.log(p)


//modificador de acesso 
//public 
//privado
//protected


//subclass

class magia extends personagem {
   magia: number;
   constructor(name:string, 
       vida: number, 
       ataque:number,
       magia:number){
       
       super(name,vida,ataque,)
       this.magia = magia ;
       this.ataque = ataque,
       this.vida = vida

       
   }
}
const magic = new magia("douglass",10,10,10)

//generics
function concatArrsyy<t>(...itens:t[]):t[]{
   return new Array().concat(...itens);

}
const numArrayss = concatArrsyy<number[]>([1,2],[3]);
const arr = concatArrsyy<string[]>(["dodo","douglas"])
console.log(numArrayss)
console.log(arr)


//decoratrs
function exibirNome(target:any){
    console.log(target)
}

@exibirNome
class fucionario {}
@exibirNome
class leite {}

// clas decoration
function api(version:string){
    return (target: any)=>{
        Object.assign(target.prototype,{__version:version})
    }
}

//atributo
function minlength (leite:number){
    return(target:any, key:string)=>{
        let _value = target[key]
        const getter = ( )=> _value
        const setter = (value:string) => {
            if(value.length < leite){
              throw new Error(`Valor minimo para osurio${leite}`);
              
            }else{
                _value = value;
            }
        }
        Object.defineProperty(target,key,{
            get: getter,
            set: setter
        });
    };
}
class apii{
 @minlength(3)
 name: string
 constructor(name:string){
  this.name = name
 }
}
const apiii = new apii("dougls");
console.log(apiii.name)

