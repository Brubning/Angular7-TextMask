import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TextMaskDirective } from "./text-mask.directive";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextMaskDirective
  ],
  exports: [
    TextMaskDirective
  ]
})
export class TextMaskDirectiveModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TextMaskDirectiveModule
    };
  }
}
