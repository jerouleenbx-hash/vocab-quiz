import { ApplicationConfig, Component, NgModule } from '@angular/core';
import { provideRouter, RouterOutlet, withRouterConfig } from '@angular/router';
import { Header } from "./header/header";
import { routes } from './app.routes';
import { Tools } from "./tools/tools";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Tools],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'quiz';
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      })
    )
  ]
};