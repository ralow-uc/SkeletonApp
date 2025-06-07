import { Component } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.page.html",
  styleUrls: ["./timer.page.scss"],
  standalone: false,
})
export class TimerPage {
  running = false;
  time = 0;
  interval: any;

  toggleTimer() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    } else {
      this.time = 0;
      this.running = true;
      const start = Date.now();

      this.interval = setInterval(() => {
        this.time = Date.now() - start;
      }, 10);
    }
  }

  get formattedTime(): string {
    const totalSeconds = this.time / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes === 0) {
      return seconds.toFixed(2);
    } else {
      const paddedSeconds = seconds.toFixed(2).padStart(5, '0');
      return `${minutes}:${paddedSeconds}`;
    }
  }
}