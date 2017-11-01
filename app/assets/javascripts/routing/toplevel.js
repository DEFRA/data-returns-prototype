var firstQuestion = "What type of waste did you transfer?";

var data = {
  initial: [
  "q01",
  "q89",
  "q131",
  "q223",
  "q298",
  "q322",
  "q356",
  "q379",
  "q403"
  ],

  choices:{
   "q00": {
      "name": "firstquestion",
      "question": "What type of waste did you transfer?",
      "children": [
         "q01",
         "q89",
         "q131",
         "q223",
         "q298",
         "q322",
         "q356",
         "q379",
         "q403",
         null,
         null,
         null
      ]
   },
   "q01": {
      "name": "Wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing, food preparation and processing",
      "question": "What type of wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing, food preparation and processing did you transfer?",
      "children": [
         "q02",
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
   "q02": {
      "name": "Wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing",
      "question": "What type of wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing did you transfer?",
      "children": [
         "q03",
         "q13",
         "q24",
         "q33",
         "q44",
         "q54",
         "q63",
         "q73",
         null,
         null,
         null,
         null
      ]
   },
   "q03": {
      "name": "Sludges from washing and cleaning",
      "question": "What was the method of transfer for sludges from washing and cleaning?",
      "children": [
         "q04",
         "q09",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q04": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q05",
         "q06",
         "q07",
         "q08",
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q10",
         "q11",
         "q12",
         null,
         null,
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
   "q11": {
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Animal-tissue waste",
      "question": "What was the method of transfer for animal-tissue waste?",
      "children": [
         "q14",
         "q18",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q15",
         "q16",
         "q17",
         null,
         null,
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
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
   "q19": {
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "land treatment resulting in benefit to agriculture or ecological improvement",
      "question": "What type of land treatment resulting in benefit to agriculture or ecological improvement did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Plant-tissue waste",
      "question": "What was the method of transfer for plant-tissue waste?",
      "children": [
         "q25",
         "q29",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q26",
         "q27",
         "q28",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q26": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "land treatment, e.g. biodegradation of liquid or sludgy discards in soils",
      "question": "What type of land treatment, e.g. biodegradation of liquid or sludgy discards in soils did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q30",
         "q31",
         "q32",
         null,
         null,
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Waste plastics (except packaging)",
      "question": "What was the method of transfer for waste plastics (except packaging)?",
      "children": [
         "q34",
         "q38",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q34": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q35",
         "q36",
         "q37",
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q39",
         "q40",
         "q41",
         "q42",
         "q43",
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q41": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site",
      "question": "What was the method of transfer for animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site?",
      "children": [
         "q45",
         "q49",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q46",
         "q47",
         "q48",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q46": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q50",
         "q51",
         "q52",
         "q53",
         null,
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
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "land treatment resulting in benefit to agriculture or ecological improvement",
      "question": "What type of land treatment resulting in benefit to agriculture or ecological improvement did you transfer?",
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
   "q53": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Agrochemical waste other than those mentioned in 02 01 08",
      "question": "What was the method of transfer for agrochemical waste other than those mentioned in 02 01 08?",
      "children": [
         "q55",
         "q59",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q56",
         "q57",
         "q58",
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
   "q58": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q60",
         "q62",
         "q61",
         null,
         null,
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "Recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Waste metal",
      "question": "What was the method of transfer for waste metal?",
      "children": [
         "q64",
         "q68",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q65",
         "q66",
         "q67",
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q66": {
      "name": "surface impoundment, e.g. placement of liquid or sludgy discards into pits, ponds or lagoons",
      "question": "What type of surface impoundment, e.g. placement of liquid or sludgy discards into pits, ponds or lagoons did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q69",
         "q70",
         "q71",
         "q72",
         null,
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
   "q70": {
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q73": {
      "name": "Wastes not otherwise specified",
      "question": "What was the method of transfer for wastes not otherwise specified?",
      "children": [
         "q74",
         "q78",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q75",
         "q76",
         "q77",
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q76": {
      "name": "Incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q79",
         "q80",
         "q81",
         null,
         null,
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q82": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q83",
         "q84",
         "q85",
         "q86",
         "q87",
         "q88",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q83": {
      "name": "Preparation and processing of meat - fish and other foods of animal origin",
      "question": "What was the method of transfer for preparation and processing of meat - fish and other foods of animal origin?",
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
      "name": "Fruit - vegetables - cereals - edible oils - cocoa - coffee - tea and tobacco preparation and processing; conserve production; yeast and yeast extract production - molasses preparation and fermentation",
      "question": "What was the method of transfer for fruit - vegetables - cereals - edible oils - cocoa - coffee - tea and tobacco preparation and processing; conserve production; yeast and yeast extract production - molasses preparation and fermentation?",
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
      "name": "Sugar processing",
      "question": "What was the method of transfer for sugar processing?",
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
      "name": "Dairy products industry",
      "question": "What was the method of transfer for dairy products industry?",
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
      "name": "Baking and confectionery industry",
      "question": "What was the method of transfer for baking and confectionery industry?",
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
      "name": "Production of alcoholic and non-alcoholic beverages (except coffee - tea and cocoa)",
      "question": "What was the method of transfer for production of alcoholic and non-alcoholic beverages (except coffee - tea and cocoa)?",
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
   "q89": {
      "name": "Oil wastes and wastes of liquid fuels (except edible oils and those in chapters 05, 12 and 19)",
      "question": "What type of oil wastes and wastes of liquid fuels (except edible oils and those in chapters 05, 12 and 19) did you transfer?",
      "children": [
         "q90",
         "q125",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q90": {
      "name": "Waste engine, gear and lubricating oils",
      "question": "What type of waste engine, gear and lubricating oils did you transfer?",
      "children": [
         "q91",
         "q96",
         "q97",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q91": {
      "name": "Mineral-based chlorinated engine, gear and lubricating oils",
      "question": "What was the method of transfer for mineral-based chlorinated engine, gear and lubricating oils?",
      "children": [
         "q92",
         "q95",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q93",
         "q94",
         null,
         null,
         null,
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
      "name": "Deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q96",
         "q97",
         null,
         null,
         null,
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
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Mineral-based non-chlorinated engine, gear and lubricating oils",
      "question": "What was the method of transfer for mineral-based non-chlorinated engine, gear and lubricating oils?",
      "children": [
         "q99",
         "q102",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
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
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
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
   "q101": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q103",
         "q104",
         null,
         null,
         null,
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
      "name": "Recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Synthetic engine, gear and lubricating oils readily biodegradable engine, gear and lubricating oils",
      "question": "What was the method of transfer for synthetic engine, gear and lubricating oils readily biodegradable engine, gear and lubricating oils?",
      "children": [
         "q106",
         "q110",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q107",
         "q108",
         "q109",
         null,
         null,
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
      "name": "Deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "Incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q111",
         "q112",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q111": {
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Other engine, gear and lubricating oils",
      "question": "What was the method of transfer for other engine, gear and lubricating oils?",
      "children": [
         "q114",
         "q118",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q115",
         "q116",
         "q117",
         null,
         null,
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
      "name": "Deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "Incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q119",
         "q120",
         "q121",
         "q122",
         "q123",
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
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q121": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
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
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q126",
         "q127",
         "q128",
         "q129",
         "q130",
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
      "name": "Wastes of liquid fuels",
      "question": "What was the method of transfer for wastes of liquid fuels?",
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
   "q127": {
      "name": "Oil Other wastes",
      "question": "What type of waste did you transfer?",
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
      "name": "Waste insulating and heat transmission oils",
      "question": "What was the method of transfer for waste insulating and heat transmission oils?",
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
      "name": "Bilge oils",
      "question": "What was the method of transfer for bilge oils?",
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
      "name": "Oil/water separator contents",
      "question": "What was the method of transfer for oil/water separator contents?",
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
      "name": "Waste packaging; absorbents, wiping cloths, filter materials and protective clothing not otherwise specified",
      "question": "What type of waste packaging; absorbents, wiping cloths, filter materials and protective clothing not otherwise specified did you transfer?",
      "children": [
         "q132",
         "q209",
         null,
         null,
         null,
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
      "name": "Packaging (including separately collected municipal packaging waste)",
      "question": "What type of packaging (including separately collected municipal packaging waste) did you transfer?",
      "children": [
         "q133",
         "q146",
         "q159",
         "q172",
         "q181",
         "q190",
         "q199",
         "q206",
         null,
         null,
         null,
         null
      ]
   },
   "q133": {
      "name": "Paper and cardboard packaging",
      "question": "What was the method of transfer for paper and cardboard packaging?",
      "children": [
         "q134",
         "q138",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
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
         null,
         null
      ]
   },
   "q135": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q139",
         "q140",
         "q141",
         "q142",
         "q143",
         "q144",
         "q145",
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q139": {
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
      "name": "solvent reclamation/regeneration",
      "question": "What type of solvent reclamation/regeneration did you transfer?",
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q143": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "recovery of components used for pollution abatement",
      "question": "What type of recovery of components used for pollution abatement did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Plastic packaging",
      "question": "What was the method of transfer for plastic packaging?",
      "children": [
         "q147",
         "q151",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q148",
         "q149",
         "q150",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q148": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q152",
         "q153",
         "q154",
         "q155",
         "q156",
         "q157",
         "q158",
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q152": {
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
      "name": "solvent reclamation/regeneration",
      "question": "What type of solvent reclamation/regeneration did you transfer?",
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q156": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "recovery of components used for pollution abatement",
      "question": "What type of recovery of components used for pollution abatement did you transfer?",
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
   "q158": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q159": {
      "name": "Wooden packaging",
      "question": "What was the method of transfer for wooden packaging?",
      "children": [
         "q160",
         "q164",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q161",
         "q162",
         "q163",
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q164": {
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q165",
         "q166",
         "q167",
         "q168",
         "q169",
         "q170",
         "q171",
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q165": {
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
      "name": "solvent reclamation/regeneration",
      "question": "What type of solvent reclamation/regeneration did you transfer?",
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
   "q167": {
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "recovery of components used for pollution abatement",
      "question": "What type of recovery of components used for pollution abatement did you transfer?",
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
   "q171": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Metallic packaging",
      "question": "What was the method of transfer for metallic packaging?",
      "children": [
         "q173",
         "q176",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q177",
         "q178",
         "q179",
         "q180",
         null,
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q181": {
      "name": "Composite packaging",
      "question": "What was the method of transfer for composite packaging?",
      "children": [
         "q182",
         "q185",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q183",
         "q184",
         null,
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q185": {
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q186",
         "q187",
         "q188",
         "q189",
         null,
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Mixed packaging",
      "question": "What was the method of transfer for mixed packaging?",
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q192",
         "q193",
         null,
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q195",
         "q196",
         "q197",
         "q198",
         null,
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q197": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q198": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Glass packaging",
      "question": "What was the method of transfer for glass packaging?",
      "children": [
         "q200",
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
   "q200": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q201",
         "q202",
         null,
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q202": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q204",
         "q205",
         null,
         null,
         null,
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q205": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q207",
         "q208",
         null,
         null,
         null,
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
      "name": "textile packaging",
      "question": "What type of textile packaging did you transfer?",
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
   "q208": {
      "name": "packaging containing residues of or contaminated by dangerous substances",
      "question": "What type of packaging containing residues of or contaminated by dangerous substances did you transfer?",
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
      "name": "Absorbents, filter materials, wiping cloths and protective clothing",
      "question": "What type of absorbents, filter materials, wiping cloths and protective clothing did you transfer?",
      "children": [
         "q210",
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
   "q210": {
      "name": "Absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02",
      "question": "What was the method of transfer for absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02?",
      "children": [
         "q211",
         "q215",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q212",
         "q213",
         "q214",
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q216",
         "q217",
         "q218",
         "q219",
         "q220",
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
      "name": "recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)",
      "question": "What type of recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes) did you transfer?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q218": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q219": {
      "name": "recovery of components used for pollution abatement",
      "question": "What type of recovery of components used for pollution abatement did you transfer?",
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
   "q220": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
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
         null,
         null
      ]
   },
   "q222": {
      "name": "absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02",
      "question": "What type of absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02 did you transfer?",
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
      "name": "From industrial processes",
      "question": "What type of from industrial processes did you transfer?",
      "children": [
         "q224",
         "q275",
         "q288",
         null,
         null,
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
      "name": "End-of-life vehicles from different means of transport (including off-road machinery) and wastes from dismantling of end-of-life vehicles and vehicle maintenance (except 13, 14, 16 06 and 16 08)",
      "question": "What type of end-of-life vehicles from different means of transport (including off-road machinery) and wastes from dismantling of end-of-life vehicles and vehicle maintenance (except 13, 14, 16 06 and 16 08) did you transfer?",
      "children": [
         "q225",
         "q232",
         "q236",
         "q241",
         "q245",
         "q249",
         "q256",
         "q263",
         null,
         null,
         null,
         null
      ]
   },
   "q225": {
      "name": "End-of-life tyres",
      "question": "What was the method of transfer for end-of-life tyres?",
      "children": [
         "q226",
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
   "q226": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q227",
         "q228",
         null,
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q228": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q230",
         "q231",
         null,
         null,
         null,
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "End-of-life vehicles, containing neither liquids nor other hazardous components",
      "question": "What was the method of transfer for end-of-life vehicles, containing neither liquids nor other hazardous components?",
      "children": [
         "q233",
         null,
         null,
         null,
         null,
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
      "question": "What type of  did you transfer?",
      "children": [
         "q234",
         "q235",
         null,
         null,
         null,
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
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
      "name": "Oil filters",
      "question": "What was the method of transfer for oil filters?",
      "children": [
         "q237",
         null,
         null,
         null,
         null,
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q238",
         "q239",
         "q240",
         null,
         null,
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q239": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q240": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q241": {
      "name": "Ferrous metal",
      "question": "What was the method of transfer for ferrous metal?",
      "children": [
         "q242",
         null,
         null,
         null,
         null,
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q243",
         "q244",
         null,
         null,
         null,
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Non-ferrous metal",
      "question": "What was the method of transfer for non-ferrous metal?",
      "children": [
         "q246",
         null,
         null,
         null,
         null,
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Plastic",
      "question": "What was the method of transfer for plastic?",
      "children": [
         "q250",
         "q253",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q251",
         "q252",
         null,
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q254",
         "q255",
         null,
         null,
         null,
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q255": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Glass",
      "question": "What was the method of transfer for glass?",
      "children": [
         "q257",
         "q260",
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q261",
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
         null
      ]
   },
   "q261": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q262": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q264",
         "q265",
         "q266",
         "q266",
         "q268",
         "q269",
         "q270",
         "q271",
         "q272",
         "q273",
         "q274",
         null
      ]
   },
   "q264": {
      "name": "components containing mercury components containing pcbs",
      "question": "What type of components containing mercury components containing pcbs did you transfer?",
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
   "q265": {
      "name": "explosive components (for example air bags)",
      "question": "What type of explosive components (for example air bags) did you transfer?",
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
   "q266": {
      "name": "brake pads containing asbestos",
      "question": "What type of brake pads containing asbestos did you transfer?",
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
      "name": "brake pads other than those mentioned in 16 01 11",
      "question": "What type of brake pads other than those mentioned in 16 01 11 did you transfer?",
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
      "name": "brake fluids",
      "question": "What type of brake fluids did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "antifreeze fluids other than those mentioned in 16 01 14",
      "question": "What type of antifreeze fluids other than those mentioned in 16 01 14 did you transfer?",
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
   "q271": {
      "name": "tanks for liquefied gas",
      "question": "What type of tanks for liquefied gas did you transfer?",
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
      "name": "hazardous components other than those mentioned in 16 01 07 to 16 01 11 and 16 01 13 and 16 01 14",
      "question": "What type of hazardous components other than those mentioned in 16 01 07 to 16 01 11 and 16 01 13 and 16 01 14 did you transfer?",
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
      "name": "components not otherwise specified",
      "question": "What type of components not otherwise specified did you transfer?",
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
      "name": "wastes not otherwise specified",
      "question": "What type of wastes not otherwise specified did you transfer?",
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
      "name": "batteries and accumulators",
      "question": "What type of batteries and accumulators did you transfer?",
      "children": [
         "q276",
         "q281",
         "q285",
         null,
         null,
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
      "name": "Lead batteries",
      "question": "What was the method of transfer for lead batteries?",
      "children": [
         "q277",
         null,
         null,
         null,
         null,
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q278",
         "q279",
         "q280",
         null,
         null,
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
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
      "name": "Alkaline batteries (except 16 06 03)",
      "question": "What was the method of transfer for alkaline batteries (except 16 06 03)?",
      "children": [
         "q282",
         null,
         null,
         null,
         null,
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
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q283",
         "q284",
         null,
         null,
         null,
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
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q284": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q285": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q286",
         "q287",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q286": {
      "name": "other batteries and accumulators",
      "question": "What type of other batteries and accumulators did you transfer?",
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
      "name": "separately collected electrolyte from batteries and accumulators",
      "question": "What type of separately collected electrolyte from batteries and accumulators did you transfer?",
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
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q289",
         "q290",
         "q291",
         "q292",
         "q293",
         "q294",
         "q295",
         "q296",
         "q297",
         null,
         null,
         null
      ]
   },
   "q289": {
      "name": "Electrical and electronic equipment",
      "question": "What was the method of transfer for electrical and electronic equipment?",
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
      "name": "Off-specification batches and unused products",
      "question": "What was the method of transfer for off-specification batches and unused products?",
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
      "name": "Waste explosives",
      "question": "What was the method of transfer for waste explosives?",
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
      "name": "Gases in pressure containers and discarded chemicals",
      "question": "What was the method of transfer for gases in pressure containers and discarded chemicals?",
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
   "q293": {
      "name": "Transport tank - storage tank and barel cleaning (except 05 and 13)",
      "question": "What was the method of transfer for transport tank - storage tank and barel cleaning (except 05 and 13)?",
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
      "name": "Spent catalysts",
      "question": "What was the method of transfer for spent catalysts?",
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
      "name": "Oxidising substances",
      "question": "What was the method of transfer for oxidising substances?",
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
      "name": "Aqueous liquid wastes destined for off-site treatment",
      "question": "What was the method of transfer for aqueous liquid wastes destined for off-site treatment?",
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
      "name": "Waste linings and refractories",
      "question": "What was the method of transfer for waste linings and refractories?",
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
      "name": "Construction and demolition waste",
      "question": "What type of construction and demolition waste did you transfer?",
      "children": [
         "q299",
         "q305",
         "q315",
         null,
         null,
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
      "name": "Concrete, bricks, tiles and ceramics",
      "question": "What type of concrete, bricks, tiles and ceramics did you transfer?",
      "children": [
         "q300",
         "q304",
         null,
         null,
         null,
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
      "name": "Mixtures of concrete, bricks, tiles and ceramics other than those mentioned in 17 01 06",
      "question": "What was the method of transfer for mixtures of concrete, bricks, tiles and ceramics other than those mentioned in 17 01 06?",
      "children": [
         "q301",
         null,
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q302",
         "q303",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q302": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
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
      "name": "insulation materials and asbestos-containing construction materials",
      "question": "What type of insulation materials and asbestos-containing construction materials did you transfer?",
      "children": [
         "q306",
         "q310",
         "q314",
         null,
         null,
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
      "name": "Insulation materials containing asbestos",
      "question": "What was the method of transfer for insulation materials containing asbestos?",
      "children": [
         "q307",
         null,
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q308",
         "q309",
         null,
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
      "name": "Construction materials containing asbestos",
      "question": "What was the method of transfer for construction materials containing asbestos?",
      "children": [
         "q311",
         null,
         null,
         null,
         null,
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
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q312",
         "q313",
         null,
         null,
         null,
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
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q314": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
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
   "q315": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q316",
         "q317",
         "q318",
         "q319",
         "q320",
         "q321",
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q316": {
      "name": "Wood - glass and plastic",
      "question": "What was the method of transfer for wood - glass and plastic?",
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
   "q317": {
      "name": "Bituminous mixtures - coal tar and tared products",
      "question": "What was the method of transfer for bituminous mixtures - coal tar and tared products?",
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
   "q318": {
      "name": "Metals (including their alloys)",
      "question": "What was the method of transfer for metals (including their alloys)?",
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
   "q319": {
      "name": "Soil (including excavated soil from contaminated sites) - stones and dredging spoil",
      "question": "What was the method of transfer for soil (including excavated soil from contaminated sites) - stones and dredging spoil?",
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
   "q320": {
      "name": "Gypsum-based construction material",
      "question": "What was the method of transfer for gypsum-based construction material?",
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
   "q321": {
      "name": "Other construction and demolition wastes",
      "question": "What was the method of transfer for other construction and demolition wastes?",
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
   "q322": {
      "name": "Healthcare waste",
      "question": "What type of healthcare waste did you transfer?",
      "children": [
         "q323",
         "q354",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q323": {
      "name": "Wastes from research, diagnosis, treatment or prevention of disease involving animals",
      "question": "What type of wastes from research, diagnosis, treatment or prevention of disease involving animals did you transfer?",
      "children": [
         "q324",
         "q333",
         "q337",
         "q345",
         "q349",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q324": {
      "name": "Sharps (except 18 02 02)",
      "question": "What was the method of transfer for sharps (except 18 02 02)?",
      "children": [
         "q325",
         "q329",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q325": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q326",
         "q327",
         "q328",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q326": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q327": {
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
   "q328": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q329": {
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q330",
         "q331",
         "q332",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q330": {
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q331": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q332": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q333": {
      "name": "Wastes whose collection and disposal is subject to special requirements in order to prevent infection",
      "question": "What was the method of transfer for wastes whose collection and disposal is subject to special requirements in order to prevent infection?",
      "children": [
         "q334",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q334": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q335",
         "q336",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q335": {
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
   "q336": {
      "name": "other method of transfer",
      "question": "What type of other method of transfer did you transfer?",
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
   "q337": {
      "name": "Wastes whose collection and disposal is not subject to special requirements in order to prevent infection",
      "question": "What was the method of transfer for wastes whose collection and disposal is not subject to special requirements in order to prevent infection?",
      "children": [
         "q338",
         "q342",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q338": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q339",
         "q340",
         "q341",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q339": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q340": {
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
   "q341": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q342": {
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q343",
         "q344",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q343": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q344": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q345": {
      "name": "Chemicals other than those mentioned in 18 02 05",
      "question": "What was the method of transfer for chemicals other than those mentioned in 18 02 05?",
      "children": [
         "q346",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q346": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q347",
         "q348",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q347": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q348": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q349": {
      "name": "Medicines other than those mentioned in 18 02 07",
      "question": "What was the method of transfer for medicines other than those mentioned in 18 02 07?",
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
   "q350": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q351",
         "q352",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q351": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q352": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q353": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
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
   "q354": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q355",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q355": {
      "name": "Natal care - diagnosis - treatment or prevention of disease in humans",
      "question": "What was the method of transfer for natal care - diagnosis - treatment or prevention of disease in humans?",
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
   "q356": {
      "name": "Minerals from waste and water treatment",
      "question": "What type of minerals from waste and water treatment did you transfer?",
      "children": [
         "q357",
         "q366",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q357": {
      "name": "Wastes from incineration or pyrolysis of waste",
      "question": "What type of wastes from incineration or pyrolysis of waste did you transfer?",
      "children": [
         "q358",
         "q365",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q358": {
      "name": "Bottom ash and slag (not containing dangerous substances)",
      "question": "What was the method of transfer for bottom ash and slag (not containing dangerous substances)?",
      "children": [
         "q359",
         "q362",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q359": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q360",
         "q361",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q360": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q361": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q362": {
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q363",
         "q364",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q363": {
      "name": "land treatment resulting in benefit to agriculture or ecological improvement",
      "question": "What type of land treatment resulting in benefit to agriculture or ecological improvement did you transfer?",
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
   "q364": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q365": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
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
   "q366": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q367",
         "q368",
         "q369",
         "q370",
         "q371",
         "q372",
         "q373",
         "q374",
         "q375",
         "q376",
         "q377",
         "q378"
      ]
   },
   "q367": {
      "name": "Physico/chemical treatments of waste (including dechromatation - decyanidation - neutralisation)",
      "question": "What was the method of transfer for physico/chemical treatments of waste (including dechromatation - decyanidation - neutralisation)?",
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
   "q368": {
      "name": "Stabilised/solidified wastes",
      "question": "What was the method of transfer for stabilised/solidified wastes?",
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
   "q369": {
      "name": "Vitrified waste and wastes from vitrification",
      "question": "What was the method of transfer for vitrified waste and wastes from vitrification?",
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
   "q370": {
      "name": "Aerobic treatment of solid wastes",
      "question": "What was the method of transfer for aerobic treatment of solid wastes?",
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
   "q371": {
      "name": "Anaerobic treatment of waste",
      "question": "What was the method of transfer for anaerobic treatment of waste?",
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
   "q372": {
      "name": "Landfill leachate",
      "question": "What was the method of transfer for landfill leachate?",
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
   "q373": {
      "name": "Waste water treatment plants not otherwise specified",
      "question": "What was the method of transfer for waste water treatment plants not otherwise specified?",
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
   "q374": {
      "name": "Preparation of water intended for human consumption or water for industrial use",
      "question": "What was the method of transfer for preparation of water intended for human consumption or water for industrial use?",
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
   "q375": {
      "name": "Shredding of metal-containing wastes",
      "question": "What was the method of transfer for shredding of metal-containing wastes?",
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
   "q376": {
      "name": "Oil regeneration",
      "question": "What was the method of transfer for oil regeneration?",
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
   "q377": {
      "name": "Mechanical treatment of waste (for example sorting - crushing - compacting - pelletising) not otherwise specified",
      "question": "What was the method of transfer for mechanical treatment of waste (for example sorting - crushing - compacting - pelletising) not otherwise specified?",
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
   "q378": {
      "name": "Soil and groundwater remediation",
      "question": "What was the method of transfer for soil and groundwater remediation?",
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
   "q379": {
      "name": "Municipal waste and similar materials from commerce and industry",
      "question": "What type of municipal waste and similar materials from commerce and industry did you transfer?",
      "children": [
         "q380",
         "q401",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q380": {
      "name": "Municipal wastes including separately collected fractions",
      "question": "What type of municipal wastes including separately collected fractions did you transfer?",
      "children": [
         "q381",
         "q391",
         "q400",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q381": {
      "name": "Fluorescent tubes and other mercury-containing waste",
      "question": "What was the method of transfer for fluorescent tubes and other mercury-containing waste?",
      "children": [
         "q382",
         "q385",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q382": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q383",
         "q384",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q383": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q384": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q385": {
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q386",
         "q387",
         "q388",
         "q389",
         "q390",
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q386": {
      "name": "recycling/reclamation of metals and metal compounds",
      "question": "What type of recycling/reclamation of metals and metal compounds did you transfer?",
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
   "q387": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q388": {
      "name": "oil re-refining or other reuses of oil",
      "question": "What type of oil re-refining or other reuses of oil did you transfer?",
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
   "q389": {
      "name": "storage of wastes pending any of the operations numbered r1 to r12 (excluding temporary storage, pending collection, on the site where it is produced)",
      "question": "What type of storage of wastes pending any of the operations numbered r1 to r12 (excluding temporary storage, pending collection, on the site where it is produced) did you transfer?",
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
   "q390": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q391": {
      "name": "Garden and park wastes (including cemetery waste)",
      "question": "What was the method of transfer for garden and park wastes (including cemetery waste)?",
      "children": [
         "q392",
         "q396",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q392": {
      "name": "Disposal",
      "question": "What was the method of disposal?",
      "children": [
         "q393",
         "q394",
         "q395",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q393": {
      "name": "deposit into or onto land, e.g. landfill",
      "question": "What type of deposit into or onto land, e.g. landfill did you transfer?",
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
   "q394": {
      "name": "incineration on land",
      "question": "What type of incineration on land did you transfer?",
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
   "q395": {
      "name": "other disposal method",
      "question": "What type of other disposal method did you transfer?",
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
   "q396": {
      "name": "Recovery",
      "question": "What was the method of recovery?",
      "children": [
         "q397",
         "q398",
         "q399",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q397": {
      "name": "use principally as a fuel or other means to generate energy",
      "question": "What type of use principally as a fuel or other means to generate energy did you transfer?",
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
   "q398": {
      "name": "recycling/reclamation of other inorganic materials",
      "question": "What type of recycling/reclamation of other inorganic materials did you transfer?",
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
   "q399": {
      "name": "other recovery method",
      "question": "What type of other recovery method did you transfer?",
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
   "q400": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
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
   "q401": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q402",
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null,
         null
      ]
   },
   "q402": {
      "name": "Other municipal wastes",
      "question": "What was the method of transfer for other municipal wastes?",
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
   "q403": {
      "name": "Other wastes",
      "question": "What type of waste did you transfer?",
      "children": [
         "q404",
         "q405",
         "q406",
         "q407",
         "q408",
         "q409",
         "q410",
         "q411",
         "q412",
         "q413",
         "q414",
         "q415"
      ]
   },
   "q404": {
      "name": "Mining/quarrying/mineral treatment",
      "question": "What type of mining/quarrying/mineral treatment did you transfer?",
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
   "q405": {
      "name": "Wood/paper/card processing",
      "question": "What type of wood/paper/card processing did you transfer?",
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
   "q406": {
      "name": "Leather/fur/textile industry",
      "question": "What type of leather/fur/textile industry did you transfer?",
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
   "q407": {
      "name": "Petroleum/gas production",
      "question": "What type of petroleum/gas production did you transfer?",
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
   "q408": {
      "name": "Inorganic chemical processing",
      "question": "What type of inorganic chemical processing did you transfer?",
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
   "q409": {
      "name": "Organic chemical processing",
      "question": "What type of organic chemical processing did you transfer?",
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
   "q410": {
      "name": "MFSU of coatings/adhesives/inks",
      "question": "What type of mfsu of coatings/adhesives/inks did you transfer?",
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
   "q411": {
      "name": "Photographic industry",
      "question": "What type of photographic industry did you transfer?",
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
   "q412": {
      "name": "Thermal processes",
      "question": "What type of thermal processes did you transfer?",
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
   "q413": {
      "name": "Chemical surface treatment of metals/plastic",
      "question": "What type of chemical surface treatment of metals/plastic did you transfer?",
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
   "q414": {
      "name": "Shaping/physical treatment of metals/plastic",
      "question": "What type of shaping/physical treatment of metals/plastic did you transfer?",
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
   "q415": {
      "name": "Solvents, refrigerants and propellants",
      "question": "What type of solvents, refrigerants and propellants did you transfer?",
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
