import { NgModule } from '@angular/core';

import { FuseIfOnDomDirective } from '@v-fuse/core/directives/fuse-if-on-dom/fuse-if-on-dom.directive';
import { FuseInnerScrollDirective } from '@v-fuse/core/directives/fuse-inner-scroll/fuse-inner-scroll.directive';
import { FusePerfectScrollbarDirective } from '@v-fuse/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseMatSidenavHelperDirective, FuseMatSidenavTogglerDirective } from '@v-fuse/core/directives/fuse-mat-sidenav/fuse-mat-sidenav.directive';

@NgModule({
    declarations: [
        FuseIfOnDomDirective,
        FuseInnerScrollDirective,
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective,
        FusePerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        FuseIfOnDomDirective,
        FuseInnerScrollDirective,
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective,
        FusePerfectScrollbarDirective
    ]
})
export class FuseDirectivesModule
{
}
