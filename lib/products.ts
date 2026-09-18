export type Product = {
  sno: number;
  name: string;
  nameTa: string;
  per: string;
  rate: number;
  offer: number;
};

export type Category = {
  slug: string;
  title: string;
  titleTa: string;
  netRate?: boolean;
  items: Product[];
};

function mk(
  slug: string,
  title: string,
  titleTa: string,
  rows: [number, string, string, string, number, number][],
  netRate?: boolean
): Category {
  return {
    slug,
    title,
    titleTa,
    netRate,
    items: rows.map(([sno, name, nameTa, per, rate, offer]) => ({
      sno,
      name,
      nameTa,
      per,
      rate,
      offer,
    })),
  };
}

export const categories: Category[] = [
  mk("flash-light-sound", "Flash Light Sound Crackers", "பிளாஷ் லைட் சவுண்ட் கிராக்கர்ஸ்", [
    [1, `2 3/4" Kuruvi Crackers (5pcs)`, "3 1/2 லட்சுமி வெடி", "1 PKT", 70, 7],
    [2, `3 1/2" Lakshmi Crackers (5pcs)`, "4' லட்சுமி வெடி", "1 PKT", 160, 16],
    [3, `4" Lakshmi Crackers (5pcs)`, `4" கோல்டு லட்சுமி வெடி`, "1 PKT", 200, 20],
    [4, `4" Gold Lakshmi Delex (5pcs)`, `4" கோல்டு லட்சுமி டிலக்ஸ் வெடி`, "1 PKT", 400, 40],
    [5, `5" Dragan Crackers (5pcs)`, `5' டிராகன் வெடி`, "1 PKT", 550, 55],
    [6, `5" Jallikattu Crackers (5pcs)`, `5" ஜல்லிக்கட்டு வெடி`, "1 PKT", 700, 70],
    [7, `6" Lion Crackers (5pcs)`, `6" லயன் சிங்கம் வெடி`, "1 PKT", 800, 80],
  ]),
  mk("bomb-items", "Bomb Items", "அணுகுண்டு வகைகள்", [
    [8, "Bullet Bomb (10pcs)", "புல்லட் குண்டு பாம்", "1 BOX", 400, 40],
    [9, "Hydro Bomb (10pcs)", "ஹைட்ரோ குண்டு பாம்", "1 BOX", 900, 90],
    [10, "King of king (10pcs)", "கிங் ஆஃப் கிங் பிக்", "1 BOX", 1200, 120],
    [11, "Classic Bomb (10pcs)", "கிளாசிக் குண்டு பாம்", "1 BOX", 1400, 140],
    [12, "Digital bomb (10pcs)", "அக்னி குண்டு பாம்", "1 BOX", 2800, 280],
    [13, "Adiyal (Papper Bomb) 1/4 Kg", "பேப்பர் பாம் 1/4 கிலோ", "1 BOX", 500, 50],
    [14, "Adiyal (Papper Bomb) 1/2 Kg", "பேப்பர் பாம் 1/2 கிலோ", "1 BOX", 950, 95],
    [15, "Adiyal (Papper Bomb) 1 Kg", "பேப்பர் பாம் 1 கிலோ", "1 BOX", 1900, 190],
  ]),
  mk("bijli-crackers", `Bijjli Crackers (100 Count)`, "பிஜிலி கிராக்கர்ஸ்", [
    [16, "Red Bijili (Half Count)", "சிவப்பு பிஜிலி - Half", "1 PKT", 200, 20],
    [17, "Stripped Bijili (Half Count)", "வெள்ளை வரி பிஜிலி - Half", "1 PKT", 250, 25],
    [18, "Red Bijili (Full Count)", "ரெட் பிஜிலி - Full", "1 PKT", 400, 40],
    [19, "Stripped Bijili (Full Count)", "வெள்ளை வரி பிஜிலி - Full", "1 PKT", 500, 50],
  ]),
  mk("flower-pots", "Flower Pots", "பூச்சட்டி", [
    [20, "Flower Pots Big (10pcs)", "பூச்சட்டி பிக் (10pcs)", "1 BOX", 700, 70],
    [21, "Flower Pots Special (10pcs)", "பூச்சட்டி ஸ்பெஷல் (10pcs)", "1 BOX", 1000, 100],
    [22, "Flower Pots Ashoka (10pcs)", "பூச்சட்டி அசோகா (10pcs)", "1 BOX", 1200, 120],
    [23, "Fancy Colour Koti (10pcs)", "கலர் கோட்டி (10pcs)", "1 BOX", 2000, 200],
    [24, "Colour Koti Deluxe (10pcs)", "கலர் கோட்டி டிலக்ஸ் (10pcs)", "1 BOX", 3500, 350],
    [25, "Flower Pots Deluxe (5 Pcs) (10pcs)", "பூச்சட்டி டிலக்ஸ் (5Pcs)", "1 BOX", 1700, 170],
    [26, "Flower Pots Deluxe (2 Pcs) (10pcs)", "பூச்சட்டி டிலக்ஸ் (2Pcs)", "1 BOX", 1200, 120],
  ]),
  mk("tri-colour-fountain", "Tri Colour Fountain", "த்ரை கலர் பவுண்டன்", [
    [27, "Mega Tri Colour Fountain (5 Pcs)", "மெகா ட்ரை கலர் பவுண்டன்", "1 BOX", 2500, 250],
    [28, "Ultra Mega Tri Colour Fountain (5 Pcs)", "அல்ட்ரா மெகா ட்ரை கலர் பவுண்டன்", "1 BOX", 3000, 300],
  ]),
  mk("ground-chakkar", "Ground Chakkar", "தரை சக்கரம்", [
    [29, "Ground Chakkar Big (10 Pcs)", "தரை சக்கரம் பிக் (10 Pcs)", "1 BOX", 400, 40],
    [30, "Ground Chakkar Big (25 Pcs)", "தரை சக்கரம் பிக் (25 Pcs)", "1 BOX", 600, 60],
    [31, "Ground Chakkar Special (10pcs)", "தரை சக்கரம் ஸ்பெஷல்", "1 BOX", 800, 80],
    [32, "Ground Chakkar Deluxe (10pcs)", "தரை சக்கரம் டிலக்ஸ்", "1 BOX", 1500, 150],
    [33, "Ground Chakkar Spinner Special (10pcs)", "தரை சக்கரம் ஸ்பின்னர் சிறப்பு ஸ்பெஷல்", "1 BOX", 1400, 140],
    [34, "Ground Chakkar Spinner Deluxe (10pcs)", "தரை சக்கரம் ஸ்பின்னர் டிலக்ஸ்", "1 BOX", 1800, 180],
  ]),
  mk("wheel-crackers", "Wheel Crackers", "வீல் கிராக்கர்ஸ்", [
    [35, "Disco Wheel (5pcs)", "டிஸ்கோ வீல்", "1 BOX", 800, 80],
    [36, "Lotus Wheel (4pcs)", "லோட்டஸ் வீல்", "1 BOX", 1600, 160],
    [37, "Chocolate Wheel (4 in 1)", "சாக்லேட் வீல்", "1 BOX", 2000, 200],
    [38, "Wire Wheel (10pcs)", "வயர் வீல்", "1 BOX", 2000, 200],
  ]),
  mk("twinkling-star", "Twinkling Star", "சாட்டை", [
    [39, `1 1/2" Twinkling Star (10pcs)`, "1 1/2' சாட்டை", "1 BOX", 250, 25],
    [40, `4" Twinkling Star Deluxe (10pcs)`, "4' சாட்டை டிலக்ஸ்", "1 BOX", 600, 60],
  ]),
  mk("kids-special", "Kids Special", "குழந்தைகள் சிறப்பு", [
    [41, "Electric Stone (10pcs)", "எலக்ட்ரிக் ஸ்டோன்", "3 BOX", 300, 30],
    [42, "Zee Boom Baa (10pcs)", "ஜீ பூம்பா", "3 BOX", 300, 30],
    [43, "Kit Kat (10pcs)", "கிட் கேட்", "1 BOX", 300, 30],
    [44, "Snake Egg (10pcs)", "பாம்பு மாத்திரை", "10 BOX", 500, 50],
    [45, "Cartoon (10pcs)", "கார்ட்டூன்", "1 BOX", 500, 50],
    [46, "Photo Flash (5pcs)", "போட்டோ பிளாஷ்", "1 BOX", 800, 80],
    [47, "Butterfly (10pcs)", "பட்டர்பிளை", "1 BOX", 1000, 100],
    [48, "Selfi Stick (3 PCS)", "செல்பி ஸ்டிக்", "1 BOX", 1000, 100],
    [49, "Hellihopter (5pcs)", "ஹெலிகாப்டர்", "1 BOX", 1000, 100],
    [50, "Drone (5pcs)", "ட்ரோன்", "1 BOX", 1200, 120],
    [51, "Bambaram (10pcs)", "பம்பரம்", "1 BOX", 1200, 120],
  ]),
  mk("rocket-items", "Rocket Items", "ராக்கெட் வகைகள்", [
    [52, "Rocket Bomb (10pcs)", "ராக்கெட் பாம்", "1 BOX", 800, 80],
    [53, "Color Rocket (10pcs)", "கலர் ராக்கெட்", "1 BOX", 1100, 110],
    [54, "Lunik Rocket (10pcs)", "கிராக்களின் ராக்கெட்", "1 BOX", 1300, 130],
    [55, "Musicsal Rocket (10pcs)", "மியூசிக்கல் ராக்கெட்", "1 BOX", 1600, 160],
  ]),
  mk("mini-colour-fountain", `2 1/4" Mini Colour Fountain`, `2 1/4" மினி கலர் பவுண்டன்`, [
    [56, "Pogo Red & Green", "போகோ ரெட் & கிரீன்", "1 BOX", 500, 50],
    [57, "Pogo Gold & Green", "போகோ கோல்ட் & கிரீன்", "1 BOX", 500, 50],
    [58, "Pogo Red & White", "போகோ சிவப்பு & வெள்ளை", "1 BOX", 500, 50],
    [59, "Pogo White & Gold", "போகோ வெள்ளை & கோல்ட்", "1 BOX", 500, 50],
    [60, "Chotta Beam Red & Green", "சோட்டா பீம் ரெட் & கிரீன்", "1 BOX", 500, 50],
    [61, "Chotta Beam Gold & Green", "சோட்டா பீம் கோல்ட் & கிரீன்", "1 BOX", 500, 50],
    [62, "Chotta Beam Red & White", "சோட்டா பீம் சிவப்பு & வெள்ளை", "1 BOX", 500, 50],
    [63, "Chotta Beam White & Gold", "சோட்டா பீம் வெள்ளை & கோல்ட்", "1 BOX", 500, 50],
    [64, "Tom & Jerry Red & Green", "டாம் & ஜெர்ரி ரெட் & கிரீன்", "1 BOX", 500, 50],
    [65, "Tom & Jerry Gold & Green", "டாம் & ஜெர்ரி கோல்ட் & கிரீன்", "1 BOX", 500, 50],
    [66, "Tom & Jerry Red & White", "டாம் & ஜெர்ரி சிவப்பு & வெள்ளை", "1 BOX", 500, 50],
    [67, "Tom & Jerry White & Gold", "டாம் & ஜெர்ரி வெள்ளை & கோல்ட்", "1 BOX", 500, 50],
    [68, "Colour Rain", "நட்சத்திர மழை", "1 BOX", 1100, 110],
    [69, "Golden Clobe", "கோல்டன் ரைஸ்", "1 BOX", 1100, 110],
    [70, "Chotta Beam 5 Colour (5 pcs)", "சோட்டா பீம் 5 கலர்", "5 BOX", 2000, 200],
    [71, "Pogo 5 Colour (5 pcs)", "போகோ 5 கலர்", "5 BOX", 2000, 200],
    [72, "Tom & Jerry 5 Colour (5 pcs)", "டாம் & ஜெர்ரி 5 கலர்", "5 BOX", 2000, 200],
  ]),
  mk("multi-colour-fountain-3", `3" Multi Colour Fountain`, `3" முல்டி கலர் பவுண்டன்`, [
    [73, "Pink Nila Sliver Color (5pcs)", "பிங்க் நிலா சில்வர் கலர்", "1 BOX", 2000, 200],
    [74, "Pink Nila Red Color (5pcs)", "பிங்க் நிலா ரெட் கலர்", "1 BOX", 2000, 200],
    [75, "Pink Nila MultiColor (5pcs)", "பிங்க் நிலா மல்டிகலர்", "1 BOX", 2000, 200],
    [76, "Pink Nila Red & Green (5 Pcs)", "பிங்க் நிலா ரெட் & கிரீன்", "1 BOX", 2000, 200],
    [77, "Pink Nila Triangle Fountain", "நிலா பிங்க் முககோண பவுண்டன்", "1 BOX", 1500, 130],
  ]),
  mk("multi-colour-fountain-4", `4" Multi Colour Fountain`, `4" முல்டி கலர் பவுண்டன்`, [
    [78, "Scoobydoo Red", "இஸ்கூபிடோ சிவப்பு", "1 BOX", 900, 90],
    [79, "Scoobydoo Green", "இஸ்கூபிடோ பச்சை", "1 BOX", 900, 90],
    [80, "Scoobydoo White", "இஸ்கூபிடோ வெள்ளை", "1 BOX", 900, 90],
    [81, "Scoobydoo Gold", "இஸ்கூபிடோ கோல்ட்", "1 BOX", 900, 90],
    [82, "Scoobydoo Red & Green", "இஸ்கூபிடோ சிவப்பு & பச்சை", "1 BOX", 900, 90],
    [83, "Angry Bird Green", "ஆங்கிரி பர்ட்ஸ் கிரீன்", "1 BOX", 900, 90],
    [84, "Angry Bird Red", "ஆங்கிரி பார்ட்ஸ் ரெட்", "1 BOX", 900, 90],
    [85, "Angry Bird Gold", "ஆங்கிரி பார்ட்ஸ் கோல்ட்", "1 BOX", 900, 90],
    [86, "Angry Bird White", "ஆங்கிரி பார்ட்ஸ் வைட்", "1 BOX", 900, 90],
    [87, "Lollypop Small Fountain (3 Pcs)", "லாலிபாப் சிவப்பு, பச்சை & வெள்ளை", "1 BOX", 1200, 120],
    [88, "H2O Hexagon Color Fountain", "H2O ஹெக்சாகோன் கலர்", "1 BOX", 1200, 120],
    [89, "Drone Colour Fountain (5 Pcs)", "ட்ரோன் கலர் பவுண்டன்", "1 BOX", 1200, 120],
    [90, "Angry Bird 5 Colour (5pcs)", "ஆங்கிரி பார்ட்ஸ் 5 கலர்", "5 BOX", 3200, 320],
    [91, "Scoobydoo 5 Colour (5pcs)", "இஸ்கூபிடோ 5 கலர்", "5 BOX", 3300, 330],
  ]),
  mk("fruit-series-fountain", `4" Fruit Series Colour Fountain`, `4" ஃப்ரூட் சீரிஸ் கலர் பவுண்டன்`, [
    [92, "Apple Fruit Colour Fountain", "ஆப்பிள் ஃப்ரூட்ஸ் கலர்", "1 BOX", 750, 75],
    [93, "Dragon Fruit Colour Fountain", "ட்ராகன் ஃப்ரூட்ஸ் கலர்", "1 BOX", 750, 75],
    [94, "Watermelan Fruit Colour Fountain", "வாட்டர்மெலான் ஃப்ரூட்ஸ் கலர்", "1 BOX", 750, 75],
    [95, "Pine Apple Fruit Colour Fountain", "பைன் ஆப்பிள் ஃப்ரூட்ஸ் கலர்", "1 BOX", 750, 75],
    [96, "Guava Fruit Colour Fountain", "கொய்யா ஃப்ரூட்ஸ் கலர்", "1 BOX", 750, 75],
  ]),
  mk("multi-step-fountain", `4" Multi Step Fountain`, `4" முல்டி ஸ்டெப் பவுண்டன்`, [
    [97, `Nila 4" Fancy Pipe`, "நிலா 4' Fancy Pipe", "1 BOX", 1800, 180],
    [98, "Snake 2 Step Fountan", "பாம்பு 2 Step பவுண்டன்", "1 BOX", 1800, 180],
    [99, "Watermelan Fruit 2 step fountain", "வாட்டர்மெலான் 2 Step பவுண்டன்", "1 BOX", 2200, 220],
    [100, "Kiwi Fruit 2 step fountain", "கிவி 2 Step பவுண்டன்", "1 BOX", 2200, 220],
    [101, "Fantasy - Lion Fountain", "லைன் 2 Step பவுண்டன்", "1 BOX", 2200, 220],
    [102, "Fantasy - Elephant Fountain", "எலிபான்ட் 2 Step பவுண்டன்", "1 BOX", 2200, 220],
  ]),
  mk("peacock-crackers", "Peacock Crackers", "மயில் தோகை கிராக்கர்ஸ்", [
    [103, "Peacock Feather", "பீகாக் மயில் தோகை", "1 BOX", 1400, 140],
    [104, "Peacock Sliver Color (5 Faces)", "பீகாக் சில்வர் கலர்", "1 BOX", 1600, 160],
    [105, "Peacock MultiColour (3 Faces)", "பீகாக் மல்டி கலர்", "1 BOX", 1800, 180],
    [106, "Bada Peacock", "படா பீகாக் மயில் தோகை", "1 BOX", 3600, 360],
  ]),
  mk("tin-crackers", "Tin Crackers", "டின் கிராக்கர்ஸ்", [
    [107, `Tin 4" 7 Up`, `4" டின் பிக் 7 Up`, "1 BOX", 1000, 100],
    [108, `Tin 4" Coca-cola`, `4" டின் பிக் Coca-cola`, "1 BOX", 1000, 100],
    [109, `Tin 4" WaterFalls`, `4" டின் பிக் waterfalls`, "1 BOX", 1000, 100],
    [110, `Tin 6" WaterFalls`, `6" டின் பிக் waterfalls`, "1 BOX", 1800, 180],
  ]),
  mk("musical-fountain", "Musical Fountain", "மியூசிக்கல் பவுண்டன்", [
    [111, "Mini Siren (5 Pcs)", "மினி சைரன்", "1 BOX", 1400, 140],
    [112, "Mega Siren (3 Pcs)", "மெகா சைரன்", "1 BOX", 1800, 180],
    [113, "Darlling Danscer (10pcs)", "டார்லிங் டான்சர்", "1 BOX", 1300, 130],
  ]),
  mk("fantasy-fountain", "Fantasy Special Colour Fountain", "பெண்டன்ஸ்டிக் ஸ்பெஷல் கலர் பவுண்டன்", [
    [114, "Fantasy - Ganga Jamuna", "கங்கா ஜமுனா", "1 BOX", 1000, 100],
    [115, "Fantasy - Tri Colours Smoke (3 Pcs)", "ட்ரை கலர் ஸ்மோக்", "1 BOX", 1500, 150],
    [116, "Fantasy - Sword Fountain", "ஸ்வார்ட் பவுண்டன்", "1 BOX", 1500, 150],
    [117, "Fantasy - Money Heist (2 Pcs)", "மணி ஹெய்ஸ்ட்", "1 BOX", 2000, 200],
    [118, "Fantasy - Orion Pop Corn", "ஓரியன் பாப் கார்ன்", "1 BOX", 2200, 220],
    [119, "Fantasy - Cone Fountain (2 Pcs)", "கோன் பவுண்டன்", "1 BOX", 2200, 220],
    [120, "Fantasy - Kulfi Fountain (2 Pcs)", "குல்பி பவுண்டன்", "1 BOX", 2200, 220],
    [121, "Fantasy - Lion Fountain", "லயன் பவுண்டன்", "1 BOX", 2200, 220],
    [122, "Fantasy - Elephant Fountain", "எலிபாண்ட் பவுண்டன்", "1 BOX", 2200, 220],
    [123, "Fantasy - AK47 Gun Fountain (2 Pcs)", "AK 47 கன் பவுண்டன்", "1 BOX", 2200, 220],
    [124, "Fantasy - Vel Fountain (2 Pcs)", "வேல் பவுண்டன்", "1 BOX", 2200, 220],
    [125, "Fantasy - Circus Fountain (5 Pcs)", "சர்க்கஸ் பவுண்டன்", "1 BOX", 2500, 250],
    [126, "Fantasy - Thirisoolam Fountain (2 Pcs)", "திரிசூலம் பவுண்டன்", "1 BOX", 2600, 260],
    [127, "Fantasy - Cylinder Fountain (2 Pcs)", "சிலிண்டர் பவுண்டன்", "1 BOX", 2600, 260],
    [128, "Fantasy - Bat & Ball Fountain", "பேட் & பால் பவுண்டன்", "1 BOX", 2600, 260],
  ]),
  mk("aerial-fancy", "Aerial Fancy Novelties", "ஏரியல் பான்சி நாவெல்டிஸ்", [
    [129, `2" Fancy`, `2" பேன்வெடி`, "1 BOX", 900, 90],
    [130, `2" Fancy (3 Pcs)`, `2" பேன்வெடி (3 Pcs)`, "1 BOX", 2400, 240],
    [131, `3 1/2" Fancy Multi Color`, `3 1/2" பேன்வெடி Color`, "1 BOX", 3000, 280],
    [132, `3 1/2" Fancy Color - Pink`, `3 1/2" பேன்வெடி - Pink`, "1 BOX", 3200, 320],
    [133, `3 1/2" Fancy Crackling`, `3 1/2" பேன்வெடி Crackling`, "1 BOX", 3400, 340],
    [134, `3 1/2" Fancy Sizziling`, `3 1/2" பேன்வெடி Sizziling`, "1 BOX", 3600, 360],
    [135, `3 1/2" Fancy (7 Steps)`, `3 1/2" பேன்வெடி (7 Steps)`, "1 BOX", 6000, 600],
    [136, `4" Fancy Nayakara falls`, `4" பேன்சி நயாகரா பாலஸ்`, "1 BOX", 3600, 360],
    [137, `4" Fancy Color (2 Pcs)`, `4" பேன்சி Color (2 Pcs)`, "1 BOX", 7500, 750],
    [138, `5" Fancy Color (1 Pcs)`, `5" பேன்சி Color (1 Pcs)`, "1 BOX", 5500, 550],
  ]),
  mk("multicolour-shots", "Multicolour Shots", "மல்டி கலர் ஷாட்ஸ்", [
    [139, "7 Shot MultiColour", "7 ஷாட்", "1 BOX", 1000, 100],
    [140, "12 Shot Rider", "12 ஷாட் ரைடர்", "1 BOX", 1200, 120],
    [141, "12 Shot MultiColour", "12 ஷாட் மல்டி கலர்", "1 BOX", 1800, 180],
    [142, "25 Shot Rider", "25 ஷாட் ரைடர்", "1 BOX", 2500, 250],
    [143, "30 Shot Multicolour", "30 ஷாட் மல்டி கலர்", "1 BOX", 3800, 380],
    [144, "30 Shot Multicolour UV", "30 ஷாட் மல்டி கலர் UV", "1 BOX", 4000, 400],
    [145, "60 Shot Multicolour UV", "60 ஷாட் மல்டி கலர் UV", "1 BOX", 8000, 800],
    [146, "120 Shot Multicolour", "120 ஷாட் மல்டி கலர்", "1 BOX", 16000, 1600],
    [147, "240 Shot Multicolour", "240 ஷாட் மல்டி கலர்", "1 BOX", 32000, 3200],
  ]),
  mk(
    "match-boxes",
    "Match Boxes",
    "மேட்ச் பாக்ஸ்",
    [
      [148, "Match Box - Classic Tap", "மேட்ச் பாக்ஸ் கிளாசிக்", "1 BOX", 1000, 1000],
      [149, "Match Box - Mini Laptop", "மேட்ச் பாக்ஸ் மினி லேப்டாப்", "1 BOX", 2600, 2600],
      [150, "Match Box - Large Laptop", "மேட்ச் பாக்ஸ் லார்ஜ் லேப்டாப்", "1 BOX", 3000, 3000],
    ],
    true
  ),
  mk("special-sparklers", "Special Sparklers", "ஸ்பெஷல் மத்தாப்பு", [
    [151, "Lollypop Crackling Sparklers", "லாலிபாப் கிரக்லிங் ஸ்பார்க்கிள்ஸ்", "1 BOX", 1600, 160],
    [152, "Rotating Sparklers (Umberla)", "ரொடேடிங் ஸ்பார்க்கிலர்ஸ் அம்பர்லா", "1 BOX", 2000, 200],
  ]),
  mk("sparklers", "Sparklers", "கம்பி மத்தாப்பு", [
    [153, "10 Cm Electric", "10 செ.மீ எலெக்ட்ரிக்", "1 BOX", 200, 20],
    [154, "10 Cm Colour", "10 செ.மீ கலர்", "1 BOX", 220, 22],
    [155, "10 Cm Green", "10 செ.மீ பச்சை", "1 BOX", 240, 24],
    [156, "10 Cm Red", "10 செ.மீ சிவப்பு", "1 BOX", 280, 28],
    [157, "12 Cm Electric", "12 செ.மீ எலெக்ட்ரிக்", "1 BOX", 300, 30],
    [158, "12 Cm Colour", "12 செ.மீ கலர்", "1 BOX", 320, 32],
    [159, "12 Cm Green", "12 செ.மீ பச்சை", "1 BOX", 340, 34],
    [160, "12 Cm Red", "12 செ.மீ சிவப்பு", "1 BOX", 380, 38],
    [161, "15 Cm Electric", "15 செ.மீ எலெக்ட்ரிக்", "1 BOX", 440, 44],
    [162, "15 Cm Colour", "15 செ.மீ கலர்", "1 BOX", 480, 48],
    [163, "15 Cm Green", "15 செ.மீ பச்சை", "1 BOX", 500, 50],
    [164, "15 Cm Red", "15 செ.மீ சிவப்பு", "1 BOX", 590, 58],
    [165, "30 Cm Electric", "30 செ.மீ எலெக்ட்ரிக்", "1 BOX", 440, 44],
    [166, "30 Cm Colour", "30 செ.மீ கலர்", "1 BOX", 480, 48],
    [167, "30 Cm Green", "30 செ.மீ பச்சை", "1 BOX", 500, 50],
    [168, "30 Cm Red", "30 செ.மீ சிவப்பு", "1 BOX", 580, 58],
    [169, "50 Cm Electric", "50 செ.மீ கலர்", "1 Tube", 1700, 170],
    [170, "50 Cm Colour", "50 செ.மீ எலெக்ட்ரிக்", "1 Tube", 1900, 190],
  ]),
  mk("gift-boxes", "Gift Boxes", "கிப்ட் பாக்ஸ்", [
    [171, "31 Items Gift Box", "31 எண்ணம்", "1 BOX", 550, 550],
    [172, "41 Items Gift Box", "41 எண்ணம்", "1 BOX", 650, 650],
  ], true),
  mk(
    "combo-packs",
    "Family Combo Packs",
    "காம்போ பேக்குகள்",
    [
      [173, "Middle Class Family Combo", "மிடில் கிளாஸ் பேமிலி காம்போ", "1 BOX", 3500, 3500],
      [174, "Sivakasi Sakthi Maan Special Combo", "சிவகாசி சக்திமான் ஸ்பெஷல் காம்போ", "1 BOX", 5000, 5000],
      [175, "Sakthi Maan Thala Deepavali Combo", "சக்திமான் தல தீபாவளி காம்போ", "1 BOX", 10000, 10000],
    ],
    true
  ),
  mk("festival-garlands", "Festival Chorsa Garlands", "தீபாவளி மாலை வெடி", [
    [176, "100 Wala Garland", "100 வாலா", "1 PKT", 400, 40],
    [177, "200 Wala Garland", "200 வாலா", "1 PKT", 800, 80],
    [178, "1000 Garland Special", "1K ஸ்பெஷல்", "1 BOX", 2000, 200],
    [179, "2000 Garland Special", "2K ஸ்பெஷல்", "1 BOX", 4000, 400],
    [180, "5000 Garland Special", "5K ஸ்பெஷல்", "1 BOX", 10000, 1000],
  ]),
];

export const allProducts: (Product & { categorySlug: string; categoryTitle: string; netRate?: boolean })[] =
  categories.flatMap((c) =>
    c.items.map((i) => ({ ...i, categorySlug: c.slug, categoryTitle: c.title, netRate: c.netRate }))
  );

export function findCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const shopInfo = {
  nameEn: "Sakthi Maan Crackers",
  nameTa: "சக்திமான் கிராக்கர்ஸ்",
  tagline: "எண்ணம் போல் வாழ்க்கை",
  address: "Thayilpatti, Sivakasi",
  phones: ["7200356100", "8344782624", "9344507199", "9840421477"],
  whatsapp: "917200356100",
};
