import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  private imageSrc: any = '';
  private base64: string = '';
  private fileType: string = '';

  public async handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    await reader.readAsDataURL(file);
    /**
     * Use this for sub function
     */
    // reader.onload = await this._handleReaderLoaded.bind(this);

    reader.onload = () => {
      this.imageSrc = reader.result;
      this.base64 = this.imageSrc.split(',')[1];
      this.fileType = this.imageSrc.split(',')[0];
      console.log(this.imageSrc);
      console.log(this.base64);
      console.log(this.fileType);
    }
  }

  private async _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.base64 = this.imageSrc.split(',')[1];
    this.fileType = this.imageSrc.split(',')[0];
    console.log(this.imageSrc);
    console.log(this.base64);
    console.log(this.fileType);
  }
}
