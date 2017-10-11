var firstQuestion = "What type of waste did you transfer?";

var data = {
  initial: [
	"q01",
	"q64",
	"q88",
	"q157",
	"q217",
	"q238",
	"q263",
	"q283",
	"q301"
  ],

  choices:{
   "q00": {
      "name": "firstquestion",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q01",
         "q64",
         "q88",
         "q157",
         "q217",
         "q238",
         "q263",
         "q283",
         "q301",
         null,
         null,
         null
      ]
   },
   "q01": {
      "name": "Wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing, food preparation and processing",
      "question": "What type of wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing, food preparation and processing did you transfer?",
      "description": "",
      "children": [
         "q02",
         "q57",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q02": {
      "name": "Wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing",
      "question": "What type of wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing did you transfer?",
      "description": "",
      "children": [
         "q03",
         "q10",
         "q18",
         "q25",
         "q33",
         "q40",
         "q45",
         "q52",
         null,
         null,
         null,
         null
      ]
   },
   "q03": {
      "name": "Sludges from washing and cleaning",
      "question": "What was the method of transfer for sludges from washing and cleaning?",
      "description": "",
      "children": [
         "q04",
         "q05",
         "q06",
         "q07",
         "q08",
         "q09",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q04": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q05": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q06": {
      "name": "disposal: use principally as a fuel or other means to generate energy",
      "question": "What type of disposal: use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q07": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q08": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q09": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q10": {
      "name": "Animal-tissue waste",
      "question": "What was the method of transfer for animal-tissue waste?",
      "description": "",
      "children": [
         "q11",
         "q12",
         "q13",
         "q14",
         "q15",
         "q16",
         "q17",
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q11": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q12": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q13": {
      "name": "recovery: use principally as a fuel or other means to generate energy",
      "question": "What type of recovery: use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q14": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q15": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q16": {
      "name": "recovery: land treatment resulting in benefit to agriculture or ecological improvement",
      "question": "What type of recovery: land treatment resulting in benefit to agriculture or ecological improvement did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q17": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q18": {
      "name": "Plant-tissue waste",
      "question": "What was the method of transfer for plant-tissue waste?",
      "description": "",
      "children": [
         "q19",
         "q20",
         "q21",
         "q22",
         "q23",
         "q24",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q19": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q20": {
      "name": "disposal: land treatment, e.g. biodegradation of liquid or sludgy discards in soils",
      "question": "What type of disposal: land treatment, e.g. biodegradation of liquid or sludgy discards in soils did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q21": {
      "name": "disposal: other disposal",
      "question": "What type of disposal: other disposal did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q22": {
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q23": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q24": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q25": {
      "name": "Waste plastics (except packaging)",
      "question": "What was the method of transfer for waste plastics (except packaging)?",
      "description": "",
      "children": [
         "q26",
         "q27",
         "q28",
         "q29",
         "q30",
         "q31",
         "q32",
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q26": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q27": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q28": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q29": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q30": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q31": {
      "name": "recovery: oil re-refining or other reuses of oil",
      "question": "What type of recovery: oil re-refining or other reuses of oil did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q32": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q33": {
      "name": "Animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site",
      "question": "What was the method of transfer for animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site?",
      "description": "",
      "children": [
         "q34",
         "q35",
         "q36",
         "q37",
         "q38",
         "q39",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q34": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q35": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q36": {
      "name": "disposal: use principally as a fuel or other means to generate energy",
      "question": "What type of disposal: use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q37": {
      "name": "disposal: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of disposal: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q38": {
      "name": "disposal: land treatment resulting in benefit to agriculture or ecological improvement",
      "question": "What type of disposal: land treatment resulting in benefit to agriculture or ecological improvement did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q39": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q40": {
      "name": "Agrochemical waste containing dangerous substances",
      "question": "What was the method of transfer for agrochemical waste containing dangerous substances?",
      "description": "",
      "children": [
         "q41",
         "q42",
         "q43",
         "q44",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q41": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q42": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q43": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q44": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q45": {
      "name": "Waste metal",
      "question": "What was the method of transfer for waste metal?",
      "description": "",
      "children": [
         "q46",
         "q47",
         "q48",
         "q49",
         "q50",
         "q51",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q46": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q47": {
      "name": "disposal: surface impoundment, e.g. placement of liquid or sludgy discards into pits, ponds or lagoons",
      "question": "What type of disposal: surface impoundment, e.g. placement of liquid or sludgy discards into pits, ponds or lagoons did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q48": {
      "name": "recovery: rrecycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: rrecycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q49": {
      "name": "recovery: rrecycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: rrecycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q50": {
      "name": "recovery: rrecycling/reclamation of other inorganic materials",
      "question": "What type of recovery: rrecycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q51": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q52": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q53",
         "q54",
         "q55",
         "q56",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q53": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q54": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q55": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q56": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q57": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q58",
         "q59",
         "q60",
         "q61",
         "q62",
         "q63",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q58": {
      "name": "Preparation and processing of meat - fish and other foods of animal origin",
      "question": "What was the method of transfer for preparation and processing of meat - fish and other foods of animal origin?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q59": {
      "name": "Fruit - vegetables - cereals - edible oils - cocoa - coffee - tea and tobacco preparation and processing; conserve production; yeast and yeast extract production - molasses preparation and fermentation",
      "question": "What was the method of transfer for fruit - vegetables - cereals - edible oils - cocoa - coffee - tea and tobacco preparation and processing; conserve production; yeast and yeast extract production - molasses preparation and fermentation?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q60": {
      "name": "Sugar processing",
      "question": "What was the method of transfer for sugar processing?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q61": {
      "name": "Dairy products industry",
      "question": "What was the method of transfer for dairy products industry?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q62": {
      "name": "Baking and confectionery industry",
      "question": "What was the method of transfer for baking and confectionery industry?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q63": {
      "name": "Production of alcoholic and non-alcoholic beverages (except coffee - tea and cocoa)",
      "question": "What was the method of transfer for production of alcoholic and non-alcoholic beverages (except coffee - tea and cocoa)?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q64": {
      "name": "Oil wastes and wastes of liquid fuels (except edible oils and those in chapters 05, 12 and 19)",
      "question": "What type of oil wastes and wastes of liquid fuels (except edible oils and those in chapters 05, 12 and 19) did you transfer?",
      "description": "",
      "children": [
         "q65",
         "q82",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q65": {
      "name": "Waste engine, gear and lubricating oils",
      "question": "What type of waste engine, gear and lubricating oils did you transfer?",
      "description": "",
      "children": [
         "q66",
         "q67",
         "q68",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q66": {
      "name": "Mineral-based chlorinated engine, gear and lubricating oils",
      "question": "What was the method of transfer for mineral-based chlorinated engine, gear and lubricating oils?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q67": {
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q68": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q69": {
      "name": "Mineral-based non-chlorinated engine, gear and lubricating oils",
      "question": "What was the method of transfer for mineral-based non-chlorinated engine, gear and lubricating oils?",
      "description": "",
      "children": [
         "q70",
         "q71",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q70": {
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q71": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q72": {
      "name": "Synthetic engine, gear and lubricating oils readily biodegradable engine, gear and lubricating oils",
      "question": "What was the method of transfer for synthetic engine, gear and lubricating oils readily biodegradable engine, gear and lubricating oils?",
      "description": "",
      "children": [
         "q73",
         "q74",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q73": {
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q74": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q75": {
      "name": "Other engine, gear and lubricating oils",
      "question": "What was the method of transfer for other engine, gear and lubricating oils?",
      "description": "",
      "children": [
         "q76",
         "q77",
         "q78",
         "q79",
         "q80",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q76": {
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q77": {
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q78": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q79": {
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q80": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q81": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q82",
         "q83",
         "q84",
         "q85",
         "q86",
         "q87",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q82": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q83": {
      "name": "Wastes of liquid fuels",
      "question": "What was the method of transfer for wastes of liquid fuels?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q84": {
      "name": "Oil Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q85": {
      "name": "Waste insulating and heat transmission oils",
      "question": "What was the method of transfer for waste insulating and heat transmission oils?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q86": {
      "name": "Bilge oils",
      "question": "What was the method of transfer for bilge oils?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q87": {
      "name": "Oil/water separator contents",
      "question": "What was the method of transfer for oil/water separator contents?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q88": {
      "name": "Waste packaging; absorbents, wiping cloths, filter materials and protective clothing not otherwise specified",
      "question": "What type of waste packaging; absorbents, wiping cloths, filter materials and protective clothing not otherwise specified did you transfer?",
      "description": "",
      "children": [
         "q89",
         "q146",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q89": {
      "name": "Packaging (including separately collected municipal packaging waste)",
      "question": "What type of packaging (including separately collected municipal packaging waste) did you transfer?",
      "description": "",
      "children": [
         "q90",
         "q100",
         "q110",
         "q120",
         "q126",
         "q132",
         "q138",
         "q142",
         null,
         null,
         null,
         null
      ]
   },
   "q90": {
      "name": "Paper and cardboard packaging",
      "question": "What was the method of transfer for paper and cardboard packaging?",
      "description": "",
      "children": [
         "q91",
         "q92",
         "q93",
         "q94",
         "q95",
         "q96",
         "q97",
         "q98",
         "q99",
         null,
         null,
         null
      ]
   },
   "q91": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q92": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q93": {
      "name": "recovery: use principally as a fuel or other means to generate energy",
      "question": "What type of recovery: use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q94": {
      "name": "recovery: solvent reclamation/regeneration",
      "question": "What type of recovery: solvent reclamation/regeneration did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q95": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q96": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q97": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q98": {
      "name": "recovery: recovery of components used for pollution abatement",
      "question": "What type of recovery: recovery of components used for pollution abatement did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q99": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q100": {
      "name": "Plastic packaging",
      "question": "What was the method of transfer for plastic packaging?",
      "description": "",
      "children": [
         "q101",
         "q102",
         "q103",
         "q104",
         "q105",
         "q106",
         "q107",
         "q108",
         "q109",
         null,
         null,
         null
      ]
   },
   "q101": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q102": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q103": {
      "name": "recovery: use principally as a fuel or other means to generate energy",
      "question": "What type of recovery: use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q104": {
      "name": "recovery: solvent reclamation/regeneration",
      "question": "What type of recovery: solvent reclamation/regeneration did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q105": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q106": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q107": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q108": {
      "name": "recovery: recovery of components used for pollution abatement",
      "question": "What type of recovery: recovery of components used for pollution abatement did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q109": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q110": {
      "name": "Wooden packaging",
      "question": "What was the method of transfer for wooden packaging?",
      "description": "",
      "children": [
         "q111",
         "q112",
         "q113",
         "q114",
         "q115",
         "q116",
         "q117",
         "q118",
         "q119",
         null,
         null,
         null
      ]
   },
   "q111": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q112": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q113": {
      "name": "recovery: use principally as a fuel or other means to generate energy",
      "question": "What type of recovery: use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q114": {
      "name": "recovery: solvent reclamation/regeneration",
      "question": "What type of recovery: solvent reclamation/regeneration did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q115": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q116": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q117": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q118": {
      "name": "recovery: recovery of components used for pollution abatement",
      "question": "What type of recovery: recovery of components used for pollution abatement did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q119": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q120": {
      "name": "Metallic packaging",
      "question": "What was the method of transfer for metallic packaging?",
      "description": "",
      "children": [
         "q121",
         "q122",
         "q123",
         "q124",
         "q125",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q121": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q122": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q123": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q124": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q125": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q126": {
      "name": "Composite packaging",
      "question": "What was the method of transfer for composite packaging?",
      "description": "",
      "children": [
         "q127",
         "q128",
         "q129",
         "q130",
         "q131",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q127": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q128": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q129": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q130": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q131": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q132": {
      "name": "Mixed packaging",
      "question": "What was the method of transfer for mixed packaging?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q133": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         "q134",
         "q135",
         "q136",
         "q137",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q134": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q135": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q136": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q137": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q138": {
      "name": "Glass packaging",
      "question": "What was the method of transfer for glass packaging?",
      "description": "",
      "children": [
         "q139",
         "q140",
         "q141",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q139": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q140": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q141": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q142": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q143",
         "q144",
         "q145",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q143": {
      "name": "textile packaging",
      "question": "What type of textile packaging did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q144": {
      "name": "packaging containing residues of or contaminated by dangerous substances",
      "question": "What type of packaging containing residues of or contaminated by dangerous substances did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q145": {
      "name": "metallic packaging containing a dangerous solid porous matrix (for example asbestos), including empty pressure containers",
      "question": "What type of metallic packaging containing a dangerous solid porous matrix (for example asbestos), including empty pressure containers did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q146": {
      "name": "Absorbents, filter materials, wiping cloths and protective clothing",
      "question": "What type of absorbents, filter materials, wiping cloths and protective clothing did you transfer?",
      "description": "",
      "children": [
         "q147",
         "q155",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q147": {
      "name": "Absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02",
      "question": "What was the method of transfer for absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02?",
      "description": "",
      "children": [
         "q148",
         "q149",
         "q150",
         "q151",
         "q152",
         "q153",
         "q154",
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q148": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q149": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q150": {
      "name": "recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recovery: recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q151": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q152": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q153": {
      "name": "recovery: recovery of components used for pollution abatement",
      "question": "What type of recovery: recovery of components used for pollution abatement did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q154": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q155": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q156",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q156": {
      "name": "absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02",
      "question": "What type of absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02 did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q157": {
      "name": "From industrial processes",
      "question": "What type of from industrial processes did you transfer?",
      "description": "",
      "children": [
         "q158",
         "q196",
         "q207",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q158": {
      "name": "End-of-life vehicles from different means of transport (including off-road machinery) and wastes from dismantling of end-of-life vehicles and vehicle maintenance (except 13, 14, 16 06 and 16 08)",
      "question": "What type of end-of-life vehicles from different means of transport (including off-road machinery) and wastes from dismantling of end-of-life vehicles and vehicle maintenance (except 13, 14, 16 06 and 16 08) did you transfer?",
      "description": "",
      "children": [
         "q159",
         "q163",
         "q166",
         "q170",
         "q173",
         "q176",
         "q180",
         "q184",
         null,
         null,
         null,
         null
      ]
   },
   "q159": {
      "name": "End-of-life tyres",
      "question": "What was the method of transfer for end-of-life tyres?",
      "description": "",
      "children": [
         "q160",
         "q161",
         "q162",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q160": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q161": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q162": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q163": {
      "name": "End-of-life vehicles, containing neither liquids nor other hazardous components",
      "question": "What was the method of transfer for end-of-life vehicles, containing neither liquids nor other hazardous components?",
      "description": "",
      "children": [
         "q164",
         "q165",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q164": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q165": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q166": {
      "name": "Oil filters",
      "question": "What was the method of transfer for oil filters?",
      "description": "",
      "children": [
         "q167",
         "q168",
         "q169",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q167": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q168": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q169": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q170": {
      "name": "Ferrous metal",
      "question": "What was the method of transfer for ferrous metal?",
      "description": "",
      "children": [
         "q171",
         "q172",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q171": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q172": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q173": {
      "name": "Non-ferrous metal",
      "question": "What was the method of transfer for non-ferrous metal?",
      "description": "",
      "children": [
         "q174",
         "q175",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q174": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q175": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q176": {
      "name": "Plastic",
      "question": "What was the method of transfer for plastic?",
      "description": "",
      "children": [
         "q177",
         "q178",
         "q179",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q177": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q178": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q179": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q180": {
      "name": "Glass",
      "question": "What was the method of transfer for glass?",
      "description": "",
      "children": [
         "q181",
         "q182",
         "q183",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q181": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q182": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q183": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q184": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q185",
         "q186",
         "q187",
         "q187",
         "q189",
         "q190",
         "q191",
         "q192",
         "q193",
         "q194",
         "q195",
         null
      ]
   },
   "q185": {
      "name": "components containing mercury components containing pcbs",
      "question": "What type of components containing mercury components containing pcbs did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q186": {
      "name": "explosive components (for example air bags)",
      "question": "What type of explosive components (for example air bags) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q187": {
      "name": "brake pads containing asbestos",
      "question": "What type of brake pads containing asbestos did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q188": {
      "name": "brake pads other than those mentioned in 16 01 11",
      "question": "What type of brake pads other than those mentioned in 16 01 11 did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q189": {
      "name": "brake fluids",
      "question": "What type of brake fluids did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q190": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q191": {
      "name": "antifreeze fluids other than those mentioned in 16 01 14",
      "question": "What type of antifreeze fluids other than those mentioned in 16 01 14 did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q192": {
      "name": "tanks for liquefied gas",
      "question": "What type of tanks for liquefied gas did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q193": {
      "name": "hazardous components other than those mentioned in 16 01 07 to 16 01 11 and 16 01 13 and 16 01 14",
      "question": "What type of hazardous components other than those mentioned in 16 01 07 to 16 01 11 and 16 01 13 and 16 01 14 did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q194": {
      "name": "components not otherwise specified",
      "question": "What type of components not otherwise specified did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q195": {
      "name": "wastes not otherwise specified",
      "question": "What type of wastes not otherwise specified did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q196": {
      "name": "batteries and accumulators",
      "question": "What type of batteries and accumulators did you transfer?",
      "description": "",
      "children": [
         "q197",
         "q201",
         "q204",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q197": {
      "name": "Lead batteries",
      "question": "What was the method of transfer for lead batteries?",
      "description": "",
      "children": [
         "q198",
         "q199",
         "q200",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q198": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q199": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q200": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q201": {
      "name": "Alkaline batteries (except 16 06 03)",
      "question": "What was the method of transfer for alkaline batteries (except 16 06 03)?",
      "description": "",
      "children": [
         "q202",
         "q203",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q202": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q203": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q204": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q205",
         "q206",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q205": {
      "name": "other batteries and accumulators",
      "question": "What type of other batteries and accumulators did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q206": {
      "name": "separately collected electrolyte from batteries and accumulators",
      "question": "What type of separately collected electrolyte from batteries and accumulators did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q207": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q208",
         "q209",
         "q210",
         "q211",
         "q212",
         "q213",
         "q214",
         "q215",
         "q216",
         null,
         null,
         null
      ]
   },
   "q208": {
      "name": "Electrical and electronic equipment",
      "question": "What was the method of transfer for electrical and electronic equipment?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q209": {
      "name": "Off-specification batches and unused products",
      "question": "What was the method of transfer for off-specification batches and unused products?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q210": {
      "name": "Waste explosives",
      "question": "What was the method of transfer for waste explosives?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q211": {
      "name": "Gases in pressure containers and discarded chemicals",
      "question": "What was the method of transfer for gases in pressure containers and discarded chemicals?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q212": {
      "name": "Transport tank - storage tank and barrel cleaning (except 05 and 13)",
      "question": "What was the method of transfer for transport tank - storage tank and barrel cleaning (except 05 and 13)?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q213": {
      "name": "Spent catalysts",
      "question": "What was the method of transfer for spent catalysts?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q214": {
      "name": "Oxidising substances",
      "question": "What was the method of transfer for oxidising substances?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q215": {
      "name": "Aqueous liquid wastes destined for off-site treatment",
      "question": "What was the method of transfer for aqueous liquid wastes destined for off-site treatment?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q216": {
      "name": "Waste linings and refractories",
      "question": "What was the method of transfer for waste linings and refractories?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q217": {
      "name": "Construction and demolition waste",
      "question": "What type of construction and demolition waste did you transfer?",
      "description": "",
      "children": [
         "q218",
         "q223",
         "q231",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q218": {
      "name": "Concrete, bricks, tiles and ceramics",
      "question": "What type of concrete, bricks, tiles and ceramics did you transfer?",
      "description": "",
      "children": [
         "q219",
         "q222",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q219": {
      "name": "Mixtures of concrete, bricks, tiles and ceramics other than those mentioned in 17 01 06",
      "question": "What was the method of transfer for mixtures of concrete, bricks, tiles and ceramics other than those mentioned in 17 01 06?",
      "description": "",
      "children": [
         "q220",
         "q221",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q220": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q221": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q222": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q223": {
      "name": "insulation materials and asbestos-containing construction materials",
      "question": "What type of insulation materials and asbestos-containing construction materials did you transfer?",
      "description": "",
      "children": [
         "q224",
         "q227",
         "q230",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q224": {
      "name": "Insulation materials containing asbestos",
      "question": "What was the method of transfer for insulation materials containing asbestos?",
      "description": "",
      "children": [
         "q225",
         "q226",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q225": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q226": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q227": {
      "name": "Construction materials containing asbestos",
      "question": "What was the method of transfer for construction materials containing asbestos?",
      "description": "",
      "children": [
         "q228",
         "q229",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q228": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q229": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q230": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q231": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q232": {
      "name": "Wood - glass and plastic",
      "question": "What was the method of transfer for wood - glass and plastic?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q233": {
      "name": "Bituminous mixtures - coal tar and tarred products",
      "question": "What was the method of transfer for bituminous mixtures - coal tar and tarred products?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q234": {
      "name": "Metals (including their alloys)",
      "question": "What was the method of transfer for metals (including their alloys)?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q235": {
      "name": "Soil (including excavated soil from contaminated sites) - stones and dredging spoil",
      "question": "What was the method of transfer for soil (including excavated soil from contaminated sites) - stones and dredging spoil?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q236": {
      "name": "Gypsum-based construction material",
      "question": "What was the method of transfer for gypsum-based construction material?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q237": {
      "name": "Other construction and demolition wastes",
      "question": "What was the method of transfer for other construction and demolition wastes?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q238": {
      "name": "Healthcare waste",
      "question": "What type of healthcare waste did you transfer?",
      "description": "",
      "children": [
         "q239",
         "q261",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q239": {
      "name": "Wastes from research, diagnosis, treatment or prevention of disease involving animals",
      "question": "What type of wastes from research, diagnosis, treatment or prevention of disease involving animals did you transfer?",
      "description": "",
      "children": [
         "q240",
         "q246",
         "q249",
         "q254",
         "q257",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q240": {
      "name": "Sharps (except 18 02 02)",
      "question": "What was the method of transfer for sharps (except 18 02 02)?",
      "description": "",
      "children": [
         "q241",
         "q242",
         "q243",
         "q244",
         "q245",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q241": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q242": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q243": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q244": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q245": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q246": {
      "name": "Wastes whose collection and disposal is subject to special requirements in order to prevent infection",
      "question": "What was the method of transfer for wastes whose collection and disposal is subject to special requirements in order to prevent infection?",
      "description": "",
      "children": [
         "q247",
         "q248",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q247": {
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q248": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q249": {
      "name": "Wastes whose collection and disposal is not subject to special requirements in order to prevent infection",
      "question": "What was the method of transfer for wastes whose collection and disposal is not subject to special requirements in order to prevent infection?",
      "description": "",
      "children": [
         "q250",
         "q251",
         "q252",
         "q253",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q250": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q251": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q252": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q253": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q254": {
      "name": "Chemicals other than those mentioned in 18 02 05",
      "question": "What was the method of transfer for chemicals other than those mentioned in 18 02 05?",
      "description": "",
      "children": [
         "q255",
         "q256",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q255": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q256": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q257": {
      "name": "Medicines other than those mentioned in 18 02 07",
      "question": "What was the method of transfer for medicines other than those mentioned in 18 02 07?",
      "description": "",
      "children": [
         "q258",
         "q259",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q258": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q259": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q260": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q261": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q262",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q262": {
      "name": "Natal care - diagnosis - treatment or prevention of disease in humans",
      "question": "What was the method of transfer for natal care - diagnosis - treatment or prevention of disease in humans?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q263": {
      "name": "Minerals from waste and water treatment",
      "question": "What type of minerals from waste and water treatment did you transfer?",
      "description": "",
      "children": [
         "q264",
         "q270",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q264": {
      "name": "Wastes from incineration or pyrolysis of waste",
      "question": "What type of wastes from incineration or pyrolysis of waste did you transfer?",
      "description": "",
      "children": [
         "q265",
         "q269",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q265": {
      "name": "Bottom ash and slag (not containing dangerous substances)",
      "question": "What was the method of transfer for bottom ash and slag (not containing dangerous substances)?",
      "description": "",
      "children": [
         "q266",
         "q267",
         "q268",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q266": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q267": {
      "name": "recovery: land treatment resulting in benefit to agriculture or ecological improvement",
      "question": "What type of recovery: land treatment resulting in benefit to agriculture or ecological improvement did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q268": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q269": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q270": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q271",
         "q272",
         "q273",
         "q274",
         "q275",
         "q276",
         "q277",
         "q278",
         "q279",
         "q280",
         "q281",
         "q282"
      ]
   },
   "q271": {
      "name": "Physico/chemical treatments of waste (including dechromatation - decyanidation - neutralisation)",
      "question": "What was the method of transfer for physico/chemical treatments of waste (including dechromatation - decyanidation - neutralisation)?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q272": {
      "name": "Stabilised/solidified wastes",
      "question": "What was the method of transfer for stabilised/solidified wastes?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q273": {
      "name": "Vitrified waste and wastes from vitrification",
      "question": "What was the method of transfer for vitrified waste and wastes from vitrification?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q274": {
      "name": "Aerobic treatment of solid wastes",
      "question": "What was the method of transfer for aerobic treatment of solid wastes?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q275": {
      "name": "Anaerobic treatment of waste",
      "question": "What was the method of transfer for anaerobic treatment of waste?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q276": {
      "name": "Landfill leachate",
      "question": "What was the method of transfer for landfill leachate?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q277": {
      "name": "Waste water treatment plants not otherwise specified",
      "question": "What was the method of transfer for waste water treatment plants not otherwise specified?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q278": {
      "name": "Preparation of water intended for human consumption or water for industrial use",
      "question": "What was the method of transfer for preparation of water intended for human consumption or water for industrial use?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q279": {
      "name": "Shredding of metal-containing wastes",
      "question": "What was the method of transfer for shredding of metal-containing wastes?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q280": {
      "name": "Oil regeneration",
      "question": "What was the method of transfer for oil regeneration?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q281": {
      "name": "Mechanical treatment of waste (for example sorting - crushing - compacting - pelletising) not otherwise specified",
      "question": "What was the method of transfer for mechanical treatment of waste (for example sorting - crushing - compacting - pelletising) not otherwise specified?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q282": {
      "name": "Soil and groundwater remediation",
      "question": "What was the method of transfer for soil and groundwater remediation?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q283": {
      "name": "Municipal waste and similar materials from commerce and industry",
      "question": "What type of municipal waste and similar materials from commerce and industry did you transfer?",
      "description": "",
      "children": [
         "q284",
         "q299",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q284": {
      "name": "Municipal wastes including separately collected fractions",
      "question": "What type of municipal wastes including separately collected fractions did you transfer?",
      "description": "",
      "children": [
         "q285",
         "q292",
         "q298",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q285": {
      "name": "Fluorescent tubes and other mercury-containing waste",
      "question": "What was the method of transfer for fluorescent tubes and other mercury-containing waste?",
      "description": "",
      "children": [
         "q286",
         "q287",
         "q288",
         "q289",
         "q290",
         "q291",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q286": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q287": {
      "name": "recovery: recycling/reclamation of metals and metal compounds",
      "question": "What type of recovery: recycling/reclamation of metals and metal compounds did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q288": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q289": {
      "name": "recovery: oil re-refining or other reuses of oil",
      "question": "What type of recovery: oil re-refining or other reuses of oil did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q290": {
      "name": "recovery: storage of wastes pending any of the operations numbered r1 to r12 (excluding temporary storage, pending collection, on the site where it is produced)",
      "question": "What type of recovery: storage of wastes pending any of the operations numbered r1 to r12 (excluding temporary storage, pending collection, on the site where it is produced) did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q291": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q292": {
      "name": "Garden and park wastes (including cemetery waste)",
      "question": "What was the method of transfer for garden and park wastes (including cemetery waste)?",
      "description": "",
      "children": [
         "q293",
         "q294",
         "q295",
         "q296",
         "q297",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q293": {
      "name": "disposal: deposit into or onto land, e.g. landfill",
      "question": "What type of disposal: deposit into or onto land, e.g. landfill did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q294": {
      "name": "disposal: incineration on land",
      "question": "What type of disposal: incineration on land did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q295": {
      "name": "recovery: use principally as a fuel or other means to generate energy",
      "question": "What type of recovery: use principally as a fuel or other means to generate energy did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q296": {
      "name": "recovery: recycling/reclamation of other inorganic materials",
      "question": "What type of recovery: recycling/reclamation of other inorganic materials did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q297": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q298": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q299": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q300",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q300": {
      "name": "Other municipal wastes",
      "question": "What was the method of transfer for other municipal wastes?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q301": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "description": "",
      "children": [
         "q302",
         "q303",
         "q304",
         "q305",
         "q306",
         "q307",
         "q308",
         "q309",
         "q310",
         "q311",
         "q312",
         "q313"
      ]
   },
   "q302": {
      "name": "Mining/quarrying/mineral treatment",
      "question": "What type of mining/quarrying/mineral treatment did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q303": {
      "name": "Wood/paper/card processing",
      "question": "What type of wood/paper/card processing did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q304": {
      "name": "Leather/fur/textile industry",
      "question": "What type of leather/fur/textile industry did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q305": {
      "name": "Petroleum/gas production",
      "question": "What type of petroleum/gas production did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q306": {
      "name": "Inorganic chemical processing",
      "question": "What type of inorganic chemical processing did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q307": {
      "name": "Organic chemical processing",
      "question": "What type of organic chemical processing did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q308": {
      "name": "MFSU of coatings/adhesives/inks",
      "question": "What type of mfsu of coatings/adhesives/inks did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q309": {
      "name": "Photographic industry",
      "question": "What type of photographic industry did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q310": {
      "name": "Thermal processes",
      "question": "What type of thermal processes did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q311": {
      "name": "Chemical surface treatment of metals/plastic",
      "question": "What type of chemical surface treatment of metals/plastic did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q312": {
      "name": "Shaping/physical treatment of metals/plastic",
      "question": "What type of shaping/physical treatment of metals/plastic did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q313": {
      "name": "Solvents, refrigerants and propellants",
      "question": "What type of solvents, refrigerants and propellants did you transfer?",
      "description": "",
      "children": [
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   }
}
};
