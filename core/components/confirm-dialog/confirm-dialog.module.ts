import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { FuseConfirmDialogComponent } from '@v-fuse/core/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        FuseConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        FuseConfirmDialogComponent
    ],
})
export class FuseConfirmDialogModule
{
}
