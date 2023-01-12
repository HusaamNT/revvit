const HashTags = require("../models/Hashtag");


const hashtagData =  [{
    Name: "SpeedDemon"
},
{
    Name: "RaceReady"
}
,
{
    Name: "Turbocharged"
}
,
{
    Name: "DriftKing"
}
,
{
    Name: "Gearhead"
}
,
{
    Name: "StreetRacer"
}
,
{
    Name: "HighOctane"
}
,
{
    Name: "NitroJunkie"
}
,
{
    Name: "TrackHound"
}
,
{
    Name: "TunerNation"
}

];

const seedHashtag = () => HashTags.bulkCreate(hashtagData);

module.exports = seedHashtag;