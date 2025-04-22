import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Anasayfa',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' }
  },
  {
    title: true,
    name: 'Genel İşlemler'
  },
  {
    name: 'Emanet Kitaplar',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Emanet Kitap Ver',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Süresi Geçen Emanetler',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Genel',
    title: true
  },
  {
    name: 'Kitap Yönetimi',
    url: '/books',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Kitaplar',
        url: '/books/kitaplar',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kategoriler',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Yazarlar',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Öğrenci',
    url: '/students',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Öğrenciler',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Öğrenci Ekle',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Öğrenci Düzenle',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Öğrenci Sil',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
      ,
      {
        name: 'Öğrenci Hareketleri',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Takip & Raporlama',
    url: '/follow-report',
    iconComponent: { name: 'cil-chart-pie' },
    children: [
      {
        name: 'İstatistikler',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Geciken Kitaplar',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Emanet İşlemleri',
    url: '/luggage-locker',
    iconComponent: { name: 'cil-grid' },
    children: [
      {
        name: 'Emanet Al',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Emanet Ver',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Bağış İşlemleri',
    iconComponent: { name: 'cil-chart' },
    url: '/charts'
  },
];
