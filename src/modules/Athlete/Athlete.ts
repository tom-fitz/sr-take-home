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
        const colorArr: string[] = ['#f1603c','#6082fa','#827cb8','#0097a4','#ffe066','#ffa94d'];
        return colorArr[Math.floor(Math.random() * colorArr.length)]
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
  }
  
  export class Sat {
    constructor(
      public reading: ReadingScore = new ReadingScore(),
      public math: MathScore = new MathScore()
    ) {}
  }
  
  export class ReadingScore {
    constructor(public min: number = 0, public max: number = 0) {}
  }
  
  export class MathScore {
    constructor(public min: number = 0, public max: number = 0) {}
  }
  
  export class Act {
    constructor(public min: number | string = "", public max: number | string = "") {}
  }
  