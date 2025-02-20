import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventsComponent } from "./components/events/events.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

const routes: Routes = [
    { path: 'first-component', component: FirstComponentComponent },
    { path: 'parent-data', component: ParentDataComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'if-render', component: IfRenderComponent },
    { path: 'events', component: EventsComponent },
    { path: 'emitter', component: EmitterComponent },
    { path: 'list-render', component: ListRenderComponent },
    { path: 'list/:id', component: ItemDetailComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'two-way-binding', component: TwoWayBindingComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }