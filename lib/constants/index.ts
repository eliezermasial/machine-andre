export const images = [
    {
        src: "/tracteur.jpg",
        alt: "Tracteur agricole",
        className: "col-span-2 row-span-2",
    },
    {
        src: "/tractor2.jpg",
        alt: "Mini tracteur agricole",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/tractor3.jpg",
        alt: "Équipement agricole",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/tractor4.jpg",
        alt: "Matériel agricole",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/tractor5.jpg",
        alt: "Machine agricole",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/tractor2.jpg",
        alt: "Pulvérisateur agricole",
        className: "col-span-2 row-span-1",
    },
    {
        src: "/tractor1.jpg",
        alt: "Équipement agricole",
        className: "col-span-2 row-span-1",
    },
] as const;

export const machines = [
    {name: "Tracteurs", alt: "Tracteurs", src: "/tractor1.jpg"},
    {name: "Mini Tracteurs", alt: "Mini Tracteurs", src: "/mini-tracteur.jpg"},
    {name: "Motoculteur", alt: "Motoculteur", src: "/motoculteur.jpg"},
    {name: "outils agricoles", alt: "outils agricoles", src: "/tractor4.jpg"}
] as const;


export const advantages = [
    "years-of-experience",
    "Latest-generation",
    "Specialised",
    "Personalised-attention",
    "Top-quality"
] as const;

export const services = [
    {name: "Machinery-sales", descr: "service-sales"},
    {name: "Repair-maintenance", descr: "service-Repair"},
    {name: "Machinery-rental", descr: "service-rental"},
    {name: "Seeds-fertilisers", descr: "service-seeds"},
    {name:"Tools-accessories", descr: "service-Tools"},
    {name:"Land-preparation", descr: "service-Land"},
] as const;
