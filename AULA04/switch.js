let nota = 'B'
//A - Ótimo B - Regular C - Ruim

switch (nota) {
    case 'A':
        console.log(`Nota do atendimento: Ótimo`);
        break; //O Break é como se fosse um PARE (o fim do case)

    case 'B':
        console.log(`Nota do atendimento: Regular`);
        break;

    case 'C':
        console.log(`Nota do atendimento: Ruim`);
        break;

    default:
        console.log(`Nota não atribuida.`);
        break;
}


