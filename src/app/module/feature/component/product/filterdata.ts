export const filters =[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white",label:'white'},
            {value:"beige",label:'beige'},
            {value:"blue",label:'blue'},
            {value:"brown",label:'brown'},
            {value:"green",label:'green'},
            {value:"yellow",label:'yellow'},
            {value:"purple",label:'purple'},
            {value:"black",label:'black'},
            {value:"pink",label:'pink'}
        ]

    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:'S'},
            {value:"M",label:'M'},
            {value:"L",label:'L'},
            {value:"XL",label:'XL'},
            {value:"XXL",label:'XXl'},
            
        ]

    }
]
export const singlefilters = [
    {
        id: "price",
        name: "Price Range",
        options: [
            { value: "0-100", label: "Under 100" },
            { value: "100-200", label: "$100-200" },
            { value: "200-300", label: "$200-300" },
            { value: "300-600", label: "$300-600" },
            { value: "600-1000", label: "$600-1000" },
            { value: "1000-200000", label: "Over $1000+" }
        ]
    },
    {
        id: "discount",
        name: "Discount",
        options: [
            { value: "10", label: "10%  and above" },
            { value: "20", label: "20%  and above" },
            { value: "30", label: "30%  and above" },
            { value: "40", label:"40% and above" },
            { value: "50", label: "50%  and above" },
            { value: "60", label: "60%  and above" },
            { value: "70", label: "70%  and above" },
            { value: "80", label:"80% and above" }
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "inStock", label: "In Stock" },
            { value: "outOfStock", label: "Out of Stock" },
            { value: "preOrder", label: "Pre-order" }
        ]
    }
];
