// https://cf.nascar.com/live/feeds/live-feed.json

export class LiveFeed {
    lapNum: number;
    elapsedTime: number;
    flagState: number;
    raceID: number;
    raceLengthLaps: number;
    lapsRemaining: number;
    vehicles: Vehicle[];
    runID: number;
    raceName: string;
    seriesID: number;
    timeOfDay: number;
    trackID: number;
    trackLength: number;
    trackName: string;
    runType: number;
    numCautions: number;
    numCautionLaps: number;
    leadChanges: number;
    leaders: number;
    avgDiff1to3: number;
    stage: Stage[];
}

class Vehicle {

}

class Stage {
    stageNum: number;
    stageEndLap: number;
    stageLength: number;
}