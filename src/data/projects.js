import electricFieldImg from '../assets/electric_field.png';
import enzymaticCatalysisImg from '../assets/enzymatic_catalysis.png';
import enzCat1Img from '../assets/enz_cat1.png';
import strBioImg from '../assets/str_bio1.png';

export const projects = [
    {
        id: "reaction-dynamics-and-mechanism",
        title: "Reaction Dynamics and Mechanism",
        description: "We investigate the molecular pathways and dynamic processes underlying enzymatic reactions, with particular emphasis on Cytochrome P450s and metalloenzymes controlling chemical reactivity at the atomic and electronic levels.",
        fullDescription: `
# Reaction Dynamics and Mechanism

We investigate the molecular pathways and dynamic processes underlying enzymatic reactions, with particular emphasis on understanding how enzymes control chemical reactivity at the atomic and electronic levels. A primary focus of our research is on the Cytochrome P450 superfamily and related metalloenzymes, renowned for their remarkable ability to mediate selective C–H activation, oxygen transfer, and complex oxidative transformations. Using quantum chemistry, QM/MM calculations, molecular dynamics, and free-energy methods, we characterize reaction intermediates, transition states, competing pathways, and the complex energetic landscapes connecting them.

Our research deciphers catalytic cycles involving Compound I and Compound II reactive intermediates, hydrogen-atom transfer (HAT), proton-coupled electron transfer (PCET), metal–oxygen chemistry, and multi-state spin reactivity. By integrating structural dynamics with electronic-structure calculations, we examine how fluctuations in the protein matrix, heme active-site architecture, electrostatics, axial ligation, and solvent organization influence reaction branching and catalytic outcomes.

The objective is to establish the fundamental molecular principles that govern reaction pathways in Cytochrome P450s and other enzymes, determining why particular chemical mechanisms are favoured within biological environments and providing mechanistic insight for biocatalyst engineering.

**Core Themes:** Cytochrome P450 mechanisms • Reaction pathways • QM/MM simulations • Transition states & intermediates • Compound I / Compound II • Hydrogen-atom transfer (HAT) • Spin-state dynamics • Proton-coupled electron transfer (PCET)

## Key Focus Areas

- **Cytochrome P450 Catalytic Cycles:** Deciphering oxygen activation, reactive Compound I/II intermediates, and multi-state reactivity across heme systems.
- **Reaction Pathways & Transition States:** Characterizing transition states, reactive intermediates, and competing reaction pathways on free-energy landscapes.
- **C–H Activation & Radical Chemistry:** Investigating hydrogen-atom transfer (HAT), radical rebound, and proton-coupled electron transfer (PCET) events.
- **Spin-State & Electronic Dynamics:** Unraveling high-spin vs. low-spin state energetics, open-shell intermediates, and electronic modulation by axial ligands.
- **Active-Site & Environmental Modulation:** Evaluating how protein fluctuations, active-site electrostatics, and solvent modulate reaction pathways and selectivity.
        `
    },

    {
        id: "enzymatic-catalysis",
        title: "Enzymatic Catalysis",
        description: "We investigate how enzymes accelerate, control, and direct chemical transformations through the precise organization of their active sites and surrounding molecular environment.",
        image: enzCat1Img,
        images: [enzCat1Img, enzymaticCatalysisImg],
        fullDescription: `
# Enzymatic Catalysis

We investigate how enzymes accelerate, control, and direct chemical transformations through the precise organization of their active sites and surrounding molecular environment. Our research explores how catalytic residues, cofactors, substrates, solvent molecules, and the protein matrix work together to create the conditions required for efficient and selective chemistry.

Using computational approaches spanning molecular simulations, quantum chemistry, and multiscale modelling, we examine the physical principles underlying substrate activation, catalytic residue function, cofactor reactivity, proton and electron management, and active-site organization. Particular emphasis is placed on understanding how protein architecture and dynamics couple to chemical reactivity and how changes in the catalytic environment can alter enzyme activity and specificity.

Our goal is to uncover the fundamental principles by which enzymes achieve remarkable catalytic efficiency and selectivity, providing mechanistic insight that can ultimately guide the rational engineering of improved catalysts.

**Core Themes:** Catalytic efficiency • Active-site organization • Substrate activation • Cofactor reactivity • Multiscale modelling • Structure–reactivity coupling • Enzyme specificity

## Key Focus Areas

- **Active-Site Organization & Preorganization:** Exploring how catalytic residues, cofactors, and solvent molecules assemble to achieve optimal catalysis.
- **Substrate Activation & Cofactor Function:** Deciphering the physical mechanisms governing cofactor reactivity and substrate activation.
- **Structure-Reactivity Coupling:** Understanding how protein dynamics and architecture modulate chemical rates and catalytic selectivity.
- **Catalytic Optimization & Engineering Insights:** Establishing mechanistic principles that guide the rational design and engineering of improved enzymes.
        `
    },

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
    }
];


