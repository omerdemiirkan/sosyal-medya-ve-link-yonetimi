Proje Kapsamı

Bu proje, kullanıcıların sosyal medya bağlantılarını ve bu bağlantılara ait bilgileri (sosyal medya adı, açıklama) 
yönetebileceği dinamik ve etkileşimli bir platform geliştirmeyi amaçlamaktadır. Uygulama, kullanıcı dostu bir arayüz sunarak,
sosyal medya linklerini ekleme, düzenleme, silme ve görüntüleme gibi işlemleri desteklemelidir.

Kullanılan Teknolojiler ve Araçlar

Angular: Uygulamanın ön yüz geliştirilmesinde kullanıldı.
TypeScript: Angular bileşenleri ve hizmetleri için programlama dili olarak tercih edildi.
HTML/CSS: Uygulamanın şablonları ve stilleri için kullanıldı.
RxJS: Asenkron veri akışları ve olay yönetimi için kullanıldı.
LocalStorage: Kullanıcı verilerini tarayıcıda saklamak için kullanıldı.
Angular Guards, Directives, Pipes, Resolvers: Uygulamanın çeşitli fonksiyonelliklerini sağlamak için kullanıldı.


Uygulama Mimarisi

Atomic Design Prensipleri
Atomlar: Temel bileşenler, örneğin butonlar (<button>), giriş alanları (<input>), etiketler (<label>).
Moleküller: Atomların birleşimi, örneğin giriş formu (<form>) ve butonlar içeren form bileşenleri.
Şablonlar: Farklı organizmaların bir araya geldiği sayfa şablonları, örneğin kullanıcı giriş sayfası.

Kullanılan Angular Özellikleri

Directives:
appBackground: Bir elementin arka plan rengini değiştiren özel bir direktif.
appEmailFormat : dogru bir email adresi olup olmadıgını gösteren özel bir direktif

Pipes:
Custom Pipe: uppercase  veri dönüşümleri için özelleştirilmiş pipe'lar.

Guards:
AuthGuard: Kullanıcıların belirli sayfalara erişimini kontrol eder, örneğin, yalnızca giriş yapmış kullanıcıların erişebileceği sayfalar.

LocalStorage:
Kullanıcı oturum bilgilerini ve kimlik doğrulama token'larını saklamak için kullanılır.

Resolvers:
Data Resolver: Sayfa yüklenmeden önce gerekli verileri (örneğin, sosyal medya bağlantıları) almak için kullanılır.


İlerleme Adımları

Proje Planlaması:

Proje gereksinimlerinin belirlenmesi.
Kullanıcı arayüzü ve deneyim tasarımının oluşturulması.

Uygulama Mimarisi:

Atomic Design prensiplerine uygun olarak bileşenlerin tasarımı.
Modüler yapı ve kod organizasyonunun planlanması.

Directives ve Pipes:

İhtiyaca göre özel direktif ve pipe'ların oluşturulması.
Uygulama genelinde yeniden kullanılabilirliği sağlamak.

Form Yönetimi:
Email formatı ve diğer form validasyonlarının implementasyonu.

Guard ve Resolver Implementasyonu:

AuthGuard gibi güvenlik önlemlerinin uygulanması.
Resolver kullanarak sayfa öncesi veri yükleme işlemlerinin gerçekleştirilmesi.


LocalStorage Kullanımı:

Kullanıcı oturum bilgilerini saklamak için LocalStorage kullanımının sağlanması.
Token yönetimi ve kullanıcı bilgilerini güvenli bir şekilde saklama.

Dokümantasyon ve Dağıtım:

Kullanıcı ve geliştirici dokümantasyonlarının hazırlanması.
Uygulamanın dağıtımı ve son kullanıcıya sunulması.


