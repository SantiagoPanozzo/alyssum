import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, ArrowRight, ArrowDownNarrowWide } from "lucide-react"
import { Button } from "./components/ui/button"
import EventCountdown from "./components/event-countdown"
import SpeakerCard from "./components/speaker-card"
import ScheduleItem from "./components/schedule-item"
import FAQAccordion from "./components/faq-accordion"
import RegistrationForm from "./components/registration-form"
import HorizontalImageScroller from "./components/horizontalImageScroller";
import GoogleMapsButton from "./components/ui/google-maps-button"
import { ScrollLink } from "./components/ui/scroll-link"

export default function EventLandingPage() {
  // Event details
  const eventDate = new Date("2025-07-09T18:30:00-03:00")
  const eventName = "UCX 2025"
  const eventTagline = "El marketing de servicios en tus manos."
  const eventDescription =
      "Se parte de uno de los eventos más importantes del marketing de servicios y aprende de los más grandes profesionales del rubro."

return (
    <div className="flex min-h-screen flex-col justify-center justify-items-center items-center">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground"><Image src="/ucx.png" alt="" width="800" height="800"/> </span>
            </div>
            {eventName}
          </div>
          <nav className="hidden md:flex gap-6">
            <ScrollLink href="#about" className="text-sm font-medium transition-colors hover:text-sky-700">
              <p className="hover:text-sky-600 transition">
                Acerca del Evento
              </p>
            </ScrollLink>
            <ScrollLink href="#speakers" className="text-sm font-medium transition-colors hover:text-sky-700">
              <p className="hover:text-sky-600 transition">
                Speakers
              </p>
            </ScrollLink>
            <ScrollLink href="#schedule" className="text-sm font-medium transition-colors hover:text-sky-700">
              <p className="hover:text-sky-600 transition">
                Cronograma
              </p>
            </ScrollLink>
            <ScrollLink href="#venue" className="text-sm font-medium transition-colors hover:text-sky-700">
              <p className="hover:text-sky-600 transition">
                Lugar
              </p>
            </ScrollLink>
            <ScrollLink href="#faq" className="text-sm font-medium transition-colors hover:text-sky-700">
              <p className="hover:text-sky-600 transition">
                Preguntas Frecuentes
              </p>
            </ScrollLink>
          </nav>
          <Button size="sm" variant="outline" asChild className="hover:text-sky-600 transition duration-300 ease-in-out border-slate-600 hover:scale-110 hover:border-sky-600 hover:cursor-pointer hover:bg-sky-700 hover:text-white">
            <ScrollLink href="#register">
              <p >
                Inscribite Ya
              </p>
            </ScrollLink>
          </Button>
        </div>
      </header>

      <main className="flex-1">
	<div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
	  <Image
	      src="/bg.png"
	      alt="Event background"
	      fill
	      className="object-cover opacity-30"
	      priority
	  />
	</div>
        {/* Hero Section */}
	<section className="w-full min-h-screen overflow-hidden">
	  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 mt-20 bg-transparent">
	    <div className="grid gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 items-start">
	      <div className="flex flex-col gap-4">
		<div className="inline-flex items-center rounded-full border border-slate-600 px-4 py-1.5 text-sm font-medium">
		  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
		  9 de Julio de 2025
		</div>
		<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
		  {eventName}
		  <span className="block text-primary">{eventTagline}</span>
		</h1>
		<p className="text-xl text-muted-foreground max-w-[600px]">{eventDescription}</p>
		<div className="flex flex-col sm:flex-row gap-3 mt-2">
		  <Button size="lg" asChild className="transition duration-500 ease-in-out hover:cursor-pointer hover:bg-sky-700 hover:text-white hover:shadow-lg hover:scale-105 hover:shadow-sky-200 border border-slate-800 hover:border-sky-600">
		    <ScrollLink href="#register">
		      <p>Inscribite Ya</p>
		      <ArrowRight className="ml-2 h-4 w-4" />
		    </ScrollLink>
		  </Button>
		  <Button size="lg" variant="outline" asChild className="hover:bg-white hover:text-sky-600 transition ease-in-out duration-300 hover:scale-105 hover:border-sky-600 hover:shadow-lg hover:shadow-sky-200 border border-slate-800">
		    <ScrollLink href="#schedule"><p>Ver Cronograma</p></ScrollLink>
		  </Button>
		</div>
	      </div>
	      <div className="flex flex-col justify-center bg-background/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-600 h-full w-full transition duration-400 ease-in-out hover:scale-105">
	        <div className="flex-1 flex items-center justify-center">
		  <EventCountdown targetDate={eventDate} />
		</div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">9 de Julio de 2025</p>
                      <p className="text-sm text-muted-foreground">Evento de día único</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">18:30 a 22:30</p>
                      <p className="text-sm text-muted-foreground">Cronograma del día</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">UCU: Edificio San José</p>
                      <p className="text-sm text-muted-foreground">8 de Octubre 2733, Montevideo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">+300 Invitados</p>
                      <p className="text-sm text-muted-foreground">Profesionales de la industria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
	  <div className="flex justify-center mt-8">
	    <ScrollLink href="#about">
	      <div className="p-3 border border-slate-600 rounded-full bg-background/70 backdrop-blur-sm shadow-md animate-bounce transition ease-in-out hover:scale-110 hover:bg-white hover:text-sky-600 hover:border-sky-700 hover:shadow-sky-200">
		  <ArrowDownNarrowWide className="w-6 h-6 text-primary" />
	      </div>
	    </ScrollLink>
	  </div>
        </section>
          {/* About Section */}
          <section id="about" className="py-16 md:py-24 bg-white relative z-20 w-screen flex flex-col items-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Acerca del Evento</h2>
                <div className="h-1 w-20 bg-primary my-6"></div>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                  UCX es un evento abierto al público para el que invitamos a todo aquél que esté interesado en el área del
                  marketing de servicios. No importa si sos un comerciante, un desarrollador, un vendedor o consumidor.
                  Si querés saber cómo funciona esta área que nos rodea, ¡sos bienvenido!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-muted/50 p-6 rounded-lg shadow-xl transition ease-in-out duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-200 border border-slate-300">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Crea conexiones</h3>
                  <p className="text-muted-foreground">
                    Conectá con líderes de la industria, profesionales e interesados como vos.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg shadow-xl transition ease-in-out duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-200 border border-slate-300">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovación</h3>
                  <p className="text-muted-foreground">
                    Descubrí nuevas metodologías, tecnologías y formas de ver la industria.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg shadow-xl transition ease-in-out duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-200 border border-slate-300">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Aprendizaje</h3>
                  <p className="text-muted-foreground">
                    Aprendé a través de diversas charlas en un evento que propone tocar todos los temas más importantes del
                    momento de forma que cualquier persona, nueva o experta en el tema, pueda ganar algo de nuevo conocimiento.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Speakers Section */}
          <section id="speakers" className="py-16 md:py-24 bg-white relative z-20 w-screen flex flex-col items-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Speakers Invitados</h2>
                <div className="h-1 w-20 bg-primary my-6"></div>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                  Aprende de los más importantes profesionales de la industria.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <SpeakerCard
                    name="Santiago Fernandez"
                    role={`
			Santiago Fernández Sapelli, 43 años, padre de Joaco de 10. Divertido, simpático y con un lado ñoño fanático de la tecnología y la automatización.

			Se formó en Gerencia de Empresas en la Universidad ORT, donde desarrolló su veta de marketinero y vendedor nato, con tanta labia que lo siguen llamando como speaker desde varios países.

			¿Tímido? Para nada: ha dado conferencias frente a más de 600 personas. Hoy dirige Orange Attitude – Consultancy & Digital Agency, la agencia que fundó a los 21 años y con la que viene impulsando marcas y mejorando la experiencia de clientes desde hace más de dos décadas.

      La charla será una experiencia divertida e interactiva, pensada para inspirar y mostrar cómo la tecnología —y especialmente la inteligencia artificial— nos permite personalizar la experiencia del cliente a lo largo de todo su recorrido, desde el primer contacto hasta la conversión. Exploraremos cómo adaptar mensajes, canales y propuestas en tiempo real según las preferencias, el contexto y el comportamiento de cada usuario.

      Vamos a conversar sobre cómo generar un marketing uno a uno, dejando atrás los enfoques genéricos para diseñar experiencias más humanas, relevantes y memorables. Hablaremos de herramientas concretas y casos reales que demuestran cómo la tecnología aplicada con inteligencia puede marcar la diferencia en cada etapa del customer journey.
			`}
                    image="/santiagofernandez.jpg"
                    topics={["Marketing", "Sales Automation", "Lead Scoring", "IA y Chatbots"]}
                />
                <SpeakerCard
                    name="Analía Arbuet"
                    role={`
			Apasionada por el marketing, la lectura y las buenas estrategias.

			Analía Arbuet lleva más de 15 años liderando equipos y proyectos en el mundo del marketing. Le encanta conectar marcas con personas, y se destaca por su enfoque planificado, orientado a resultados y con una mirada humana del negocio.

			Licenciada en Marketing, combina experiencia, sensibilidad y una fuerte vocación por generar impacto real.

      Esta charla trata del marketing de servicios con un foco en el aspecto humano de la atención al cliente, tomando ventaja de las nuevas tecnologías y la inteligencia artificial. Se hablará de la importancia de la atención humana y de poner siempre al cliente en el centro de las definiciones vinculadas a los servicios. Podrás aprender sobre las ventajas y desafíos que implica revalorizar la comunicación humana como pilar del marketing.
			`}
                    image="/analiaarbuet.jpg"
                    topics={["Marketing", "Docente", "Media & Communication"]}
                />
                <SpeakerCard
                    name="Jerónimo Sánchez Varela"
                    role={`
			Padre, emprendedor y soñador.

			Jerónimo Sánchez Varela es un apasionado de la gastronomía y la creación de experiencias memorables. Con una marcada sensibilidad por los detalles y un fuerte espíritu creativo, ha desarrollado diversos proyectos en el mundo de la comida, siempre con foco en la calidad, la autenticidad y el disfrute.

			Su energía emprendedora se combina con una profunda vocación por hacer que las cosas pasen.
			`}
                    image="/momo.jpeg"
                    topics={["Profesional", "Emprendedor", "Customer Experience"]}
                />
                <SpeakerCard
                    name="Juan Cosidó"
                    role={`
			Padre de Danielle y enamorado de Julia Helena.

			Juan Cosidó es un apasionado por las ideas que transforman y por las personas que las hacen realidad.

			Consultor, docente de UCU y speaker, lleva más de 20 años trabajando en la intersección entre marketing, experiencia de cliente y estrategia comercial, ayudando a empresas y organizaciones a conectar con sus clientes de manera más humana, efectiva y sostenible.

      En esta charla, se presentará por primera vez un nuevo framework diseñado en base a mi experiencia como consultor para diagnosticar integralmente el grado de madurez de una organización en los aspectos necesarios para caminar hacia una verdadera cultura centrada en el cliente. Esta herramienta permite identificar con precisión las condiciones necesarias para implantar con éxito una estrategia de experiencia de cliente.

      Más que una fotografía, es un roadmap práctico de transformación, que pone a toda la organización en movimiento hacia un modelo más rentable, coherente y sostenible.
			`}
                    image="/juancosido.jpg"
                    topics={["Marketing de Servicios", "Docente", "Customer Experience"]}
                />
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section id="schedule" className="py-16 md:py-24 bg-white relative z-20 w-screen flex flex-col items-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Cronograma del Evento</h2>
                <div className="h-1 w-20 bg-primary my-6"></div>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                  Una tarde llena de charlas, espacios para compartir e interactuar con profesionales y disfrutar de relajante música y comida.
                </p>
              </div>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Miércoles 9 de Julio:
                  </h3>
                  <div className="space-y-4">
                    <ScheduleItem
                        time="18:30 - 19:00"
                        title="Convocatoria de invitados"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="19:00 - 19:10"
                        title="Comienzo de Evento / Presentación"
                        speaker="Ana Laura Aguiar y Leandro Barral"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="19:10 - 19:30"
                        title="Charla: Marketing Orientado a Servicios"
                        speaker="Marcel Burgos"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="19:30 - 19:35"
                        title="Break y Presentación del Siguiente Speaker"
                        speaker="Ana Laura Aguiar y Leandro Barral"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="19:35 - 19:55"
                        title="Charla: Un Framework Innovador en la Experiencia del Cliente"
                        speaker="Juan Cosidó Gutierrez"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="19:55 - 20:00"
                        title="Presentación del Siguiente Speaker"
                        speaker="Ana Laura Aguiar y Leandro Barral"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="20:00 - 20:20"
                        title="Charla: Hospitalidad y Naturaleza Humana"
                        speaker="Jerónimo Sánchez Varela"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="20:20 - 20:25"
                        title="Break y Presentación del Siguiente Speaker"
                        speaker="Ana Laura Aguiar y Leandro Barral"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="20:25 - 20:45"
                        title="Charla: Tecnología e IA: Diseño de Experiencias Humanas"
                        speaker="Santiago Fernandez"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="20:45 - 20:50"
                        title="Break y Presentación del Siguiente Speaker"
                        speaker="Ana Laura Aguiar y Leandro Barral"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="20:50 - 21:10"
                        title="Charla: Revalorizando la Experiencia Humana con Nuevas Tecnologías"
                        speaker="Analía Arbuet"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="21:10 - 21:20"
                        title="Cierre"
                        speaker="Ana Laura Aguiar y Leandro Barral"
                        location="Edificio San José"
                    />
                    <ScheduleItem
                        time="21:20"
                        title="After: Aperitivos y Música de Ambientación"
                        location="Edificio San José"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Venue Section */}
          <section id="venue" className="py-16 md:py-24 bg-white relative z-20 w-screen flex flex-col items-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Lugar</h2>
                <div className="h-1 w-20 bg-primary my-6"></div>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                  ¡Sumate a nuestro evento en el nuevo Edificio San José de la Universidad Católica del Uruguay!
                  Innaugurado este año, las instalaciones del nuevo y moderno edificio te permitirán vivir una experiencia
                  de primera calidad.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="relative h-[400px] rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-102">
                  <Image src="/san-jose.png" alt="Lugar" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Sala de Eventos San José</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">8 de Octubre 2733</p>
                        <p className="text-muted-foreground">La Blanqueada, Montevideo</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      La sala de eventos en el nuevo edificio San José de la Universidad Católica del Uruguay dispone de una enorme
                      pantalla y lugares para todos los invitados, con una ambientación que permitirá que haya una gran comunicación
                      y una oportunidad de interactuar con grandes profesionales de la industria.
                    </p>
                    <div className="pt-4">
                      <GoogleMapsButton
                        buttonText="Ver Direcciones"
                        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.715006282324!2d-56.1622713889317!3d-34.888502172740296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80562d2e5009%3A0x39e8385cceee6cea!2sEdificio%20San%20Jos%C3%A9%20%7C%20Universidad%20Cat%C3%B3lica%20del%20Uruguay!5e0!3m2!1ses-419!2suy!4v1746826346244!5m2!1ses-419!2suy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Section */}
          <section id="register" className="py-16 md:py-24 bg-white relative z-20 w-screen flex flex-col items-center">
            <div className="container px-4 md:px-6 border-slate-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Inscribite Ya</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Asegurá tu entrada para UCX 2025. Ingresa tu mail y te enviaremos una invitación para que ingreses a RedTickets.
                    ¡Los alumnos de la UCU reciben un código gratis!
                  </p>

                  <div className="space-y-6">
                    <div className="bg-muted/50 p-6 rounded-lg border border-slate-500 duration-300 transition ease-in-out hover:scale-102">
                      <h3 className="text-xl font-bold mb-2">Entrada Anticipada</h3>
                      <p className="text-3xl font-bold text-primary mb-2">$100</p>
                      <p className="text-muted-foreground mb-4">Disponibles hasta el 30 de Junio.</p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <svg
                              className="h-5 w-5 text-primary mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Accedé a las charlas y disfruta de comida y música. ¡Asegurá tu entrada lo antes posible!
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg border border-slate-500 duration-300 transition ease-in-out hover:scale-102">
                      <h3 className="text-xl font-bold mb-2">Descuento UCU</h3>
                      <p className="text-muted-foreground">
                        Si sos alumno de la UCU, ¡la entrada es gratis! Registrate y te enviamos un código de RedTickets
                        para que consigas tu entrada sin costo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-8 rounded-lg border border-slate-500">
                  <h3 className="text-2xl font-bold mb-6">Formulario de Registro</h3>
                  <RegistrationForm />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-16 md:py-24 bg-white relative z-20 w-screen flex flex-col items-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Preguntas Frecuentas</h2>
                <div className="h-1 w-20 bg-primary my-6"></div>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                  Obtené respuestas rápidas a las preguntas que más nos envían nuestros invitados.
                </p>
              </div>

            <div className="max-w-3xl mx-auto mt-12">
              <FAQAccordion />
            </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">¿Tenés otra pregunta?</p>
                <Button asChild className="transition duration-300 ease-in-out hover:shadow-lg hover:shadow-sky-200 hover:bg-sky-700 hover:text-white border border-slate-400 hover:scale-110">
                  <Link href="mailto:ucxmarketingdeserviciosycx@gmail.com" >Contactanos</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Sponsors Section */} 
          <section id="sponsors" className="py-16 md:py-24 bg-white relative z-20 w-screen flex flex-col items-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nuestros Patrocinadores</h2>
                <div className="h-1 w-20 bg-primary my-6"></div>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                  ¡UCX 2025 es posible gracias a nuestros increíbles patrocinadores!
                </p>
              </div>

              <div className="mt-12">
                <div className="items-center justify-items-center">
                  <HorizontalImageScroller/>
                </div>

              </div>

            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-white py-12 flex flex-col items-center z-20 w-screen">
	  <div className="container max-w-6xl px-4 md:px-6 mx-auto">
	    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 font-bold text-xl mb-4">
                  {eventName}
                </div>
                <p className="text-muted-foreground mb-4">
                  El evento más importante de marketing de servicios para innovadores, creadores, y líderes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <ScrollLink href="#about" className="text-sm font-medium transition-colors hover:text-sky-700">
                      <p className="hover:text-sky-600 transition">
                        Acerca del Evento
                      </p>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="#speakers" className="text-sm font-medium transition-colors hover:text-sky-700">
                      <p className="hover:text-sky-600 transition">
                        Speakers
                      </p>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="#schedule" className="text-sm font-medium transition-colors hover:text-sky-700">
                      <p className="hover:text-sky-600 transition">
                        Cronograma
                      </p>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="#venue" className="text-sm font-medium transition-colors hover:text-sky-700">
                      <p className="hover:text-sky-600 transition">
                        Lugar
                      </p>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="#faq" className="text-sm font-medium transition-colors hover:text-sky-700">
                      <p className="hover:text-sky-600 transition">
                        Preguntas Frecuentes
                      </p>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="#register" className="text-sm border-slate-300 font-medium transition duration-300 hover:text-primary hover:cursor-pointer hover:bg-sky-600 hover:text-white ">
                      <p className="hover:text-sky-600 transition ">
                        Inscribite Ya 
                      </p>
                    </ScrollLink>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Contactanos</h3>
                <ul className="space-y-2">
		  <li>
		    <Link href="mailto:ucxmarketingdeserviciosycx@gmail.com" className="flex items-start gap-3 transition hover:text-sky-600 hover:underline">
		      <div className="shrink-0">
			<svg className="h-5 w-5 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path
			    strokeLinecap="round"
			    strokeLinejoin="round"
			    strokeWidth={2}
			    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			  />
			</svg>
		      </div>
		      <span className="text-muted-foreground break-words hover:underline">
			<p>ucxmarketingdeserviciosycx@gmail.com</p>
		      </span>
		    </Link>
		  </li>
                  <li className="flex items-start gap-3">
		    <Link href="tel:+59898287145" className="flex items-start gap-3 transition hover:text-sky-600 hover:underline">
		      <svg className="h-5 w-5 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
			    strokeLinecap="round"
			    strokeLinejoin="round"
			    strokeWidth={2}
			    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
			/>
		      </svg>
		      <span className="text-muted-foreground">098 287 145</span>
		    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-12 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} UCX. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
  )
}

