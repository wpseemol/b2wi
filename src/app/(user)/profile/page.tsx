import { auth } from '@/auth/auth';
import LogoutBtn from './_components/logout-btn';

export default async function UserProfilePage() {
    const loginUser = await auth();

    return (
        <main className="container mx-auto my-8">
            Login user :{JSON.stringify(loginUser)}
            <br />
            <br />
            <LogoutBtn />
        </main>
    );
}
