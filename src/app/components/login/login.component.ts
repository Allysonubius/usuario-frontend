import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { AlertsService } from 'src/app/service/Alerts/alerts.service';
import { LoginService } from 'src/app/service/login/login.service';
import { WelcomeComponent } from '../modals/welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel!: User;

  loading = false;

  errorMessage: string = '';

  returnUrl!: string;

  randomGifUrl: string = '';

  submitted = false;
  loginForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    private alertService : AlertsService,
    private dialog: MatDialog,
    ) {
      // Redirect to home if alrealdy logged in
      if(this.loginService.currentUserValue){
        this.router.navigate(['']);
      };

      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        rememberMe: [false]
      });

      const cacheUsername = localStorage.getItem('username');
      const cachepassword = localStorage.getItem('password');

      if(cacheUsername && cachepassword){
        this.loginForm.patchValue({
          username : cacheUsername,
          password : cachepassword,
          rememberMe : true
        })
      }
    }

  ngOnInit(): void {
    this.userModel = new User;

    this.loginService.logout();

    // Get return URL from route parameters or default to '/home'
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';

    // Lista de URLs de gifs
    const gifUrls: string[] = [
      '../../../assets/gifs/3493304.gif',
      '../../../assets/gifs/7270362.gif',
      '../../../assets/gifs/7270387.gif',
      '../../../assets/gifs/8088668.gif',
      '../../../assets/gifs/8088694.gif',
      '../../../assets/gifs/8406766.gif'
      // adicione mais URLs de gifs aqui
    ];
    // Escolhe aleatoriamente uma URL da lista
    const index = Math.floor(Math.random() * gifUrls.length);
    this.randomGifUrl = gifUrls[index];

    // Remove a URL selecionada da matriz de URLs
    gifUrls.splice(index, 1);

    setTimeout(() => {
      // Cria um elemento de imagem na página com a URL escolhida aleatoriamente
      const imageElement: HTMLImageElement = document.createElement('img');
      imageElement.src = this.randomGifUrl;

      // Adiciona o elemento de imagem ao container
      const videoContainer: HTMLElement | null = document.getElementById('video-container');
      if (videoContainer) {
        videoContainer.appendChild(imageElement);
      }
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  showWelcomeDialog(): void {
    const dialogRef = this.dialog.open(WelcomeComponent, {
      width: '400px',
      // Outras configurações do pop-up
    });
  }

  onSubmit(){
    this.submitted = true;
    this.loading = true;

    this.loginService.login(this.f['username'].value, this.f['password'].value)
    .subscribe(
      (response: any): void => {
        // Salvar informações em cache
        localStorage.setItem('username', this.f['username'].value);
        localStorage.setItem('password', this.f['password'].value);

        this.router.navigate(['api/home']); // Redirect page initial

        this.alertService.success;
      },
      (error: string) =>{
        this.alertService.error;
        this.loading = false;
      }
    );
  }
}
