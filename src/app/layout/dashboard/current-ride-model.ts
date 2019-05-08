export interface CurrentRideModel {
    uniqueID: string;
    routeId: number;
    id: number;
    userId: number;
    userName: string;
    rideType: string;
    startAddress: string;
    startLatitude: number;
    startLongitude: number;
    startPoint: StartPointOrEndPoint;
    endAddress: string;
    endLatitude: number;
    endLongitude: number;
    endPoint: StartPointOrEndPoint;
    distance: number;
    allowRideMatchToJoinedGroups: boolean;
    showMeToJoinedGroups: boolean;
    appName: string;
    cancelledByStatus: boolean;
    userContactNo: number;
    durationInTraffic: number;
    startTime: number;
    expectedEndTime: number;
    status: string;
    routePathPolyline: string;
    rideCreationTime: number;
    regularRideId: number;
    customRoute: boolean;
    waypoints: string;
    version: number;
    stTime: number;
    expEndTime: number;
    matchPercentage: number;
    vehicleType: string;
    vehicleId: number;
    freezeRide: boolean;
    cumOverlapDist: number;
    capacity: number;
    availableSeats: number;
    farePerKm: number;
    noOfPassengers: number;
    riderHasHelmet: boolean;
    plannedStartTime: number;
    passengers?: (null)[] | null;
    noOfSeats: number;
    paramsMap: ParamsMapOrParamsMapUTC;
    paramsMapUTC: ParamsMapOrParamsMapUTC;
    passengersJoined: boolean;
    durationOfRide: number;
    dataAsMap: DataAsMap;
  }
  export interface StartPointOrEndPoint {
    lat: number;
    lon: number;
  }
  export interface ParamsMapOrParamsMapUTC {
    vehicleMakeAndCategory?: null;
    startAddress: string;
    availableSeats: string;
    promocode?: null;
    joinedGroupRestriction: string;
    userId: string;
    endLatitude: string;
    capacity: string;
    startLatitude: string;
    imageURI?: null;
    showMeToJoinedGroups: string;
    endLongitude: string;
    vehicleNumber?: null;
    vehicleModel?: null;
    additionalFacilities?: null;
    startTime: string;
    id: string;
    startLongitude: string;
    farePerKm: string;
    riderHasHelmet: string;
    endAddress: string;
    vehicleType: string;
  }
  export interface DataAsMap {
    rideType: string;
    startAddress: string;
    promocode?: null;
    joinedGroupRestriction: string;
    userId: string;
    endLatitude: string;
    startLatitude: string;
    showMeToJoinedGroups: string;
    endLongitude: string;
    startTime: string;
    id: string;
    startLongitude: string;
    endAddress: string;
  }
  