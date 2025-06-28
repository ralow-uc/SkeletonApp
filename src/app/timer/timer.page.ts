import { Component } from "@angular/core";
import { NumberFactService } from "src/services/number-fact.service";

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
  fact: string | null = null;

  constructor(private numberFactService: NumberFactService) {}

  toggleTimer() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;

      const totalSeconds = this.time / 1000;
      const wholeSeconds = Math.floor(totalSeconds);

      this.numberFactService.getFact(wholeSeconds).subscribe({
        next: (fact) => {
          this.fact = fact;
          console.log("Dato curioso:", fact);
        },
        error: (err) => {
          console.error("Error al obtener el dato:", err);
          this.fact = "No se pudo obtener un dato curioso.";
        },
      });
    } else {
      this.time = 0;
      this.fact = null;
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
      const paddedSeconds = seconds.toFixed(2).padStart(5, "0");
      return `${minutes}:${paddedSeconds}`;
    }
  }
}
