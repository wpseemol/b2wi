import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoSearch } from 'react-icons/io5';

export default function EmailSendButton() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto md:mx-0">
            <Input
                type="email"
                placeholder="Search here..."
                className="p-4 py-6 border-primary rounded-sm focus-visible:ring-0 "
            />
            <Button
                type="submit"
                className="bg-primary/85 hover:bg-primary text-white ring-primary py-6 text-2xl"
            >
                <IoSearch />
            </Button>
        </div>
    );
}
