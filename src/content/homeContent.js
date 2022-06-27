import { useStaticQuery, graphql } from "gatsby";


const HomeContent = () => {

    const data = useStaticQuery(
        graphql`
            query {
                illustrationOne: file(relativePath: {eq: "illustration-1.svg"}) {
                    publicURL
                }
                illustrationTwo: file(relativePath: {eq: "illustration-2.svg"}) {
                    publicURL
                }
            }
        `
    );

    const content = {
        sectionOne: {
            inverted: true,
            picture: data.illustrationOne.publicURL,
            pictureAlt: 'Another working people illustration',
            title: 'All your files in one secure location, accesible anywhere',
            paragraph: 'Fylo stores your most important file in one secure location. Acces them wherever you need, share and collaborate with friends, family, and co-workers.'
        },

        sectionTwo: {
            inverted: true,
            picture: data.illustrationTwo.publicURL,
            pictureAlt: 'Working people illustration',
            title: 'Stay productive, wherever you are',
            paragraph: 'Never let location be an issue when accesing  your files, Fylo has you covered for all of your file storage needs. Securely share files and folders with friends, family and colleagues for live collaboration. No mail attachments required!'
        },

        registerSection: {
            title: 'Get access early today',
            paragraph: 'It only takes a minute  to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.'
        },

        carouselContent: [
            {
                paragraph: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
                fullName: 'Kyle Burton',
                position: 'Founder & CEO, Huddle',
                picture: ''
            },
            {
                paragraph: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
                fullName: 'Claire Redfield',
                position: 'Designer',
                picture: ''
            },
            {
                paragraph: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
                fullName: 'Albert Wesker',
                position: 'Copywriter',
                picture: ''
            },
            {
                paragraph: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
                fullName: 'Jill Valentine',
                position: 'CEO, Umbrella',
                picture: ''
            }
        ]
    };

    return content;
};

export default HomeContent;


