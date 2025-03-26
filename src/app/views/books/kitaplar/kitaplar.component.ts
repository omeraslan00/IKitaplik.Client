import { Component } from '@angular/core';
import { TableComponent } from '../../table/table.component';

@Component({
  selector: 'app-kitaplar',
  imports: [TableComponent],
  templateUrl: './kitaplar.component.html',
  styleUrl: './kitaplar.component.scss'
})
export class KitaplarComponent {
  tableColumns = ["Kitap Adı", "Yazar", "Kategori", "Yıl"];
  title = "Kitaplar";
  tableData = [
    { "Kitap Adı": "Simyacı", "Yazar": "Paulo Coelho", "Kategori": "Roman", "Yıl": 1988 },
    { "Kitap Adı": "1984", "Yazar": "George Orwell", "Kategori": "Distopya", "Yıl": 1949 },
    { "Kitap Adı": "Suç ve Ceza", "Yazar": "Fyodor Dostoyevski", "Kategori": "Klasik", "Yıl": 1866 },
    { "Kitap Adı": "Kürk Mantolu Madonna", "Yazar": "Sabahattin Ali", "Kategori": "Roman", "Yıl": 1943 },
    { "Kitap Adı": "Bülbülü Öldürmek", "Yazar": "Harper Lee", "Kategori": "Klasik", "Yıl": 1960 },
    { "Kitap Adı": "Hayvan Çiftliği", "Yazar": "George Orwell", "Kategori": "Politik", "Yıl": 1945 },
    { "Kitap Adı": "Cesur Yeni Dünya", "Yazar": "Aldous Huxley", "Kategori": "Distopya", "Yıl": 1932 },
    { "Kitap Adı": "Yeraltından Notlar", "Yazar": "Fyodor Dostoyevski", "Kategori": "Felsefi", "Yıl": 1864 },
    { "Kitap Adı": "Bir Ömür Nasıl Yaşanır?", "Yazar": "İlber Ortaylı", "Kategori": "Kişisel Gelişim", "Yıl": 2019 },
    { "Kitap Adı": "Uçurtma Avcısı", "Yazar": "Khaled Hosseini", "Kategori": "Roman", "Yıl": 2003 },
    { "Kitap Adı": "Küçük Prens", "Yazar": "Antoine de Saint-Exupéry", "Kategori": "Çocuk", "Yıl": 1943 },
    { "Kitap Adı": "Dönüşüm", "Yazar": "Franz Kafka", "Kategori": "Klasik", "Yıl": 1915 },
    { "Kitap Adı": "Fahrenheit 451", "Yazar": "Ray Bradbury", "Kategori": "Bilim Kurgu", "Yıl": 1953 },
    { "Kitap Adı": "Savaş ve Barış", "Yazar": "Lev Tolstoy", "Kategori": "Tarihsel Roman", "Yıl": 1869 },
    { "Kitap Adı": "Otomatik Portakal", "Yazar": "Anthony Burgess", "Kategori": "Distopya", "Yıl": 1962 },
    { "Kitap Adı": "Tutunamayanlar", "Yazar": "Oğuz Atay", "Kategori": "Postmodern", "Yıl": 1971 },
    { "Kitap Adı": "Yüzyıllık Yalnızlık", "Yazar": "Gabriel García Márquez", "Kategori": "Latin Amerika Edebiyatı", "Yıl": 1967 },
    { "Kitap Adı": "Zorba", "Yazar": "Nikos Kazancakis", "Kategori": "Roman", "Yıl": 1946 },
    { "Kitap Adı": "Satranç", "Yazar": "Stefan Zweig", "Kategori": "Psikolojik", "Yıl": 1942 },
    { "Kitap Adı": "İnsan Neyle Yaşar?", "Yazar": "Lev Tolstoy", "Kategori": "Felsefi", "Yıl": 1885 }
];

}
