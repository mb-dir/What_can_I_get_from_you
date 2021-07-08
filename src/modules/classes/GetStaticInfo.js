class GetStaticInfo{
    constructor(infoContainer){
        this.infoContainer = infoContainer;
        this.informationsToShow = {
            Your1operating1system: this.getOperatingSystem(),
            Your1browser: this.getBrowserName(),
            Width1of1Your1screen: `${screen.width}px`,
            Height1of1Your1screen: `${screen.height}px`,
            Website1from1which1you1came1here: document.referrer ? document.referrer : "Probably Github",
            cookie: navigator.cookieEnabled ? "enabled" : "disabled",
            java: navigator.javaEnabled() ? "enabled" : "disabled",
            Mobile1or1Desktop: this.mobileOrDesktop(),
            Your1preferred1language: navigator.language,
            //Your1last1visit: this.getLastVisit(),
            //Total1time1spent1on1this1page1by1you: this.getTotalTime(),
        };

        this.renderInformations();
        // this.timeCurrentlySpentRender();
        // this.storageTotalTimeSpent();
        // this.cursorMoveCoordinates();
        // this.showNetworkStatus();
        // this.showBatteryInfo();
    }
    getOperatingSystem(){
        let OS = null;
        if(navigator.userAgent.indexOf("Win") != -1){
            OS = "Windows";
        }else if(navigator.userAgent.indexOf("Mac") != -1){
            OS = "Mac";
        }
        else if(navigator.userAgent.indexOf("X11") != -1){
            OS = "UNIX";
        }
        else if(navigator.userAgent.indexOf("Linux") != -1){
            OS = "Linux ";
        }
        return OS;
    }
    getBrowserName(){
        let browser = null;
        if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
            browser = "Opera";
        } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
            browser =  "Chrome";
        } else if(navigator.userAgent.indexOf("Safari") != -1) {
            browser =  "Safari";
        } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
            browser =  "Firefox";
        } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
            browser =  "IE";
        } else {
            browser =  "Unknown";
        }
        return browser;
    }

    //code from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    mobileOrDesktop(){
        let check = "desktop";
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = "mobile";})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
    }
    // getLastVisit(){
    //     const date = window.localStorage.getItem("lastVisit");
    //     this.setDateOfLastVisit();
    //     if(date === null){
    //         return "It is Your first visit here";
    //     }else{
    //         return date;
    //     }
    // }
    // getTotalTime(){
    //     const totalTime = parseInt(window.localStorage.getItem("totalTime"));
    //     const totalTimeHours = Math.floor(totalTime/3600);
    //     const totalTimeMinutes = Math.floor((totalTime-(totalTimeHours*3600))/60);
    //     const totalTimeSeconds = Math.floor(totalTime-(totalTimeHours*3600+totalTimeMinutes*60));

    //     //If it is first visit, there is no "totalTime" in localStorage
    //     if(isNaN(totalTime)){
    //         return "It is Your first visit here";
    //     }

    //     if(totalTimeHours!==0){
    //         return `${totalTimeHours}h ${totalTimeMinutes}m ${totalTimeSeconds}s`;
    //     }else if(totalTimeMinutes!==0){
    //         return `${totalTimeMinutes}m ${totalTimeSeconds}s`;
    //     }else{
    //         return `${totalTimeSeconds}s`;
    //     }
    // }

    // //auxiliary methods(methods which do not "download" the informations, but are useful)
    // setDateOfLastVisit(){
    //     const nowDate = new Date();
    //     let [month, day, year, hour, minutes, dayNumber] = [nowDate.getMonth(), nowDate.getDate(), nowDate.getFullYear(), nowDate.getHours(), nowDate.getMinutes(), nowDate.getDay()];
    //     const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    //     if(month < 10){
    //         month = `0${month}`;
    //     }
    //     if(day < 10){
    //         day = `0${day}`;
    //     }
    //     if(hour < 10){
    //         hour = `0${hour}`;
    //     }
    //     if(minutes < 10){
    //         minutes = `0${minutes}`;
    //     }
    //     const lastVisitDate = `${year}-${month}-${day}(${weekDays[dayNumber]}), ${hour}:${minutes}`;

    //     window.localStorage.setItem("lastVisit", lastVisitDate);
    // }
    //method for properties that do not require intervals
    renderInformations(){
        for(const[key, value] of Object.entries(this.informationsToShow)){
            const newInfo = document.createElement("li");
            newInfo.className = "basicList__element informations__info";

            const decryptedKey = key.split("1").join(" ");

            newInfo.innerHTML = `${decryptedKey}: ${value}`;
            this.infoContainer.appendChild(newInfo);
        }
    }
    // //separate method for currently time spent, cuz it requires setInterval and that would be hard to implemate in renderInformations method
    // timeCurrentlySpentRender(){
    //     let timeSpentSeconds = 0;
    //     let timeSpentMinutes = 0;
    //     let timeSpentSecondsMod = 0
        
    //     const newInfo = document.createElement("li");
    //     newInfo.className = "basicList__element informations__info";
    //     newInfo.innerHTML = `Time currently  spent on this page: ${timeSpentSeconds}s`;

    //     this.infoContainer.appendChild(newInfo);

    //     setInterval(()=>{
    //         timeSpentSeconds++;
    //         timeSpentSecondsMod = timeSpentSeconds%60;

    //         if(timeSpentSeconds >= 60){
    //             if(timeSpentSecondsMod === 0){
    //                 timeSpentMinutes++;
    //             }
    //             newInfo.innerHTML = `Time currently  spent on this page: ${timeSpentMinutes}m ${timeSpentSecondsMod}s`;
    //           }else{
    //             newInfo.innerHTML = `Time currently  spent on this page: ${timeSpentSeconds}s`;
    //           }

    //     },1000);
    // }
    // storageTotalTimeSpent(){
    //     let spentSeconds = 0;
    //     setInterval(()=>{
    //         spentSeconds++;
    //     },1000);

    //     addEventListener("unload", ()=>{
    //         const timeFormStorage = parseInt(window.localStorage.getItem("totalTime"));
    //         if(timeFormStorage){
    //             window.localStorage.setItem("totalTime", spentSeconds + timeFormStorage);
    //         }else{
    //             window.localStorage.setItem("totalTime", spentSeconds); 
    //         }
    //     });
    // }
    // cursorMoveCoordinates(){
    //     //If user is on the phone, do not show the coordinates of curosr
    //     if(this.informationsToShow.Mobile1or1Desktop !== "desktop"){
    //         return;
    //     }

    //     const newInfo = document.createElement("li");
    //     newInfo.className = "basicList__element informations__info";
    //     newInfo.innerHTML = "Cursor coordinates: ?X, ?Y";
    //     this.infoContainer.appendChild(newInfo);

    //     window.addEventListener("mousemove", (e)=>{
    //         const {clientX, clientY} = e;
    //         newInfo.innerHTML = `Cursor coordinates: ${clientX}X, ${clientY}Y`;
    //     });
    // }
    // showNetworkStatus(){
    //     const newInfo = document.createElement("li");
    //     newInfo.className = "basicList__element informations__info";
    //     this.infoContainer.appendChild(newInfo);

    //     const networkStatus = navigator.onLine;

    //     //Network status assuming that there is no change in connection state
    //     if(networkStatus){
    //         newInfo.innerHTML = "Online/offline: online";
    //     }else{
    //         newInfo.innerHTML = "Online/offline: offline";
    //     }
    //     //Network status if there is change in connection state
    //     window.addEventListener("online", ()=>{
    //         newInfo.innerHTML = "Online/offline: online";
    //     });
    //     window.addEventListener("offline", ()=>{
    //         newInfo.innerHTML = "Online/offline: offline";
    //     });
    // }
    // async getBatteryInfo(){
    //     try {
    //         const batteryInfo = await navigator.getBattery();
    //         return batteryInfo;
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }
    // showBatteryInfo(){
    //     this.getBatteryInfo().then((infoBattery)=>{
    //         const {charging, level} = infoBattery;

    //         //DOM operations related with static information abou battery status
    //         const newInfoCharging = document.createElement("li");
    //         newInfoCharging.className = "basicList__element informations__info";
    //         this.infoContainer.appendChild(newInfoCharging);

    //         if(charging){
    //             newInfoCharging.innerHTML = "Is battery charging: Yes, it is";
    //         }else{
    //             newInfoCharging.innerHTML = "Is battery charging: No, it isn't";
    //         }

    //         //DOM operations related with dynamically changing of battery status
    //         infoBattery.addEventListener("chargingchange", ()=>{
    //             const chargingNewStatus = infoBattery.charging;
    //             if(chargingNewStatus){
    //                 newInfoCharging.innerHTML = "Is battery charging: Yes, it is";
    //             }else{
    //                 newInfoCharging.innerHTML = "Is battery charging: No, it isn't";
    //             }
    //         });

    //         //DOM operations related with showing level of battery
    //         const newInfoBatteryLevel = document.createElement("li");
    //         newInfoBatteryLevel.className = "basicList__element informations__info";
    //         this.infoContainer.appendChild(newInfoBatteryLevel);

    //         const batteryLevel = level*100;

    //         newInfoBatteryLevel.innerHTML = `Battery level: ${batteryLevel}%`;

    //         //DOM operations related with dynamically showing level of battery
    //         infoBattery.addEventListener("levelchange", ()=>{
    //             const batteryNewLevel = infoBattery.level*100;
    //             newInfoBatteryLevel.innerHTML = `Battery level: ${batteryNewLevel}%`;
    //         });
    //     });
    // }
}

export default GetStaticInfo;