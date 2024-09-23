import z from 'zod';


// nessa parte vamos criar o padrão de dados que gostaria para a validação 
const schema = z.object({
    // esse minimo que coloquei é o numero de letras
    name: z.string().min(2),
    email: z.string().email(),
    //nessa forma o min e max servem para indicar qual será o numero iniciar do number aceito
    // tambem é possivel colocar um .optional() para que o sistema não  trave a verificação
    // outra forma de validar os dados é usando  as siglas gt, gte, lt , lte

    // gt = greater than  --  ele precisa ser maior que o numero informado
    // gte = greater than  or equal -- ele precisa ser maior  ou igual  o numero informado
    // gt = Lower  than ---  ele precisa ser menor que o numero informado
    // gt = lower than   or equal ---  ele precisa ser menor. ou igual ao numero que foi informado 

    idade:z.number().gte(18),
    age: z.number().min(18).max(25).optional(),

    // temos tambem a opção de enviar um dado literal dessa forma o dado recebido precisa ser identico ao solicitado

    city: z.literal('Gramado'),
    // esse opcional do trimm serve para tirar os espações adicionais  no sistema

    description: z.string().trim()

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

