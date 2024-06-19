import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagetoggleComponent } from './components/imagetoggle/imagetoggle.component';
import { SelectlistComponent } from './components/selectlist/selectlist.component';
import { EmpdetailsComponent } from './components/empdetails/empdetails.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImagetoggleComponent,
    SelectlistComponent,
    EmpdetailsComponent,
    RtfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
