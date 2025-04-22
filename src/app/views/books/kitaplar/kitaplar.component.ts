import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableComponent } from '../../table/table.component';


@Component({
  selector: 'app-kitaplar',
  standalone: true,
  imports: [CommonModule, FormsModule, TableComponent,ReactiveFormsModule],
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.scss']
})
export class KitaplarComponent {

  title = "Kitaplar";
  tableColumns = ["Kitap Adı", "Yazar", "Kategori", "Year"];

  kitaplar = [
    { id: 1, "Kitap Adı": "Simyacı", Yazar: "Paulo Coelho", Kategori: "Roman", Year: 1988 },
    { id: 2, "Kitap Adı": "1984", Yazar: "George Orwell", Kategori: "Distopya", Year: 1949 },
    { id: 3, "Kitap Adı": "Suç ve Ceza", Yazar: "Fyodor Dostoyevski", Kategori: "Klasik", Year: 1866 },
    { id: 4, "Kitap Adı": "Kürk Mantolu Madonna", Yazar: "Sabahattin Ali", Kategori: "Roman", Year: 1943 }
  ];

  isModalOpen = false;
  isClosing = false;


  modalAction: any;
  modalTitle = '';
  kitapForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.kitapForm = this.fb.group({
      kitapAdi: ['', Validators.required],
      yazar: ['', Validators.required],
      kategori: ['', Validators.required],
      yil: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  // Modalı açan fonksiyon
  openModal(action: 'add' | 'update' | 'delete') {
    this.modalAction = action;
    this.modalTitle = action === 'add' ? 'Kitap Ekle' : action === 'update' ? 'Kitap Güncelle' : 'Kitap Sil';
    this.isModalOpen = true;
    if (action === 'add') {
      this.modalTitle = 'Yeni Kitap Ekle';
    } else if (action === 'update') {
      this.modalTitle = 'Kitap Güncelle';
    } else if (action === 'delete') {
      this.modalTitle = 'Kitap Sil';
    }
    this.isModalOpen = true;
  }

  // Modalı kapatan fonksiyon
  closeModal() {
    this.isClosing = true;
    this.kitapForm.reset();
    setTimeout(() => {
      this.isModalOpen = false;
      this.isClosing = false;
    }, 300); // animasyon süresi kadar bekle
  }

  // Silme işlemi
  confirmDelete() {
    console.log('Kitap silindi!');
    this.closeModal();
  }

  // Güncelleme işlemi
  updateKitap() {
    console.log('Kitap güncellendi!');
    this.closeModal();
  }

  // Ekleme işlemi
  addKitap() {
    console.log('Yeni kitap eklendi!');
    this.closeModal();
  }
}
