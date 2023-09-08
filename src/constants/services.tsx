import { ImageURISource } from "react-native";

export interface Service {
    title: string;
    desc: string;
    img: ImageURISource;
    key: number;
}

export const services: Service[] = [
    {
        title: 'Baño de belleza',
        desc: 'Cuidamos cada detalle, desde la limpieza profunda hasta la hidratación con productos suaves y seguros. Tu compañero canino disfrutará de un pelaje suave y brillante, aromas encantadores y una experiencia de bienestar total. Un toque de lujo que refleja la belleza interior y exterior de tu fiel amigo.',
        img: require('../assets/images/beautyBath2.jpg'),
        key: 0,
    },
    {
        title: 'Corte y baño sanitario',
        desc: 'Se trata de un corte diseñado para áreas sensibles como los ojos, las patas y los genitales. Complementado con un baño sanitario, garantizamos la higiene y el bienestar de tu mascota, previniendo el contagio de pulgas y garrapatas.',
        img: require('../assets/images/sanitaryCourt.jpg'),
        key: 1,
    },
    {
        title: 'Baño medicado',
        desc: 'Es un tratamiento con indicación veterinaria que promueve una piel y pelaje saludables para garantizar su bienestar integral.',
        img: require('../assets/images/medicalBath.jpg'),
        key: 3,
    },    
    {
        title: 'Corte de raza',
        desc: 'Este servicio es un arte en sí mismo, ya que realza la belleza y autenticidad de cada raza. Desde elegantes recortes hasta estilos icónicos, respetamos las características únicas de su tipo, creando un look que destaca con elegancia.',
        img: require('../assets/images/breeCut.jpg'),
        key: 4,
    },
    {
        title: 'Peluquería completa',
        desc: 'Este servicio es un mimo completo para tu mascota, con un enfoque integral que combina el arte del corte, el baño y el arreglo en un tratamiento de bienestar. Desde un pelaje lustroso hasta uñas pulidas, brindamos un cuidado de calidad que realza la belleza natural de tu fiel amigo.',
        img: require('../assets/images/completeService.jpg'),
        key: 5,
    },
];
