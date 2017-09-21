    // //schronisko dla zwierzat
    // //zadanie z ksiazki junior developer java dev matt
    //
    // var schronisko=[];
    // function pokaz(){
    //   console.log(schronisko);
    // }
    // function add(gadzina){
    //   schronisko.push(gadzina);
    //   pokaz();
    // }
    // function change(position,nowy){
    //   schronisko[position]=nowy;
    //   pokaz();
    // }
    // function usun(position){
    //   schronisko.splice(position,1);
    //   pokaz();
    // }
    // add('cokolwiek')
    // add('kot')
    // add('mysz')
    // add('komar')
    //
    // usun(0,1)
    // //zmiana tablica na obiekt
//      Manager schroniska dla zwierząt
// Program, w którym dodajemy do bazy/usuwamy z bazy
// zwierzęta oraz sprawdzamy stan schroniska (pełne,
// przepełnione, puste etc.).
//
// Junior Developer - pierwsza praca jako programista - JavaDevMatt
// Wariant I – Bardzo prosty:
// • Program konsolowy.
// • Schronisko ma mieć określoną ilość miejsc.
// • Możliwość dodania/usunięcia zwierzaka do/z listy
// zwierząt w schronisku (na razie lista nie musi być
// zapisywana do żadnej bazy danych, ani pliku
// tekstowego).
// • Po wpisaniu „status” program ma wypisać aktualną listę
// zwierząt i wyrzucić komunikat, czy ilość zwierząt
// powoduje, że schronisko ma jeszcze miejsce, jest pełne
// lub jest przepełnione.
// • Zaimplementuj logikę, która uniemożliwia dodanie
// zwierzaka, jeśli schronisko jest pełne.
// Wariant II – to samo co wyżej plus:
// • Zamiast programu konsolowego mamy proste UI
// • Lista zwierząt jest zapisywana do pliku tekstowego lub
// bazy danych.
// • Po wyłączeniu programu i ponownym odpaleniu ma
// zostać załadowany ostatni stan z bazy/pliku.
// Wariant III – to co wyżej plus:
// • Gdy schronisko ma mniej niż 5 wolnych miejsc wysyłany

// jest email informacyjny do osób pracujących w
// schronisku.
// • Możliwość edycji poszczególnych zwierząt. Dodanie pól
// takich jak np. stan zdrowia, płeć itp.
// Wariant IV – to co wyżej plus:
// • Udostępnienie webserwisu, przez który można wyczytać
// aktualny status schroniska.
// Wariant V – to co wyżej plus:
// • Aplikacja mobilna (na dowolny system operacyjny), która
// korzysta z powyższego webserwisu.
// • Zamiast aplikacji mobilnej może być to też strona www.
// Ważne by pobierała dane korzystając z napisanego przez
// nas webserwisu.
// Co można jeszcze dodać?
// • Testy jednostkowe, które pokrywają najważniejszą
// funkcjonalność (nie martw się jeśli jeszcze nie znasz
// niektórych pojęć jak np. „testy jednostkowe”. Zostaną one
// później krótko omówione).
// • Eksport statusu schroniska do pliku .csv.
// • Generowanie dziennego raportu ze stanu schroniska do
// pliku .pdf, który zostanie wysłany na określonego maila
//
// 
// oraz dodany do jakiegoś archiwum.
// • Możliwość dodawania zdjęć określonego zwierzaka przez
// aplikację mobilną (wymaga rozszerzenia webserwisu oraz
// aplikacji mobilnej).
// Jak widzisz, nawet taki prosty pomysł jak manager
// schroniska można całkiem poważnie rozbudować. Zachęcam do
// wymyślenia czegoś własnego pod kątem tego co Cię interesuje.
// Może ten przykład trochę Cię zainspirował.

    var schroniskoObject=
        {
            schronisko:['kot','pies','los'],
          pokaz:function(){
               console.log(this.schronisko);
           },
          add:function(gadzina){
              this.schronisko.push(gadzina);
              this.pokaz();
            },
            zmien:function(position,nowy){
                this.schronisko[position]=nowy;
                this.pokaz();
            },
            usun:function(position){
                this.schronisko.splice(position);
                pokaz.schronisko();
            },
        }
schroniskoObject.usun(1)
