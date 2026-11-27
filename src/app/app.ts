import { ApplicationConfig, Component, NgModule } from '@angular/core';
import { provideRouter, RouterOutlet, withRouterConfig } from '@angular/router';
import { Navigation } from "./navigation/navigation";
import { Navigation_Side } from "./navigation/navigation_side";
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, Navigation_Side],
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
