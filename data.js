module.exports = function () {
    var data = {
        alimentos: [
            {
                id: "AL001",
                nameAlimento: "Manzana",
                cal: 83,
            },
            {
                id: "AL002",
                nameAlimento: "Huevo",
                cal: 79,
            },
            {
                id: "AL003",
                nameAlimento: "Pollo",
                cal: 120,
            },
            {
                id: "AL004",
                nameAlimento: "Arroz",
                cal: 228,
            },
            {
                id: "AL005",
                nameAlimento: "Pera",
                cal: 57,
            },
            {
                id: "AL006",
                nameAlimento: "Carne",
                cal: 250,
            },
            {
                id: "AL007",
                nameAlimento: "Pescado",
                cal: 90,
            },
            {
                id: "AL008",
                nameAlimento: "Leche",
                cal: 100,
            }
        ],
        usuarios: [
            {
                id: 1,
                nameUsuario: "Damian Robinson",
                emailUsuario: "damianrobinson@gmail.com",
                pesoUsuario: 80,
                estaturaUsuario: 170
            },
            {
                id: 2,
                nameUsuario: "Dorian Velasquez",
                emailUsuario: "dorianvelasquez@hotmail.com",
                pesoUsuario: 68,
                estaturaUsuario: 180
            },
            {
                id: 3,
                nameUsuario: "Kristen Yang",
                emailUsuario: "kristenyang@outlook.com",
                pesoUsuario: 65,
                estaturaUsuario: 179
            },
            {
                id: 4,
                nameUsuario: "Troy Waters",
                emailUsuario: "troywaters4062@gmail.com",
                pesoUsuario: 69,
                estaturaUsuario: 180
            },
            {
                id: 5,
                nameUsuario: "Hilda Nicholson",
                emailUsuario: "hildanicholson@hotmail.com",
                pesoUsuario: 77,
                estaturaUsuario: 169
            },
            {
                id: 6,
                nameUsuario: "Kamal Sears",
                emailUsuario: "kamalsears6807@outlook.com",
                pesoUsuario: 67,
                estaturaUsuario: 174
            },
            {
                id: 7,
                nameUsuario: "Stuart Riley",
                emailUsuario: "stuartriley@hotmail.com",
                pesoUsuario: 82,
                estaturaUsuario: 174
            },
            {
                id: 8,
                nameUsuario: "Orli Parsons",
                emailUsuario: "orliparsons@gmail.com",
                pesoUsuario: 81,
                estaturaUsuario: 181
            },
            {
                id: 9,
                nameUsuario: "Indira Michael",
                emailUsuario: "indiramichael@outlook.com",
                pesoUsuario: 70,
                estaturaUsuario: 175
            },
            {
                id: 10,
                nameUsuario: "Holmes Haynes",
                emailUsuario: "holmeshaynes9833@gmail.com",
                pesoUsuario: 82,
                estaturaUsuario: 184
            },
            {
                id: 11,
                nameUsuario: "Otto Fleming",
                emailUsuario: "ottofleming@gmail.com",
                pesoUsuario: 70,
                estaturaUsuario: 178
            },
            {
                id: 12,
                nameUsuario: "Nolan Farrell",
                emailUsuario: "nolanfarrell@outlook.com",
                pesoUsuario: 78,
                estaturaUsuario: 177
            },
            {
                id: 13,
                nameUsuario: "Lamar Shaffer",
                emailUsuario: "lamarshaffer@gmail.com",
                pesoUsuario: 78,
                estaturaUsuario: 172
            },
            {
                id: 14,
                nameUsuario: "Charlotte Rosales",
                emailUsuario: "charlotterosales@hotmail.com",
                pesoUsuario: 73,
                estaturaUsuario: 172
            },
            {
                id: 15,
                nameUsuario: "Veda Woodard",
                emailUsuario: "vedawoodard@gmail.com",
                pesoUsuario: 66,
                estaturaUsuario: 184
            },
            {
                id: 16,
                nameUsuario: "Evan Marsh",
                emailUsuario: "evanmarsh5450@hotmail.com",
                pesoUsuario: 65,
                estaturaUsuario: 185
            },
            {
                id: 17,
                nameUsuario: "Scott Griffith",
                emailUsuario: "scottgriffith@hotmail.com",
                pesoUsuario: 83,
                estaturaUsuario: 173
            },
            {
                id: 18,
                nameUsuario: "Summer Harrington",
                emailUsuario: "summerharrington4601@hotmail.com",
                pesoUsuario: 74,
                estaturaUsuario: 162
            },
            {
                id: 19,
                nameUsuario: "Hu Rhodes",
                emailUsuario: "hurhodes4227@outlook.com",
                pesoUsuario: 79,
                estaturaUsuario: 185
            },
            {
                id: 20,
                nameUsuario: "Leah Britt",
                emailUsuario: "leahbritt@outlook.com",
                pesoUsuario: 80,
                estaturaUsuario: 164
            }
        ],
        preguntas: [
            {
                id: 1,
                titulo: "¿Puedo optar por no ingresar mis datos de peso y altura?",
                rpta: "No, debido a que es de vital importancia que podamos mostrarte tu progreso, y así seguir ofreciendote rutinas, notificaciones y recetes personalizadas. Por todo esto, el ingreso de datos de peso y altura es totalmente obligatorio al momento de registrarte con nosotros."
            },
            {
                id: 2,
                titulo: "¿Puedo configurar mi perfil para mostrar solo alguno de mis datos personales?",
                rpta: "¡Por supuesto!, siempre priorizamos tu privacidad y para esto te brindamos la opcion de mantener ocultos algunos de tus datos, ya sea un amigo o no, si no lo permites no podrá ver tu información. Dicho de paso, el único dato que se mostrará siempre, sin cambio por privacidad, será el de tu nombre."
            },
            {
                id: 3,
                titulo: "¿Puedo publicar mi progreso en mis redes sociales?",
                rpta: "¡Sí!, gracias a la opcion de compartir podrás publicar mediante una imagen tu progreso, esto es posible en redes sociales como: WhatsApp, Instagram y Facebook, entre otros. Aplicamos politicas de privacidad en caso restrinjas el uso de tus datos para la información que se mostrará en la imagen de tu progreso."
            },
            {
                id: 4,
                titulo: "¿Debo añadir una tarjeta como medio de pago obligatorio?",
                rpta: "¡Exactamente!, debido a la virtualización de nuestros servicios, realizaremos todo proceso de pago por medio del registro de una tarjeta. Esto, en caso requieras solicitar alguno de nuestros planes, si no, puedes seguirs usando nuestros servicios... ¡gratuitamente!"
            }
        ],
        planes: [
            {
                id: 1,
                namePlan: "Plan nutricional",
                detallesPlan: "Consulta con nutricionista y recomendaciones de comida",
                tiempoPlan: "1 mes",
                precioPlan: 19.90
            },
            {
                id: 2,
                namePlan: "Plan nutricional",
                detallesPlan: "Consulta con nutricionista y recomendaciones de comida",
                tiempoPlan: "3 mes",
                precioPlan: 49.90
            },
            {
                id: 3,
                namePlan: "Plan rutinal",
                detallesPlan: "Consulta con entrenador y creación de rutinas con objetivos",
                tiempoPlan: "3 mes",
                precioPlan: 54.90
            },
            {
                id: 4,
                namePlan: "Plan R&N",
                detallesPlan: "privilegios del plan nutricional y plan de rutinas",
                tiempoPlan: "3 mes",
                precioPlan: 94.90
            }
        ],
        recetas: [
            {
                id: 1,
                tituloReceta: "Receta de pie de manzana en bajo azucar",
                descripReceta: "Lis ingredientes de la receta son..."
            },
            {
                id: 2,
            tituloReceta: "Pimientos rellenos de quinoa",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
                id: 3,
            tituloReceta: "Salmón a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
                id: 4,
            tituloReceta: "Pollo a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
                id: 5,
            tituloReceta: "Gambones a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
                id: 6,
            tituloReceta: "Ternera a la plancha con ensalada",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
                id: 7,
            tituloReceta: "Tortilla francesa",
            descripReceta: "Los ingredientes de la receta son..."
            },
            {
                id: 8,
            tituloReceta: "Huevos a la plancha",
            descripReceta: "Los ingredientes de la receta son..."
            }
        ],
        ejercicios: [
            {
                id: 1,
                tituloEjercicio: "Salto de tijera",
                descripEjercicio: "Comienza con los pies juntos y los brazos a los lados..."
            },
            {
                id: 2,
                tituloEjercicio: "Curl con mancuernas",
                descripEjercicio: "Comienza con los brazos estirados..."
            },
            {
                id: 3,
                tituloEjercicio: "Abdominal bicicleta",
                descripEjercicio: "Comienza echado en el piso..."
            },
            {
                id: 4,
                tituloEjercicio: "Abdominal en V",
                descripEjercicio: "Comienza echado en el piso..."
            },
            {
                id: 5,
                tituloEjercicio: "Sentadillas",
                descripEjercicio: "Comienza con las piernas..."
            },
            {
                id: 6,
                tituloEjercicio: "Peso muerto",
                descripEjercicio: "Comienza con la posicion..."
            },
            {
                id: 7,
                tituloEjercicio: "Sentadilla bulgara",
                descripEjercicio: "Comienza con las piernas separadas..."
            },
            {
                id: 8,
                tituloEjercicio: "Press de banca",
                descripEjercicio: "Comienza agarrando al barra con los brazos hacia arriba ..."
            },
            {
                id: 9,
                tituloEjercicio: "Remo",
                descripEjercicio: "Comienza con los brazos al frente..."
            },
            {
                id: 10,
                tituloEjercicio: "Elevaciones laterales",
                descripEjercicio: "Comienza con los brazos hacia arriba..."
            }

        ],
        registroalimenticio: [
            {
                usuario:{
                    id: 1,
                },
                alimento:{
                    id: "AL001",
                }
            },
            {
                usuario:{
                    id: 1,
                },
                alimento:{
                    id: "AL003",
                }
            },
            {
                usuario:{
                    id: 3,
                },
                alimento:{
                    id: "AL001",
                }
            },
            {
                usuario:{
                    id: 2,
                },
                alimento:{
                    id: "AL002",
                }
            },
            {
                usuario:{
                    id: 2,
                },
                alimento:{
                    id: "AL003",
                }
            },
            {
                usuario:{
                    id: 3,
                },
                alimento:{
                    id: "AL004",
                }
            },
            {
                usuario:{
                    id: 1,
                },
                alimento:{
                    id: "AL005",
                }
            },
            {
                usuario:{
                    id: 3,
                },
                alimento:{
                    id: "AL004",
                }
            },
            {
                usuario:{
                    id: 2,
                },
                alimento:{
                    id: "AL003",
                }
            },
            {
                usuario:{
                    id: 1,
                },
                alimento:{
                    id: "AL004",
                }
            }
        ],
        bancos: [
            {
                id: 1,
                nombreBanco: "BCP"
            },
            {
                id: 2,
                nombreBanco: "BBVA"
              },
              {
                id: 3,
                nombreBanco: "INTERBANK"
              },
              {
                id: 4,
                nombreBanco: "SCOTIABANK"
              },
              {
                id: 5,
                nombreBanco: "PICHINCHA"
              },
              {
                id: 6,
                nombreBanco: "MIBANCO"
              },
              {
                id: 7,
                nombreBanco: "RIPLEY"
              },
              {
                id: 8,
                nombreBanco: "FALABELLA"
              }
        ],
        citas: [
            {
                id: 1,
                usuario: {
                    id: 1,
                    nameUsuario: "Damian Robinson" 
                },
                fecha: "13/09/2022",
                hora: "15:00 pm"
            },
            {
                id: 2,
                usuario: {
                    id: 2,
                    nameUsuario: "Dorian Velasquez"
                },
                fecha: "13/09/2022",
                hora: "16:00 pm"
            },
            {
                id: 3,
                usuario: {
                    id: 3,
                    nameUsuario: "Kristen Yang"
                },
                fecha: "12/06/2022",
                hora: "10:00 pm"
            },
            {
                id: 4,
                usuario: {
                    id: 4,
                    nameUsuario: "Troy Waters"
                },
                fecha: "07/05/2022",
                hora: "14:00 pm"
            },
            {
                id: 5,
                usuario: {
                    id: 5,
                    nameUsuario: "Hilda Nicholson"
                },
                fecha: "10/10/2022",
                hora: "13:00 pm"
            },
            {
                id: 6,
                usuario: {
                    id: 6,
                    nameUsuario: "Kamal Sears"
                },
                fecha: "03/05/2022",
                hora: "12:00 pm"
            },
            {
                id: 7,
                usuario: {
                    id: 7,
                    nameUsuario: "Stuart Riley"
                },
                fecha: "14/10/2021",
                hora: "11:00 am"
            },
            {
                id: 8,
                usuario: {
                    id: 8,
                    nameUsuario: "Orli Parsons"
                },
                fecha: "10/10/2022",
                hora: "09:00 am"
            }
        ],
        suscripcion: [
            {
                id: 1,
                usuario: {
                    id: 1,
                    nameUsuario: "Damian Robinson" 
                },
                fecha: "13/09/2022",
                banco: {
                    id: 1,
                    nombreBanco: "BCP"
                }
            },
            {
                id: 2,
                usuario: {
                    id: 2,
                    nameUsuario: "Dorian Velasquez"
                },
                fecha: "11/03/2021",
                banco: {
                    id: 2,
                    nombreBanco: "BBVA"
                }
            },
            {
                id: 3,
                usuario: {
                    id: 3,
                    nameUsuario: "Kristen Yang"
                },
                fecha: "19/12/2021",
                banco: {
                    id: 3,
                    nombreBanco: "INTERBANK"
                }
            },
            {
                id: 4,
                usuario: {
                    id: 4,
                    nameUsuario: "Troy Waters"
                },
                fecha: "18/03/2022",
                banco: {
                    id: 4,
                    nombreBanco: "SCOTIABANK"
                }
            },
            {
                id: 5,
                usuario: {
                    id: 5,
                    nameUsuario: "Hilda Nicholson"
                },
                fecha: "12/10/2021",
                banco: {
                    id: 5,
                    nombreBanco: "PICHINCHA"
                }
            },
            {
                id: 6,
                usuario: {
                    id: 6,
                    nameUsuario: "Kamal Sears"
                },
                fecha: "30/10/2021",
                banco: {
                    id: 6,
                    nombreBanco: "MIBANCO"
                }
            },
            {
                id: 7,
                usuario: {
                    id: 7,
                    nameUsuario: "Stuart Riley"
                },
                fecha: "30/12/2021",
                banco: {
                    id: 6,
                    nombreBanco: "MIBANCO"
                }
            },
            {
                id: 8,
                usuario: {
                    id: 8,
                    nameUsuario: "Orli Parsons"
                },
                fecha: "18/10/2021",
                banco: {
                    id: 7,
                    nombreBanco: "RIPLEY"
                }
            },
            {
                id: 9,
                usuario: {
                    id: 9,
                    nameUsuario: "Indira Michael"
                },
                fecha: "15/09/2021",
                banco: {
                    id: 8,
                    nombreBanco: "FALABELLA"
                }
            },
            {
                id: 10,
                usuario: {
                    id: 10,
                    nameUsuario: "Holmes Haynes"
                },
                fecha: "11/07/2021",
                banco: {
                    id: 8,
                    nombreBanco: "FALABELLA"
                }
            },
            {
                id: 11,
                usuario: {
                    id: 11,
                    nameUsuario: "Otto Fleming"
                },
                fecha: "23/04/2022",
                banco: {
                    id: 3,
                    nombreBanco: "INTERBANK"
                }
            },
            {
                id: 12,
                usuario: {
                    id: 12,
                    nameUsuario: "Nolan Farrell"
                },
                fecha: "31/09/2022",
                banco: {
                    id: 4,
                    nombreBanco: "SCOTIABANK"
                }
            },
        ],
        tipousuario:[
            {
                id: 1,
                nombreTipo:"Alumno"
            },
            {
                id: 2,
                nombreTipo:"Entrenador"
            },
            {
                id: 3,
                nombreTipo:"Nutriologo"
            }
        ]
    }
    return data
}