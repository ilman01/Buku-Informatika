# Bab 2: Pemrograman Dasar

## 1. Pendahuluan
Pemrograman dasar adalah tahap awal dalam belajar pengembangan perangkat lunak. Dalam pemrograman, kita menulis kode menggunakan bahasa pemrograman untuk membuat komputer menjalankan tugas tertentu. Memahami konsep dasar pemrograman sangat penting bagi setiap pengembang perangkat lunak.

## 2. Konsep Dasar Pemrograman
Pemrograman melibatkan beberapa konsep dasar yang perlu dipahami sebelum membuat program yang lebih kompleks. Beberapa konsep dasar pemrograman meliputi:

### 2.1 Variabel dan Tipe Data
Variabel adalah tempat penyimpanan data dalam program. Tipe data menentukan jenis nilai yang dapat disimpan dalam variabel tersebut. Beberapa tipe data dasar antara lain:
- **Integer**: Angka bulat (contoh: 5, -10, 200).
- **Float**: Angka desimal (contoh: 3.14, -0.5, 100.0).
- **String**: Teks (contoh: "Hello", "World").
- **Boolean**: Nilai benar atau salah (contoh: True, False).

### 2.2 Operator
Operator digunakan untuk melakukan operasi pada variabel dan nilai. Beberapa operator dasar adalah:
- **Operator Aritmatika**: (+, -, *, /, %)
- **Operator Pembanding**: (==, !=, <, >, <=, >=)
- **Operator Logika**: (and, or, not)

### 2.3 Struktur Kontrol
Struktur kontrol digunakan untuk mengatur alur eksekusi program, seperti pengambilan keputusan dan pengulangan.

- **Percabangan (If-Else)**  
  Digunakan untuk mengambil keputusan berdasarkan kondisi tertentu.
  ```python
  if kondisi:
      # kode yang dijalankan jika kondisi benar
  else:
      # kode yang dijalankan jika kondisi salah
  ```

- **Perulangan (Loops)**  
  Digunakan untuk menjalankan kode secara berulang berdasarkan kondisi.
  - **For loop**: Digunakan ketika jumlah perulangan sudah diketahui.
    ```python
    for i in range(5):
        print(i)
    ```
  - **While loop**: Digunakan ketika perulangan bergantung pada kondisi tertentu.
    ```python
    while kondisi:
        # kode yang dijalankan selama kondisi benar
    ```

## 3. Fungsi
Fungsi adalah blok kode yang dapat dipanggil untuk menjalankan tugas tertentu. Fungsi membantu membuat kode lebih terstruktur dan dapat digunakan kembali.

- **Mendefinisikan Fungsi**
  ```python
  def nama_fungsi(parameter1, parameter2):
      # kode fungsi
      return hasil
  ```

- **Memanggil Fungsi**
  ```python
  nama_fungsi(argumen1, argumen2)
  ```

## 4. Array dan List
Array dan list digunakan untuk menyimpan beberapa nilai dalam satu variabel. List adalah struktur data yang lebih fleksibel dibandingkan array.

- **List** di Python:
  ```python
  daftar = [1, 2, 3, 4, 5]
  print(daftar[0])  # Output: 1
  ```

- **Array** (hanya di beberapa bahasa seperti C atau Java):
  ```c
  int array[5] = {1, 2, 3, 4, 5};
  printf("%d", array[0]);  // Output: 1
  ```

## 5. Pemrograman Berorientasi Objek
Pemrograman Berorientasi Objek (OOP) adalah paradigma pemrograman yang menggunakan objek dan kelas untuk mengorganisir kode.

- **Kelas (Class)** adalah blueprint untuk membuat objek.
- **Objek (Object)** adalah instansi dari kelas.

Contoh OOP dalam Python:
```python
class Mobil:
    def __init__(self, merek, tahun):
        self.merek = merek
        self.tahun = tahun
    
    def deskripsi(self):
        print(f"{self.merek} {self.tahun}")

mobil_saya = Mobil("Toyota", 2020)
mobil_saya.deskripsi()  # Output: Toyota 2020
```

## 6. Debugging dan Error Handling
Debugging adalah proses mencari dan memperbaiki kesalahan dalam program. Pemrograman juga memerlukan penanganan kesalahan untuk menghindari crash saat program dijalankan.

- **Penanganan Error di Python menggunakan Try-Except**:
  ```python
  try:
      # kode yang mungkin menyebabkan error
      x = 1 / 0
  except ZeroDivisionError:
      print("Tidak bisa membagi dengan nol!")
  ```

## 7. Kesimpulan
Pemrograman dasar adalah pondasi penting dalam pengembangan perangkat lunak. Setelah memahami konsep-konsep dasar seperti variabel, tipe data, kontrol alur, dan fungsi, Anda akan lebih mudah untuk beralih ke topik-topik lanjutan dalam pemrograman. Terus berlatih untuk mengasah keterampilan Anda dalam menulis kode yang efisien dan efektif.