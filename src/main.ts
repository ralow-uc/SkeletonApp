import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

import { StatusBar, Style } from "@capacitor/status-bar";
import { Keyboard, KeyboardResize } from "@capacitor/keyboard";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(async () => {
    try {
      await StatusBar.setOverlaysWebView({ overlay: false });

      await StatusBar.setStyle({ style: Style.Light });

      await Keyboard.setResizeMode({ mode: KeyboardResize.Body });
    } catch (err) {
      console.warn("Capacitor plugin error:", err);
    }
  })
  .catch((err) => console.log(err));
