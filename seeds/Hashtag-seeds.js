const HashTags = require("../models/Hashtag");
<<<<<<< HEAD


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
=======
>>>>>>> fa3ebcff20dc6aba046bd8f6a5a1675c843c9fea

const hashtagData = [
  {
    Name: "Stage 1",
  },
  {
    Name: "Stage 2",
  },
  {
    Name: "Stage 3",
  },
  {
    Name: "Inline-4",
  },
  {
    Name: "V-6",
  },
  {
    Name: "V-8",
  },
  {
    Name: "V-10",
  },
  {
    Name: "V-12",
  },
  {
    Name: "Turbocharged",
  },
  {
    Name: "Supercharged",
  },
  {
    Name: "Tuned",
  },
  {
    Name: "Slammed",
  },
];

const seedHashtag = () => HashTags.bulkCreate(hashtagData);

module.exports = seedHashtag;
