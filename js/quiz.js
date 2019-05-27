/*
Zeichen 	Unicode
------------------------------
�, � 		\u00c4, \u00e4
�, � 		\u00d6, \u00f6
�, � 		\u00dc, \u00fc
� 		\u00df
*/

 //Variablen

var Punkte;
var aktFrage;
var aktFragenNr;
var gegebeneAntwort;
var Fragen = [
 {
    "id":"1",
    "Frage" : "Wie viele Quadratmeter umfasst der Sportcampus?",
    "Antwort" : {
      "A":"1700 qm",
      "B":"500 qm",
      "C":"1200 qm",
    }, 
    "Loesung":"1700 qm",
	"Autor": "Manuel"
  },{
    "id":"2",
    "Frage" : "Wie viele Abteilungen sind in das Projekt 'Ersatz der Produktionstechnik in den Regionalstudios' involviert?",
    "Antwort" : {
      "A":"12",
      "B":"5",
      "C":"25",
    }, 
    "Loesung":"12",
	"Autor": "Jasmin"
  },{
    "id":"3",
    "Frage" : "Welche dieser in D\u00fcsseldorf produzierten Sendungen ist NICHT live?",
    "Antwort" : {
      "A":"Westpol",
      "B":"1:1",
      "C":"Aktuelle Stunde",
    }, 
    "Loesung":"1:1",
	"Autor": "Anne"
  },{
    "id":"4",
    "Frage" : "Wie viele Arbeitspl\u00e4tze stellt der gr\u00f6\u00dfte Fernseh-\u00dcbertragungswagen im WDR zur Verf\u00fcgung?",
    "Antwort" : {
      "A":"12",
      "B":"17",
      "C":"23",
    }, 
    "Loesung":"23",
	"Autor": "Pia"
  },{
    "id":"5",
    "Frage" : "Wie viele unterschiedliche G\u00e4ste waren im Jahr 2018 beim K\u00f6lner Treff?",
    "Antwort" : {
      "A":"234",
      "B":"251",
      "C":"277",
    }, 
    "Loesung":"251",
	"Autor": "Annika"
  },{
    "id":"6",
    "Frage" : "Eine Gesch\u00e4ftsfrau aus K\u00f6ln m\u00f6chte alle Regionalstudios des WDR besuchen und anschlie\u00dfend wieder nach Hause fahren. Welche Strecke legt sie im Optimalfall mit dem Auto zur\u00fcck?",
    "Antwort" : {
      "A":"871 km",
      "B":"937 km",
      "C":"1111 km",
    }, 
    "Loesung":"871 km",
	"Autor": "Simon"
  },{
    "id":"7",
    "Frage" : "Wie lange wird ingestiertes Drehmaterial auf der ZAP vorgehalten?",
    "Antwort" : {
      "A":"eine Woche",
      "B":"einen Monat",
      "C":"ein Jahr",
    }, 
    "Loesung":"eine Woche",
	"Autor": "Benjamin"
  },{
    "id":"8",
    "Frage" : "Welcher Prominente f\u00fchrt H\u00f6rspielfans auf Alexa durch den H\u00f6rspielspeicher?",
    "Antwort" : {
      "A":"Bastian Pastewka",
      "B":"Ralf Richter",
      "C":"Gaby K\u00f6ster",
    }, 
    "Loesung":"Bastian Pastewka",
	"Autor": "Lukas"
  },{
    "id":"9",
    "Frage" : "Die 1985 erstmals ausgestrahlte WDR Politsatire 'Kein sch\u00f6ner Land' ...",
    "Antwort" : {
      "A":"...zeigt den ersten gleichgeschlechtlichen Kuss in einer deutschen Serie.",
      "B":"...besteht aus insgesamt sieben Folgen",
      "C":"...ist seit 2019 auf Netflix zu sehen",
    }, 
    "Loesung":"...zeigt den ersten gleichgeschlechtlichen Kuss in einer deutschen Serie.",
	"Autor": "Paula"
  },{
    "id":"10",
    "Frage" : "Wie viele Stufen hat der Rheinturm?",
    "Antwort" : {
      "A":"1240",
      "B":"960",
      "C":"Er hat keine Treppe",
    }, 
    "Loesung":"1240",
	"Autor": "Laura"
  }
];

start();

function start() {
  aktFragenNr = 0;
  Punkte = 0;
  gegebeneAntwort = "";
  shuffle(Fragen);
  $("#ende").hide();
  $("#answer_commit_btn").hide();  
  writeHTML();
};

//Zufallsreihenfolge der Fragen ermitteln
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};


function writeHTML() {
  $("#answer_commit_btn").hide();
  aktFrage = Fragen[aktFragenNr]; 
  //Frageninformation in HTML anzeigen
  $("#qno").text(aktFragenNr + 1+" von "+Fragen.length);
  $("#question_text").text(aktFrage.Frage);
  
  //Bilder tauschen
  var bild = document.getElementById("potrait");
  bild.src = "./img/quiz/"+aktFrage.Autor+".png";
  $("#autor").text(aktFrage.Autor+" fragt:");
  
  //Zufallsanordnung der Antworten
  var zufallszahl = Math.ceil(Math.random() * 6);
  
  switch (zufallszahl) {    
      case 1:
          $("#answer_a").text(aktFrage.Antwort.A);
          $("#answer_b").text(aktFrage.Antwort.B);
          $("#answer_c").text(aktFrage.Antwort.C);
          break;
      case 2:
          $("#answer_a").text(aktFrage.Antwort.C);
          $("#answer_b").text(aktFrage.Antwort.A);
          $("#answer_c").text(aktFrage.Antwort.B);
          break;
    
      case 3:
          $("#answer_a").text(aktFrage.Antwort.B);
          $("#answer_b").text(aktFrage.Antwort.C);
          $("#answer_c").text(aktFrage.Antwort.A);
          break;
      
      case 4:
          $("#answer_a").text(aktFrage.Antwort.A);
          $("#answer_b").text(aktFrage.Antwort.C);
          $("#answer_c").text(aktFrage.Antwort.B);
          break;
      case 5:
          $("#answer_a").text(aktFrage.Antwort.B);
          $("#answer_b").text(aktFrage.Antwort.A);
          $("#answer_c").text(aktFrage.Antwort.C);
          break;
      case 6:
          $("#answer_a").text(aktFrage.Antwort.C);
          $("#answer_b").text(aktFrage.Antwort.B);
          $("#answer_c").text(aktFrage.Antwort.A);
          break;
  }
};

//Antwort selektieren 
function auswahlAntwort(id) {
  $(id).addClass("btn-primary");
  $(id).removeClass("btn-default");
  $(id).removeClass("btn-success");
  $(id).removeClass("btn-danger");
};

//andere Antworten deselektieren
function abwahlAntwort(id) {
  $(id).addClass("btn-default");
  $(id).removeClass("btn-primary");
  $(id).removeClass("btn-success");
   $(id).removeClass("btn-danger");
};

//Auswahl nichts
function auswahlNichts() {
  abwahlAntwort("#answer_a_btn");
  abwahlAntwort("#answer_b_btn");
  abwahlAntwort("#answer_c_btn");
};

//Auswahl Antwort A
$("#answer_a_btn").click(function() {
  auswahlAntwort("#answer_a_btn");
  abwahlAntwort("#answer_b_btn");
  abwahlAntwort("#answer_c_btn");
  gegebeneAntwort = $("#answer_a").text();
  $("#answer_commit_btn").fadeIn();

});

//Auswahl Antwort B
$("#answer_b_btn").click(function() {
  abwahlAntwort("#answer_a_btn");
  auswahlAntwort("#answer_b_btn");
  abwahlAntwort("#answer_c_btn");
  gegebeneAntwort = $("#answer_b").text();
  $("#answer_commit_btn").fadeIn();  
});
 
//Auswahl Antwort C
$("#answer_c_btn").click(function() {
  abwahlAntwort("#answer_a_btn");
  abwahlAntwort("#answer_b_btn");
  auswahlAntwort("#answer_c_btn");
  gegebeneAntwort = $("#answer_c").text();
  $("#answer_commit_btn").fadeIn();
});

//Antworten
$("#answer_commit_btn").click(function() {
  if (gegebeneAntwort == "") {
	  alert("Keine Antwort markiert!");
  } else {
  pruefeAntwort();
  }
});

//Antwort pruefen
function pruefeAntwort() {
  $("#answer_commit_btn").fadeOut();
  var RichtigeAntwort = getLoesung();
  var auswahlAntwortId = $(".answer.btn-primary").attr("id"); 
  if (gegebeneAntwort == RichtigeAntwort) {
      Punkte++;
      //Richtige antwort: Button Gr�n markieren!
      $("#"+auswahlAntwortId).addClass("btn-success"); 
  } else {
      //Falsche Antwort rot markieren
      $("#"+auswahlAntwortId).addClass("btn-danger");
  }
    
  setTimeout(zeigenaechsteFrage, 2000)
};

function einblendenButtons() {
    $("#answer_a_btn").fadeIn();
    $("#answer_b_btn").fadeIn();
    $("#answer_c_btn").fadeIn();
};

function ausblendenButtons() {
    $("#answer_a_btn").fadeOut();
    $("#answer_b_btn").fadeOut();
    $("#answer_c_btn").fadeOut();
};

//N�chste Frage laden
function zeigenaechsteFrage() {
  gegebeneAntwort = "";
  aktFragenNr++;
  $("#question").fadeTo();
  $("#answer_a_btn").fadeTo();
  $("#answer_b_btn").fadeTo();
  $("#answer_c_btn").fadeTo();
  auswahlNichts();
  if (aktFragenNr >= Fragen.length) {
    showEnd();
  } else {
      writeHTML();
  }
};

function showEnd() {
   ausblendenButtons();
   $("#endpoints").text(Punkte);
   $("#question").fadeOut(function() {
    $("#ende").fadeIn();  
  });
   $("#Rang").text(getRang());
};

$("#neustart_btn").click(function() {
  $("#ende").fadeOut(function() {
      $("#question").fadeIn();
      einblendenButtons();
  });
  start();
});

//Richtige Antwort zur�ckgeben
function getLoesung() {
  return aktFrage.Loesung;
}

function getRang() {
    switch (Punkte) {
		case 0:
			return "Praktikant/Praktikantin";
			break;
        case 1:
            return "studentische Hilfskraft";
            break;
        case 2:
            return "studentische Hilfskraft";
            break;
		case 3:
            return "Gruppenleiter/Gruppenleiterin";
            break;
        case 4:
            return "Gruppenleiter/Gruppenleiterin";
            break;
        case 5:
            return "Abteilungsleiter/Abteilungsleiterin";
            break;
		case 6:
            return "Abteilungsleiter/Abteilungsleiterin";
            break;
        case 7:
            return "Hauptabteilungsleiter /Hauptabteilungsleiterin";
            break;
        case 8:
            return "Hauptabteilungsleiter /Hauptabteilungsleiterin";
            break;
	    case 9:
            return "Direktor/Direktorin";
            break;
		case 10:
            return "Intendant/Intendantin";
            break;
	    default:
            return "";
    }
        
}
