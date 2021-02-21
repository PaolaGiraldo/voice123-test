import { Component, Input, OnInit } from '@angular/core';
import { VoicesService } from '../../voices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {

  voices: string[] = [];

  constructor(
    private voicesService: VoicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getVoices();
  }

  getVoices(): any {
    const keywords = this.route.snapshot.paramMap.get('search');
    this.voicesService.getSearchVoices(keywords)
      .subscribe((voices: any) => {
        //this.voices = voices.headers.get('x-list-total-pages');
        this.voices = voices.providers;
        console.log(this.voices);
      });


  }
}
