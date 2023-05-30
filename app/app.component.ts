import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('canvas')
  private canvasRef: ElementRef = {} as ElementRef;

  rotationSpeedX: number = 0.05;
  rotationSpeedY: number = 0.01;
  size: number = 200;

  cameraZ: number = 400;
  fieldOfView: number = 1;
  nearClippingPlane: number = 1;
  farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
}
