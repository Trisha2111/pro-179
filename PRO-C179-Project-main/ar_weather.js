let coordinates={}
$(document).ready(function(){
    get_coordinates()
    get_weather()
})
function get_coordinates(){
    let search=new URLSearchParams(window.location.search)
    if(search.has("source")&&search.has("destination")){
        let source=search.get("source")
        let destination=search.get("destination")
        coordinates.sourceLat=source.split(";")[0]
        coordinates.sourceLon=source.split(";")[1]
        coordinates.sourceLat=destination.split(";")[1]
        coordinates.sourceLat=destination.split(";")[1]
        console.log(coordinates)
    }
    else{
        alert("Coordinates are not selected")
        window.history.back()
    }
}
function get_weather(){
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=94212e971d0ca977303f8ae892224bbd`,
        type:"get",
        success:function(x){
            let name=x.name
            let weather=x.weather[0].main
            $("#scene_container").append(
                `
                <a-entity gps-entity-place="latitude:${steps[i].maneuver.locations[1]};longitude:${steps[i].maneuver.locations[0]}">
                    <a-entity>
                    <a-text height="50" value="Weather Forecast is ${weather} at ${name}"> </a-text>
                    </a-entity>
                </a-entity>
                `
            )
        }
    })
}
