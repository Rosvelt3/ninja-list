import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res: Response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Response = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }: any) => {
    return (
        <div>
            <h1>Ninjas</h1>
            {ninjas.map((ninja: any) => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Ninjas;