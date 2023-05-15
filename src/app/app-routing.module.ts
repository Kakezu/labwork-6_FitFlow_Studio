import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate,} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  
  },
  {
    path: 'amenities',
    loadChildren: () => import('./pages/amenities/amenities.module').then( m => m.AmenitiesPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'healthtips',
    loadChildren: () => import('./pages/healthtips/healthtips.module').then( m => m.HealthtipsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'sleeptips',
    loadChildren: () => import('./pages/sleeptips/sleeptips.module').then( m => m.SleeptipsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/classes/classes.module').then( m => m.ClassesPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'gym-equipments',
    loadChildren: () => import('./pages/gym-equipments/gym-equipments.module').then( m => m.GymEquipmentsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },

//-------------------------------------------------------------------------------------------------------
// Jätä reitti ** viimeiseksi, muuten navigoi aina not-found -sivulle.
//-------------------------------------------------------------------------------------------------------
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
