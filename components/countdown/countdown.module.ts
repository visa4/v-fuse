import { NgModule } from '@angular/core';

import { FuseCountdownComponent } from '@v-fuse/core/components/countdown/countdown.component';

@NgModule({
    declarations: [
        FuseCountdownComponent
    ],
    exports: [
        FuseCountdownComponent
    ],
})
export class FuseCountdownModule
{
}
