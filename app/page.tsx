import Link from 'next/link';

export default function Home() {
  const versions = [
    {
      id: 'v1',
      name: 'Лесной терминал',
      subtitle: 'Светлая палитра',
      description: 'Matrix rain с лесными символами, терминальный стиль, эффект печатной машинки',
      palette: 'Лосось и цитрусы',
      colors: ['#A72913', '#FAA994', '#FCD3C5', '#E8AF59', '#571310'],
      bg: 'from-[#FCD3C5] to-[#FFF0EA]',
      font: 'font-mono',
      preview: '> Соня & Кирилл',
    },
    {
      id: 'v2',
      name: 'Неоновый сад',
      subtitle: 'Тёмная палитра',
      description: 'Плавающие листья, стеклянные карточки, неоновое свечение',
      palette: 'Фрукты',
      colors: ['#C64632', '#C60550', '#F4C599', '#9AA988'],
      bg: 'from-[#1a0a08] via-[#0a1a0a] to-[#1a0a08]',
      font: 'font-sans',
      preview: 'Соня & Кирилл',
    },
    {
      id: 'v3',
      name: 'Тёплый минимализм',
      subtitle: 'Светлая палитра',
      description: 'Парящие частицы, элегантный serif, журнальная вёрстка',
      palette: 'Тёплые оттенки',
      colors: ['#F09367', '#F0A599', '#CE5A43', '#AB482D', '#889063'],
      bg: 'from-[#FFF8F5] to-[#FFF0EA]',
      font: 'font-serif',
      preview: 'Соня & Кирилл',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <span className="text-[#571310] text-sm tracking-widest">СВАДЕБНОЕ ПРИГЛАШЕНИЕ</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Соня <span className="text-[#FAA994]">&</span> Кирилл
        </h1>
        <p className="text-xl text-gray-400 mb-4">03 . 09 . 2026</p>
        <p className="text-lg text-gray-500 mb-16">
          Выберите вариант дизайна:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {versions.map((version) => (
            <Link
              key={version.id}
              href={`/${version.id}`}
              className="group block"
            >
              <div className={`bg-gradient-to-br ${version.bg} rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden`}>
                <div className="h-48 flex items-center justify-center border-b border-white/10">
                  <span className={`text-2xl md:text-3xl ${version.id === 'v1' ? 'text-[#571310] font-mono' : version.id === 'v2' ? 'text-[#F4C599] font-sans' : 'text-[#AB482D] font-serif'}`}>
                    {version.preview}
                  </span>
                </div>
                
                <div className="p-6 text-left">
                  <div className="flex gap-2 mb-4">
                    {version.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-[#FAA994] transition-colors">
                    {version.name}
                  </h2>
                  <p className="text-sm text-[#FAA994] mb-3">{version.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{version.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">Палитра: {version.palette}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
