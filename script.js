let menu, bebida;
menu = prompt("Taqueria el boss yogurt light menu; tacos de suadero, chicharron, bistec, barbacoa, pastor")
switch (menu){
    case 'chicharron':
        bebida = "¿refresco?";
        break;
    case 'suadero':
        bebida = "¿sangria?";
        break;
    case 'bistec':
       bebida = "¿ Coca Cola?";
        break;
    case 'barbacoa':
        bebida = "¿Un cafecito?";
        break;
    case 'pastor':
        bebida = "¿Agua?";
    break;
    default:
        bebida = " ok esta bien";
    }
alert(bebida);