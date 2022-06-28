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
                avatarPicture01: file(relativePath: {eq: "avatar-testimonial-1.jpg"}) {
                    childImageSharp {
                        gatsbyImageData(width: 72, placeholder: BLURRED, formats: JPG)
                    }
                }
                avatarPicture02: file(relativePath: {eq: "avatar-testimonial-2.jpg"}) {
                    childImageSharp {
                        gatsbyImageData(width: 72, placeholder: BLURRED, formats: JPG)
                    }
                }
                avatarPicture03: file(relativePath: {eq: "avatar-testimonial-3.jpg"}) {
                    childImageSharp {
                        gatsbyImageData(width: 72, placeholder: BLURRED, formats: JPG)
                    }
                }
                avatarPicture04: file(relativePath: {eq: "avatar-testimonial-4.jpg"}) {
                    childImageSharp {
                        gatsbyImageData(width: 72, placeholder: BLURRED, formats: JPG)
                    }
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
                picture: data.avatarPicture01
            },
            {
                paragraph: 'The biggest benefit is that I’ve been able to integrate my value for family time with my business. The last 5 months I’ve been running my business without a computer because I have Fylo on my phone. Taking this step was a big risk, but it’s paid off',
                fullName: 'Claire Redfield',
                position: 'Designer',
                picture: data.avatarPicture02
            },
            {
                paragraph: 'We absolutely love Fylo. It has speed up our getting file cycle from large hours to instantaneous. As soon as a job is done, our techs can take files and collect data, right from the field. We are winning more jobs with Fylo',
                fullName: 'Jill Valentine',
                position: 'CEO, Umbrella',
                picture: data.avatarPicture03
            },
            {
                paragraph: 'It is easy to use and easy to speak to an actual person if you have questions or problems. The mobile app works well, especially on our tablets. The on-the-spot customer service…UNBEATABLE! ',
                fullName: 'Albert Wesker',
                position: 'Copywriter',
                picture: data.avatarPicture04
            }
        ]
    };

    return content;
};

export default HomeContent;


