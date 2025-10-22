import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const courses = [
    {
      id: 1,
      title: 'Основы рисования',
      description: 'Научитесь основам аниме-рисования с нуля',
      duration: '8 недель',
      level: 'Начинающий',
      icon: 'Palette'
    },
    {
      id: 2,
      title: 'Анимация персонажей',
      description: 'Создавайте живых персонажей в движении',
      duration: '12 недель',
      level: 'Средний',
      icon: 'Play'
    },
    {
      id: 3,
      title: 'Дизайн персонажей',
      description: 'Разработка уникальных персонажей',
      duration: '10 недель',
      level: 'Средний',
      icon: 'Users'
    },
    {
      id: 4,
      title: 'Цифровая живопись',
      description: 'Мастерство цифрового искусства',
      duration: '6 недель',
      level: 'Продвинутый',
      icon: 'Brush'
    }
  ];

  const features = [
    {
      icon: 'GraduationCap',
      title: 'Профессиональные преподаватели',
      description: 'Учитесь у лучших художников индустрии'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное для вас время'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Получите признанные сертификаты'
    },
    {
      icon: 'MessageCircle',
      title: 'Поддержка 24/7',
      description: 'Всегда готовы помочь вам'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl">✨</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ANIME ACADEMY
            </h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">Курсы</Button>
            <Button variant="ghost">О нас</Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Учись, Твори,{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Вдохновляй
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Погрузитесь в мир аниме-арта, анимации и сторителлинга вместе с нашими экспертными курсами
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ea37abd2-e1a3-4e48-b1c4-e10be647325d/files/1616f0fb-b989-4cc2-8a80-0d53d241918a.jpg"
                alt="Anime Academy Student"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Популярные курсы</h3>
            <p className="text-muted-foreground text-lg">Выберите курс и начните свой путь в мире аниме</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="hover:scale-105 transition-transform duration-300 cursor-pointer border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={course.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="BarChart" size={16} />
                      {course.level}
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h3>
            <p className="text-muted-foreground text-lg">Мы создаем лучшие условия для вашего обучения</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 p-6 rounded-2xl hover:bg-card/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center space-y-6">
          <h3 className="text-4xl md:text-5xl font-bold">
            Готовы начать обучение?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже воплощают свои творческие мечты в реальность
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-6">
            Записаться на курс
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-2xl">✨</div>
            <span className="text-xl font-bold text-foreground">ANIME ACADEMY</span>
          </div>
          <p>© 2024 Anime Academy. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
