import Image from 'next/image'

export async function getStaticProps() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogData = await response.json();
    console.log(dogData);

    return {
        props: {
            dogData: dogData,
        },
        revalidate: 5
    };
}

export default function Dog(props) {
    return (
        <div>
            <img src={props.dogData.message}
            />
        </div>
    );
}