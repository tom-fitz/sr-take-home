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
    constructor(public min: number | string = 0, public max: number | string = 0) {}
  }
  