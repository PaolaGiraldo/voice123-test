import { Component, Input, OnInit } from '@angular/core';
import { VoicesService } from '../../voices.service';
import { ActivatedRoute } from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {

  voices: any[] = [];
  totalPages: number;
  pageEvent: PageEvent;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;
  

  constructor(
    private voicesService: VoicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getVoices();
  }

  getVoices(): any {
    const keywords = this.route.snapshot.paramMap.get('search');
    this.voicesService.getSearchVoices(keywords,1)
      .subscribe((voices: any) => {
        //this.voices = voices.headers.get('x-list-total-pages');
        this.totalPages = voices.headers.get('x-list-total-pages')*10;
        this.voices = voices.body.providers;
        console.log(this.voices);
      });
  }

  paginatorEvent(event:PageEvent): any {

    console.log(event?.pageIndex)
    const page = event.pageIndex + 1 ;
    const keywords = this.route.snapshot.paramMap.get('search');
    this.voicesService.getSearchVoices(keywords,page)
      .subscribe((voices: any) => {
        //this.voices = voices.headers.get('x-list-total-pages');
        this.totalPages = voices.headers.get('x-list-total-pages')*10;
        this.voices = voices.body.providers;
        console.log(this.voices);
      });
  }


}
