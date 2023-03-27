import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.css';
import { db } from '@/services/firebaseConnection';
import { doc, collection, query, where, getDoc } from 'firebase/firestore';

export default function Taks() {
    return (
        <>
            <Head>
                <title>Detalhes da tarefa</title>
            </Head>

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Tarefa</h1>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id as string;
    console.log(id);

    const docRef = doc(db, "tarefas", id);
    const snapshot = await getDoc(docRef);

    if (snapshot.data() === undefined) {
        return {
            redirect: {
                destination: "/",
                permanet: false,
            },
        }
    }

    if (!snapshot.data()?.public) {
        return {
            redirect: {
                destination: "/",
                permanet: false,
            },
        }
    }
    console.log(snapshot.data());

    const miliseconds = snapshot.data()?.created?.seconds * 1000;

    const task = {
        tarefa: snapshot.data()?.tarefa,
        public: snapshot.data()?.public,
        created: new Date(miliseconds).toLocaleDateString(),
        user: snapshot.data()?.user,
        taskId: id,
    }

    console.log(task);

    return {
        props: {},
    };
}