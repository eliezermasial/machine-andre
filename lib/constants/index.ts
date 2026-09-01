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
        alt: "Agricol Équipement",
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
        src: "/tractor6.jpg",
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
    {name: "tractors", alt: "tractor-descr", src: "/tractor1.jpg"},
    {name: "mini-tractors", alt: "Mini-tractors-descr", src: "/mini-tracteur.jpg"},
    {name: "trillers", alt: "trillers-descr", src: "/motoculteur.jpg"},
    {name: "Agricultural-implements", alt: "Agricultural-descr", src: "/tractor4.jpg"}
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

export const products = [
    {name: "semillas", alt: "semillas", src: "/semillas.jpg"},
    {name: "fertilizantes", alt: "fertilizantes", src: "/graine.jpg"},
    {name: "abonos", alt: "abonos", src: "/abonos.jpg"},
    {name: "bioestimulantes", alt: "bioestimulantes", src: "/bioestimulantes.jpg"}
] as const;

export const arraySelectedOption = [
    "Select enquiry type",
    "Buy machinery",
    "Rental",
    "Repair",
    "Land preparation",
    "Agricultural products",
    "Financing",
    "Other"
] as const;

export const HowItWorks = [
    {
        title: "Tell us what you need",
        desc: "Specify the type of machinery, service or product you're looking for."
    },
    {
        title: "We advise you",
        desc: "Our team reviews your case and suggests the best option.",
    },
    {
        title: "Receive your quote",
        desc: "We send you a clear proposal tailored to your farm."
    }
] as const;