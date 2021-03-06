// styles import
import "../styles/main.scss";

// js import
import GetInfo from "./classes/GetStaticInfo";
import BatteryInfo from "./classes/BatteryInfo";
import NetworkStatus from "./classes/NetworkStatusInfo";
import CursorMoveCoordinates from "./classes/CursorMoveCoordinatesInfo";
import TotalTime from "./classes/TotalTimeSpentInfo";
import CurrentlyTime from "./classes/CurrentlyTime";
import LastVisitInfo from "./classes/LastVisitInfo";
import UserMedia from "./classes/UserMedia";
import GeoCoordinates from "./classes/GeoCoordinates";
import Geocoding from "./classes/Geocoding";

//variables ralated with DOM
const infoContainer = document.querySelector("#infoContainer");

//objects
const info = new GetInfo(infoContainer);
const batteryInfo = new BatteryInfo(infoContainer);
const networkStatus = new NetworkStatus(infoContainer);
const cursorMoveCoordinates = new CursorMoveCoordinates(infoContainer);
const totalTime = new TotalTime(infoContainer);
const currentlyTime = new CurrentlyTime(infoContainer);
const lastVisitInfo = new LastVisitInfo(infoContainer);
//The class below  checks if the user has such a medias. The media which have to be check are passed here as the arguments
const userMedia = new UserMedia(infoContainer, "audiooutput", "audioinput", "videoinput");
const geoCoordinates = new GeoCoordinates(infoContainer);
const geocoding = new Geocoding(infoContainer);
