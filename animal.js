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
    var schroniskoObject=
        {
            schronisko:[],
          pokaz:function(){
               console.log(this.schronisko);
           },
          add:function(gadzina){
              this.schronisko.push(gadzina);
              this.pokaz();
            },
        }



   schroniskoObject.add('sdad');
   
