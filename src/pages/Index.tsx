import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sections = [
    { 
      id: 'chronicles', 
      title: 'Летописи', 
      icon: 'ScrollText',
      description: 'Древние записи о важных событиях',
      color: 'bg-ancient-red text-ancient-beige'
    },
    { 
      id: 'history', 
      title: 'История', 
      icon: 'BookOpen',
      description: 'Исторические факты и события',
      color: 'bg-ancient-gold text-ancient-red'
    },
    { 
      id: 'events', 
      title: 'События', 
      icon: 'Calendar',
      description: 'Ключевые моменты истории',
      color: 'bg-ancient-green text-ancient-beige'
    },
    { 
      id: 'princes', 
      title: 'Князья', 
      icon: 'Crown',
      description: 'Правители древней Руси',
      color: 'bg-ancient-brown text-ancient-beige'
    },
    { 
      id: 'chronicles-detailed', 
      title: 'Хроники', 
      icon: 'FileText',
      description: 'Подробные исторические записи',
      color: 'bg-ancient-red text-ancient-beige'
    }
  ];

  const timelineEvents = [
    {
      year: 862,
      title: 'Призвание варягов',
      description: 'Рюрик становится князем в Новгороде',
      type: 'political'
    },
    {
      year: 882,
      title: 'Объединение Новгорода и Киева',
      description: 'Олег захватывает Киев и создает единое государство',
      type: 'political'
    },
    {
      year: 988,
      title: 'Крещение Руси',
      description: 'Владимир I принимает христианство',
      type: 'religious'
    },
    {
      year: 1019,
      title: 'Правление Ярослава Мудрого',
      description: 'Расцвет Киевской Руси, создание Русской Правды',
      type: 'cultural'
    },
    {
      year: 1240,
      title: 'Невская битва',
      description: 'Александр Невский побеждает шведов',
      type: 'military'
    },
    {
      year: 1380,
      title: 'Куликовская битва',
      description: 'Дмитрий Донской одерживает победу над Мамаем',
      type: 'military'
    }
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'political': return 'bg-ancient-red';
      case 'religious': return 'bg-ancient-gold';
      case 'cultural': return 'bg-ancient-green';
      case 'military': return 'bg-ancient-brown';
      default: return 'bg-ancient-red';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ancient-beige to-white">
      {/* Header with ornate styling */}
      <header className="relative py-16 px-4 text-center bg-ancient-red text-ancient-beige">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/58a9bd17-b358-4046-95d8-d41b015dba4e.jpg" 
            alt="Ancient manuscript" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-ancient mb-4 tracking-wide">
            Русскія Хроники
          </h1>
          <p className="text-xl font-serif opacity-90">
            Летопись древней Руси • IX-XV века
          </p>
        </div>
      </header>

      {/* Navigation sections */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-ancient text-ancient-red text-center mb-8">
            Разделы летописи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Card key={section.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-ancient-gold border-2">
                <CardHeader className={`${section.color} text-center py-6`}>
                  <Icon name={section.icon} size={40} className="mx-auto mb-2" />
                  <CardTitle className="text-2xl font-ancient">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-ancient-beige">
                  <p className="text-ancient-brown text-center mb-4">
                    {section.description}
                  </p>
                  <Button 
                    className="w-full bg-ancient-gold text-ancient-red hover:bg-ancient-brown hover:text-ancient-beige"
                    onClick={() => console.log(`Opening ${section.title}`)}
                  >
                    Открыть раздел
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-ancient-beige via-white to-ancient-beige">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-ancient text-ancient-red text-center mb-12">
            Временная шкала событий
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ancient-gold"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card 
                      className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-ancient-gold border-2"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardContent className="p-6 bg-ancient-beige">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${getEventTypeColor(event.type)} text-white px-3 py-1`}>
                            {event.year}
                          </Badge>
                          <Badge variant="outline" className="border-ancient-gold text-ancient-brown">
                            {event.type === 'political' && 'Политика'}
                            {event.type === 'religious' && 'Религия'}
                            {event.type === 'cultural' && 'Культура'}
                            {event.type === 'military' && 'Война'}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-ancient text-ancient-red mb-2">
                          {event.title}
                        </h3>
                        <p className="text-ancient-brown">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-4 h-4 rounded-full ${getEventTypeColor(event.type)} border-4 border-white shadow-lg z-10`}></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-ancient text-ancient-red mb-6">
                Великие князья Руси
              </h2>
              <p className="text-lg text-ancient-brown mb-6 font-serif leading-relaxed">
                Познакомьтесь с правителями, которые создавали и укрепляли русское государство. 
                От легендарного Рюрика до великих князей московских — каждый оставил свой след в истории.
              </p>
              <Button className="bg-ancient-red text-ancient-beige hover:bg-ancient-brown px-8 py-3">
                <Icon name="Crown" size={20} className="mr-2" />
                Изучить правителей
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/741eb23b-f035-4de1-be4e-d285e83c8035.jpg" 
                alt="Древнерусский князь" 
                className="w-full rounded-lg shadow-xl border-4 border-ancient-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historical landscapes */}
      <section className="py-16 px-4 bg-ancient-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/img/2299e297-87ac-4eb5-8143-b231f998ec0b.jpg" 
                alt="Древнерусский город" 
                className="w-full rounded-lg shadow-xl border-4 border-ancient-gold"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-ancient text-ancient-red mb-6">
                Города и земли
              </h2>
              <p className="text-lg text-ancient-brown mb-6 font-serif leading-relaxed">
                Древние города Руси — колыбель нашей цивилизации. Новгород, Киев, Москва, 
                Владимир — каждый город хранит уникальную историю и традиции.
              </p>
              <Button className="bg-ancient-green text-ancient-beige hover:bg-ancient-brown px-8 py-3">
                <Icon name="MapPin" size={20} className="mr-2" />
                Исследовать города
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ancient-red text-ancient-beige py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="font-ancient text-lg mb-2">
            Русскія Хроники
          </p>
          <p className="opacity-75">
            Сохраняя память о великом прошлом
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;