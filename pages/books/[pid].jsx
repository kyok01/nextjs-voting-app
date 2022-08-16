import { useRouter } from 'next/router'

export default function Book() {
    const router = useRouter();
    const {pid} = router.query;
    return <div>books {pid}</div>

}