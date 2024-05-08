let categoriaDeAnimais = 'A3'

switch (categoriaDeAnimais) {
    case 'A1':
        console.log(`Animais: Vertebrados.`);
    break;

    case 'A2':
        console.log(`Animais: Invertebrados.`);
    break;

    case 'A3':
        console.log(`Animais: Onívaros.`);
    break;

    case 'A4':
        console.log(`Animais: Ovíparos.`);
    break;

    case 'A5':
        console.log(`Animais: Herbívoros.`);
    break;

    default:
        console.log(`Categoria de Animal não encontrado. -_-`);
        break;
}