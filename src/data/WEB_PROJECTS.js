const WEB_PROJECTS = [
    {
        projectID: 'THC',
        projectCardData: {
            path: '#',
            cardImage: ['./images/napo-thc-web-image.png', 'Web en tablet sobre sofa'],
            titleSnippet: 'Web para',
            clientInfo: ['The Hiking Club', 'https://napetico.github.io/the-hiking-club/'],
            clientImage: ['https://napetico.github.io/the-hiking-club/media/club-logo.png', 'The Hiking Club Logo'],
            workCategory: 'Club de Senderismo',
            featTag: [true, 'black', 'made with code']
        },
        homeCardData: {
            cardImage: ['', ''],
            cardInfo:'',
            cardTitle: '',
            pageLink: '#',
            clientInfo: [false, '', ''],
            clientImage: ['', ''],
            featTag: [false, '', '']
        }
    },
    {
        projectID: 'OL',
        projectCardData: {
            path: '#',
            cardImage: ['./images/napo-ol-web-image.png', 'Web en tablet sobre sofa'],
            titleSnippet: 'Web para',
            clientInfo: ['Olearn.eu', 'https://olearn.webflow.io/'],
            clientImage: ['https://uploads-ssl.webflow.com/645ac9a45ae22711e88cbad7/645b93948e93274d69a07db6_olearn-logo-circle-instagram.svg', 'Olearn Logo'],
            workCategory: 'Escuela de Español',
            featTag: [false, '', '']
        },
        homeCardData: {
            cardImage: ['', ''],
            cardInfo:'',
            cardTitle: '',
            pageLink: '#',
            clientInfo: [false, '', ''],
            clientImage: ['', ''],
            featTag: [false, '', '']
        }
    },
    {
        projectID: 'BL',
        projectCardData: {
            path: '#',
            cardImage: ['./images/napo-bl-web-image.png', 'Web en tablet sobre sofa'],
            titleSnippet: 'Web + CMS para',
            clientInfo: ['Biting Lemons', 'https://bitinglemons.webflow.io/'],
            clientImage: ['./images/TEST-bl-client-image.png', 'Biting Lemons Logo'],
            workCategory: 'Productora de Documentales',
            featTag: [false, '', '']
        },
        homeCardData: {
            cardImage: ['', ''],
            cardInfo:'',
            cardTitle: '',
            pageLink: '#',
            clientInfo: [false, '', ''],
            clientImage: ['', ''],
            featTag: [false, '', '']
        }
    },
    {
        projectID: 'NK',
        projectCardData: {
            path: '#',
            cardImage: ['./images/napo-wireframes-nukka.png', 'Diseño web mockup'],
            titleSnippet: 'Wireframes para',
            clientInfo: ['Nukka', 'https://thenukka.com/'],
            clientImage: ['data:image/png;base64,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', 'Biting Lemons Logo'],
            workCategory: 'Startup - Tienda Online',
            featTag: [false, '', '']
        },
        homeCardData: {
            cardImage: ['', ''],
            cardInfo:'',
            cardTitle: '',
            pageLink: '#',
            clientInfo: [false, '', ''],
            clientImage: ['', ''],
            featTag: [false, '', '']
        }
    },
    {
        projectID: 'LH',
        projectCardData: {
            path: '#',
            cardImage: ['./images/napo-lh-web-image.png', 'Diseño Web'],
            titleSnippet: 'Web para',
            clientInfo: ['Lahdo Renovations', 'https://lahdo.webflow.io/'],
            clientImage: ['https://media.licdn.com/dms/image/D4D03AQHez5WhAOswfQ/profile-displayphoto-shrink_800_800/0/1669851094690?e=2147483647&v=beta&t=FG0k0UyTs2vF97jGwCHdDc6XPs4Pu8022h_e0hY_O6k', 'Lahdo Renovation Logo'],
            workCategory: 'Construcción y Reformas',
            featTag: [false, '', '']
        },
        homeCardData: {
            cardImage: ['', ''],
            cardInfo:'',
            cardTitle: '',
            pageLink: '#',
            clientInfo: [false, '', ''],
            clientImage: ['', ''],
            featTag: [false, '', '']
        }
    },
    {
        projectID: 'SV',
        projectCardData: {
            path: '#',
            cardImage: ['./images/napo-sv-web-image.png', 'Una tablet y un móvil mostrando una web'],
            titleSnippet: 'Web + CMS para',
            clientInfo: ['Supervillanos.co', 'https://supervillanos.webflow.io/'],
            clientImage: ['./images/TEST-sv-client-image.jpg', 'Supervillanos.co Logo'],
            workCategory: 'Estudio Creativo y de Negocios',
            featTag: [true, 'yellow', 'más reciente']
        },
        homeCardData: {
            cardImage: ['', ''],
            cardInfo:'',
            cardTitle: '',
            pageLink: '#',
            clientInfo: [false, '', ''],
            clientImage: ['', ''],
            featTag: [false, '', '']
        }
    }
]

export default WEB_PROJECTS;