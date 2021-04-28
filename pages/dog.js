
export async function getStaticProps() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogData = await response.json();

    return {
        props: {
            dogData: dogData,
        },
        revalidate: 30
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