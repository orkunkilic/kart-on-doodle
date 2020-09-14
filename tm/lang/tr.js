const _levels = [
    "1. Bölüm: Her oyun, oyuncusundan bir girdi bekler. Bu oyundaki tek girdi, oyuncunun ekrana tıklaması olacak. Fare ile her tıklandığında, kuş kanat çırpacak.",
    "2. Bölüm: Peki, oyunun zorluğu nerede? Oyun ne zaman sona erecek? Mesela, yere çarptığında oyunun bitişi kodlayabiliriz",
    "3. Bölüm: Artık, oyunumuzda biraz aksiyon görmeye başladık. Şimdi oyun başladığında ortaya çıkacak çubukları belirleyip, kuşumuzun hızını ayarlayalım.",
    "4. Bölüm: Eğer kuşumuz engelleri aşarsa, toplam puanlarını artıralım.",
    "5. Bölüm: Eğer kuşumuz engelleri aşamazsa, puanı sıfırlayalım ve oyunu bitirelim"
];


const _training_classes = [
    {
        name: "1",
        title: "'Ekrana Dokununca' kartı için örnek ekle",
        description:
            "'Ekrana Dokununca' kartından sonra gelecek tüm aksiyonlar, kullanıcı ekrana tıkladığı anda aktif olur. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "2",
        title: "Oyun Başlayınca' kartı için örnek ekle",
        description:
            "'Oyun Başlayınca' olayı, bir seferlik oyun başladığında çalıştırmak isteyeceğiniz aksiyonları alır. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "3",
        title: "Engeli Aşınca' kartı için örnek ekle",
        description:
            "'Engeli Aşınca' komutu engelleri geçtikten sonra çalışır. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "4",
        title: "Engele Çarpınca' kartı için örnek ekle",
        description:
            "'Engele Çarpınca' komutu herhangi bir engele çarptıktan sonra çalışır. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "5",
        title: "Yere Çarpınca' kartı için örnek ekle",
        description:
            "'Yere Çarpınca' komutu yere düştükten sonra çalışır. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "6",
        title: "Kanat Çırp' kartı için örnek ekle",
        description:
            "Kanat Çırp komutu, kuşun dikey eksende yükselmesini sağlar. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "7",
        title: "Skoru Değiştir' kartı için örnek ekle",
        description:
            "'Skoru Değiştir' komutu toplam puanımızı istediğimiz miktarda değiştirmemizi sağlar. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "8",
        title: "Hızı Ayarla' kartı için örnek ekle",
        description:
            "'Hızı Ayarla' komutu kuşun önüne gelen engellerin ne kadar hızlı ilerleyeceğini belirler. Örnek eklemek için butona basılı tutun.."
    },
    {
        name: "9",
        title: "Engel Yerleştir' kartı için örnek ekle",
        description:
            "'Engel Yerleştir' komutu, oyun ekranına engelleri yerleştirir. Örnek eklemek için butona basılı tutun."
    },
    {
        name: "10",
        title: "Oyunu Bitir' kartı için örnek ekle",
        description:
            "'Oyunu Bitir' komutu, bitiş ekranı gösterir. Örnek eklemek için butona basılı tutun."
    }
];


const _title = "Flappy Bird Oyununu Kodlayalım";
const _explanation = "Programlama kartlarını kameraya göster ve kodlamaya başla! <a href='./codelab/tr/index.html'>Eğer ne yapacağını bilmiyorsan, kılavuzumuza göz at.</a>";
const _camera_title = "Programlama kartlarını göster";
const _tm_link_text = "... kendi kartlarını kullanmak için YZ geliştir";


function fillPage() {
    $("#title").html(_title);
    $("#intro-text").html(_explanation);
    $("#camera-title").html(_camera_title);
    $("#train-model-button").html(_tm_link_text);
    $("#level-container").html(_levels[0]);
}