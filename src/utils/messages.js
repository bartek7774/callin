import React from 'react';
export default {
  main:{
    title:"Chcesz dowiedzieć się więcej. Sprawdź jak szybko oddzwonimy!",
    footer:'Administratorem danych, które tu wpisujesz będziemy My, czyli: CTDP Sp. z o.o. & Co. Sp. k.. Dane będą przetwarzane w celu marketingu bezpośredniego naszych produktów i usług. Podstawą prawną przetwarzania jest uzasadniony interes Administratora.',
    fullFooter:'Administratorem danych, które tu wpisujesz będziemy My, czyli: CTDP Sp. z o.o. & Co. Sp. k.. Dane będą przetwarzane w celu marketingu bezpośredniego naszych produktów i usług. Podstawą prawną przetwarzania jest uzasadniony interes Administratora. Masz m.in. prawo do żądania dostępu do danych, sprostowania, usunięcia oraz zgłoszenia sprzeciwu na marketing produktów i usług Administratora, jak również skorzystać z innych praw opisanych szczegółowo w polityce prywatności. Odbiorcami Twoich danych czyli podmiotami, którym będziemy mogli przekazać Twoje dane zgodnie z obowiązującym prawem będą podmioty pomagające Nam w działaniach związanych z opisanym wyżej marketingiem bezpośrednim produktów i usług własnych oraz inne podmioty uprawnione do uzyskania danych na podstawie obowiązującego prawa.',
    button: 'Zadzwońcie teraz',
    waiting: 'Oczekiwanie na potwierdzenie...',
    confirmed: 'Potwierdzamy przyjęcie zgłoszenia. W najbliżyszym czasie zadzwoni do Ciebie nasz telemarketer.',
    greet1:'Witaj',
    question1: phone=>(`Mamy twój numer, możemy zadzwonić do Ciebie teraz?`),
    buttonSmall:'Zadzwoń',
    buttonSmallConf:'Ok',
    errorTitle:'Błąd',
    error:'Niestety nie udało się otrzymać potwierdzenia. Proszę spóbować jeszcze raz później.',
    confirmTitle:'Potwierdzenie',
    confirmSmall:'Twoje zgłoszenie zostało przyjęte. Dziękujemy.'
  },
  second:{
    title:'Zostaw swój numer i sprawdź jak szybko oddzwonimy!',
    footer:'Administratorem danych, które tu wpisujesz będziemy My, czyli: CTDP Sp. z o.o. & Co. Sp. k.. Dane będą przetwarzane w celu marketingu bezpośredniego naszych produktów i usług. Podstawą prawną przetwarzania jest uzasadniony interes Administratora.',
    fullFooter:'Administratorem danych, które tu wpisujesz będziemy My, czyli: CTDP Sp. z o.o. & Co. Sp. k.. Dane będą przetwarzane w celu marketingu bezpośredniego naszych produktów i usług. Podstawą prawną przetwarzania jest uzasadniony interes Administratora. Masz m.in. prawo do żądania dostępu do danych, sprostowania, usunięcia oraz zgłoszenia sprzeciwu na marketing produktów i usług Administratora, jak również skorzystać z innych praw opisanych szczegółowo w polityce prywatności. Odbiorcami Twoich danych czyli podmiotami, którym będziemy mogli przekazać Twoje dane zgodnie z obowiązującym prawem będą podmioty pomagające Nam w działaniach związanych z opisanym wyżej marketingiem bezpośrednim produktów i usług własnych oraz inne podmioty uprawnione do uzyskania danych na podstawie obowiązującego prawa.',
    button: 'Zadzwońcie teraz',
    waiting: 'Oczekiwanie na potwierdzenie...',
    confirmed: 'Potwierdzamy przyjęcie zgłoszenia. W najbliżyszym czasie na podany numer nasz telemarketer.',
    greet1:'Witaj',
    question1: 'Wprowadź swój numer, a zaraz oddzwonimy.',
    question2: phone=><React.Fragment>Zadzwonić na <span>(+48) {phone} </span> numer? </React.Fragment>,
    buttonSmall:'Zadzwoń',
    buttonSmallConf:'Ok',
    errorTitle:'Błąd',
    error:'Niestety nie udało się otrzymać potwierdzenia. Proszę spóbować jeszcze raz później.',
    confirmTitle:'Potwierdzenie',
    confirmSmall:'Twoje zgłoszenie zostało przyjęte. Dziękujemy.',
    buttonSmallTel:'Wprowadź tel'
  }
}