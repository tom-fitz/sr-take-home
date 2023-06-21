export class Athlete {
    constructor(
      public name: string = "",
      public sport: string = "",
      public grad_year: number = 0,
      public birthday: string = "",
      public email: string = "",
      public url: string = "",
      public club: Club = new Club(),
      public high_school: HighSchool = new HighSchool(),
      public gpa: number = 0,
      public major: string = "",
      public profile_image: string = "",
      public report: Report[] = []
    ) {}

    defaultIconColor(): string {
      const i = this.getInitials()[1].toUpperCase();
      const colorMap: Record<string, string> = {
        A: '#f1603c',
        B: '#6082fa',
        C: '#827cb8',
        D: '#0097a4',
        E: '#ffe066',
        F: '#ffa94d',
        // ...
      };
      return colorMap[i] ? colorMap[i] : '#E8F0FE';
    }

    getInitials(): string {
        return this.name.split(" ").map((n)=>n[0]).join("");
    }
  }
  
  export class Club {
    constructor(public name: string = "") {}
  }
  
  export class HighSchool {
    constructor(public name: string = "") {}
  }
  
  export class Report {
    constructor(
      public school: string = "",
      public division: string = "",
      public conference: string = "",
      public ranking: number = 0,
      public gpa: Gpa = new Gpa(),
      public sat: Sat = new Sat(),
      public act: Act = new Act()
    ) {}
  }
  
  export class Gpa {
    constructor(
      public min: number = 0,
      public percentile25: number = 0,
      public percentile50: number = 0,
      public percentile75: number = 0,
      public max: number = 0
    ) {}

    public setPercentile50Color(pGpa: number): string {
      // - school gpa above the player's gpa by more than 0.10 color is #d7737d
      return this.percentile50 > pGpa + 0.1
        ? "#d7737d"
        // - school gpa above the player's gpa by up to 0.10 color is #c194b5
        : this.percentile50 <= pGpa + 0.1 && this.percentile50 > pGpa
        ? "#c194b5"
        // - school gpa equal to the player's gpa color is #b4a7d6
        : this.percentile50 === pGpa
        ? "#b4a7d6"
        // - school gpa under the player's  gpa by less than 0.10 color is #a6a8da
        : this.percentile50 < pGpa && this.percentile50 >= pGpa - 0.1
        ? "#a6a8da"
        // - school gpa under the player's gpa by more than 0.10 color is #75ace5
        : "#75ace5";
    }
  }
  
  export class Sat {
    constructor(
      public reading: ReadingScore = new ReadingScore(),
      public math: MathScore = new MathScore()
    ) {}
  }
  
  export class ReadingScore {
    constructor(public min: number = 0, public max: number = 0) {}
    public formatSatReading(): string {
      return (!this.min && !this.max) ? 'Not Reported' : `${this.min}-${this.max}`
    }
  }
  
  export class MathScore {
    constructor(public min: number = 0, public max: number = 0) {}
    public formatSatMath(): string {
      return (!this.min && !this.max) ? 'Not Reported' : `${this.min}-${this.max}`
    }
  }
  
  export class Act {
    constructor(public min: number | string = "", public max: number | string = "") {}
    public formatAct(): string {
      return (!this.min && !this.max) || (this.min === 'N/A' && this.max === 'N/A') ? 'Not Reported' : `${this.min}-${this.max}`
    }
  }
  