import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagetoggleComponent } from './components/imagetoggle/imagetoggle.component';
import { SelectlistComponent } from './components/selectlist/selectlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagetoggleComponent,
    SelectlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
