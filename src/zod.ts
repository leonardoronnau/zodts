import z from 'zod';


// nessa parte vamos criar o padrão de dados que gostaria para a validação 
const schema = z.object({
    // esse minimo que coloquei é o numero de letras
    name: z.string().min(2),
    email: z.string().email(),
    //nessa forma o min e max servem para indicar qual será o numero iniciar do number aceito
    age: z.number().min(18).max(25)

})


let dados = {
    name : 'leonardo',
    email : 'leonardo@ronnau.com.br',
    age : 24

}

// nessa forma do SafeParse para verificar os dados é possivel fazer de 2 formas primeira forma é com try catch com parse, porem vai encher de erro caso a validação negar
// a segunda forma seria com safeparse caso a validação esteja false o sistema vai contiunar porem vai aparecer que foi false  no terminal
let resultado = schema.safeParse(dados)


console.log(resultado);

