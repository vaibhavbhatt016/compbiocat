import electricFieldImg from '../assets/electric_field.png';
import enzymaticCatalysisImg from '../assets/enzymatic_catalysis.png';
import enzCat1Img from '../assets/enz_cat1.png';
import strBioImg from '../assets/str_bio1.png';

export const projects = [
    {
        id: "computational-structure-biology",
        title: "Computational Structure Biology",
        description: "We investigate how protein structure, dynamics, and molecular interactions govern biological function through advanced simulations and computational biophysics.",
        image: strBioImg,
        fullDescription: `
# Computational Structure Biology

We investigate how protein structure, dynamics, and molecular interactions govern biological function. Using molecular dynamics simulations, structural analysis, enhanced-sampling approaches, and computational biophysics, we characterize conformational ensembles, domain motions, residue communication, ligand and nucleic-acid recognition, and changes induced by mutations. Particular emphasis is placed on identifying dynamic networks and structurally important residues that regulate activity, specificity, stability, and molecular recognition.

**Core Themes:** Protein dynamics • Molecular recognition • Conformational landscapes • Mutation effects • Protein–ligand, protein–RNA and protein–DNA interactions • Allostery • Structure–function relationships

## Key Focus Areas

- **Conformational Ensembles & Domain Motions:** Characterizing dynamic states and structural flexibility across biomolecular systems.
- **Residue Communication & Dynamic Networks:** Uncovering allosteric signal transmission and internal network pathways that regulate protein function.
- **Ligand & Nucleic-Acid Recognition:** Unraveling the molecular biophysics driving binding specificity, affinity, and molecular recognition.
- **Mutational Perturbations:** Assessing structural, dynamic, and functional changes induced by disease-associated or engineered mutations.
- **Functional Regulation:** Identifying key structurally important residues and dynamic networks that govern activity, specificity, and stability.
        `
    },

    {
        id: "electric-field-calculations",
        title: "Electric Field Calculations",
        description: "We investigate the role of electrostatic environments and local electric fields in controlling molecular structure and chemical reactivity.",
        image: electricFieldImg,
        fullDescription: `
# Electric Field Calculations

We investigate the role of electrostatic environments and local electric fields in controlling molecular structure and chemical reactivity. Computational electric-field analysis is used to characterize the electrostatic environment experienced by substrates, cofactors, catalytic residues, and reaction intermediates within enzyme active sites. By connecting protein-generated electric fields with molecular properties and reaction energetics, we seek to understand how enzymes preorganize their active sites and stabilize specific chemical states, providing a physical basis for catalytic efficiency and selectivity.

**Core Themes:** Local electric fields • Electrostatic preorganization • Active-site electrostatics • Protein–substrate interactions • Reaction energetics • Catalytic selectivity

## Key Focus Areas

- **Active-Site Electrostatics:** Characterizing the local electric field environment experienced by substrates, cofactors, and catalytic residues.
- **Electrostatic Preorganization:** Uncovering how protein environments stabilize specific transition states and chemical intermediates.
- **Reaction Energetics:** Linking protein-generated fields directly with molecular properties and chemical reaction barriers.
- **Catalytic Efficiency & Selectivity:** Providing a fundamental physical basis for enzyme acceleration and reaction specificity.
        `
    },
    {
        id: "de-novo-enzyme-design",
        title: "De Novo Enzyme Design and Engineering",
        description: "We use computational principles of protein structure, energetics, and catalysis to design and engineer enzymes with tailored properties.",
        fullDescription: `
# De Novo Enzyme Design and Engineering

We use computational principles of protein structure, energetics, and catalysis to design and engineer enzymes with tailored properties. Our approach combines structural modelling, molecular simulation, sequence and residue analysis, and mechanistic insight to identify active-site architectures and mutations capable of modifying enzyme stability, substrate recognition, specificity, and catalytic activity. The ultimate goal is to move beyond understanding naturally occurring enzymes toward the rational creation and redesign of catalytic function.

**Core Themes:** De novo enzyme design • Rational protein engineering • Active-site redesign • Mutational analysis • Substrate specificity • Enzyme stability • Computationally guided engineering

## Key Focus Areas

- **Active-Site Architecture Redesign:** Designing spatial positions of catalytic residues to foster novel chemical transformations.
- **Rational Protein Engineering:** Modifying enzyme backbones and active pockets for enhanced stability and activity.
- **Substrate Specificity & Recognition:** Tailoring binding pockets for custom substrates, ligands, and target molecules.
- **Mutational Analysis:** Identifying critical mutations that modulate catalytic efficiency, turnover, and structural stability.
        `
    },
    {
        id: "enzymatic-catalysis",
        title: "Enzymatic Catalysis",
        description: "We investigate how enzymes accelerate chemical reactions at the molecular and electronic levels through QM/MM calculations and quantum chemistry.",
        image: enzCat1Img,
        images: [enzCat1Img, enzymaticCatalysisImg],
        fullDescription: `
# Enzymatic Catalysis

We investigate how enzymes accelerate chemical reactions at the molecular and electronic levels. Our work combines molecular dynamics, quantum chemistry, and QM/MM calculations to elucidate reaction mechanisms, identify intermediates and transition states, characterize proton/electron-transfer events, and determine the energetic factors governing catalytic pathways. Particular interest lies in metalloenzymes and complex redox chemistry, including cytochrome P450 systems, where spin states, metal–oxygen intermediates, substrate activation, hydrogen-atom transfer, and proton-coupled electron transfer can determine the course of catalysis.

**Core Themes:** Reaction mechanisms • QM/MM simulations • Transition states • Reaction energetics • Proton/electron transfer • Metalloenzymes • Cytochrome P450 • Redox chemistry • Unspecified Peroxygenases

## Key Focus Areas

- **Reaction Mechanisms & Energetics:** Mapping energy landscapes and identifying reactive intermediates and transition states.
- **Metalloenzymes & Redox Chemistry:** Unraveling catalytic cycles, spin state dynamics, and metal–oxygen intermediate states.
- **Cytochrome P450 & Peroxygenases:** Deciphering hydrogen-atom transfer, substrate activation, and oxygenation pathways.
- **Charge Transfer Processes:** Characterizing proton transfer, electron transfer, and proton-coupled electron transfer (PCET) events.
        `
    }
];


