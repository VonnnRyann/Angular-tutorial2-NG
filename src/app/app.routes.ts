import { provideRouter } from "@angular/router";
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES = [
    {path: 'directory', components: DirectoryComponent},
    {path: '', components: HomeComponent}
]

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
]