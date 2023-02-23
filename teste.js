let teste = 'opseuagmail.com'


try {


    if ((teste.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) ) {
        console.log("Validação de dados aceita")
    } else {
        console.log("Validação de dados aceita")
        throw new error("Validação de dados não aceita");
    }

} catch (error) {


};