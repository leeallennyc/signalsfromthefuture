export const config = {
    style: 'mapbox://styles/leeallennyc/ckn52lqss05su17qvm52zb2wi',
    accessToken: 'pk.eyJ1IjoibGVlYWxsZW5ueWMiLCJhIjoiY2tua29iNnY3MDhzMDJ2cXZsOXcxYm16ZyJ9.7aoH1zArV6cyV_CSsw693A',
    showMarkers: false,
    theme: 'dark',
    footer: 'footer',
    chapters: [
        {
            id: 'U.S. Patents',
            alignment: 'left',
            title: 'All U.S.',
            image: '../assets/logo.png',
            description: 'In 2019, 2.7 million patent applications were filed at the IP5 Offices and together the IP5 Offices granted 1.6 million patents.', 
            location: {
                center: [-125.32462, 38.59684],
                zoom: 3.03,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }, 
                // {
                //     layer: 'leeallennyc-1p1v73ei',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'West Coast',
            alignment: 'right',
            title: 'West Coast',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-113.26320, 40.50439],
                zoom: 4.25,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'California',
            alignment: 'right',
            title: 'California',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-113.97253, 37.74377],
                zoom: 5.21,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Palo Alto',
            alignment: 'right',
            title: 'Palo Alto',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-121.32126, 37.48246],
                zoom: 8.28,
                pitch: 52.00,
                bearing: 9.60
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Stanford',
            alignment: 'right',
            title: 'Stanford',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-122.16851, 37.42612],
                zoom: 14.41,
                pitch: 52.00,
                bearing: 9.60
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Central U.S.',
            alignment: 'right',
            title: 'Central',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-112.32890, 37.42151],
                zoom: 5.56,
                pitch: 60.00,
                bearing: -1.40
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Central U.S. 2',
            alignment: 'right',
            title: 'Central 2',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-98.77829, 38.14120],
                zoom: 4.77,
                pitch: 60.00,
                bearing: -1.40
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'East and South',
            alignment: 'right',
            title: 'East and South',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-82.87281, 33.07152],
                zoom: 5.33,
                pitch: 44.50,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'East Coast',
            alignment: 'right',
            title: 'East Coast',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-72.27751, 40.71237],
                zoom: 5.51,
                pitch: 60.00,
                bearing: 13.60
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Cambridge, MA',
            alignment: 'right',
            title: 'Cambridge, MA',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-71.07969, 42.35707],
                zoom: 8.56,
                pitch: 58.50,
                bearing: -0.03
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }, 
                // {
                //     layer: 'leeallennyc-1p1v73ei',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'NY, NY',
            alignment: 'right',
            title: 'New York, NY',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-72.98474, 40.56683],
                zoom: 7.83,
                pitch: 51.00,
                bearing: 21.89
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }, 
                // {
                //     layer: 'leeallennyc-1p1v73ei',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Baltimore, MD',
            alignment: 'right',
            title: 'Baltimore',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-75.70624, 39.18171],
                zoom: 7.38,
                pitch: 34.00,
                bearing: 0.03
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }, 
                // {
                //     layer: 'leeallennyc-1p1v73ei',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Baltimore Close up',
            alignment: 'right',
            title: 'test1',
            image: 'images/manhattan_test_2.png',
            description: 'MORE PATENTS', 
            location: {
                center: [-77.04516, 38.88927],
                zoom: 11.59,
                pitch: 34.00,
                bearing: 0.03
            },
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 0
                // }, 
                // {
                //     layer: 'leeallennyc-1p1v73ei',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
            ]
        }
    ]
};

