export const config = {
    style: 'mapbox://styles/leeallennyc/ckn52lqss05su17qvm52zb2wi',
    accessToken: 'pk.eyJ1IjoibGVlYWxsZW5ueWMiLCJhIjoiY2tua29iNnY3MDhzMDJ2cXZsOXcxYm16ZyJ9.7aoH1zArV6cyV_CSsw693A',
    showMarkers: false,
    theme: 'dark',
    footer: 'U.S. REGIONAL HOTSPOTS',
    chapters: [
        {
            id: 'AI-Patents',
            alignment: 'left',
            title: 'Signals From the Future',
            description: 'Visualizes AI-related patent filings by region in the United States between 2016-2020. I explore this AI landscape through U.S. census data and approximately 2,300 patents containing the words “machine learning” in the abstract. This research provides a tool for curious individuals who are interested in learning about where trends are headed in AI, for commercialization offices within research institutes, who may want to partner with companies who are setting up AI labs nearest them, or to policy makers, who may be searching for a clearer picture into AI patent filings in relation to their communities.', 
            image: 'https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2Fcolor_legend-01.png?v=1619203727208',
            location: {
                center: [-98.32890, 36.42151],
                zoom: 4.5,
                pitch: 40,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'leeallennyc-1p1v73ei',
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
            id: 'Dartmouth',
            alignment: 'right',
            title: 'Dartmouth College, NH',
            image: 'https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2F1956_NH-01.png?v=1620335051895',
            description: 'The term "Artificial Intelligence" was coined during a 1956 Dartmouth Summer Research Project at Dartmouth College. Since that time over 340,000 AI-related inventions and 1.6 million AI-related scientific papers have been published, according to the World Intellectual Property Organization (WIPO). Machine learning, a technique in AI is found in 40% of all AI-related patents.', 
            location: {
                center: [-70.288692,  43.704440],
                zoom: 5.75,
                pitch: 40.00,
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
            id: 'History',
            alignment: 'centered',
            title: '',
            image: 'https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FAI_History-01.png?v=1619199240199',
            description: '', 
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
            id: 'ML-patents',
            alignment: 'fully',
            title: 'Machine Learning',
            image: 'https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FML_Sample_2016-2020.png?v=1619189991816',
            description: 'Patent abstract sample containing "Machine Learning" 2016-2020 Data | USPTO', 
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
            id: 'Clusters',
            alignment: 'fully',
            title: '',
            image: 'https://cdn.glitch.com/10616458-a71b-4fd2-8ee0-fc4bccd7a4fd%2FCOUNTY_REGIONS.png?v=1620156072460',
            description: '', 
            location: {
                center: [-122.32890, 38.42151],
                zoom: 6,
                pitch: 40,
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
    ]
};

