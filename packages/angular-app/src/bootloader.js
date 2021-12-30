import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BootstraploaderModule } from "./app/bootstraploader/bootstraploader.module"

export default () => {
  platformBrowserDynamic()
    .bootstrapModule(BootstraploaderModule)
    .catch((err) => console.error(err));
};
