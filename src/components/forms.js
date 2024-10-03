import{ Form,Card,Button,Col } from 'react-bootstrap'


export const UnoFormComponent = ({onChange, onClick}) => {

    const formsData = {
        FormOne: {
            title: "Ciencia y Tecnologia",
            questions: [
                "¿Qué importancia tiene la ciencia de datos en la toma de decisiones empresariales?",
                "Explica cómo la inteligencia artificial está revolucionando el campo de la medicina.",
                "¿Qué rol juegan los avances en materiales en la innovación tecnológica?",
                "¿Cómo influye la computación cuántica en el futuro de la ciberseguridad?",
                "¿Qué impacto tienen los vehículos autónomos en la industria del transporte?",
                "¿Cómo afecta el desarrollo de robots en la automatización industrial?"
            ]
        },
        FormTwo: {
            title: "Psicologia y Salud Mental",
            questions: [
                "¿Cómo influyen las redes sociales en la autoestima de los adolescentes?",
                "Explica la relación entre el estrés y las enfermedades físicas.",
                "¿Qué factores psicológicos influyen en la toma de decisiones?",
                "¿De qué manera la pandemia afectó la salud mental a nivel global?",
                "¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?",
                "¿Qué impacto tiene la meditación en el control de la ansiedad?"
            ]
        },
        FormThree:{
            title:"Tecnología y Sociedad",
            questions:[
                "1. ¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?",
                "2. ¿Qué impacto tiene la tecnología en las relaciones interpersonales?",
                "3. Explica cómo las redes sociales han transformado el periodismo.",
                "4. ¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?",
                "5. ¿Cómo influye la digitalización en el sector educativo?",
                "6. ¿Cuál es el rol de la ética en el desarrollo tecnológico?"
            ]
        },
        FormFour:{
            title:"Ciencia y Medio Ambiente",
            questions:[
                "1. ¿Cómo crees que la ciencia puede contribuir a la conservación de especies en peligro de extinción?",
                "2. Explica el papel de la energía renovable en la lucha contra el cambio climático.",
                "3. ¿De qué manera la agricultura sostenible puede mitigar el impacto ambiental?",
                "4. ¿Qué desafíos enfrenta la humanidad para lograr una economía circular?",
                "5. ¿Qué papel tiene la biotecnología en la sostenibilidad ambiental?",
                "6. ¿Cómo afecta la contaminación plástica a los ecosistemas marinos?"
            ]
        },
        FormFive:{
            title:"Historia y Política",
            questions:[
                "1. ¿Cuáles fueron las principales causas de la Primera Guerra Mundial?",
                "2. Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.",
                "3. ¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?",
                "4. ¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?",
                "5. ¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?",
                "6. ¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional?"
            ]
        },
        FormSix:{
            title:"Economía y Finanzas",
            questions:[
                "1. ¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?",
                "2. ¿Qué rol desempeñan los bancos centrales en la economía de un país?",
                "3. ¿Cómo influyen las tasas de interés en las decisiones de inversión de las empresas?",
                "4. ¿Qué impacto tiene el comercio internacional en el crecimiento económico?",
                "5. ¿De qué manera la automatización está transformando el sector manufacturero?",
                "6. ¿Cómo afecta el crecimiento del comercio electrónico a las pequeñas empresas?"
            ]
        },
        FormSeven:{
            title:"Cultura y Sociedad",
            questions:[
                "1. ¿Cómo influyen las tradiciones culturales en la identidad de un país?",
                "2. ¿Qué impacto tiene la globalización en la homogeneización cultural?",
                "3. ¿Cuál es el papel de la música en la construcción de la identidad juvenil?",
                "4. ¿De qué manera el cine refleja los problemas sociales de una época?",
                "5. ¿Cómo contribuye la literatura a la difusión de ideas filosóficas y políticas?",
                "6. ¿Qué impacto tiene el arte urbano en la transformación de los espacios públicos?"
            ]
        },
        FormEight:{
            title:"Filosofía y Ética",
            questions:[
                "1. ¿Cuál es el significado de la libertad en la filosofía de Jean-Paul Sartre?",
                "2. ¿De qué manera la ética utilitarista influye en la toma de decisiones morales?",
                "3. Explica el concepto de justicia según John Rawls.",
                "4. ¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?",
                "5. ¿Cómo ha evolucionado la concepción del bien común a lo largo de la historia de la filosofía?",
                "6. ¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial?"
            ]
        },
        FormNine:{
            title:"Educación y Aprendizaje",
            questions:[
                "1. ¿Qué papel juega la motivación intrínseca en el aprendizaje?",
                "2. ¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?",
                "3. ¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?",
                "4. ¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?",
                "5. ¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?",
                "6. ¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes?"
            ]
        },
        FormTen:{
            title:"Deporte y Salud",
            questions:[
                "1. ¿Cómo influye la práctica regular de ejercicio en la salud mental?",
                "2. ¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?",
                "3. ¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?",
                "4. ¿De qué manera la nutrición influye en el rendimiento deportivo?",
                "5. ¿Cómo afecta el dopaje en la ética del deporte profesional?",
                "6. ¿Qué impacto tiene el deporte en la cohesión social y comunitaria?"
            ]
        }
        
    };
    const cards = Object.entries(formsData).map(([key, { title, questions }]) => {
        return (
            <Col key={key}>
                <Card className='w-100 mt-4 mb-4'>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Form className='p-4'>
                            {questions.map((question, index) => (
                                <Form.Group key={index} className="mb-3" controlId={`${key}Question${index}`}>
                                    <Form.Label>{question}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Escribe tu respuesta..."
                                        name={`${key}_ans${index + 1}`} // Nombre de la respuesta
                                    />
                                </Form.Group>
                            ))}
                            <Button className='m-2' variant="success" onClick={onClick}>
                                Submit
                            </Button>
                            <Button className='m-2' variant="danger" type="reset">
                                Cancel
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <>
        {cards}
        </>
    )

}