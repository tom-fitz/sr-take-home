import {Athlete, Gpa, ReadingScore, MathScore, Act} from '../Athlete';

describe('Athlete',() => {
    it('defaultIconColor() should return an icon color from the name last initial', () => {
        const athlete = new Athlete();
        athlete.name = 'Maria Carter';
        expect(athlete.defaultIconColor()).toEqual('#827cb8');
    });

    it('getInitials() should return the athletes initials in uppercase', () => {
        const athlete = new Athlete();
        athlete.name = 'Maria Carter';
        expect(athlete.getInitials()).toEqual('MC');
    });
});

describe('Gpa', () => {
    it('setPercentile50Color() should return #75ace5', () => {
        const gpa = new Gpa(2.7, 3.28, 3.52, 3.8, 4.0);
        expect(gpa.setPercentile50Color(3.8)).toEqual('#75ace5')
    });

    it('setPercentile50Color() should return #a6a8da', () => {
        const gpa = new Gpa(2.6, 3.5, 3.71, 3.94, 4.0);
        expect(gpa.setPercentile50Color(3.8)).toEqual('#a6a8da')
    });

    it('setPercentile50Color() should return #b4a7d6', () => {
        const gpa = new Gpa(2.9, 3.63, 3.8, 4.0, 4.0);
        expect(gpa.setPercentile50Color(3.8)).toEqual('#b4a7d6')
    });

    it('setPercentile50Color() should return #c194b5', () => {
        const gpa = new Gpa(2.7, 3.53, 3.82, 4.0, 4.0);
        expect(gpa.setPercentile50Color(3.8)).toEqual('#c194b5')
    });

    it('setPercentile50Color() should return #d7737d', () => {
        const gpa = new Gpa(2.6, 3.7, 3.96, 4.0, 4.0);
        expect(gpa.setPercentile50Color(3.8)).toEqual('#d7737d')
    });
});

describe('ReadingScore', () => {
    it('formatSatReading() should return `Not Reported`', () => {
        const readingScore = new ReadingScore();
        expect(readingScore.formatSatReading()).toEqual('Not Reported')
    });

    it('formatSatReading() should return formatted response `100-300`', () => {
        const readingScore = new ReadingScore(100, 300);
        expect(readingScore.formatSatReading()).toEqual('100-300')
    });
});

describe('MathScore', () => {
    it('formatSatMath() should return `Not Reported`', () => {
        const mathScore = new MathScore();
        expect(mathScore.formatSatMath()).toEqual('Not Reported')
    });

    it('formatSatMath() should return formatted response `100-300`', () => {
        const mathScore = new MathScore(100, 300);
        expect(mathScore.formatSatMath()).toEqual('100-300')
    });
});

describe('Act', () => {
    it('formatSatMath() should return `Not Reported`', () => {
        const act = new Act();
        expect(act.formatAct()).toEqual('Not Reported')
    });

    it('formatSatMath() should return formatted response `100-300`', () => {
        const act = new Act(100, 300);
        expect(act.formatAct()).toEqual('100-300')
    });
});