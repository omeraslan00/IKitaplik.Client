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
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kitap Ekle',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kitap Düzenle',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kitap Sil',
        url: '/base/cards',
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
    url: '/students',
    iconComponent: { name: 'cil-grid' },
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
  }
];
