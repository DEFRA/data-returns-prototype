var values = [
	{ parameter: '2-(2-Butoxyethoxy)ethanol' }
	,{ parameter: '2-(2-Methoxypropoxy)propanol' }
	,{ parameter: '2-(2&comma;4-Dichlorophenoxy)propanoic Acid' }
	,{ parameter: '2-(1&comma;3-Thiazol-4-yl)-1H-benzimidazole' }
	,{ parameter: '2-(2&comma;4&comma;5-Trichlorophenoxy)propanoic Acid' }
	,{ parameter: '2-(4-Chloro-2-methylphenoxy)propanoic Acid' }
	,{ parameter: '4-(2&comma;4-Dichlorophenoxy)butyric Acid' }
	,{ parameter: '4-(2&comma;4-Dichlorophenoxy)butanoic Acid' }
	,{ parameter: '4-(4-Aminobenzyl)aniline' }
	,{ parameter: '2-(Chloromethyl)oxirane' }
	,{ parameter: '3-(1-Methylpyrrolidin-2-yl)pyridine' }
	,{ parameter: '2-(Methoxyethoxy)ethanol' }
	,{ parameter: '(1-Methylethenyl)benzene' }
	,{ parameter: '(2-Methoxymethylethoxy)propanol' }
	,{ parameter: '(4-Chloro-2-methylphenoxy)acetic Acid' }
	,{ parameter: '(Chloromethyl)benzene' }
	,{ parameter: '1&comma;1&quot;-Azobisformamide' }
	,{ parameter: '1&comma;1&quot;-Dimethyl-4&comma;4&quot;-bipyridinium Dichloride&comma; Respirable Dust' }
	,{ parameter: '1&comma;1&quot;-Ethylene-2&comma;2&quot;-bipyridinium Dibromide' }
	,{ parameter: '2&comma;2&quot;-Dichloro-4&comma;4&quot;-methylenedianiline' }
	,{ parameter: '2&comma;2&quot;-Iminodi(ethylamine)' }
	,{ parameter: '2&comma;2&quot;-Methylenebis(4-chlorophenol)' }
	,{ parameter: '2&comma;2&quot;-Oxydiethanol' }
	,{ parameter: '4&comma;4&quot;-Methylenebis(2-chlorobenzenamine)' }
	,{ parameter: '4&comma;4&quot;-Methylenebis(benzenamine)' }
	,{ parameter: '4&comma;4&quot;-Methylenedianiline' }
	,{ parameter: '6&comma;6&quot;-Di-tert-butyl-4&comma;4&quot;-thiodi-m-cresol' }
	,{ parameter: 'Abamectin' }
	,{ parameter: 'Acetaldehyde' }
	,{ parameter: '4-Acetamidophenol&comma; Inhalable Dust' }
	,{ parameter: 'Acetaminophen&comma; Inhalable Dust' }
	,{ parameter: 'Acetic Anhydride' }
	,{ parameter: 'Acetone' }
	,{ parameter: 'Acetonitrile' }
	,{ parameter: '2-Acetoxybenzoic Acid' }
	,{ parameter: 'Acrolein' }
	,{ parameter: 'Acrylaldehyde' }
	,{ parameter: 'Acrylamide' }
	,{ parameter: 'Acrylonitrile' }
	,{ parameter: 'Alachlor' }
	,{ parameter: 'Aldicarb' }
	,{ parameter: 'Aldrin' }
	,{ parameter: 'Alkylaluminium Compounds' }
	,{ parameter: 'Allyl Alcohol' }
	,{ parameter: 'alpha-Chloroacetophenone' }
	,{ parameter: 'alpha-Chlorotoluene' }
	,{ parameter: 'alpha-D-Glucopyranosyl beta-D-Fructofuranoside' }
	,{ parameter: 'alpha-Methylstyrene' }
	,{ parameter: 'Alumina' }
	,{ parameter: 'Aluminium' }
	,{ parameter: 'Aluminium Alkyl Compounds' }
	,{ parameter: 'Aluminium Oxides' }
	,{ parameter: 'Aluminium Salts&comma; Soluble' }
	,{ parameter: '4-Amino-3&comma;5&comma;6-trichloropicolinic Acid' }
	,{ parameter: '4-Aminoaniline' }
	,{ parameter: '2-Aminoethanol' }
	,{ parameter: 'Ammonia' }
	,{ parameter: 'Ammonium' }
	,{ parameter: 'Ammonium Amidosulphate' }
	,{ parameter: 'Ammonium Chloride&comma; Fume' }
	,{ parameter: 'Ammonium Sulphamidate' }
	,{ parameter: 'Amyl Methyl Ketone' }
	,{ parameter: 'Aniline' }
	,{ parameter: 'Anilinomethane' }
	,{ parameter: 'Anthracene' }
	,{ parameter: 'Antimony' }
	,{ parameter: 'Arsenic' }
	,{ parameter: 'Arsenic Trihydride' }
	,{ parameter: 'Arsine' }
	,{ parameter: 'Asbestos' }
	,{ parameter: 'Asphalt&comma; Petroleum Fumes' }
	,{ parameter: 'Aspirin' }
	,{ parameter: 'Atrazine' }
	,{ parameter: 'Azabenzene' }
	,{ parameter: 'Azacyclohexane' }
	,{ parameter: 'Azamethiphos' }
	,{ parameter: '3-Azapentane-1&comma;5-diamine' }
	,{ parameter: 'Azinphos-methyl' }
	,{ parameter: 'Azodicarbonamide' }
	,{ parameter: 'Barium' }
	,{ parameter: 'Barium Sulphate' }
	,{ parameter: 'BBP' }
	,{ parameter: 'Bentazone' }
	,{ parameter: 'Benzenamine' }
	,{ parameter: 'Benzene' }
	,{ parameter: 'Benzene-1&comma;2&comma;4-tricarboxylic Acid 1&comma;2-Anhydride' }
	,{ parameter: 'Benzene-1&comma;2-dicarboxylic Anhydride' }
	,{ parameter: 'Benzene-1&comma;2-diol' }
	,{ parameter: 'Benzene-1&comma;3-diol' }
	,{ parameter: 'Benzene-1&comma;4-diamine' }
	,{ parameter: 'Benzene-1&comma;4-diol' }
	,{ parameter: 'Benzo[a]pyrene' }
	,{ parameter: 'Benzo[b]fluoranthene' }
	,{ parameter: 'Benzo[g&comma;h&comma;i]perylene' }
	,{ parameter: 'Benzo[j&comma;k]fluorene' }
	,{ parameter: 'Benzo[k]fluoranthene' }
	,{ parameter: 'Benzyl Butyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Benzyl Butyl Phthalate' }
	,{ parameter: 'Benzyl Chloride' }
	,{ parameter: 'Beryllium' }
	,{ parameter: 'beta-D-Fructofuranosyl alpha-D-Glucopyranoside' }
	,{ parameter: 'Biocides' }
	,{ parameter: 'Biological Oxygen Demand' }
	,{ parameter: 'Biphenyl' }
	,{ parameter: '2&comma;2-Bis(hydroxymethyl)propane-1&comma;3-diol' }
	,{ parameter: 'Bis(2-aminoethyl)amine' }
	,{ parameter: 'Bis(2-ethylhexyl) Phthalate' }
	,{ parameter: 'Bis(2-hydroxyethyl) Ether' }
	,{ parameter: 'Bis(2-methylpropyl) Phthalate' }
	,{ parameter: 'Bis(4-tert-butyl-5-hydroxy-2-tolyl) Sulphide' }
	,{ parameter: 'Bis(6-methylheptyl) Phthalate' }
	,{ parameter: 'Bis(7-methyloctyl) Phthalate' }
	,{ parameter: 'Bis(8-methylnonyl) Phthalate' }
	,{ parameter: 'Bis(chloromethyl) Ether' }
	,{ parameter: 'Bismuth Telluride' }
	,{ parameter: 'BOD' }
	,{ parameter: 'Borax Decahydrate' }
	,{ parameter: 'Borax Pentahydrate' }
	,{ parameter: 'Boric Anhydride' }
	,{ parameter: 'Bornan-2-one' }
	,{ parameter: 'Boron' }
	,{ parameter: 'Boron Tribromide' }
	,{ parameter: 'Bromacil' }
	,{ parameter: 'Bromate' }
	,{ parameter: 'Bromine' }
	,{ parameter: '2-Bromo-2-chloro-1&comma;1&comma;1-trifluoroethane' }
	,{ parameter: 'Bromodichloromethane' }
	,{ parameter: 'Bromoform' }
	,{ parameter: 'Bromomethane' }
	,{ parameter: 'Bromoxynil' }
	,{ parameter: 'Burnt Lime' }
	,{ parameter: 'Buta-1&comma;3-diene' }
	,{ parameter: '1&comma;3-Butadiene' }
	,{ parameter: 'Butan-1-ol' }
	,{ parameter: 'Butan-2-ol' }
	,{ parameter: 'Butan-2-one' }
	,{ parameter: 'Butan-2-one Peroxides' }
	,{ parameter: 'Butan-2-yl Acetate' }
	,{ parameter: 'Butane' }
	,{ parameter: 'Butanol' }
	,{ parameter: '2-Butoxyethanol' }
	,{ parameter: '2-Butoxyethyl Acetate' }
	,{ parameter: 'Butyl 2-hydroxypropanoate' }
	,{ parameter: 'Butyl Acetate' }
	,{ parameter: 'Butyl Acrylate' }
	,{ parameter: 'Butyl Alcohol' }
	,{ parameter: 'Butyl Benzyl Phthalate' }
	,{ parameter: 'Butyl Chloroformate' }
	,{ parameter: 'Butyl Ethyl Ketone' }
	,{ parameter: 'Butyl Lactate' }
	,{ parameter: 'Butyl Methyl Ketone' }
	,{ parameter: 'Butyl Prop-2-enoate' }
	,{ parameter: 'C10–C13 Chloroalkanes' }
	,{ parameter: 'C7-C9 Dialkyl Phthalates' }
	,{ parameter: 'Cadmium' }
	,{ parameter: 'Cadmium Monoxide' }
	,{ parameter: 'Cadmium Oxide' }
	,{ parameter: 'Cadmium Sulphide and Cadmium Sulphide Pigments (Respirable Dust) (As Cd)' }
	,{ parameter: 'Cadmium(II) Oxide' }
	,{ parameter: 'Caesium Hydroxide' }
	,{ parameter: 'Calcium Carbonate' }
	,{ parameter: 'Calcium Cyanamide' }
	,{ parameter: 'Calcium Dihydroxide' }
	,{ parameter: 'Calcium Hydroxide' }
	,{ parameter: 'Calcium Monoxide' }
	,{ parameter: 'Calcium Oxide' }
	,{ parameter: 'Calcium Silicate' }
	,{ parameter: 'Calcium(II) Sulphate Dihydrate' }
	,{ parameter: 'Camphor' }
	,{ parameter: 'Caprolactam' }
	,{ parameter: 'Captan' }
	,{ parameter: 'Carbendazim' }
	,{ parameter: 'Carbinol' }
	,{ parameter: 'Carbodiimide' }
	,{ parameter: 'Carbofuran' }
	,{ parameter: 'Carbon Black' }
	,{ parameter: 'Carbon Dioxide' }
	,{ parameter: 'Carbon Disulphide' }
	,{ parameter: 'Carbon Monoxide' }
	,{ parameter: 'Carbon Oxychloride' }
	,{ parameter: 'Carbon Tetrachloride' }
	,{ parameter: 'Carbonic Dichloride' }
	,{ parameter: 'Caustic Potash' }
	,{ parameter: 'Caustic Soda' }
	,{ parameter: 'Cellulose' }
	,{ parameter: 'Cesium Hydroxide' }
	,{ parameter: 'CFC-114' }
	,{ parameter: 'Chemical Oxygen Demand' }
	,{ parameter: 'Chloral Hydrate' }
	,{ parameter: 'Chloramide' }
	,{ parameter: 'Chlorate' }
	,{ parameter: 'Chlordane' }
	,{ parameter: 'Chlorfenvinphos' }
	,{ parameter: 'Chloric Acid' }
	,{ parameter: 'Chloride' }
	,{ parameter: 'Chlorine' }
	,{ parameter: 'Chlorine Dioxide' }
	,{ parameter: 'Chlorite' }
	,{ parameter: '1-Chloro-2&comma;3-epoxypropane' }
	,{ parameter: '1-Chloro-4-nitrobenzene' }
	,{ parameter: '1-Chloro-2&comma;2&comma;2-trifluoroethyl Difluoromethyl Ether' }
	,{ parameter: '4-Chloro-3-methylphenol' }
	,{ parameter: '2-Chloro-1-phenylethanone' }
	,{ parameter: '2-Chloro-1-(2&comma;4-dichlorophenyl)ethenyl Diethyl Phosphate' }
	,{ parameter: '2-Chloro-1&comma;1&comma;2-trifluoroethyl Difluoromethyl Ether' }
	,{ parameter: '2-Chloro-1-(2&comma;4-dichlorophenyl)vinyl Diethyl Phosphate' }
	,{ parameter: 'Chloroacetaldehyde' }
	,{ parameter: 'Chloroacetic Acid' }
	,{ parameter: '2-Chloroacetophenone' }
	,{ parameter: 'Chlorobenzene' }
	,{ parameter: '3-Chlorochlordene' }
	,{ parameter: 'Chlorodifluoromethane' }
	,{ parameter: '2-Chloroethanal' }
	,{ parameter: 'Chloroethane' }
	,{ parameter: '2-Chloroethanol' }
	,{ parameter: 'Chloroethene' }
	,{ parameter: 'Chloroethene Polymer' }
	,{ parameter: 'Chloroform' }
	,{ parameter: 'Chloroformyl Chloride' }
	,{ parameter: 'Chloromethane' }
	,{ parameter: 'Chloromethyl Phenyl Ketone' }
	,{ parameter: 'Chloronitrotoluenes' }
	,{ parameter: '4-Chlorophenol' }
	,{ parameter: '2-Chlorophenol' }
	,{ parameter: '3-Chlorophenol' }
	,{ parameter: 'Chloropicrin' }
	,{ parameter: '3-Chloropropylene Oxide' }
	,{ parameter: 'Chlorosulphonic Acid' }
	,{ parameter: 'Chlorothalonil' }
	,{ parameter: 'Chlorotoluron' }
	,{ parameter: 'Chlorpropham' }
	,{ parameter: 'Chlorpyrifos' }
	,{ parameter: 'Chlorpyrifos-ethyl' }
	,{ parameter: 'Chromium' }
	,{ parameter: 'Chromium(II) Compounds (As Cr)' }
	,{ parameter: 'Chromium(III) Compounds (As Cr)' }
	,{ parameter: 'Chromium(VI) Compounds (As Cr)' }
	,{ parameter: 'Clostridium perfringens (Including Spores)' }
	,{ parameter: 'Cobalt' }
	,{ parameter: 'COD' }
	,{ parameter: 'Coliform Bacteria' }
	,{ parameter: 'Coliforms - Total' }
	,{ parameter: 'Colony Counts' }
	,{ parameter: 'Colour' }
	,{ parameter: 'Colouration (After Filtration)' }
	,{ parameter: 'Colouration (After Simple Filtration)' }
	,{ parameter: 'Conductivity' }
	,{ parameter: 'Copper' }
	,{ parameter: 'Cotton Dust' }
	,{ parameter: 'Coumaphos' }
	,{ parameter: 'Crag Herbicide' }
	,{ parameter: 'Cryofluorane' }
	,{ parameter: 'Cumene' }
	,{ parameter: 'Cyanamide' }
	,{ parameter: 'Cyanazine' }
	,{ parameter: 'Cyanide' }
	,{ parameter: '4-Cyano-2&comma;6-diiodophenol' }
	,{ parameter: 'Cyanogen Chloride' }
	,{ parameter: 'Cyclohexanamine' }
	,{ parameter: 'Cyclohexane' }
	,{ parameter: 'Cyclohexanol' }
	,{ parameter: 'Cyclohexanone' }
	,{ parameter: 'Cyclohexyl Alcohol' }
	,{ parameter: 'Cyclopenta-1&comma;3-diene Dimer' }
	,{ parameter: 'Cyfluthrin' }
	,{ parameter: 'Cypermethrin' }
	,{ parameter: '2&comma;4-D' }
	,{ parameter: '2&comma;4-DB' }
	,{ parameter: 'DBP' }
	,{ parameter: 'DCHP' }
	,{ parameter: 'DCM' }
	,{ parameter: '2&comma;4-DCP' }
	,{ parameter: 'DDT' }
	,{ parameter: 'DEHP' }
	,{ parameter: 'DEK' }
	,{ parameter: 'Demetons' }
	,{ parameter: 'DEP' }
	,{ parameter: '2&comma;6-Di-tert-butyl-p-cresol' }
	,{ parameter: '2&comma;6-Di-tert-butyl-4-methylphenol' }
	,{ parameter: 'Di(2-ethylhexyl) Phthalate' }
	,{ parameter: 'Diacetyl Ether' }
	,{ parameter: 'Diallyl Phthalate' }
	,{ parameter: 'Diatomaceous Earth&comma; Natural&comma; Respirable Dust' }
	,{ parameter: 'Diazinon' }
	,{ parameter: 'Dibenzoyl Peroxide' }
	,{ parameter: 'Dibismuth Tritelluride' }
	,{ parameter: 'Diboron Trioxide' }
	,{ parameter: '1&comma;2-Dibromo-3-chloropropane' }
	,{ parameter: '2&comma;6-Dibromo-4-cyanophenol' }
	,{ parameter: '3&comma;5-Dibromo-4-hydroxybenzonitrile' }
	,{ parameter: 'Dibromoacetonitrile' }
	,{ parameter: 'Dibromochloromethane' }
	,{ parameter: '1&comma;2-Dibromoethane' }
	,{ parameter: 'Dibutyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Dibutyl Hydrogen Phosphate' }
	,{ parameter: 'Dibutyl Phosphate' }
	,{ parameter: 'Dibutyl Phthalate' }
	,{ parameter: '3&comma;5-Dichloro-N-(1&comma;1-dimethylprop-2-ynyl)benzamide' }
	,{ parameter: '1&comma;3-Dichloro-5&comma;5-dimethylimidazolidine-2&comma;4-dione' }
	,{ parameter: '1&comma;2-Dichloro-1&comma;1&comma;2&comma;2-tetrafluoroethane' }
	,{ parameter: '1&comma;3-Dichloro-5&comma;5-dimethylhydantoin' }
	,{ parameter: 'Dichloroacetate' }
	,{ parameter: 'Dichloroacetonitrile' }
	,{ parameter: 'Dichloroacetylene' }
	,{ parameter: 'Dichlorobenzene' }
	,{ parameter: '1&comma;2-Dichlorobenzene' }
	,{ parameter: '1&comma;4-Dichlorobenzene' }
	,{ parameter: 'Dichlorodiphenyltrichloroethane' }
	,{ parameter: '1&comma;2-Dichloroethane' }
	,{ parameter: '1&comma;1-Dichloroethane' }
	,{ parameter: '1&comma;1-Dichloroethene' }
	,{ parameter: '1&comma;2-Dichloroethene' }
	,{ parameter: '2&comma;2-Dichloroethenyl Dimethyl Phosphate' }
	,{ parameter: 'Dichloroethyne' }
	,{ parameter: 'Dichlorofluoromethane' }
	,{ parameter: 'Dichloromethane' }
	,{ parameter: 'Dichloromethyl Bromide' }
	,{ parameter: 'Dichlorophen' }
	,{ parameter: '2&comma;4-Dichlorophenol' }
	,{ parameter: '2&comma;4-Dichlorophenoxyacetic Acid' }
	,{ parameter: '1&comma;2-Dichloropropane' }
	,{ parameter: '1&comma;3-Dichloropropene' }
	,{ parameter: '2&comma;2-Dichlorovinyl Dimethyl Phosphate' }
	,{ parameter: 'Dichlorprop' }
	,{ parameter: 'Dichlorvos' }
	,{ parameter: 'Dicyclohexyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Dicyclohexyl Phthalate' }
	,{ parameter: 'Dicyclopentadiene' }
	,{ parameter: 'Dieldrin' }
	,{ parameter: 'Diethyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Diethyl Ether' }
	,{ parameter: 'Diethyl Ketone' }
	,{ parameter: 'Diethyl Phthalate' }
	,{ parameter: 'Diethyl Sulphate' }
	,{ parameter: 'Diethylamine' }
	,{ parameter: 'Diethylene Glycol' }
	,{ parameter: 'Diethylene Glycol Monobutyl Ether' }
	,{ parameter: 'Diethylene Glycol Monomethyl Ether' }
	,{ parameter: 'Diflubenzuron' }
	,{ parameter: 'Dihydrogen Selenide (As Se)' }
	,{ parameter: 'Diisobutyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Diisobutyl Ketone' }
	,{ parameter: 'Diisobutyl Phthalate' }
	,{ parameter: 'Diisodecyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Diisodecyl Phthalate' }
	,{ parameter: 'Diisononyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Diisononyl Phthalate' }
	,{ parameter: 'Diisooctyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Diisooctyl Phthalate' }
	,{ parameter: 'Diisopropyl Ether' }
	,{ parameter: 'Diisopropylamine' }
	,{ parameter: 'Dimethoate' }
	,{ parameter: 'Dimethoxymethane' }
	,{ parameter: 'Dimethyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Dimethyl Ether' }
	,{ parameter: 'Dimethyl Ketone' }
	,{ parameter: 'Dimethyl Phthalate' }
	,{ parameter: 'Dimethyl Sulphate' }
	,{ parameter: 'Dimethylamine' }
	,{ parameter: '2-Dimethylaminoethanol' }
	,{ parameter: 'Dimethylformamide' }
	,{ parameter: '2&comma;6-Dimethylheptan-4-one' }
	,{ parameter: '2&comma;2-Dimethylpropane' }
	,{ parameter: '2&comma;6-Dinitro-N&comma;N-dipropyl-4-(trifluoromethyl)benzamine' }
	,{ parameter: '2&comma;6-Dinitro-N&comma;N-dipropyl-4-(trifluoromethyl)aniline' }
	,{ parameter: 'Dinitrobenzenes' }
	,{ parameter: 'Dinitrogen Oxide' }
	,{ parameter: 'Dinonyl Benzene-1&comma;2-carboxylate' }
	,{ parameter: 'Dinonyl Phthalate' }
	,{ parameter: 'Dioctyl Phthalates' }
	,{ parameter: '1&comma;4-Dioxacyclohexane' }
	,{ parameter: '3&comma;6-Dioxadecanol' }
	,{ parameter: '1&comma;4-Dioxane' }
	,{ parameter: '1&comma;3-Dioxo-1&comma;3-dihydroisobenzofuran-5-carboxylic Acid' }
	,{ parameter: 'Diphenyl Ether' }
	,{ parameter: 'Diphenylamine' }
	,{ parameter: 'Diphosphorus Pentasulphide' }
	,{ parameter: 'Diphosphorus Pentoxide' }
	,{ parameter: 'Diprop-2-enyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Dipropylene Glycol Monomethyl Ether' }
	,{ parameter: 'Diquat Dibromide' }
	,{ parameter: 'Di-sec-octyl Benzene-1&comma;2-dicarboxylate' }
	,{ parameter: 'Di-sec-octyl Phthalate' }
	,{ parameter: 'Disodium Disulphite' }
	,{ parameter: 'Disodium Tetraborate Decahydrate' }
	,{ parameter: 'Disodium Tetraborate Pentahydrate' }
	,{ parameter: 'Disodium Tetraborate&comma; Anhydrous' }
	,{ parameter: 'Dissolved or Emulsified Hydrocarbons' }
	,{ parameter: 'Dissolved Oxygen' }
	,{ parameter: 'Disulphur Dichloride' }
	,{ parameter: 'Diuron' }
	,{ parameter: 'DMF' }
	,{ parameter: 'DMP' }
	,{ parameter: 'DO' }
	,{ parameter: 'DOPs' }
	,{ parameter: 'Doramectin' }
	,{ parameter: 'Edetic Acid' }
	,{ parameter: 'EDTA' }
	,{ parameter: 'Emery' }
	,{ parameter: 'Endosulfan' }
	,{ parameter: 'Endrin' }
	,{ parameter: 'Enflurane' }
	,{ parameter: 'Entero Viruses' }
	,{ parameter: 'Enterococci' }
	,{ parameter: 'Environmental Tobacco Smoke' }
	,{ parameter: 'Epichlorohydrin' }
	,{ parameter: '1&comma;2-Epoxyethane' }
	,{ parameter: '1&comma;2-Epoxypropane' }
	,{ parameter: 'Escherichia coli (E.coli)' }
	,{ parameter: 'Ethanal' }
	,{ parameter: 'Ethanamine' }
	,{ parameter: 'Ethane-1&comma;2-dioic Acid' }
	,{ parameter: 'Ethane-1&comma;2-diol' }
	,{ parameter: 'Ethanenitrile' }
	,{ parameter: 'Ethanethiol' }
	,{ parameter: 'Ethanoic Anhydride' }
	,{ parameter: 'Ethanol' }
	,{ parameter: 'Ethenone' }
	,{ parameter: 'Ethenylbenzene' }
	,{ parameter: 'Ethoxyethane' }
	,{ parameter: '2-Ethoxyethanol' }
	,{ parameter: '2-Ethoxyethyl Acetate' }
	,{ parameter: 'Ethyl 2-Cyanoprop-2-enoate' }
	,{ parameter: 'Ethyl Acetate' }
	,{ parameter: 'Ethyl Acrylate' }
	,{ parameter: 'Ethyl Alcohol' }
	,{ parameter: 'Ethyl Chloride' }
	,{ parameter: 'Ethyl Chloroformate' }
	,{ parameter: 'Ethyl Cyanoacrylate' }
	,{ parameter: 'Ethyl Formate' }
	,{ parameter: 'Ethyl Hexahydro-1H-azepine-1-carbothioate' }
	,{ parameter: 'Ethyl Hydrosulphide' }
	,{ parameter: 'Ethyl Methanoate' }
	,{ parameter: 'Ethyl Methyl Ketone' }
	,{ parameter: 'Ethyl Methyl Ketone Peroxides' }
	,{ parameter: 'Ethyl Prop-2-enoate' }
	,{ parameter: 'Ethylamine' }
	,{ parameter: 'Ethylbenzene' }
	,{ parameter: 'Ethylene Chlorohydrin' }
	,{ parameter: 'Ethylene Dibromide' }
	,{ parameter: 'Ethylene Dichloride' }
	,{ parameter: 'Ethylene Glycol' }
	,{ parameter: 'Ethylene Glycol Monobutyl Ether' }
	,{ parameter: 'Ethylene Glycol Monobutyl Ether Acetate' }
	,{ parameter: 'Ethylene Glycol Monoethyl Ether' }
	,{ parameter: 'Ethylene Glycol Monoethyl Ether Acetate' }
	,{ parameter: 'Ethylene Glycol Monomethyl Ether' }
	,{ parameter: 'Ethylene Glycol Monomethyl Ether Acetate' }
	,{ parameter: 'Ethylene Oxide' }
	,{ parameter: 'Ethylenecarboxamide' }
	,{ parameter: 'Ethylenediaminetetraacetic Acid' }
	,{ parameter: '2-Ethylhexyl Chloroformate' }
	,{ parameter: 'Ethylidene Dichloride' }
	,{ parameter: '4-Ethylmorpholine' }
	,{ parameter: 'ETS' }
	,{ parameter: 'Faecal Coliforms' }
	,{ parameter: 'Faecal Streptococci' }
	,{ parameter: 'Fenchlorphos' }
	,{ parameter: 'Fenitrothion' }
	,{ parameter: 'Fenoprop' }
	,{ parameter: 'Ferric Oxide' }
	,{ parameter: 'Ferrous Foundry Particulate' }
	,{ parameter: 'Flour Dust' }
	,{ parameter: 'Flucofuron' }
	,{ parameter: 'Fluoranthene' }
	,{ parameter: 'Fluoride' }
	,{ parameter: 'Fluorine' }
	,{ parameter: 'Flusilazole' }
	,{ parameter: 'Formaldehyde' }
	,{ parameter: 'Formaldehyde Dimethyl Acetal' }
	,{ parameter: 'Formamide' }
	,{ parameter: 'Formic Acid' }
	,{ parameter: 'Formonitrile' }
	,{ parameter: '2-Formylfuran' }
	,{ parameter: '2-Furaldehyde' }
	,{ parameter: 'Furan-2&comma;5-dione' }
	,{ parameter: 'Furan-2-carbaldehyde' }
	,{ parameter: 'Furfural' }
	,{ parameter: 'gamma-1&comma;2&comma;3&comma;4&comma;5&comma;6-Hexachlorocyclohexane' }
	,{ parameter: 'gamma-HCH' }
	,{ parameter: 'Germane' }
	,{ parameter: 'Germanium Hydride' }
	,{ parameter: 'Germanium Tetrahydride' }
	,{ parameter: 'Glutaraldehyde' }
	,{ parameter: 'Glycerin' }
	,{ parameter: 'Glycerol&comma; Mist' }
	,{ parameter: 'Glycinol' }
	,{ parameter: 'Grain Dust' }
	,{ parameter: 'Grammite' }
	,{ parameter: 'Graphite' }
	,{ parameter: 'Gypsum' }
	,{ parameter: 'Halogenoplatinum Compounds (As Pt)' }
	,{ parameter: 'Halothane' }
	,{ parameter: 'Hardness' }
	,{ parameter: 'Hardwood Dust' }
	,{ parameter: 'HCB' }
	,{ parameter: 'HCBD' }
	,{ parameter: 'HCFC-21' }
	,{ parameter: 'HCFC-22' }
	,{ parameter: 'Heavy Metals' }
	,{ parameter: 'Heptachlor' }
	,{ parameter: 'Heptachlor Epoxide' }
	,{ parameter: 'Heptan-2-one' }
	,{ parameter: 'Heptan-3-one' }
	,{ parameter: 'Heptane' }
	,{ parameter: 'Hexachlorobenzene' }
	,{ parameter: 'Hexachlorobutadiene' }
	,{ parameter: 'Hexachlorocyclohexane' }
	,{ parameter: 'Hexahydro-1&comma;4-diazine' }
	,{ parameter: 'Hexahydro-1H-azepin-2-one' }
	,{ parameter: 'Hexahydroaniline' }
	,{ parameter: 'Hexahydrocresol' }
	,{ parameter: 'Hexahydropyridine' }
	,{ parameter: 'Hexan-2-one' }
	,{ parameter: 'Hexane' }
	,{ parameter: '1&comma;6-Hexanolactam' }
	,{ parameter: 'Hexylene Glycol' }
	,{ parameter: 'HFC-134a' }
	,{ parameter: 'Hydrated Lime' }
	,{ parameter: 'Hydrazine' }
	,{ parameter: 'Hydrobromic Acid' }
	,{ parameter: 'Hydrochloric Acid (Gas and Aerosol Mists)' }
	,{ parameter: 'Hydrocyanic Acid' }
	,{ parameter: 'Hydrofluoric Acid (As F)' }
	,{ parameter: 'Hydrogen Bromide' }
	,{ parameter: 'Hydrogen Chloride (Gas and Aerosol Mists)' }
	,{ parameter: 'Hydrogen Cyanide' }
	,{ parameter: 'Hydrogen Fluoride (As F)' }
	,{ parameter: 'Hydrogen Peroxide' }
	,{ parameter: 'Hydrogen Selenide (As Se)' }
	,{ parameter: 'Hydrogen Sulphide' }
	,{ parameter: 'Hydroquinone' }
	,{ parameter: '4-Hydroxy-3&comma;5-diiodobenzonitrile' }
	,{ parameter: '4-Hydroxy-4-methylpentan-2-one' }
	,{ parameter: 'Hydroxybenzene' }
	,{ parameter: '2-Hydroxypropyl Acrylate' }
	,{ parameter: 'IBA' }
	,{ parameter: 'Imazethapyr' }
	,{ parameter: 'Indene' }
	,{ parameter: 'Indeno[1&comma;2&comma;3-cd]pyrene' }
	,{ parameter: 'Indium and Its compounds (As In)' }
	,{ parameter: 'Iodine' }
	,{ parameter: 'Iodoform' }
	,{ parameter: 'Iodomethane' }
	,{ parameter: 'Ioxynil' }
	,{ parameter: 'IPA' }
	,{ parameter: 'Iron' }
	,{ parameter: 'Iron Oxide' }
	,{ parameter: 'Iron Pentacarbonyl (As Fe)' }
	,{ parameter: 'Iron Salts (As Fe)' }
	,{ parameter: 'Iron(III) Oxide' }
	,{ parameter: 'Isoamyl Alcohol' }
	,{ parameter: 'Isoamyl Methyl Ketone' }
	,{ parameter: 'Isobenzofuran-1&comma;3-dione' }
	,{ parameter: 'Isobutyl Acetate' }
	,{ parameter: 'Isobutyl Alcohol' }
	,{ parameter: 'Isobutyl Methyl Ketone' }
	,{ parameter: 'Isocyanates&comma; All (As -NCO)' }
	,{ parameter: 'Isodrin' }
	,{ parameter: 'Isoflurane' }
	,{ parameter: 'Isooctyl Alcohol' }
	,{ parameter: 'Isopentane' }
	,{ parameter: 'Isophorone' }
	,{ parameter: '2-Isopropoxyphenyl Methylcarbamate' }
	,{ parameter: '2-Isopropoxypropane' }
	,{ parameter: 'Isopropyl (3-Chlorophenyl)carbamate' }
	,{ parameter: 'Isopropyl Acetate' }
	,{ parameter: 'Isopropyl Alcohol' }
	,{ parameter: 'Isopropyl Chloroformate' }
	,{ parameter: 'Isopropyl m-Chlorocarbanilate' }
	,{ parameter: 'Isopropylbenzene' }
	,{ parameter: 'Isoproturon' }
	,{ parameter: 'Isovalerone' }
	,{ parameter: 'Ivermectin' }
	,{ parameter: 'Kaolin&comma; Respirable Dust' }
	,{ parameter: 'Ketene' }
	,{ parameter: 'Kieselguhr' }
	,{ parameter: 'Laughing Gas' }
	,{ parameter: 'Lead' }
	,{ parameter: 'Lime' }
	,{ parameter: 'Lime Nitrogen' }
	,{ parameter: 'Limestone' }
	,{ parameter: 'Lindane' }
	,{ parameter: 'Linuron' }
	,{ parameter: 'Liquefied Petroleum Gas' }
	,{ parameter: 'Lithium Hydride' }
	,{ parameter: 'Lithium Hydroxide' }
	,{ parameter: 'LPG' }
	,{ parameter: 'Machine-Made Mineral Fibre' }
	,{ parameter: 'Magnesite' }
	,{ parameter: 'Magnesium Carbonate' }
	,{ parameter: 'Magnesium Oxide (As Mg)' }
	,{ parameter: 'Malachite Green' }
	,{ parameter: 'Malathion' }
	,{ parameter: 'Maleic Anhydride' }
	,{ parameter: 'Mancozeb' }
	,{ parameter: 'Maneb' }
	,{ parameter: 'Manganese' }
	,{ parameter: 'Manganese Ethylenebis(dithiocarbamate)' }
	,{ parameter: 'Manganese Zinc Ethylenebis(dithiocarbamate)' }
	,{ parameter: 'Man-Made Vitreous Fibres' }
	,{ parameter: 'Marble' }
	,{ parameter: 'MBK' }
	,{ parameter: 'MbOCA' }
	,{ parameter: 'MCPA' }
	,{ parameter: 'MCPP' }
	,{ parameter: 'MDA' }
	,{ parameter: 'Mecoprop' }
	,{ parameter: 'MEK' }
	,{ parameter: 'MEKP' }
	,{ parameter: 'Mercaptoacetic Acid' }
	,{ parameter: 'Mercaptodimethur' }
	,{ parameter: 'Mercury' }
	,{ parameter: 'Methacrylic Acid' }
	,{ parameter: 'Methacrylonitrile' }
	,{ parameter: 'Methanal' }
	,{ parameter: 'Methanamide' }
	,{ parameter: 'Methanethiol' }
	,{ parameter: 'Methanoic Acid' }
	,{ parameter: 'Methanol' }
	,{ parameter: 'Methiocarb' }
	,{ parameter: 'Methoxychlor' }
	,{ parameter: '2-Methoxyethanol' }
	,{ parameter: '2-Methoxyethyl Acetate' }
	,{ parameter: 'Methoxymethane' }
	,{ parameter: '1-Methoxypropan-2-yl Acetate' }
	,{ parameter: '1-Methoxypropan-2-ol' }
	,{ parameter: '1-Methoxypropyl Acetate' }
	,{ parameter: '1-Methyl-2&comma;4&comma;6-nitrobenzene' }
	,{ parameter: '1-Methyl-2-pyrrolidone' }
	,{ parameter: 'Methyl 2-Cyanoacrylate' }
	,{ parameter: 'Methyl 2-Cyanoprop-2-enoate' }
	,{ parameter: 'Methyl 2-Methylacrylate' }
	,{ parameter: 'Methyl 2-Methylprop-2-enoate' }
	,{ parameter: 'Methyl Acetate' }
	,{ parameter: 'Methyl Alcohol' }
	,{ parameter: 'Methyl Bromide' }
	,{ parameter: 'Methyl Chloride' }
	,{ parameter: 'Methyl Cyanide' }
	,{ parameter: 'Methyl Cyanoacrylate' }
	,{ parameter: 'Methyl Ethyl Ketone' }
	,{ parameter: 'Methyl Ethyl Ketone Peroxides' }
	,{ parameter: 'Methyl Iodide' }
	,{ parameter: 'Methyl Isoamyl Ketone' }
	,{ parameter: 'Methyl Isobutyl Ketone' }
	,{ parameter: 'Methyl Mercaptan' }
	,{ parameter: 'Methyl Methacrylate' }
	,{ parameter: 'Methyl Pentyl Ketone' }
	,{ parameter: 'Methyl Propyl Ketone' }
	,{ parameter: 'Methyl Sulfhydrate' }
	,{ parameter: 'Methyl tert-Butyl Ether' }
	,{ parameter: '2-Methylacrylic Acid' }
	,{ parameter: '2-Methylacrylonitrile' }
	,{ parameter: 'Methylal' }
	,{ parameter: '2-Methylbenzenamine' }
	,{ parameter: 'Methylbenzene' }
	,{ parameter: '4-Methylbenzenesulphonyl Chloride' }
	,{ parameter: '3-Methylbutan-1-ol' }
	,{ parameter: '2-Methylbutane' }
	,{ parameter: '3-Methylbutanol' }
	,{ parameter: 'Methylcyclohexanol' }
	,{ parameter: '2-Methylcyclohexanone' }
	,{ parameter: 'Methylene Dichloride' }
	,{ parameter: '1-Methylethyl Chloroformate' }
	,{ parameter: '5-Methylheptan-3-one' }
	,{ parameter: '6-Methylheptanol' }
	,{ parameter: '5-Methylhexan-2-one' }
	,{ parameter: '2-Methyloxirane' }
	,{ parameter: '4-Methylpentan-2-one' }
	,{ parameter: '4-Methylpentan-2-ol' }
	,{ parameter: '2-Methylpentane-2&comma;4-diol' }
	,{ parameter: 'Methylphenols' }
	,{ parameter: '2-Methylprop-2-enoic Acid' }
	,{ parameter: '2-Methylprop-2-enenitrile' }
	,{ parameter: '2-Methylpropan-2-ol' }
	,{ parameter: '2-Methylpropan-1-ol' }
	,{ parameter: '2-Methylpropan-2-yl Acetate' }
	,{ parameter: '2-Methylpropanol' }
	,{ parameter: '2-Methylpropyl Acetate' }
	,{ parameter: '1-Methylpyrrolidin-2-one' }
	,{ parameter: 'Metolachlor' }
	,{ parameter: 'Mevinphos' }
	,{ parameter: 'Mica' }
	,{ parameter: 'Micro-cell' }
	,{ parameter: 'Microcystin-LR' }
	,{ parameter: 'Mineral Oils' }
	,{ parameter: 'Mineral Oils and Hydrocarbons' }
	,{ parameter: 'MMMF' }
	,{ parameter: 'MMVF' }
	,{ parameter: 'Molinate' }
	,{ parameter: 'Molybdenum' }
	,{ parameter: 'Monochloramine' }
	,{ parameter: 'Monochloroacetate' }
	,{ parameter: 'Monochloroacetic Acid' }
	,{ parameter: 'Morpholine' }
	,{ parameter: 'MPK' }
	,{ parameter: 'MTBE' }
	,{ parameter: 'N-(1-Ethylpropyl)-3&comma;4-dimethyl-2&comma;6-dinitroaniline' }
	,{ parameter: 'N-(1-Ethylpropyl)-3&comma;4-dimethyl-2&comma;6-dinitrobenzenamine' }
	,{ parameter: 'N&comma;N-Diethylethanamine' }
	,{ parameter: 'N&comma;N-Dimethylacetamide' }
	,{ parameter: 'N&comma;N-Dimethylaniline' }
	,{ parameter: 'N&comma;N-Dimethylbenzenamine' }
	,{ parameter: 'N&comma;N-Dimethylethanamine' }
	,{ parameter: 'N&comma;N-Dimethylethylamine' }
	,{ parameter: 'N&comma;N-Dimethylmethanamide' }
	,{ parameter: 'Naphthalene' }
	,{ parameter: 'n-Butyl Acrylate' }
	,{ parameter: 'n-Butyl Chloroformate' }
	,{ parameter: 'Neopentane' }
	,{ parameter: 'N-ethylethanamine' }
	,{ parameter: 'n-Heptane' }
	,{ parameter: 'n-Hexane' }
	,{ parameter: 'Nickel' }
	,{ parameter: 'Nickel Carbonyl (As Ni)' }
	,{ parameter: 'Nicotine' }
	,{ parameter: 'N-Isopropylpropan-2-amine' }
	,{ parameter: 'Nitrate' }
	,{ parameter: 'Nitric Acid' }
	,{ parameter: 'Nitrilotriacetic Acid' }
	,{ parameter: 'Nitrite' }
	,{ parameter: 'Nitrobenzene' }
	,{ parameter: 'Nitrogen' }
	,{ parameter: 'Nitrogen Dioxide' }
	,{ parameter: 'Nitrogen Oxides' }
	,{ parameter: 'Nitromethane' }
	,{ parameter: '2-Nitropropane' }
	,{ parameter: 'Nitrous Oxide' }
	,{ parameter: 'N-Methylaniline' }
	,{ parameter: 'N-Methylbenzenamine' }
	,{ parameter: 'N-Methylmethanamine' }
	,{ parameter: 'Nonylphenol' }
	,{ parameter: 'N-Phenylaniline' }
	,{ parameter: 'N-Phenylbenzenamine' }
	,{ parameter: 'n-Propyl Acetate' }
	,{ parameter: 'NTA' }
	,{ parameter: 'O&comma;O&comma;O&comma;O-Tetraethyl Dithiopyrophosphate' }
	,{ parameter: 'o-Acetylsalicyclic Acid' }
	,{ parameter: 'Octylphenol' }
	,{ parameter: 'o-Dichlorobenzene' }
	,{ parameter: 'Odour' }
	,{ parameter: 'Oil of Mirbane' }
	,{ parameter: 'Omethoate' }
	,{ parameter: 'o-Phenylenepyrene' }
	,{ parameter: 'Organohalogens' }
	,{ parameter: 'Organophosphorous compounds' }
	,{ parameter: 'Organotin compounds' }
	,{ parameter: 'ortho-Dichlorobenzene' }
	,{ parameter: 'Orthophosphoric Acid' }
	,{ parameter: 'Osmic Acid' }
	,{ parameter: 'Osmium Tetraoxide' }
	,{ parameter: 'Osmium(VIII) Oxide' }
	,{ parameter: 'o-Toluidene' }
	,{ parameter: 'Oxacyclopentane' }
	,{ parameter: '3-Oxaheptanol' }
	,{ parameter: 'Oxalic Acid' }
	,{ parameter: '3-Oxapentane-1&comma;5-diol' }
	,{ parameter: 'Oxidisability' }
	,{ parameter: 'Oxirane' }
	,{ parameter: 'Ozone' }
	,{ parameter: 'p&comma;p&quot;-DDT' }
	,{ parameter: 'PAHs' }
	,{ parameter: 'para&comma;para&quot;-DDT' }
	,{ parameter: 'Paracetamol&comma; Inhalable Dust' }
	,{ parameter: 'para-Dichlorobenzene' }
	,{ parameter: 'Paraffin Wax&comma; Fume' }
	,{ parameter: 'p-Aramid Respirable Fibres' }
	,{ parameter: 'para-Nitrochlorobenzene' }
	,{ parameter: 'Paraquat Dichloride&comma; Respirable Dust' }
	,{ parameter: 'Parathion' }
	,{ parameter: 'Particles' }
	,{ parameter: 'Particles (PM10)' }
	,{ parameter: 'PCBs' }
	,{ parameter: 'PCDDs and PCDFs (Polychlorinated Dibenzodioxins and Dibenzofurans)' }
	,{ parameter: 'p-Chloro-m-cresol' }
	,{ parameter: 'PCSDs' }
	,{ parameter: 'p-Dichlorobenzene' }
	,{ parameter: 'Pendimethalin' }
	,{ parameter: 'penta-BDPE' }
	,{ parameter: 'Pentabromodiphenyl Ether' }
	,{ parameter: 'Pentacarbonyliron (As Fe)' }
	,{ parameter: 'Pentachlorobenzene' }
	,{ parameter: 'Pentachlorophenol' }
	,{ parameter: 'Pentachlorophosphorane' }
	,{ parameter: 'Pentaerythritol' }
	,{ parameter: 'Pentan-2-one' }
	,{ parameter: 'Pentan-3-one' }
	,{ parameter: 'Pentane' }
	,{ parameter: 'Pentane-1&comma;5-dione' }
	,{ parameter: 'Pentyl Acetates (All Isomers)' }
	,{ parameter: 'Perchlorobenzene' }
	,{ parameter: 'Perchlorobutadiene' }
	,{ parameter: 'Perchloroethene' }
	,{ parameter: 'Permethrin' }
	,{ parameter: 'Pesticides - Total' }
	,{ parameter: 'Pesticides (Other Than Aldrin&comma; Dieldrin&comma; Heptachlor&comma; Heptachlor Epoxide)' }
	,{ parameter: 'Petroleum Hydrocarbons' }
	,{ parameter: 'pH' }
	,{ parameter: 'Phenacyl Chloride' }
	,{ parameter: 'Phenol' }
	,{ parameter: 'Phenolic Compounds' }
	,{ parameter: 'Phenols (Phenol Index) Paranitraniline 4-Aminoantipyrene' }
	,{ parameter: 'Phenoxybenzene' }
	,{ parameter: 'Phenyl Alcohol' }
	,{ parameter: 'Phenyl Chloride' }
	,{ parameter: 'Phenylamine' }
	,{ parameter: 'Phenylbenzene' }
	,{ parameter: 'Phenylethene' }
	,{ parameter: '2-Phenylpropane' }
	,{ parameter: '2-Phenylpropene' }
	,{ parameter: 'Phorate' }
	,{ parameter: 'Phosgene' }
	,{ parameter: 'Phosphates' }
	,{ parameter: 'Phosphine' }
	,{ parameter: 'Phosphoric Acid' }
	,{ parameter: 'Phosphoric Anhydride' }
	,{ parameter: 'Phosphoric Trichloride' }
	,{ parameter: 'Phosphorus' }
	,{ parameter: 'Phosphorus (Elemental&comma; and Inorganic Compounds of)' }
	,{ parameter: 'Phosphorus Hydride' }
	,{ parameter: 'Phosphorus Oxychloride' }
	,{ parameter: 'Phosphorus Pentachloride' }
	,{ parameter: 'Phosphorus Pentasulphide' }
	,{ parameter: 'Phosphorus Pentoxide' }
	,{ parameter: 'Phosphorus Trichloride' }
	,{ parameter: 'Phosphorus Trihydride' }
	,{ parameter: 'Phosphorus(III) Chloride' }
	,{ parameter: 'Phosphorus(V) Chloride' }
	,{ parameter: 'Phosphorus(V) Oxide' }
	,{ parameter: 'Phosphorus(V) Sulphide' }
	,{ parameter: 'Phosphoryl Trichloride' }
	,{ parameter: 'Phthalic Anhydride' }
	,{ parameter: 'Picloram' }
	,{ parameter: 'Picric Acid' }
	,{ parameter: 'Piperazine' }
	,{ parameter: 'Piperazine Dihydrochloride' }
	,{ parameter: 'Piperidine' }
	,{ parameter: 'Pirimicarb' }
	,{ parameter: 'Pirimiphos-methyl' }
	,{ parameter: 'Plaster of Paris' }
	,{ parameter: 'Platinum' }
	,{ parameter: 'Platinum Compounds&comma; Soluble (As Pt)' }
	,{ parameter: 'PNCB' }
	,{ parameter: 'Polychlorinated Biphenyls' }
	,{ parameter: 'Polycyclic Aromatic Hydrocarbons' }
	,{ parameter: 'Polyvinyl Chloride' }
	,{ parameter: 'Portland Cement' }
	,{ parameter: 'Potassium Hydroxide' }
	,{ parameter: 'p-Phenylenediamine' }
	,{ parameter: 'Prochloraz' }
	,{ parameter: 'Prop-2-enal' }
	,{ parameter: 'Prop-2-enamide' }
	,{ parameter: 'Prop-2-enenitrile' }
	,{ parameter: 'Prop-2-enol' }
	,{ parameter: 'Prop-2-enyl Alchohol' }
	,{ parameter: 'Prop-2-yn-1-ol' }
	,{ parameter: 'Prop-2-ynyl Alcohol' }
	,{ parameter: 'Propan-1-ol' }
	,{ parameter: 'Propan-2-ol' }
	,{ parameter: 'Propan-2-one' }
	,{ parameter: 'Propane-1&comma;2&comma;3-triol' }
	,{ parameter: 'Propane-1&comma;2-diol' }
	,{ parameter: 'Propanoic Acid' }
	,{ parameter: 'Propanol' }
	,{ parameter: 'Propargyl Alcohol' }
	,{ parameter: 'Propetamphos' }
	,{ parameter: 'Propionic Acid' }
	,{ parameter: 'Propoxur' }
	,{ parameter: 'Propranolol' }
	,{ parameter: 'Propyl Acetate' }
	,{ parameter: 'Propyl Alcohol' }
	,{ parameter: 'Propylene Dichloride' }
	,{ parameter: 'Propylene Glycol' }
	,{ parameter: 'Propylene Glycol Monomethyl Ether' }
	,{ parameter: 'Propylene Glycol Monomethyl Ether Acetate' }
	,{ parameter: 'Propylene Oxide' }
	,{ parameter: 'Propyzamide' }
	,{ parameter: 'Pseudomonas aeruginosa' }
	,{ parameter: 'p-Toluenesulphonyl Chloride' }
	,{ parameter: 'Pulverised Fuel Ash' }
	,{ parameter: 'PVC' }
	,{ parameter: 'Pyrethrum' }
	,{ parameter: 'Pyridin-2-amine' }
	,{ parameter: 'Pyridine' }
	,{ parameter: '2-Pyridylamine' }
	,{ parameter: 'Pyriproxyfen' }
	,{ parameter: 'Pyrocatechol' }
	,{ parameter: 'Quicklime' }
	,{ parameter: 'R-114' }
	,{ parameter: 'R-134a' }
	,{ parameter: 'R-21' }
	,{ parameter: 'R-22' }
	,{ parameter: 'R-30' }
	,{ parameter: 'R-40' }
	,{ parameter: 'Radon' }
	,{ parameter: 'Refractory Ceramic Fibres and Special Purpose Fibres' }
	,{ parameter: 'Residual Organic Carbon' }
	,{ parameter: 'Resorcinol' }
	,{ parameter: 'Rhodium (As Rh)' }
	,{ parameter: 'Ronnel' }
	,{ parameter: 'Rontenone' }
	,{ parameter: 'Rosin-Based Solder Flux Fume' }
	,{ parameter: 'Rouge' }
	,{ parameter: 'Rubber Fume' }
	,{ parameter: 'Rubber Process Dust' }
	,{ parameter: 'Saccharose' }
	,{ parameter: 'Salinity' }
	,{ parameter: 'Salmonella' }
	,{ parameter: 'Saxitoxin' }
	,{ parameter: '2-sec-Butylphenol' }
	,{ parameter: 'sec-Butyl Acetate' }
	,{ parameter: 'sec-Butyl Alcohol' }
	,{ parameter: 'sec-Butyl Ethyl Ketone' }
	,{ parameter: 'Selenium' }
	,{ parameter: 'Silane' }
	,{ parameter: 'Silene' }
	,{ parameter: 'Silica&comma; Amorphous' }
	,{ parameter: 'Silica&comma; Fused Respirable Dust' }
	,{ parameter: 'Silica&comma; Respirable Crystalline' }
	,{ parameter: 'Silicon' }
	,{ parameter: 'Silicon (Organic Compounds of)' }
	,{ parameter: 'Silicon Carbide (Not Whiskers)' }
	,{ parameter: 'Silicon Dioxide&comma; Amorphous' }
	,{ parameter: 'Silicon Dioxide&comma; Fused Respirable Dust' }
	,{ parameter: 'Silicon Dioxide&comma; Respirable Crystalline' }
	,{ parameter: 'Silicon Hydride' }
	,{ parameter: 'Silicon Tetrahydride' }
	,{ parameter: 'Silver' }
	,{ parameter: 'Silver Compounds&comma; Soluble (As Ag)' }
	,{ parameter: 'Silvex' }
	,{ parameter: 'Simazine' }
	,{ parameter: 'Slaked Lime' }
	,{ parameter: 'Sodium' }
	,{ parameter: 'Sodium 2-(2&comma;4-Dichlorophenoxy)ethyl Sulphate' }
	,{ parameter: 'Sodium Azide' }
	,{ parameter: 'Sodium Bisulphite' }
	,{ parameter: 'Sodium Hydrogen Sulphite' }
	,{ parameter: 'Sodium Hydroxide' }
	,{ parameter: 'Sodium Metabisulphite' }
	,{ parameter: 'Softwood Dust' }
	,{ parameter: 'Starch' }
	,{ parameter: 'Styrene' }
	,{ parameter: 'Substances Affecting the Taste of the Shellfish' }
	,{ parameter: 'Substances Extractable with Chloroform' }
	,{ parameter: 'Substances Possessing Carcinogenic&comma; Mutagenic or Teratogenic Properties in or via the Aquatic Environment' }
	,{ parameter: 'Subtilisins' }
	,{ parameter: 'Sucrose' }
	,{ parameter: 'Sulcofuron' }
	,{ parameter: 'Sulfanylacetic Acid' }
	,{ parameter: 'Sulfotep' }
	,{ parameter: 'Sulphate' }
	,{ parameter: 'Sulphinyl Chloride' }
	,{ parameter: 'Sulphur Dioxide' }
	,{ parameter: 'Sulphur Hexafluoride' }
	,{ parameter: 'Sulphur Monochloride' }
	,{ parameter: 'Sulphur Oxychloride' }
	,{ parameter: 'Sulphuric Oxyfluoride' }
	,{ parameter: 'Sulphuryl Difluoride' }
	,{ parameter: 'Surface-Active Substances Reacting with Methylene Blue (Lauryl Sulphate)' }
	,{ parameter: 'Suspended Solids' }
	,{ parameter: '2&comma;4&comma;5-T' }
	,{ parameter: 'Talc&comma; Respirable Dust' }
	,{ parameter: 'Tantalum' }
	,{ parameter: 'Tarry Residues and Floating Materials' }
	,{ parameter: 'Taste' }
	,{ parameter: '2&comma;4&comma;6-TCP' }
	,{ parameter: 'TEA' }
	,{ parameter: 'Tecnazene' }
	,{ parameter: 'TEDP' }
	,{ parameter: 'Tellurium' }
	,{ parameter: 'Tellurium' }
	,{ parameter: 'Temperature' }
	,{ parameter: 'Terbuthylazine' }
	,{ parameter: 'Terphenyls' }
	,{ parameter: 'tert-Butyl Acetate' }
	,{ parameter: 'tert-Butyl Alcohol' }
	,{ parameter: 'tert-Butyl Methyl Ether' }
	,{ parameter: '1&comma;1&comma;2&comma;2-Tetrabromoethane' }
	,{ parameter: 'Tetracarbonylnickel (As Ni)' }
	,{ parameter: 'Tetracarbonylnickel(0) (As Ni)' }
	,{ parameter: '1&comma;2&comma;4&comma;5-Tetrachloro-3-nitrobenzene' }
	,{ parameter: '2&comma;4&comma;5&comma;6-Tetrachlorobenzene-1&comma;3-dicarbonitrile' }
	,{ parameter: 'Tetrachloroethene' }
	,{ parameter: 'Tetrachloromethane' }
	,{ parameter: '1&comma;1&comma;1&comma;2-Tetrafluoroethane' }
	,{ parameter: 'Tetrahydro-1&comma;4-dioxin' }
	,{ parameter: 'Tetrahydro-2H-1&comma;4-oxazine' }
	,{ parameter: 'Tetrahydrofuran' }
	,{ parameter: 'Tetrasodium Pyrophosphate' }
	,{ parameter: 'TGIC' }
	,{ parameter: 'Thallium' }
	,{ parameter: 'THF' }
	,{ parameter: 'Thiabendazole' }
	,{ parameter: 'Thioglycolic Acid' }
	,{ parameter: 'Thionyl Chloride' }
	,{ parameter: 'Thiosulfan' }
	,{ parameter: 'Tin' }
	,{ parameter: 'Tin Compounds&comma; Inorganic' }
	,{ parameter: 'Titanium' }
	,{ parameter: 'Titanium Dioxide' }
	,{ parameter: 'Titanium(IV) Oxide' }
	,{ parameter: 'TNT' }
	,{ parameter: 'TOC' }
	,{ parameter: 'Toluene' }
	,{ parameter: 'Tolyl Chloride' }
	,{ parameter: '2-Tolylamine' }
	,{ parameter: 'Tosyl Chloride' }
	,{ parameter: 'Total Indicative Dose (for Radioactivity)' }
	,{ parameter: 'Total Organic Carbon' }
	,{ parameter: '2&comma;4&comma;5-TP' }
	,{ parameter: 'TPP' }
	,{ parameter: 'Transparency' }
	,{ parameter: 'Tri-2-tolyl Phosphate' }
	,{ parameter: 'Triallate' }
	,{ parameter: 'Triazophos' }
	,{ parameter: 'Tribromoborane' }
	,{ parameter: 'Tribromomethane' }
	,{ parameter: 'Tributyl Phosphate' }
	,{ parameter: 'Tributyltin' }
	,{ parameter: 'Tributyltin Compounds' }
	,{ parameter: '1&comma;1&comma;1-Trichloro-2&comma;2-bis(4-chlorophenyl)ethane' }
	,{ parameter: '1&comma;1&comma;1-Trichloro-2&comma;2-bis(chlorophenyl)ethane' }
	,{ parameter: 'Trichloroacetaldehyde Monohydrate' }
	,{ parameter: 'Trichloroacetate' }
	,{ parameter: '1&comma;2&comma;4-Trichlorobenzene' }
	,{ parameter: 'Trichlorobenzene' }
	,{ parameter: '1&comma;1&comma;1-Trichloroethane' }
	,{ parameter: '1&comma;1&comma;2-Trichloroethane' }
	,{ parameter: '2&comma;2&comma;2-Trichloroethane-1&comma;1-diol' }
	,{ parameter: '1&comma;1&comma;2-Trichloroethene' }
	,{ parameter: 'Trichloroethene' }
	,{ parameter: 'Trichloroethylene' }
	,{ parameter: 'Trichloromethane' }
	,{ parameter: 'Trichloronitromethane' }
	,{ parameter: '2&comma;4&comma;6-Trichlorophenol' }
	,{ parameter: '2&comma;4&comma;5-Trichlorophenoxyacetic Acid' }
	,{ parameter: 'Trichlorophosphine' }
	,{ parameter: 'Triethylamine' }
	,{ parameter: 'Trifluralin' }
	,{ parameter: 'Triglycidyl Isocyanurate' }
	,{ parameter: 'Trihalomethanes' }
	,{ parameter: 'Triiodomethane' }
	,{ parameter: 'Trimellitic Anhydride' }
	,{ parameter: 'Trimethyl Phosphite' }
	,{ parameter: 'Trimethylbenzenes' }
	,{ parameter: '3&comma;5&comma;5-Trimethylcyclohex-2-enone' }
	,{ parameter: '2&comma;4&comma;6-Trinitrophenol' }
	,{ parameter: '2&comma;4&comma;6-Trinitrotoluene' }
	,{ parameter: 'Tri-o-tolyl Phosphate' }
	,{ parameter: 'Triphenyl Phosphate' }
	,{ parameter: 'Triphenyltin and Its Derivatives' }
	,{ parameter: 'Tris(2-methylphenyl) Phosphate' }
	,{ parameter: 'Tritium' }
	,{ parameter: 'TSPP' }
	,{ parameter: 'Tungsten and Its Compounds (As W)' }
	,{ parameter: 'Turbidity' }
	,{ parameter: 'Turpentine' }
	,{ parameter: 'Uranium' }
	,{ parameter: 'Vanadium' }
	,{ parameter: 'Vanadium Pentoxide' }
	,{ parameter: 'Vanadium(V) Oxide' }
	,{ parameter: 'Vinyl Chloride' }
	,{ parameter: 'Vinyl Cyanide' }
	,{ parameter: 'Vinylbenzene' }
	,{ parameter: 'Vinylidene Chloride' }
	,{ parameter: 'Wool Process Dust' }
	,{ parameter: 'Xylenes' }
	,{ parameter: 'Yttrium' }
	,{ parameter: 'Zinc' }
	,{ parameter: 'Zinc Chloride&comma; Fume' }
	,{ parameter: 'Zinc Distearate' }
	,{ parameter: 'Zinc Stearate' }
	,{ parameter: 'Zinc(II) Octadecanoate' }
	];
	
	var parameterList = new List('parameter-list', options, values);