export type Challenge = {
  year: 2024 | 2023;
  title: string;
  domain: ('地球科學'|'天文'|'地質'|'生活/教育')[];
  delivery: ('互動式網頁'|'資料視覺化'|'小遊戲'|'機器學習'|'故事/教育資源'|'3D/地圖'|'模擬/規劃')[];
  url: string;
};

export const CHALLENGES: Challenge[] = [
  // 2024
  {year:2024, title:'Exosky!', domain:['天文'], delivery:['互動式網頁','資料視覺化'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/exosky/'},
  {year:2024, title:'Chronicles of Exoplanet Exploration', domain:['天文'], delivery:['故事/教育資源','資料視覺化'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/chronicles-of-exoplanet-exploration/'},
  {year:2024, title:'Visualize Space Science', domain:['天文','生活/教育'], delivery:['資料視覺化','互動式網頁'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/visualize-space-science/'},
  {year:2024, title:'Galactic Games: Fun in a Microgravity Environment!', domain:['天文'], delivery:['小遊戲','模擬/規劃'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/galactic-games-fun-in-a-microgravity-environment/'},
  {year:2024, title:'Community Mapping', domain:['地球科學'], delivery:['3D/地圖','互動式網頁'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/community-mapping/'},
  {year:2024, title:'Tell Us a Climate Story!', domain:['地球科學','生活/教育'], delivery:['故事/教育資源','資料視覺化'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/tell-us-a-climate-story/'},
  {year:2024, title:'Imagine our Connected Earth', domain:['地球科學'], delivery:['資料視覺化','互動式網頁'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/imagine-our-connected-earth/'},
  {year:2024, title:'PACE in the Classroom', domain:['地球科學','生活/教育'], delivery:['故事/教育資源','小遊戲'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/pace-in-the-classroom/'},
  {year:2024, title:'GLOBE Protocol Games', domain:['地球科學','生活/教育'], delivery:['小遊戲','故事/教育資源'], url:'https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/globe-protocol-games/'},
  // 2023
  {year:2023, title:'Eclipses: Perspective is Everything', domain:['天文','生活/教育'], delivery:['小遊戲','故事/教育資源'], url:'https://www.spaceappschallenge.org/2023/challenges/eclipses-perspective-is-everything/'},
  {year:2023, title:'EMIT for the Future!', domain:['地球科學','地質'], delivery:['資料視覺化','互動式網頁'], url:'https://www.spaceappschallenge.org/2023/challenges/emit-for-the-future/'},
  {year:2023, title:'Titan City, 3023', domain:['天文'], delivery:['模擬/規劃','互動式網頁'], url:'https://www.spaceappschallenge.org/2023/challenges/titan-city-3023/'},
  {year:2023, title:'Magnetic Reconnection', domain:['天文'], delivery:['資料視覺化','互動式網頁'], url:'https://www.spaceappschallenge.org/2023/challenges/magnetic-reconnection/'},
  {year:2023, title:'GeoAI Reimagined (Foundation Models)', domain:['地球科學'], delivery:['機器學習','資料視覺化'], url:'https://www.spaceappschallenge.org/2023/challenges/geoai-reimagined-transformative-and-diverse-earth-science-applications-using-foundation-models/'},
  {year:2023, title:'Mapping Data for Societal Benefit', domain:['地球科學'], delivery:['3D/地圖','資料視覺化'], url:'https://www.spaceappschallenge.org/2023/challenges/mapping-data-for-societal-benefit/'},
  {year:2023, title:'Make a Moonquake Map 2.0!', domain:['地質','天文'], delivery:['3D/地圖','互動式網頁'], url:'https://www.spaceappschallenge.org/2023/challenges/make-a-moonquake-map-20/'},
  {year:2023, title:'Artemis II and You!', domain:['生活/教育','天文'], delivery:['故事/教育資源','互動式網頁'], url:'https://www.spaceappschallenge.org/2023/challenges/artemis-ii-and-you/'},
  {year:2023, title:'Create Your Own Challenge', domain:['生活/教育'], delivery:['故事/教育資源','互動式網頁'], url:'https://www.spaceappschallenge.org/2023/challenges/create-your-own-challenge/'}
];
