import { NgModule } from '@angular/core';

import { FuseHighlightComponent } from '@v-fuse/core/components/highlight/highlight.component';

@NgModule({
    declarations: [
        FuseHighlightComponent
    ],
    exports: [
        FuseHighlightComponent
    ],
})
export class FuseHighlightModule
{
}
