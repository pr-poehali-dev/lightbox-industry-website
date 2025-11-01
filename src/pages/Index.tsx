import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [lightGlowActive, setLightGlowActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      images: [
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/835ddae8-51c1-430a-9829-a8698c9bd4d6.jpg',
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/ef9df7cb-c7a9-49b3-b0ec-e7ff4d353744.jpg',
      ],
      size: '80 м²',
      equipment: 'Прожекторы, стойки, фоны',
      price: '5000 ₽/час',
    },
    {
      name: 'Metal Room',
      description: 'Индустриальное пространство со стальными конструкциями и бетоном',
      images: [
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/f429c6c3-e9cc-41d9-a680-3469ce4c0692.jpg',
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/54527388-aef3-4f3b-9062-d5621ae3c7c2.jpg',
      ],
      size: '60 м²',
      equipment: 'LED-панели, софтбоксы',
      price: '4500 ₽/час',
    },
    {
      name: 'Classic Light',
      description: 'Универсальный зал с профессиональным световым оборудованием',
      images: [
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/7a24ddfe-1967-4876-a161-445e80586bcf.jpg',
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/1c7907c5-ecec-4433-8a2e-5239f5318bc6.jpg',
      ],
      size: '70 м²',
      equipment: 'Студийные вспышки, стойки',
      price: '4000 ₽/час',
    },
    {
      name: 'White Cyclorama',
      description: 'Идеальный белый фон для коммерческой съёмки и каталогов',
      images: [
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/6df50637-1ceb-4729-a1b3-1834cb8dab96.jpg',
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/0639f7cd-8194-42c4-afa7-1fa8bd990c55.jpg',
      ],
      size: '55 м²',
      equipment: 'Циклорама, софтбоксы',
      price: '6000 ₽/час',
    },
    {
      name: 'Vintage Studio',
      description: 'Ретро-интерьер с винтажной мебелью и тёплым светом',
      images: [
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/c9184b4a-867b-4839-b702-9a49f520fe1d.jpg',
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/3336c9c0-aa06-4602-9d18-a19a71de1dd4.jpg',
      ],
      size: '65 м²',
      equipment: 'Лампы Эдисона, реквизит',
      price: '5500 ₽/час',
    },
    {
      name: 'Dark Room',
      description: 'Тёмное пространство с неоновыми акцентами для альтернативных съёмок',
      images: [
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/828343c1-88fe-4a05-bf08-1d228f0dca98.jpg',
        'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/8d902fc4-9724-44f7-a9e1-0a3c54f6f283.jpg',
      ],
      size: '50 м²',
      equipment: 'RGB-освещение, неоны',
      price: '5000 ₽/час',
    },
  ];

  const team = [
    {
      name: 'Александр Волков',
      role: 'Главный фотограф',
      style: 'Fashion, Editorial',
      image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/954a8bab-8cbd-4baf-badc-6c116e8afd6e.jpg',
    },
    {
      name: 'Мария Светлова',
      role: 'Визажист',
      style: 'Beauty, Креатив',
      image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/dca04533-872c-4bc9-a989-41ae7180b34c.jpg',
    },
    {
      name: 'Дмитрий Орлов',
      role: 'Арт-директор',
      style: 'Концепции, Продакшн',
      image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/18742cff-9769-472b-bde9-99a54489d704.jpg',
    },
  ];

  const portfolioItems = [
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/7febcfd9-edc1-4ff0-a918-af5ab707950c.jpg', category: 'Мода' },
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/0d8b7dbc-7cee-473a-aa9a-9c437fc77bd0.jpg', category: 'Портрет' },
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/6bf3e749-98c6-424e-9064-87001bce35f0.jpg', category: 'Предметная' },
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/187cc9cd-81fa-4024-80cc-3ef80499a326.jpg', category: 'Репортаж' },
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/638768bb-fd8e-4f86-b811-2a713005d020.jpg', category: 'Портрет' },
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/57985d7f-e932-4e7e-9a4d-5756ee5619da.jpg', category: 'Мода' },
  ];

  const backstage = [
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/5bf2ebd1-203c-4622-a283-6e70bb838aed.jpg', title: 'Настройка света' },
    { image: 'https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/32f9e59a-ae02-403a-b3ee-ac9bd7a8fc18.jpg', title: 'Работа с моделью' },
  ];

  const testimonials = [
    {
      name: 'Анна Соколова',
      role: 'Фотограф',
      text: 'Идеальное пространство для fashion-съемок. Свет, атмосфера, локация — всё на высшем уровне.',
      rating: 5,
    },
    {
      name: 'Михаил Петров',
      role: 'Видеограф',
      text: 'Работал в десятках студий, но LightBox выделяется характером. Каждый зал — отдельная история.',
      rating: 5,
    },
    {
      name: 'Елена Крылова',
      role: 'Art-директор',
      text: 'Наша команда постоянно арендует студию для коммерческих проектов. Качество и сервис безупречны.',
      rating: 5,
    },
  ];

  const categories = ['Все', 'Портрет', 'Мода', 'Предметная', 'Репортаж'];

  const filteredPortfolio = selectedCategory === 'Все'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-graphite text-foreground">
      <header className="fixed top-0 w-full z-50 bg-graphite/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary text-glow animate-glow-pulse">LIGHTBOX</h1>
          <nav className="hidden md:flex gap-8 text-sm tracking-wider">
            <a href="#about" className="hover:text-primary transition-colors">О СТУДИИ</a>
            <a href="#team" className="hover:text-primary transition-colors">КОМАНДА</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">ПОРТФОЛИО</a>
            <a href="#studios" className="hover:text-primary transition-colors">ЗАЛЫ</a>
            <a href="#booking" className="hover:text-primary transition-colors">БРОНЬ</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-graphite font-semibold box-glow">
            Связаться
          </Button>
        </div>
      </header>

      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setLightGlowActive(true)}
        onMouseLeave={() => setLightGlowActive(false)}
      >
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/d61ff87b-555e-4f0b-921d-5c999176d331/files/0d8b7dbc-7cee-473a-aa9a-9c437fc77bd0.jpg"
            alt="LightBox Studio"
            className="w-full h-full object-cover opacity-40"
          />
          <div className={`absolute inset-0 bg-gradient-to-b from-graphite/50 via-graphite/30 to-graphite transition-opacity duration-500 ${lightGlowActive ? 'opacity-60' : 'opacity-100'}`}></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className={`text-7xl md:text-9xl font-bold mb-6 transition-all duration-500 ${lightGlowActive ? 'text-glow scale-105' : ''}`}>
            LIGHTBOX
          </h2>
          <p className="text-2xl md:text-3xl mb-8 text-brass tracking-wide">
            Пространство света и формы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-graphite font-semibold text-lg px-8 py-6 box-glow"
            >
              <Icon name="Video" className="mr-2" size={20} />
              Виртуальный тур
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
            с профессиональным светом. Мы создали шесть уникальных залов, каждый со своим характером,
            чтобы вы могли воплотить любую творческую идею.
          </p>
        </div>
      </section>

      <section id="team" className="py-24 px-4 bg-concrete" data-animate>
        <div className={`container mx-auto transition-all duration-700 ${isVisible['team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary">КОМАНДА LIGHTBOX</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="bg-graphite border-border overflow-hidden group hover:border-primary transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-1 text-brass group-hover:text-glow transition-all duration-300">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.style}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="backstage" className="py-24 px-4" data-animate>
        <div className={`container mx-auto transition-all duration-700 ${isVisible['backstage'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center text-primary">СВЕТ. ДВИЖЕНИЕ. МОМЕНТ.</h2>
          <p className="text-center text-brass text-xl mb-16">Закулисье наших съёмок</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {backstage.map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 to-transparent flex items-end p-6">
                  <p className="text-2xl font-bold text-brass">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 bg-concrete" data-animate>
        <div className={`container mx-auto transition-all duration-700 ${isVisible['portfolio'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center text-primary">ПОРТФОЛИО</h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Badge
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-graphite hover:bg-primary/90'
                    : 'bg-muted text-foreground hover:bg-primary hover:text-graphite'
                }`}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredPortfolio.map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden group cursor-pointer animate-fade-in"
                onClick={() => setSelectedImage(item.image)}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-graphite/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="Maximize2" className="text-primary box-glow" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <Icon 
            name="X" 
            className="absolute top-8 right-8 text-white hover:text-primary cursor-pointer" 
            size={32}
          />
          <img 
            src={selectedImage} 
            alt="Full screen" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <section id="studios" className="py-24 px-4" data-animate>
        <div className={`container mx-auto transition-all duration-700 ${isVisible['studios'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center text-primary">НАШИ ЗАЛЫ</h2>
          <p className="text-center text-brass text-xl mb-16">Выберите идеальное пространство для вашей съёмки</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studios.map((studio, idx) => (
              <Card key={idx} className="bg-concrete border-border hover:border-primary transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={studio.images[0]}
                    alt={`${studio.name} - вид 1`}
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src={studio.images[1]}
                    alt={`${studio.name} - вид 2`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-graphite px-3 py-1 text-sm font-bold z-10">
                    {studio.size}
                  </div>
                  <div className="absolute top-4 left-4 bg-graphite/80 text-primary px-3 py-1 text-lg font-bold z-10">
                    {studio.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-brass">{studio.name}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{studio.description}</p>
                  <p className="text-xs text-muted-foreground mb-6 flex items-center gap-2">
                    <Icon name="Lightbulb" size={16} className="text-primary" />
                    {studio.equipment}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-graphite font-semibold">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-concrete" data-animate>
        <div className={`container mx-auto max-w-2xl transition-all duration-700 ${isVisible['booking'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center text-primary">БРОНИРОВАНИЕ</h2>
          <Card className="bg-graphite border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-brass mb-2">Ваше имя</label>
                  <Input className="bg-concrete border-border text-foreground" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brass mb-2">Email</label>
                  <Input type="email" className="bg-concrete border-border text-foreground" placeholder="example@mail.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brass mb-2">Телефон</label>
                  <Input type="tel" className="bg-concrete border-border text-foreground" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brass mb-2">Выберите зал</label>
                  <select className="w-full px-3 py-2 bg-concrete border border-border rounded-md text-foreground">
                    {studios.map((studio) => (
                      <option key={studio.name}>{studio.name} — {studio.price}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brass mb-2">Дата и время</label>
                  <Input type="datetime-local" className="bg-concrete border-border text-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brass mb-2">Комментарий</label>
                  <Textarea className="bg-concrete border-border text-foreground" placeholder="Расскажите о вашем проекте..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-graphite font-semibold text-lg py-6 box-glow">
                  Подтвердить бронь
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4" data-animate id="testimonials">
        <div className={`container mx-auto max-w-6xl transition-all duration-700 ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary">ОТЗЫВЫ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-graphite border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
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

      <section id="contacts" className="py-24 px-4 bg-concrete" data-animate>
        <div className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible['contacts'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <h3 className="text-xl font-bold text-brass">Адрес</h3>
                </div>
                <p className="text-muted-foreground ml-9 mb-2">
                  г. Москва, ул. Промышленная, д. 42
                </p>
                <a href="#" className="text-primary text-sm ml-9 hover:underline flex items-center gap-2">
                  <Icon name="ExternalLink" size={16} />
                  Открыть на карте
                </a>
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
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-graphite transition-all duration-300 hover:scale-110">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-graphite transition-all duration-300 hover:scale-110">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-graphite transition-all duration-300 hover:scale-110">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
            <div className="bg-graphite rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-brass">Режим работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 10:00 - 22:00</p>
                <p>Суббота - Воскресенье: 11:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-graphite border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4 text-glow">LIGHTBOX</h2>
          <p className="text-brass text-lg mb-6 italic">
            Где свет становится искусством
          </p>
          <p className="text-muted-foreground text-sm">
            © 2024 LightBox Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
