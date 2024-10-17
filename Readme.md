# Backend Ayağa Kaldırma

1. Mongodb ve Redis'i yükleyebilmek için backend içerisindeki docker-compose dosyası çalıştırılmalıdır. ( Bilgisayarınızda docker ve compose yüklü olmalıdır. [Docker indirmek ve bilgi almak için tıklayın](https://docs.docker.com/get-started/get-docker/) Bunun için backend dizinine gidilerek docker-compose up komutu çalıştırışlır.

2. `cd backend`
3. `docker-compose up -d`
4. backend dizininde .env dosyası oluşturulur ve içerisine gerekli bilgiler girilir. ( Örnek aşağıda yer almaktadır. )
5. `MONGO_URI=mongodb://localhost:27017`
`JWT_SECRET: ba353c8a25edda02f0d6c6526e6c65f2dbabb5f3ff114f09e00abfe8923a17dc0228d9a53ddc3f6621edaa8676209417fabff38acea2568553a99e037bf4b389`
`JWT_REFRESH_SECRET: 3b289fa2291eafe0e9251eeeb070f37684f58d5d7fcaad10637fa080a13de4468a36556d9c1ad299b16091d160d28f46ea741248f1a4f12c3e8d29636ab7ed42`

6. Mongo DB Compass uygulmasından yeni bir Database oluşturulur.
7. mongodb://localhost:27017 adresine bağlantı kurulur.
8. Bu işlemin ardından "Add Data -> Import File" diyerek backend dizininde yer alan assets klasöründeki json dosyalarını ilgili collectionlara eklenir.
9. backend dizininde yarn dev komutu çalıştırarak backend ayağa kaldırılır.
10. ![Resim1](/Users/baranazak/Desktop/Ekran Resmi 2024-10-17 14.42.00.png)


# E-commerce-App
