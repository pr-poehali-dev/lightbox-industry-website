import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const studios = [
    {
      name: 'Brick Hall',
      description: 'Классический лофт с кирпичной кладкой и промышленными элементами',
      image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/638768bb-fd8e-4f86-b811-2a713005d020.jpg',
      size: '80 м²',
    },
    {
      name: 'Metal Room',
      description: 'Индустриальное пространство со стальными конструкциями и бетоном',
      image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/57985d7f-e932-4e7e-9a4d-5756ee5619da.jpg',
      size: '60 м²',
    },
    {
      name: 'Classic Light',
      description: 'Универсальный зал с профессиональным световым оборудованием',
      image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/0d8b7dbc-7cee-473a-aa9a-9c437fc77bd0.jpg',
      size: '70 м²',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Соколова',
      role: 'Фотограф',
      text: 'Идеальное пространство для fashion-съемок. Свет, атмосфера, локация — всё на высшем уровне.',
    },
    {
      name: 'Михаил Петров',
      role: 'Видеограф',
      text: 'Работал в десятках студий, но LightBox выделяется характером. Каждый зал — отдельная история.',
    },
    {
      name: 'Елена Крылова',
      role: 'Art-директор',
      text: 'Наша команда постоянно арендует студию для коммерческих проектов. Качество и сервис безупречны.',
    },
  ];

  const portfolio = [
    'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/0d8b7dbc-7cee-473a-aa9a-9c437fc77bd0.jpg',
    'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/638768bb-fd8e-4f86-b811-2a713005d020.jpg',
    'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/57985d7f-e932-4e7e-9a4d-5756ee5619da.jpg',
    'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/0d8b7dbc-7cee-473a-aa9a-9c437fc77bd0.jpg',
    'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/638768bb-fd8e-4f86-b811-2a713005d020.jpg',
    'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/57985d7f-e932-4e7e-9a4d-5756ee5619da.jpg',
  ];

  return (
    <div className="min-h-screen bg-graphite text-foreground">
      <header className="fixed top-0 w-full z-50 bg-graphite/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary text-glow">LIGHTBOX</h1>
          <nav className="hidden md:flex gap-8 text-sm tracking-wider">
            <a href="#about" className="hover:text-primary transition-colors">О СТУДИИ</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">ПОРТФОЛИО</a>
            <a href="#studios" className="hover:text-primary transition-colors">ЗАЛЫ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">КОНТАКТЫ</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-graphite font-semibold">
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/0d8b7dbc-7cee-473a-aa9a-9c437fc77bd0.jpg"
            alt="LightBox Studio"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 via-graphite/30 to-graphite"></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-7xl md:text-9xl font-bold mb-6 text-glow">
            LIGHTBOX
          </h2>
          <p className="text-2xl md:text-3xl mb-8 text-brass tracking-wide">
            Пространство света и формы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-graphite font-semibold text-lg px-8 py-6"
            >
              Посмотреть портфолио
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-graphite font-semibold text-lg px-8 py-6"
            >
              Забронировать съёмку
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </section>

      <section id="about" className="py-24 px-4" data-animate>
        <div className={`container mx-auto max-w-4xl text-center transition-all duration-700 ${isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-primary">О СТУДИИ</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
            Свет, фактура и характер — три элемента идеального кадра.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            LightBox — это креативное пространство в сердце индустриального района, где брутальность лофта сочетается
            с профессиональным светом. Мы создали три уникальных зала, каждый со своим характером,
            чтобы вы могли воплотить любую творческую идею.
          </p>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 bg-concrete" data-animate>
        <div className={`container mx-auto transition-all duration-700 ${isVisible['portfolio'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary">ПОРТФОЛИО</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-graphite/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" className="text-primary" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="studios" className="py-24 px-4" data-animate>
        <div className={`container mx-auto transition-all duration-700 ${isVisible['studios'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary">НАШИ ЗАЛЫ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {studios.map((studio, idx) => (
              <Card key={idx} className="bg-concrete border-border hover:border-primary transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={studio.image}
                    alt={studio.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-graphite px-3 py-1 text-sm font-bold">
                    {studio.size}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-brass">{studio.name}</h3>
                  <p className="text-muted-foreground mb-6">{studio.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-graphite font-semibold">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-concrete" data-animate id="testimonials">
        <div className={`container mx-auto max-w-6xl transition-all duration-700 ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary">ОТЗЫВЫ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-graphite border-border">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon name="Quote" className="text-primary opacity-50" size={32} />
                  </div>
                  <p className="text-foreground mb-6 italic">{testimonial.text}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-brass">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4" data-animate>
        <div className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible['contacts'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <h3 className="text-xl font-bold text-brass">Адрес</h3>
                </div>
                <p className="text-muted-foreground ml-9">
                  г. Москва, ул. Промышленная, д. 42
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <h3 className="text-xl font-bold text-brass">Телефон</h3>
                </div>
                <p className="text-muted-foreground ml-9">+7 (495) 123-45-67</p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <h3 className="text-xl font-bold text-brass">Email</h3>
                </div>
                <p className="text-muted-foreground ml-9">info@lightbox.studio</p>
              </div>
              <div className="flex gap-4 ml-9">
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-graphite">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-graphite">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-graphite">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
            <div className="bg-concrete rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-brass">Режим работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 10:00 - 22:00</p>
                <p>Суббота - Воскресенье: 11:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-graphite border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">LIGHTBOX</h2>
          <p className="text-muted-foreground text-sm">
            © 2024 LightBox Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
