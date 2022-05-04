import { Component, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IonSlides, IonSlide } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slidesSurvey') slides: IonSlides;

  survey: Survey = { Code: 0, Lecturer: '', Course: '', Group: '' };

  constructor(private toastController: ToastController) {}
  async ngOnInit() {
    const toast = await this.toastController.create({
      header: 'Ankieta oceniająca zajęcia',
      icon: 'information-circle',
      message: 'Proszę wypełnić sumiennie ankietę',
      duration: 3000,
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            console.log('Zamknięto toasta');
          },
        },
      ],
    });
    toast.present();

    // await this.slides.lockSwipeToNext(true);
    // this.slides.slideTo(1, 4000);
    // const curSlide = await this.slides.getActiveIndex();
    // console.log(curSlide);
  }

  async slideChanged() {
    let curIndex = await this.slides.getActiveIndex();
    console.log(curIndex);
  }

  loadSurveyData() {
    this.survey = {
      Code: 200000,
      Lecturer: 'Michał Kuciapski',
      Course: 'Ionic',
      Group: 's22-32',
    };
  }
}

interface Survey {
  Code: number;
  Lecturer: string;
  Course: string;
  Group: string;
}
