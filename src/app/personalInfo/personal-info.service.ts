import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PersonalData } from './personal-info-model';

@Injectable({providedIn:'root'})
export class PersonalInfoService{
    personalInfo:PersonalData
    
}