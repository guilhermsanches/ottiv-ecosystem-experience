
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language resources
const resources = {
  en: {
    translation: {
      nav: {
        lab: 'OTTIV LAB',
        crew: 'OTTIV CREW',
        data: 'OTTIV DATA',
        flow: 'OTTIV FLOW',
        getStarted: 'Get Started'
      },
      hero: {
        badge: 'Redefining Digital Solutions',
        title: 'Transform Your Business with',
        titleHighlight: 'OTTIV',
        description: 'Unlock your business\'s full potential with our AI-powered ecosystem. OTTIV delivers innovative solutions that drive growth, efficiency, and innovation.',
        primaryCta: 'Get Started',
        secondaryCta: 'Explore OTTIV',
        scrollText: 'Scroll to explore'
      },
      ecosystemPillars: {
        lab: {
          title: 'LAB',
          subtitle: 'Innovation & Research',
          description: 'OTTIV LAB is our cutting-edge research and development center, where we experiment with emerging technologies to create innovative solutions for complex business challenges.'
        },
        crew: {
          title: 'CREW',
          subtitle: 'Community & Collaboration',
          description: 'OTTIV CREW connects businesses with expert consultants, developers, and industry leaders to foster collaboration and knowledge sharing within our thriving ecosystem.'
        },
        data: {
          title: 'DATA',
          subtitle: 'Analytics & Insights',
          description: 'OTTIV DATA transforms raw information into actionable business intelligence through advanced analytics, visualization tools, and real-time monitoring systems.'
        },
        flow: {
          title: 'FLOW',
          subtitle: 'Workflow Optimization',
          description: 'OTTIV FLOW optimizes business processes through intelligent automation, custom workflow design, and integrated management tools that boost efficiency and productivity.'
        },
        learnMore: 'Learn More'
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Discover how OTTIV is transforming businesses worldwide'
      },
      cta: {
        badge: 'Start Today',
        title: 'Ready to Transform Your Business?',
        description: 'Join innovative companies leveraging the OTTIV ecosystem to drive growth, efficiency, and competitive advantage.',
        quickSetup: 'Quick Setup',
        quickSetupDesc: 'Implementation in days, not months.',
        growth: '30% Growth',
        growthDesc: 'Average increase in efficiency.',
        contactTitle: 'Contact Us',
        submitButton: 'Send Message',
        sending: 'Sending...'
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        message: 'Message',
        placeholder: {
          name: 'John Smith',
          email: 'john@example.com',
          company: 'Your Company',
          message: 'Tell us about your project...'
        }
      },
      toast: {
        messageSent: 'Message Sent!',
        messageDesc: 'Thank you for reaching out. We\'ll get back to you shortly.'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        lab: 'OTTIV LAB',
        crew: 'OTTIV CREW',
        data: 'OTTIV DATA',
        flow: 'OTTIV FLOW',
        getStarted: 'Começar Agora'
      },
      hero: {
        badge: 'Redefinindo Soluções Digitais',
        title: 'Transforme Sua Empresa com',
        titleHighlight: 'OTTIV',
        description: 'Libere todo o potencial do seu negócio com nosso ecossistema alimentado por IA. OTTIV oferece soluções inovadoras que impulsionam crescimento, eficiência e inovação.',
        primaryCta: 'Começar Agora',
        secondaryCta: 'Explorar OTTIV',
        scrollText: 'Role para explorar'
      },
      ecosystemPillars: {
        lab: {
          title: 'LAB',
          subtitle: 'Inovação e Pesquisa',
          description: 'OTTIV LAB é nosso centro de pesquisa e desenvolvimento de ponta, onde experimentamos tecnologias emergentes para criar soluções inovadoras para desafios complexos de negócios.'
        },
        crew: {
          title: 'CREW',
          subtitle: 'Comunidade e Colaboração',
          description: 'OTTIV CREW conecta empresas com consultores especializados, desenvolvedores e líderes do setor para fomentar a colaboração e o compartilhamento de conhecimento dentro do nosso ecossistema.'
        },
        data: {
          title: 'DATA',
          subtitle: 'Análise e Insights',
          description: 'OTTIV DATA transforma informações brutas em inteligência de negócios acionável através de análises avançadas, ferramentas de visualização e sistemas de monitoramento em tempo real.'
        },
        flow: {
          title: 'FLOW',
          subtitle: 'Otimização de Fluxo de Trabalho',
          description: 'OTTIV FLOW otimiza processos de negócios através de automação inteligente, design de fluxo de trabalho personalizado e ferramentas de gestão integradas que aumentam a eficiência e produtividade.'
        },
        learnMore: 'Saiba Mais'
      },
      testimonials: {
        title: 'O Que Nossos Clientes Dizem',
        subtitle: 'Descubra como a OTTIV está transformando negócios em todo o mundo'
      },
      cta: {
        badge: 'Comece Hoje Mesmo',
        title: 'Pronto para Transformar Seu Negócio?',
        description: 'Junte-se a empresas inovadoras que aproveitam o ecossistema da OTTIV para impulsionar crescimento, eficiência e vantagem competitiva.',
        quickSetup: 'Configuração Rápida',
        quickSetupDesc: 'Implementação em dias, não meses.',
        growth: '30% de Crescimento',
        growthDesc: 'Aumento médio na eficiência.',
        contactTitle: 'Entre em Contato',
        submitButton: 'Enviar Mensagem',
        sending: 'Enviando...'
      },
      form: {
        name: 'Nome Completo',
        email: 'Endereço de Email',
        company: 'Empresa',
        message: 'Mensagem',
        placeholder: {
          name: 'João Silva',
          email: 'joao@exemplo.com',
          company: 'Sua Empresa',
          message: 'Fale sobre seu projeto...'
        }
      },
      toast: {
        messageSent: 'Mensagem Enviada!',
        messageDesc: 'Obrigado por entrar em contato. Retornaremos em breve.'
      }
    }
  },
  es: {
    translation: {
      nav: {
        lab: 'OTTIV LAB',
        crew: 'OTTIV CREW',
        data: 'OTTIV DATA',
        flow: 'OTTIV FLOW',
        getStarted: 'Comenzar'
      },
      hero: {
        badge: 'Redefiniendo Soluciones Digitales',
        title: 'Transforma Tu Empresa con',
        titleHighlight: 'OTTIV',
        description: 'Libera todo el potencial de tu negocio con nuestro ecosistema potenciado por IA. OTTIV ofrece soluciones innovadoras que impulsan el crecimiento, la eficiencia y la innovación.',
        primaryCta: 'Comenzar',
        secondaryCta: 'Explorar OTTIV',
        scrollText: 'Desplázate para explorar'
      },
      ecosystemPillars: {
        lab: {
          title: 'LAB',
          subtitle: 'Innovación e Investigación',
          description: 'OTTIV LAB es nuestro centro de investigación y desarrollo de vanguardia, donde experimentamos con tecnologías emergentes para crear soluciones innovadoras para desafíos empresariales complejos.'
        },
        crew: {
          title: 'CREW',
          subtitle: 'Comunidad y Colaboración',
          description: 'OTTIV CREW conecta empresas con consultores expertos, desarrolladores y líderes de la industria para fomentar la colaboración y el intercambio de conocimientos dentro de nuestro próspero ecosistema.'
        },
        data: {
          title: 'DATA',
          subtitle: 'Análisis e Insights',
          description: 'OTTIV DATA transforma la información en inteligencia empresarial procesable a través de análisis avanzados, herramientas de visualización y sistemas de monitoreo en tiempo real.'
        },
        flow: {
          title: 'FLOW',
          subtitle: 'Optimización de Flujo de Trabajo',
          description: 'OTTIV FLOW optimiza los procesos empresariales a través de la automatización inteligente, el diseño de flujo de trabajo personalizado y herramientas de gestión integradas que aumentan la eficiencia y la productividad.'
        },
        learnMore: 'Saber Más'
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes',
        subtitle: 'Descubre cómo OTTIV está transformando negocios en todo el mundo'
      },
      cta: {
        badge: 'Comienza Hoy',
        title: '¿Listo para Transformar Tu Negocio?',
        description: 'Únete a empresas innovadoras que aprovechan el ecosistema de OTTIV para impulsar el crecimiento, la eficiencia y la ventaja competitiva.',
        quickSetup: 'Configuración Rápida',
        quickSetupDesc: 'Implementación en días, no meses.',
        growth: '30% de Crecimiento',
        growthDesc: 'Aumento promedio en eficiencia.',
        contactTitle: 'Contáctanos',
        submitButton: 'Enviar Mensaje',
        sending: 'Enviando...'
      },
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        company: 'Empresa',
        message: 'Mensaje',
        placeholder: {
          name: 'Juan Pérez',
          email: 'juan@ejemplo.com',
          company: 'Tu Empresa',
          message: 'Cuéntanos sobre tu proyecto...'
        }
      },
      toast: {
        messageSent: '¡Mensaje Enviado!',
        messageDesc: 'Gracias por contactarnos. Te responderemos pronto.'
      }
    }
  }
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language changed to English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
